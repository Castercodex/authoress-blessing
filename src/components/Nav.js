import React from "react";
import Logo from "./assets/images/icons/logo.png";

const Nav = (props) => {
  return (
    <header className="header">
      <div className="heading">
        <img src={Logo} alt="" />
        <h1>Authoress Blessing</h1>
      </div>
      <nav>
        <div className="search">
          <div className="search-bar-btn">
            <input type="text" placeholder="search..." name="" id="search-input" />
            <button type="submit" className="search-btn">
              Search<i className="fa  fa-search"></i>
            </button>
          </div>
        </div>

        <ul className="nav-links">
          <li className="nav-link">Myth</li>
          <li className="nav-link">Fiction</li>
          <li className="nav-link">Collection</li>
          <li className="nav-link active">Singles</li>
        </ul>

        <div className="login--info">
          <div className="subscribe">
            <button className="sub-btn">Subscribe</button>
          </div>
          <div className="login">
            <button className="login--btn">Login</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Nav;
