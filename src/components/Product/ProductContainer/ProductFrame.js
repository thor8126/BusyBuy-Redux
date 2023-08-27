import React from "react";
import styles from "./ProductFrame.module.css";

// Product card container 
const ProductFrame = ({ children }) => {
  return <div className={styles.ProductFrame}>{children}</div>;
};

export default ProductFrame;
