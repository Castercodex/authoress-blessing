import React from "react";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="subscribe-section">
        <div className="subscribe-title">
          <h2>SUBSCRIBE</h2>
          <p>Subscribe to our newsletter</p>
        </div>
        <div className="subscribe">
          <input type="email" name="" id="input" />
          <button id="btn">Submit</button>
        </div>
      </div>
      <div className="footer-grid">
        <div className="name">
          <h3>Authoress</h3>
          <p>Blessing site</p>
        </div>
        <div className="some-infos">
          <ul className="info-links">
            <li className="info">lrem2</li>
            <li className="info">lrem2</li>
            <li className="info">lrem2</li>
          </ul>
        </div>
        <div className="contact">
          <p>ediwuwi@gmail.com</p>
          <p>08029393842803</p>
          <p>Fb twitter sjdl</p>
        </div>
      </div>
      <div className="credit">
        <p className="copy">Copyright &copy; 2021</p>
        <h5>Made by <span><a href="/">Berthjone Redely(Codex)</a></span></h5>
      </div>
    </footer>
  );
};
export default Footer;
