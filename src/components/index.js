import Nav from "./Nav";
import Stories, { card } from "./Stories";
import SideBar, { latestStories } from "./SideBar";
import "./assets/css/index.css";

import Footer from "./Footer";

function IndexStory() {
  return (
    <>
      <Nav />
      <Stories card={card} />
      <SideBar latest={latestStories} />
      <Footer />
    </>
  );
}

export default IndexStory;
