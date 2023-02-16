import React, { Component } from "react";
// import Button from "../Button/Button";
import Cart from "../Cart/Cart";
import Icon from "../Icon/Icon";
// import Image from "../Images/womens-black-sweatshirt.jpg";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    return (
      <header>
        <div className="cart-icon">
          <Icon
            className="fa-solid fa-cart-shopping pointer"
            onClick={this.props.onOpen}
          />
          <div className="items-in-cart closed">
            <p>{this.props.data.cart.length}</p>
          </div>
        </div>
        <Cart
          data={this.props.data}
          onClose={this.props.onClose}
          onRemove={this.props.onRemove}
          onAdd={this.props.onAdd}
          onMinus={this.props.onMinus}
        />
      </header>
    );
  }
}
