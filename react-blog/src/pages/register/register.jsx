import React from "react";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Email</label>
        <input type="email" placeholder="Enter your email.." />
        <label>Password</label>
        <input type="password" placeholder="Enter your password.." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Register</button>
    </div>
  );
};

export default Register;
