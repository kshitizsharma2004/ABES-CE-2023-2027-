import React, { useState, useContext } from "react";
import "./Book.css";
import { CartContext } from "../context/CartContext"; // ✅ Corrected path

function Book(props) {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, removeFromCart } = useContext(CartContext);

  function inc() {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      addToCart();
    } else {
      alert("Max limit reached!");
    }
  }

  function dec() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart();
    }
  }

  return (
    <div id="book">
      <img
        src="https://makeenbooks.com/upload/ga/9781510421721.jpg"
        alt=""
        height={100}
        width={100}
      />
      <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <div>
        <button onClick={inc}>+</button>
        <span>{quantity}</span>
        <button onClick={dec}>-</button>
      </div>
    </div>
  );
}

export default Book;
