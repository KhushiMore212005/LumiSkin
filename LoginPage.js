import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { IoArrowBack } from "react-icons/io5";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate(-1); // go back
  };

  return (
    <div className="login-container">

      {/* Back Arrow */}
      <div className="back-arrow" onClick={handleGetStarted}>
        <IoArrowBack />
      </div>

      {/* Icon */}
      <div className="icon-circle-login">
        <span className="heart-icon">♡</span>
      </div>

      {/* Logo */}
      <h1 className="logo-text">LumiSkin</h1>
      <p className="subtitle">
        Welcome back! Sign In to continue your skincare journey.
      </p>

      {/* Form */}
      <div className="form-section">
        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password</label>
        <input type="password" placeholder="Enter your password" />

        <div className="remember-row">
  <div className="left-remember">
    <input type="checkbox" />
    <span>Remember me</span>
  </div>
  <span className="forgot">Forgot Password?</span>
</div>



        <button className="primary-btn">Sign In</button>

        <div className="divider">
          <span></span> Or continue with <span></span>
        </div>
        <div className="social-row">
  <button className="social-btn google">
    <img
      src="https://www.svgrepo.com/show/355037/google.svg"
      alt="google"
    />
    Google
  </button>

  <button className="social-btn apple">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      alt="apple"
    />
    Apple
  </button>
</div>

<p className="signup-text">
  Don’t have an account?{" "}
  <span className="link" onClick={() => navigate("/signup")}>
    Sign up here
  </span>
</p>

        {/*<p className="signup-text">
          Don’t have an account?{" "}
          <span className="link">Sign up here</span>
        </p>*/}

      </div>
    </div>
  );
}
