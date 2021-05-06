import React from "react";
import img from "./assets/images/harr2.jpg";

export const card = [
  {
    image: img,
    title: "Witches Academy",
    overview: "this is sample over view",
    url: "1",
  },
  {
    image: img,
    title: "In Loveademy",
    overview: "this is sample over view",
    url: "2",
  },
  {
    image: img,
    title: "In Loveademy",
    overview: "this is sample over view",
    url: "3",
  },
  {
    image: img,
    title: "In Loveademy",
    overview: "this is sample over view",
    url: "4",
  },
  {
    image: img,
    title: "In Loveademy",
    overview: "this is sample over view",
    url: "5",
  },
  {
    image: img,
    title: "5",
    overview: "this is sample over view",
    url: "lock",
  },
  {
    image: img,
    title: "6",
    overview: "this is sample over view",
    url: "lock",
  },
  {
    image: img,
    title: "7",
    overview: "this is sample over view",
    url: "lock",
  },
  {
    image: img,
    title: "8",
    overview: "this is sample over view",
    url: "lock",
  },
];

const Stories = ({ card }) => {
  return (
    <section className="stories">
      <div className="stories-side-bar-grid">
        <div className="stories-grid">
          {card.map((story) => (
            <a href={story.url} className="url">
              <div className="story">
                <img className="img" src={story.image} alt="" />{" "}
                <h4>{story.title}</h4>
                <p>{story.overview}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
