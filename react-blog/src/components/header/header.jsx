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
        src="https://www.diligent.es/wp-content/uploads/2015/07/contactar-a-un-blogger-para-dar-a-conocer-tu-negocio.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
