import React from "react";
import About from "./About";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function Menu(props) {
  const classes = props.classes;
  return (
    <>
      <Link to="/">
        <p className={classes}>Home</p>
      </Link>
      <Link to="/about">
        <p className={classes}>About</p>
      </Link>
      <Link to="/cart">
        <p className={classes}>Cart</p>
      </Link>
    </>
  );
}

export default Menu;
