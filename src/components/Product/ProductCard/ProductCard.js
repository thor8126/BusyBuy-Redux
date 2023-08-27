import React from "react";
import ProductFrame from "../ProductContainer/ProductFrame";
import ProductAccess from "../ProductContainer/ProductShow/ProductAccess";
import ProductImage from "../ProductContainer/ProductImage/ProductImage";

// Product Card component
const ProductCard = ({
  product: { title, price, image, id, quantity },
  onOwnPage,
  onCart,
}) => {
  return (
    <ProductFrame>
      <ProductImage image={image} />
      <ProductAccess
        title={title}
        price={price}
        onOwnPage={onOwnPage}
        productId={id}
        onCart={onCart}
        quantity={quantity}
      />
    </ProductFrame>
  );
};

export default ProductCard;
