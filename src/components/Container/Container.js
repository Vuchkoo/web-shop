import React from "react";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";

const Container = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h1>
        <span>{props.data?.length}</span> Product(s) found
      </h1>
      <div className="grid">
        <div className="sizes">
          <h2>Sizes:</h2>
          {props.sizes?.map((item, index) => {
            return (
              <Button
                key={index}
                text={item}
                onClick={(e) => props.onSize(e, item)}
              />
            );
          })}
        </div>
        <div className="product-list">
          {props.data
            ?.filter((item) => {
              if (props.selectedSize) {
                return item.availableSizes.includes(props.selectedSize);
              }
              return item;
            })
            .map((item) => {
              return (
                <ProductCard
                  data={item}
                  onClick={(e) => props.onAdd(e, item)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Container;
