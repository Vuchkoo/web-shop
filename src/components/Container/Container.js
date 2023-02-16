import React, { Component } from "react";
import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";

export default class Container extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="container">
        <h1>
          <span>{this.props.data.products.length}</span> Product(s) found
        </h1>
        <div className="grid">
          <div className="sizes">
            <h2>Sizes:</h2>
            {this.props.data.sizes.map((item, index) => {
              return (
                <Button
                  key={index}
                  text={item}
                  onClick={(e) => this.props.onSize(e, item)}
                />
              );
            })}
          </div>
          <div className="product-list">
            {this.props.data.products
              ?.filter((item) => {
                if (this.props.data.selectedSize) {
                  return item.availableSizes.includes(
                    this.props.data.selectedSize
                  );
                }
                return item;
              })
              .map((item) => {
                // console.log(item.availableSizes);
                return (
                  <ProductCard
                    data={item}
                    onClick={(e) => this.props.onAdd(e, item)}
                  />
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
