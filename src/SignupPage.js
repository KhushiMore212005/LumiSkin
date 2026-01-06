import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./SignupPage.css";

export default function SignupPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate(-1); // go back
  };

  return (
    <div className="signup-container">
      {/* Back Arrow */}
      
      <div className="back-arrow" onClick={handleGetStarted}>
              <IoArrowBack />
            </div>

      {/* Icon Circle */}
      <div className="icon-circle-signup">
        <span className="heart-icon-signup">♡</span>
      </div>

      {/* Logo */}
      <h1 className="signup-title">LumiSkin</h1>
      <p className="signup-sub">Create your account and glow with confidence.</p>

      {/* Form */}
      <form className="form-section-signup">
        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" required />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Password</label>
        <input type="password" placeholder="Create a password" required />

        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm your password" required />

        <button type="submit" className="primary-btn-signup">
          Sign Up
        </button>

        <div className="divider-signup">
          <span></span> Or continue with <span></span>
        </div>

        <div className="social-row-signup">
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

        <p className="signup-text-bottom">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Sign in here
          </span>
        </p>
      </form>
    </div>
  );
}
