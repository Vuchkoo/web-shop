import React from "react";
import Button from "../Button/Button";

const ProductSize = (props) => {
  return (
    <div className="sizes">
      <h2>Sizes:</h2>
      {sizes.map((item, index) => {
        return (
          <Button
            className={props.className}
            key={index}
            text={item}
            onClick={(e) => props.handleSize(e, item)}
          />
        );
      })}
    </div>
  );
};

export default ProductSize;
