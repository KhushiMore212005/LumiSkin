// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./LoginPage.css";
// import { IoArrowBack } from "react-icons/io5";

// export default function LoginPage() {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate(-1); // go back
//   };

//   return (
//     <div className="login-container">

//       {/* Back Arrow */}
//       <div className="back-arrow" onClick={handleGetStarted}>
//         <IoArrowBack />
//       </div>

//       {/* Icon */}
//       <div className="icon-circle-login">
//         <span className="heart-icon">♡</span>
//       </div>

//       {/* Logo */}
//       <h1 className="logo-text">LumiSkin</h1>
//       <p className="subtitle">
//         Welcome back! Sign In to continue your skincare journey.
//       </p>

//       {/* Form */}
//       <div className="form-section">
//         <label>Email Address</label>
//         <input type="email" placeholder="Enter your email" />

//         <label>Password</label>
//         <input type="password" placeholder="Enter your password" />

//         <div className="remember-row">
//   <div className="left-remember">
//     <input type="checkbox" />
//     <span>Remember me</span>
//   </div>
//   <span className="forgot">Forgot Password?</span>
// </div>



//         <button className="primary-btn">Sign In</button>

//         <div className="divider">
//           <span></span> Or continue with <span></span>
//         </div>
//         <div className="social-row">
//   <button className="social-btn google">
//     <img
//       src="https://www.svgrepo.com/show/355037/google.svg"
//       alt="google"
//     />
//     Google
//   </button>

//   <button className="social-btn apple">
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//       alt="apple"
//     />
//     Apple
//   </button>
// </div>

// <p className="signup-text">
//   Don’t have an account ?{" "}
//   <span className="link" onClick={() => navigate("/signup")}>
//     Sign up here
//   </span>
// </p>

//         {/*<p className="signup-text">
//           Don’t have an account?{" "}
//           <span className="link">Sign up here</span>
//         </p>*/}

//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { IoArrowBack } from "react-icons/io5";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // formData:{
  //   email:"khfd",
  //   password:"123"
  // }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/login",//this is the backend route for login
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Invalid email or password");
      }

      // Store JWT
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("token_type", data.token_type);
      localStorage.setItem("user_email", formData.email);

      alert("Login successful!");
      navigate("/");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <IoArrowBack />
      </div>

      <div className="icon-circle-login">
        <span className="heart-icon">♡</span>
      </div>

      <h1 className="logo-text">LumiSkin</h1>
      <p className="subtitle">
        Welcome back! Sign In to continue your skincare journey.
      </p>

      <div className="form-section">
        {error && <div className="error-message">{error}</div>}

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="remember-row">
          <div className="left-remember">
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
          <span className="forgot">Forgot Password?</span>
        </div>

        <button
          className="primary-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <div className="divider">
          <span></span> Or continue with <span></span>
        </div>

        <div className="social-row">
          <button type="button" className="social-btn google">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="google"
            />
            Google
          </button>

          <button type="button" className="social-btn apple">
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
      </div>
    </div>
  );
}
//this the code for login which gets integrated with backend