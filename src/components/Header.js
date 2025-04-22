import React from "react";
import "../App.css";
import logo from "../logo/address-book-svgrepo-com.svg";

const Header = () => {
    return (
      <div className="header">
        <img src={logo} alt="logo" className="header-logo" />
        Address Book
      </div>
    );
  };

export default Header;