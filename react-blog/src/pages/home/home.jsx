import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default Home;
