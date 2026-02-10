// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { IoArrowBack } from "react-icons/io5";
// import "./SignupPage.css";

// export default function SignupPage() {
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     navigate(-1); // go back
//   };

//   return (
//     <div className="signup-container">
//       {/* Back Arrow */}
      
//       <div className="back-arrow" onClick={handleGetStarted}>
//               <IoArrowBack />
//             </div>

//       {/* Icon Circle */}
//       <div className="icon-circle-signup">
//         <span className="heart-icon-signup">♡</span>
//       </div>

//       {/* Logo */}
//       <h1 className="signup-title">LumiSkin</h1>
//       <p className="signup-sub">Create your account and glow with confidence.</p>

//       {/* Form */}
//       <form className="form-section-signup">
//         <label>Full Name</label>
//         <input type="text" placeholder="Enter your full name" required />

//         <label>Email Address</label>
//         <input type="email" placeholder="Enter your email" required />

//         <label>Password</label>
//         <input type="password" placeholder="Create a password" required />

//         <label>Confirm Password</label>
//         <input type="password" placeholder="Confirm your password" required />

//         <button type="submit" className="primary-btn-signup">
//           Sign Up
//         </button>

//         <div className="divider-signup">
//           <span></span> Or continue with <span></span>
//         </div>

//         <div className="social-row-signup">
//           <button className="social-btn google">
//             <img
//               src="https://www.svgrepo.com/show/355037/google.svg"
//               alt="google"
//             />
//             Google
//           </button>

//           <button className="social-btn apple">
//             <img
//               src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
//               alt="apple"
//             />
//             Apple
//           </button>
//         </div>

//         <p className="signup-text-bottom">
//           Already have an account?{" "}
//           <span className="link" onClick={() => navigate("/login")}>
//             Sign in here
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./SignupPage.css";

export default function SignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/signup",
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
        throw new Error(data.detail || "Signup failed");
      }

      alert("Signup successful! Please login.");
      navigate("/login");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="back-arrow" onClick={() => navigate(-1)}>
        <IoArrowBack />
      </div>

      <div className="icon-circle-signup">
        <span className="heart-icon-signup">♡</span>
      </div>

      <h1 className="signup-title">LumiSkin</h1>
      <p className="signup-sub">Create your account and glow with confidence.</p>

      <form className="form-section-signup" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}

        <label>Full Name</label>
        <input
          type="text"
          name="full_name"
          placeholder="Enter your full name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />

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
          placeholder="Create a password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm your password"
          value={formData.confirm_password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="primary-btn-signup"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Sign Up"}
        </button>

        <div className="divider-signup">
          <span></span> Or continue with <span></span>
        </div>

        <div className="social-row-signup">
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
