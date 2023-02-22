import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import Container from "../Container/Container";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  const [sizes, setSizes] = useState(["XS", "S", "M", "ML", "L", "XL", "XXL"]);
  const [isActive, setIsActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [cart, setCart] = useState([]);
  const [isExists, setIsExists] = useState(false);

  useEffect(() => {
    fetch("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleOpen = () => {
    setIsActive(true);
  };

  const handleClose = () => {
    setIsActive(false);
  };

  const handleSize = (e, size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = (e, item) => {
    const isExists = cart.some((cart) => {
      return cart.id === item.id;
    });
    if (isExists) {
      setCart(
        cart?.map((cart) => {
          if (cart.id === item.id) {
            return { ...cart, quantity: cart.quantity + 1 };
          }
          return cart;
        })
      );
    } else {
      return setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (e, id) => {
    setCart([
      ...cart.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      }),
    ]);
  };

  const handleRemoveQuantity = (e, item) => {
    const isExists = cart.some((cart) => {
      return cart.id === item.id;
    });
    if (isExists) {
      setCart(
        cart?.map((cart) => {
          if (cart.id === item.id && cart.quantity > 1) {
            return { ...cart, quantity: cart.quantity - 1 };
          }
          return cart;
        })
      );
    }
  };

  return (
    <>
      <Header
        cart={cart}
        onOpen={handleOpen}
        onClose={handleClose}
        onRemove={handleRemoveFromCart}
        onAdd={handleAddToCart}
        onMinus={handleRemoveQuantity}
        isActive={isActive}
      />
      <Container
        data={products}
        sizes={sizes}
        onSize={handleSize}
        selectedSize={selectedSize}
        onAdd={handleAddToCart}
      />
    </>
  );
};

export default ProductList;
