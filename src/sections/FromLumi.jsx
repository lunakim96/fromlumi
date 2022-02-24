import React from "react";
import Youtube from "./YouTube.jsx";
import Button from "./Button.jsx";
import NavBar from "./NavBar";

class Fromlumi extends React.Component {
  render() {
    return (
      <div id="content" className="main">
        <h1 id="name">FromLumi</h1>
        <NavBar />
        <h6 className="text">🌼 my latest video 🌼</h6>
        <Youtube />
        <div className="buttons">
          <a
            className="button"
            style={{ backgroundColor: "#B0B16E" }}
            href={"https://instagram.com/from_lumi"}
          >
            Instagram
          </a>
          <a
            className="button"
            style={{ backgroundColor: "#F49F6F" }}
            href={"https://youtube.com/fromlumi"}
          >
            YouTube
          </a>
          <a
            className="button"
            style={{ backgroundColor: "#F6BE8A" }}
            href={"https://tiktok.com/@fromlumi"}
          >
            TikTok
          </a>
          <h6 className="text">-- links & codes --</h6>
          <Button />
        </div>
      </div>
    );
  }
}

export default Fromlumi;
