import React, { Component } from "react";
import Button from "../Button/Button";
import Image from "../Images/womens-black-sweatshirt.jpg";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  installments = () => {
    if (this.props.data.installments > 0) {
      const fixedItemPrice = this.props.data.price;
      const installments = this.props.data.installments;
      const itemPrice = (fixedItemPrice / installments).toFixed(2);
      return itemPrice;
    }
    return this.props.data.price;
  };

  render() {
    // console.log(this.props);
    return (
      <div className="product-card">
        <img
          src={Image}
          alt="clothes"
          style={{ width: "200px", height: "300px" }}
        />
        <h2>{this.props.data.title}</h2>
        <hr />
        <h3>
          <span className="currency">{this.props.data.currencyFormat} </span>
          {Math.floor(this.props.data.price)}
          <span className="decimal">
            .{this.props.data.price.toFixed(2).split(".")[1]}
          </span>
        </h3>
        <p>
          or {this.props.data.installments} x
          <span className="installments">
            {this.props.data.currencyFormat}
            {this.installments()}
          </span>
        </p>
        <Button text="Add to cart" onClick={this.props.onClick} />
      </div>
    );
  }
}
