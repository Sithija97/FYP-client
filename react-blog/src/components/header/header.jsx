import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://www.editionguard.com//wp-content/uploads/2016/07/1.png"
        alt=""
      />
    </div>
  );
};

export default Header;
