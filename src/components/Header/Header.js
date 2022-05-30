import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import header from "../../images/header.png";
import logo from "../../images/icons/logo.png";

const Header = () => {
  const btnStyle = {
    border:'4px solid #20a2b0', 
    padding:'5px', 
    borderRadius:'10px'}
  return (
    <div
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})`,
        padding: '10px'
      }}
      className="header"
    >
      <nav className="nav">
        <ul>
          <li>
            <img className="logo" src={logo} alt="" />
          </li>
          <li style={btnStyle}>
            <Link to="/home">Home</Link>
          </li>
          <li style={btnStyle}>
            <Link to="/login">Login</Link>
          </li>
          {/* <li>
            <Link className="btn-book" to="/book">
              Book
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="title-container">
        <h1>Royal Maratha Hotel</h1>
        <h2>Making your all-inclusive dreams a reality</h2>
      </div>
    </div>
  );
};

export default Header;
