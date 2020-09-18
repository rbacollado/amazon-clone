import React from "react";
import "./category.css";

function Category({ title, img }) {
  return (
    <div className="category">
      <div className="category__header">
        <h3>{title}</h3>
      </div>

      <img className="category__image" src={img} alt="" />
      <p>See more</p>
    </div>
  );
}

export default Category;
