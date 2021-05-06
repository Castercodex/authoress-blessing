import React from "react";
import img from "./assets/images/harr2.jpg";
export const collection = {
  image: img,
  title: "Witches Academy collection",
  overview: "this is sample over view",
  first: [
    {
      image: img,
      title: "Witches Academy 1",
      overview: "FIrst",
    },
    {
      image: img,
      title: "Witches Academy 1",
      overview: "FIrst",
    },
  ],
};

const Collections = ({ collection }) => {
  return (
    <section className="stories">
      <div className="stories-side-bar-grid">
        <div className="stories-grid">
          <div className="story">
            <a href={collection.url} className="url">
              <div className="collection">
                <img className="img" src={collection.image} alt="" />{" "}
                <h4>{collection.title}</h4>
                <p>{collection.overview}</p>
                <div className="activities">
                  <span className="activity author">
                    <h6>Blessing |</h6>
                  </span>
                  <span className="activity seen">
                    <h6>2 |</h6>
                  </span>
                  <span className="activity likes">
                    <h6>4 |</h6>
                  </span>
                  <span className="activity comments">
                    <h6>12 |</h6>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
