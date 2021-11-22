import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/singlePost";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        <SinglePost />
        <Sidebar />
      </div>
    </React.Fragment>
  );
};

export default Home;
