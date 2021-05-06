import Nav from "./Nav";
import Stories, { card } from "./Stories";
import SideBar, { latestStories } from "./SideBar";
import "./assets/css/index.css";
import Collections, { collection } from "./Collections";
import Footer from "./Footer";
const changeNavStyle = () => {
  let navBar = document.querySelector("nav");

  if (window.outerWidth > 768) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 200) {
        navBar.classList.add("nav");
      } else {
        navBar.classList.remove("nav");
      }
    });
  }
};

function IndexStory() {
  return (
    <>
      <Nav change={changeNavStyle} />
      <Collections collection={collection} />
      <Stories card={card} />
      <SideBar latest={latestStories} />
      <Footer />
    </>
  );
}

export default IndexStory;
