import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/singlePost";
import Login from "../login/login";
import Register from "../register/register";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="home">
        {/* <Posts />
        <Sidebar /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
