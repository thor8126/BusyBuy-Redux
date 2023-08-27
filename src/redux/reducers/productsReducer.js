// import reducx toolkit 
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import firebase query from firebase 
import { collection, query, getDocs } from "firebase/firestore";
// import db from firebase 
import { db } from "../../firebase/firebase";

// initial state value initialize 
const initialState = {
  loading: false,
  products: [],
  filteredProducts: [],
  error: "",
};

// getAllproduct from database
export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const productsRef = collection(db, "products");
    return await getDocs(query(productsRef));
  }
);

//create product Slice 

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // reducer function
    filterProducts(state, action) {
      const {
        searchQuery,
        priceRange,
        categories: { mensFashion, womensFashion, jewelery, electronics },
      } = action.payload;

      let filteredProducts = state.products;
      if (searchQuery) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        });
      }
      // filter category
      if (mensFashion || womensFashion || jewelery || electronics) {
        filteredProducts = filteredProducts.filter((product) => {
          if (mensFashion && product.category === "men's clothing") {
            return true;
          }
          if (womensFashion && product.category === "women's clothing") {
            return true;
          }
          if (electronics && product.category === "electronics") {
            return true;
          }
          if (jewelery && product.category === "jewelery") {
            return true;
          }
          return false;
        });
      }
      //  priceRange filter apply
      if (priceRange) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.price < priceRange;
        });
      }
     
      // filterstate apply
      state.filteredProducts = filteredProducts;
    },
  },
  // extra reducer 
  extraReducers(builder) {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        const products = action.payload.docs.map((doc) => ({
          ...doc.data(),
        }));

        state.products = products;
        state.filteredProducts = products;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.error = action.payload.message;
      });
  },
});

// create and export vaiable for useSelector
export const getLoadingState = (state) => state.products.loading;
export const getProducts = (state) => state.products.products;
export const getFilteredProducts = (state) => state.products.filteredProducts;
export const getError = (state) => state.products.error;
// filterproducts 
export const { filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
