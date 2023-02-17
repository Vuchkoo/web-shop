import React from "react";
import Cart from "../Cart/Cart";
import Icon from "../Icon/Icon";

const Header = (props) => {
  return (
    <header>
      <div className="cart-icon">
        <Icon
          className="fa-solid fa-cart-shopping pointer"
          onClick={props.onOpen}
        />
        <div className="items-in-cart closed">
          <p>{props.cart.length}</p>
        </div>
      </div>
      <Cart
        isActive={props.isActive}
        cart={props.cart}
        onClose={props.onClose}
        onRemove={props.onRemove}
        onAdd={props.onAdd}
        onMinus={props.onMinus}
      />
    </header>
  );
};

export default Header;
