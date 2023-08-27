// import redux toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import firebase db 
import { db } from "../../firebase/firebase";

// import all query add update for firebase
import { doc, getDoc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";

//import toastify to show notification massege
import { toast } from "react-toastify";
// import all data from file
import {
  getProductsUsingProductIds,
  getUserCartProducts,
} from "../../productData/dataDataBase";

// initialize state 
const initialState = {
  cartProducts: [],
  cartProductsMap: {},
  purchasing: false,
  loading: false,
  
};


// check data in cart and show
export const fetchCartProducts = createAsyncThunk(
  "cart/fetch",
  async ({ uid }) => {
    const { data } = await getUserCartProducts(uid);

    const { myCart: cart } = data;

    const productsData = await getProductsUsingProductIds(cart);
    if (!productsData) {
      // if not data available in cart
      toast.error("No products in Cart!");
      return productsData;
    }

    return { cart, productsData };
  }
);

// removing product from cart
export const removeProductFromCart = createAsyncThunk(
  "cart/remove",
  async ({ productId, uid }) => {
    const { data, docRef } = await getUserCartProducts(uid);

    const { myCart: cart } = data;

    if (!cart[productId]) {
      toast.error("Product not in cart!");
      return;
    }
// delete remove product
    delete cart[productId];

    await updateDoc(docRef, {
      myCart: {
        ...cart,
      },
    });

    return { productId };
  }
);

// purchase product insert in database
export const purchaseProducts = createAsyncThunk(
  "cart/purchase",
  async ({ uid }, { getState }) => {
    const state = getState();
    const docRef = doc(db, "userOrders", uid);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
    
    // check if  orders exist then add in array
    if (data) {
     
      return await updateDoc(docRef, {
        orders: arrayUnion({ ...state.cart.cartProductsMap, date: Date.now() }),
      });
    }

    
    // else order not available  new order insert into database
    
    return await setDoc(docRef, {
      orders: [{ ...state.cart.cartProductsMap, date: Date.now() }],
    });
  }
);

// remove from card 
export const clearUserCart = createAsyncThunk("cart/clear", async ({ uid }) => {
  const userCartRef = doc(db, "usersCarts", uid);
  return await updateDoc(userCartRef, {
    myCart: {},
  });
});

// Remove product from cart and cart products list
const deleteProductFromCart = (state, action) => {
  const { productId } = action.payload;
  //  delete using product id

  delete state.cartProductsMap[productId];
    
  state.cartProducts = state.cartProducts.filter((product) => {
    return product.id !== productId;
  });
};

// create sclice for cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateProductQuantity(state, action) {
      const { id, type } = action.payload;

      let tempCart = state.cartProducts.map((product) => {
        if (product.id === id) {
         
          product.quantity += type === "add" ? 1 : -1;
        }
        return product;
      });

      state.cartProductsMap[id] += type === "add" ? 1 : -1;

      state.cartProducts = tempCart;
    },
    filterProductFromCart: deleteProductFromCart,
  },
  // extra reducer 
  extraReducers(builder) {
    builder
      .addCase(fetchCartProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCartProducts.fulfilled, (state, action) => {
        state.loading = false;

        const { cart, productsData } = action.payload;

        state.cartProductsMap = cart;
        state.cartProducts = productsData;
      })
      .addCase(fetchCartProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(clearUserCart.fulfilled, (state) => {
        state.cartProducts = [];
        state.cartProductsMap = {};
      })
      .addCase(removeProductFromCart.fulfilled, (state, action) => {
        deleteProductFromCart(state, action);
        toast.success("Product Removed Successfully!");
      })
      .addCase(purchaseProducts.pending, (state) => {
        state.purchasing = true;
      })
      .addCase(purchaseProducts.fulfilled, (state) => {
        state.purchasing = false;
      })
      .addCase(purchaseProducts.rejected, (state) => {
        state.purchasing = false;
      });
  },
});
// create and export variable for useSelector
export const getCartLoadingState = (state) => state.cart.loading;
export const getCartProducts = (state) => state.cart.cartProducts;
export const getCartProductsMap = (state) => state.cart.cartProductsMap;
export const getPurchasingState = (state) => state.cart.purchasing;
export const { updateProductQuantity, filterProductFromCart } =
  cartSlice.actions;
  
// export cartSlice
export default cartSlice.reducer;
