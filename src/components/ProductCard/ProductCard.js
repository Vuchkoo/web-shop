import React from "react";
import Button from "../Button/Button";
import Image from "../Images/womens-black-sweatshirt.jpg";

const ProductCard = (props) => {
  const installments = () => {
    if (props.data.installments > 0) {
      const fixedItemPrice = props.data.price;
      const installments = props.data.installments;
      const itemPrice = (fixedItemPrice / installments).toFixed(2);
      return itemPrice;
    }
    return props.data.price;
  };

  return (
    <div className="product-card">
      <img
        src={Image}
        alt="clothes"
        style={{ width: "200px", height: "300px" }}
      />
      <h2>{props.data.title}</h2>
      <hr />
      <h3>
        <span className="currency">{props.data.currencyFormat} </span>
        {Math.floor(props.data.price)}
        <span className="decimal">
          .{props.data.price.toFixed(2).split(".")[1]}
        </span>
      </h3>
      <p>
        or {props.data.installments} x
        <span className="installments">
          {props.data.currencyFormat}
          {installments()}
        </span>
      </p>
      <Button text="Add to cart" onClick={props.onClick} />
    </div>
  );
};

export default ProductCard;
