import React, { useState } from "react";
import Menu from "./Menu";
import Search from "./Search";
import Login from "./Login";
import Logout from "./Logout";
import "./Header.css";

function Header() {
  const [isLogedin, setIsLogedin] = useState(false);
  const onClicked = (bool) => {
    setIsLogedin(bool);
  };
  return (
    <div className="header">
      <div className="header-style">
        <div>
          <img
            src="https://asset.cloudinary.com/a3fcdvld162/b2cdb003343c6bc47232016232f99f60"
            className="logo"
            alt="FoodMunch"
          />
        </div>
        <div className="items-menu">
          <Menu classes={"item-menu"} />
        </div>
        <div className="items-menu">
          {!isLogedin && <Login classes={"item-menu"} clicked={onClicked} />}
          {isLogedin && <Logout classes={"item-menu"} clicked={onClicked} />}
        </div>
      </div>
      <div>{/* Write Any Extra Component Between Body and Header */}</div>
    </div>
  );
}

export default Header;
