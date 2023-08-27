import React from "react";
import styles from "./FilterSidebar.module.css";
// filter function component create
const FilterSidebar = ({ setCategories, setPriceRange, priceRange }) => {
  return (
    <aside className={styles.filterContainer}>
      <h2>Filter</h2>
      <form>
        {/* price range for filter price show product as per price range */}
        <label htmlFor="price">Price: {priceRange}</label>
        <input
          type="range"
          id="price"
          name="price"
          min="1"
          max="100000"
          className={styles.priceRange}
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          step="10"
        />
        {/* show product as per category of product */}
        <h2>Category</h2>
        <div className={styles.categoryContainer}>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="mensFashion"
              name="mensFashion"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  mensFashion: e.target.checked,
                }))
              }
            />
            {/* create filter checkbox for mens cloth */}
            <label htmlFor="mensFashion">Men's Clothing</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="womensFashion"
              name="womensFashion"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  womensFashion: e.target.checked,
                }))
              }
            />
            {/* create filter checkbox for woman cloth */}
            <label htmlFor="womensFashion">Women's Clothing</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="jewelery"
              name="jewelery"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  jewelery: e.target.checked,
                }))
              }
            />
            {/* create filter checkbox for jewelery */}
            <label htmlFor="jewelery">Jewelery</label>
          </div>
          <div className={styles.inputContainer}>
            <input
              type="checkbox"
              id="electronics"
              name="electronics"
              onChange={(e) =>
                setCategories((prevCategories) => ({
                  ...prevCategories,
                  electronics: e.target.checked,
                }))
              }
            />
            {/* create filter checkbox for electronics item */}
            <label htmlFor="electronics">Electronics</label>
          </div>
        </div>
      </form>
    </aside>
  );
};
// export filter
export default FilterSidebar;
