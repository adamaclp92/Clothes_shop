import React from "react";
import styles from "./category-item.module.scss";
import { useNavigate } from "react-router-dom";

const CategoryItem = ( props ) => {

  const navigate = useNavigate()

  const goToCategory = () => {
    navigate(`/${props.title}`.toLowerCase())
  }
    
  return (
      <div className={styles["category-container"]}>
        <div
          className={styles["background-image"]}
          style={{
            backgroundImage: `url(${props.imageUrl})`,
          }}
        />
        <div className={styles["category-body-container"]} onClick={goToCategory}>
          <h2>{props.title}</h2>
          <p>Shop Nows</p>
        </div>
      </div>
  );
};

export default CategoryItem;
