import React from "react";
import "./single.css";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/singlePost";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;
