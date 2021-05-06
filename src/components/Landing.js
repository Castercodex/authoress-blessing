import React from "react";
import background from "./assets/images/background.jpg";

const Home = () => {
  return (
    <section
      className="landing-page"
      style={{ backgroundImage: `-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.699))), url(${background})`  }}
    >
      <div className="banner">
        <h1 className="banner-title">Authoress Blessing Stories</h1>
        <div className="banner-p">
          <p className="empty"></p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam
            ut magnam numquam libero alias eos, sapiente eveniet? Facilis,
            voluptatibus! Reprehenderit iure eum molestias quam accusamus
            consectetur sequi doloremque voluptates!
          </p>
          <p className="empty"></p>
        </div>
        <button className="contact-me">Contact Me</button>
      </div>
    </section>
  );
};

export default Home;
