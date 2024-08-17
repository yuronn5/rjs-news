import React from "react";
import styles from "./styles.module.css";
import { forwardRef } from "react";
import { ForwardedRef } from "react";
import { CategoriesType } from "../../interfaces";

interface Props {
  categories: CategoriesType[];
  selectedCategory: CategoriesType | null;
  setSelectedCategory: (category: CategoriesType | null) => void;
}

const Categories = forwardRef(
  (
    { categories, setSelectedCategory, selectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
