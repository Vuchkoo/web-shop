import React, { Component } from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Image from "../Images/womens-black-sweatshirt.jpg";

export default class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <>
        {this.props.data.isActive ? (
          <div className="shopping-cart">
            <Button
              text="X"
              className="close-btn"
              onClick={this.props.onClose}
            />
            <div className="cart-header">
              <div className="cart-icon">
                <Icon className="fa-solid fa-cart-shopping" />
                <div className="items-in-cart opened">
                  <p>{this.props.data.cart.length}</p>
                </div>
              </div>
              <h2>Cart</h2>
            </div>
            <div className="cart-main">
              {this.props.data.cart.map((item) => {
                return (
                  <div className="cart-card">
                    <div className="cart-item">
                      <img
                        src={Image}
                        alt="clothes"
                        style={{ width: "100px", height: "150px" }}
                      />
                      <div className="item-details">
                        <h3>{item.title}</h3>
                        <p>XL | {item.style}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>{" "}
                    </div>
                    <div className="item-quantity">
                      <Button
                        text="x"
                        className="x-btn"
                        onClick={(e) => this.props.onRemove(e, item.id)}
                      />
                      <h3>
                        {item.currencyFormat}{" "}
                        {(item.price * item.quantity).toFixed(2)}
                      </h3>
                      <Button
                        text="-"
                        className="minus-btn"
                        onClick={(e) => this.props.onMinus(e, item)}
                      />
                      <Button
                        text="+"
                        className="plus-btn"
                        onClick={(e) => this.props.onAdd(e, item)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="cart-footer">
              <div className="price">
                <h3>SUBTOTAL</h3>
                <div>
                  <h4>
                    ${" "}
                    {this.props.data.cart
                      .reduce((acc, cart) => {
                        return cart.quantity * cart.price + acc;
                      }, 0)
                      .toFixed(2)}
                  </h4>
                  <p>
                    OR UP TO 12 x <span>$ </span>
                    <span>
                      {(
                        this.props.data.cart.reduce((acc, cart) => {
                          return cart.quantity * cart.price + acc;
                        }, 0) / 12
                      ).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <Button text="CHECKOUT" className="checkout-btn" />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
