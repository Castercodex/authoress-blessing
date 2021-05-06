import React from "react";
import story from "./assets/images/harry.jpg";
export let latestStories = [
  {
    image: story,
    title: "Latest Witches Academy",
    overview: "this is sample over view",
  },
  {
    image: story,
    title: "Latest In Loveademy",
    overview: "this is sample over view",
  },
  {
    image: story,
    title: "Latest In Loveademy",
    overview: "this is sample over view",
  },
];

const SideBar = ({ latest }) => {
  return (
    <div className="side-bar">
      <div className="latest-grid">
        {latest.map((story) => (
          <div className="story">
            <img className="preview-img" src={story.image} alt="" />
            <h6>{story.title}</h6>
            <p className="sm-p">{story.overview}</p>
          </div>
        ))}
      </div>
      <div className="most-viewed-grid"></div>
    </div>
  );
};

export default SideBar;
