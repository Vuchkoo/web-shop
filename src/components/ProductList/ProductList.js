import React, { Component } from "react";
import Header from "../Header/Header";
import Container from "../Container/Container";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      sizes: ["XS", "S", "M", "ML", "L", "XL", "XXL"],
      isActive: false,
      selectedSize: null,
      cart: [],
      isExists: false,
    };
  }

  componentDidMount() {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data.products });
      });
  }

  handleOpen = () => {
    this.setState({ isActive: true });
  };

  handleClose = () => {
    this.setState({ isActive: false });
  };

  handleSize = (e, size) => {
    this.setState({ selectedSize: size });
  };

  handleAddToCart = (e, item) => {
    const isExists = this.state.cart.some((cart) => {
      return cart.id === item.id;
    });
    if (isExists) {
      // console.log("if");
      this.setState({
        cart: this.state.cart?.map((cart) => {
          if (cart.id === item.id) {
            return { ...cart, quantity: cart.quantity + 1 };
          }
          return cart;
        }),
      });
    } else {
      return this.setState({
        cart: [...this.state.cart, { ...item, quantity: 1 }],
      });
    }
  };

  handleRemoveFromCart = (e, id) => {
    this.setState({
      cart: [
        ...this.state.cart.filter((item) => {
          if (item.id !== id) {
            return item;
          }
        }),
      ],
    });
  };

  handleRemoveQuantity = (e, item) => {
    const isExists = this.state.cart.some((cart) => {
      return cart.id === item.id;
    });
    if (isExists) {
      // console.log("if");
      this.setState({
        cart: this.state.cart?.map((cart) => {
          if (cart.id === item.id && cart.quantity > 1) {
            return { ...cart, quantity: cart.quantity - 1 };
          }
          return cart;
        }),
      });
    }
  };

  render() {
    // console.log(this.state.cart);
    return (
      <>
        <Header
          data={this.state}
          onOpen={this.handleOpen}
          onClose={this.handleClose}
          onRemove={this.handleRemoveFromCart}
          onAdd={this.handleAddToCart}
          onMinus={this.handleRemoveQuantity}
        />
        <Container
          data={this.state}
          onSize={this.handleSize}
          onAdd={this.handleAddToCart}
        />
      </>
    );
  }
}
