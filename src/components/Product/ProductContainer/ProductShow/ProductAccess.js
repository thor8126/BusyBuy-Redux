// import all require file in files
import React, { useState } from "react";
// import all css file
import styles from "./ProductAccess.module.css";
// import toastify for show notificaton massege when add delete render
import { toast } from "react-toastify";
// import links router using react router
import { useNavigate } from "react-router-dom";
// import data set update query form firbase
import { updateDoc, setDoc } from "firebase/firestore";

// import icons minus and pluse
import { getUserCartProducts } from "../../../../productData/dataDataBase";
import { useSelector, useDispatch } from "react-redux";
// cart reducer import all reducer from cart reducer
import {
  filterProductFromCart,
  removeProductFromCart,
  updateProductQuantity,
} from "../../../../redux/reducers/cartReducer";

//auth reducer import for authentication action
import { getUser } from "../../../../redux/reducers/authReducer";

//
const ProductAccess = ({ title, price, productId, onCart, quantity }) => {
  const [productAddingToCart, setProductAddingToCart] = useState(false);
  const [productRemovingFromCart, setProductRemovingCart] = useState(false);

  const user = useSelector(getUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to add product to cart
  const addProductToCart = async () => {
    setProductAddingToCart(true);
    // Redirect to login page if user is not authenticated
    if (!user) {
      return navigate("/signin");
    }

    try {
      const { data, docRef } = await getUserCartProducts(user.uid);

      // If cart exists then update the cart all in Database
      if (data && data.myCart[productId]) {
        const { myCart: cart } = data;
        const currentProductCount = cart[productId];
        const updatedCart = {
          ...cart,
          [productId]: currentProductCount + 1,
        };

        updateDoc(docRef, {
          myCart: updatedCart,
        });

        return toast.success("Increase product count!");
      }

      // Create a new cart if it does not exist
      const cart = data?.myCart || {};
      await setDoc(docRef, {
        myCart: { ...cart, [productId]: 1 },
      });

      toast.success("Product Added Successfully!");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setProductAddingToCart(false);
    }
  };

  const removeProduct = async () => {
    setProductRemovingCart(true);
    await dispatch(removeProductFromCart({ productId, uid: user.uid }));
    setProductRemovingCart(false);
  };

  // Handling the product quantity increase
  const handleAdd = async () => {
    try {
      const { data, docRef } = await getUserCartProducts(user.uid);

      const { myCart: cart } = data;
      if (cart && cart[productId]) {
        const currentProductCount = cart[productId];
        const updatedCart = {
          ...cart,
          [productId]: currentProductCount + 1,
        };

        await updateDoc(docRef, {
          myCart: updatedCart,
        });

        dispatch(updateProductQuantity({ type: "add", id: productId }));

        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Handling the product quantity decrease
  const handleRemove = async () => {
    try {
      const { data, docRef } = await getUserCartProducts(user.uid);

      const { myCart: cart } = data;
      if (cart && cart[productId]) {
        const productCountAfterRemove = cart[productId] - 1;

        const updatedCart = {
          ...cart,
          [productId]: productCountAfterRemove,
        };

        if (productCountAfterRemove === 0) delete updatedCart[productId];

        await updateDoc(docRef, {
          myCart: updatedCart,
        });

        if (productCountAfterRemove === 0)
          return dispatch(filterProductFromCart({ productId }));

        dispatch(updateProductQuantity({ type: "remove", id: productId }));

        return;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.ProductAccess}>
      <div className={styles.productName}>
        <p>{`${title.slice(0, 35)}...`}</p>
      </div>
      <div className={styles.productOptions}>
        <p>₹ {price}</p>
        {onCart && (
          <div className={styles.quantityContainer}>
            {/* minus icon for remove item from card */}
            <img
              onClick={handleRemove}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR4nO2WT2rCQBTGf5dwUWuK55D2AIVWeg012rN016J00aX7/rmJEU9h4s6IZeAJocTJm0mmZOEH3yaQ/Hhf3rw3cFELdQNMgR8gAXbiRJ7FQNQk8Bp4A3LgWOEDsAT6daFPQKYA/nUKDH2hz1KBK7RY/cyn0kMNaBGurrznGa8t9q4G/N4g9OS55shoutfVuSR5VrMA0JMnNvB3QPCnDbwJCE5s4LTkhQHuuj3T3U5g8xFX3bmC1wGjXrWyueKA4JENHAUaIPuqAWK0CAB+Rbn4y7rb11vgCqXuG4rcrMVHLbQ4t+teBMwdzUtDz9hNvA/UVAd4kc7UVPnh8k816slq+5IplIlXMhzGmiNzEf+tX262pRCJmsimAAAAAElFTkSuQmCC"
            />
            {/* update as per click plus minus show quantity of product  */}
            {quantity}
            {/* plus for insert item from card */}
            <img
              onClick={handleAdd}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABHUlEQVR4nO2WQWrCQBSGv0t0oVXxHFIPIKj0GlWrZ3HXonTRpXutNzHFUxjdNZISeEIIY/Je0iku/OFtwpCP988/bwbuukG1gFdgCwTASSqQbxOg+ZfAR+AdiIC4oM7ACmhXhT4DRwUwWyEwLAudSQdWaLr7aZlOzxWgabi684bS3g7wpLS9rgF/KLu5SLN2oTkykQdwJE5e1dSwfxZwDIzzwF8ewes88N4jOMgDh1fSa5Ur7aEVnPzEqq4V/O3R6t1NhmviEfySB256GiA/RQMk0dID+A3lxe9KtyvtrvRm6wDUUKpnsLzoWhxooem5XfUhkLzRSmmotN1lb5+KegDmkkxNl5+WPdWoIVfbRqbQUWonw2GkOTJ38d/6BZ8CjheXznrAAAAAAElFTkSuQmCC"
            />
          </div>
        )}
      </div>
      {/* add to card button click then change button name adding */}
      {!onCart ? (
        <button
          className={styles.addBtn}
          title="Add to Cart"
          disabled={productAddingToCart}
          onClick={addProductToCart}
        >
          {productAddingToCart ? "Adding" : "Add To Cart"}
        </button>
      ) : (
        <button
          className={styles.removeBtn}
          title="Remove from Cart"
          onClick={removeProduct}
        >
          {/* removing button name when click on Remove from card */}
          {productRemovingFromCart ? "Removing" : "Remove From Cart"}
        </button>
      )}
    </div>
  );
};

// export productDetail default export apply
export default ProductAccess;
