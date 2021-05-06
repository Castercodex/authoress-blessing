import React from "react";
import Logo from "./assets/images/icons/logo.png";


const Nav = (props) => {
  return (
    <header onLoad={props.change} className="header">
      <div className="heading">
        <img src={Logo} alt="" />
        <h1>Authoress Blessing</h1>
      </div>
      <nav>
        <div className="search">
          <div className="search-bar-btn">
            <input
              type="text"
              placeholder="Search..."
              name=""
              id="search-input"
            />
            <button type="submit" className="search-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 448 512">{/* <!-- Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->*/}<path id="search"  d="M448 449L301.2 300.2c20-27.9 31.9-62.2 31.9-99.2 0-93.1-74.7-168.9-166.5-168.9C74.7 32 0 107.8 0 200.9s74.7 168.9 166.5 168.9c39.8 0 76.3-14.2 105-37.9l146 148.1 30.5-31zM166.5 330.8c-70.6 0-128.1-58.3-128.1-129.9S95.9 71 166.5 71s128.1 58.3 128.1 129.9-57.4 129.9-128.1 129.9z"/></svg>
            </button>
          </div>
        </div>

        <ul className="nav-links">
          <li className="nav-link active">Singles</li>
          <li className="nav-link">Collection</li>

          <li className="nav-link">Myth</li>
          <li className="nav-link">Fiction</li>
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
