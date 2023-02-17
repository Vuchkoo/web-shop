import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Image from "../Images/womens-black-sweatshirt.jpg";

const Cart = (props) => {
  return (
    <>
      {props.isActive ? (
        <div className="shopping-cart">
          <Button text="X" className="close-btn" onClick={props.onClose} />
          <div className="cart-header">
            <div className="cart-icon">
              <Icon className="fa-solid fa-cart-shopping" />
              <div className="items-in-cart opened">
                <p>{props.cart?.length}</p>
              </div>
            </div>
            <h2>Cart</h2>
          </div>
          <div className="cart-main">
            {props?.cart?.map((item) => {
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
                      onClick={(e) => props.onRemove(e, item.id)}
                    />
                    <h3>
                      {item.currencyFormat}{" "}
                      {(item.price * item.quantity).toFixed(2)}
                    </h3>
                    <Button
                      text="-"
                      className="minus-btn"
                      onClick={(e) => props.onMinus(e, item)}
                    />
                    <Button
                      text="+"
                      className="plus-btn"
                      onClick={(e) => props.onAdd(e, item)}
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
                  {props?.cart
                    .reduce((acc, cart) => {
                      return cart.quantity * cart.price + acc;
                    }, 0)
                    .toFixed(2)}
                </h4>
                <p>
                  OR UP TO 12 x <span>$ </span>
                  <span>
                    {(
                      props?.cart.reduce((acc, cart) => {
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
};

export default Cart;
