// App.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // navigation handlers
  const goToLoginPage = () => navigate("/login");
  const goToSignupPage = () => navigate("/signup");
  const goToProfile = () => navigate("/profile");
  const goToRoutine = () => navigate("/routine");
  const goToHome = () => navigate("/");
  const goToProgress = () => navigate("/progress");
  const goToShop = () => navigate("/shop");
  const goToDoctors = () => navigate("/doctors");
  
  


  return (
    <div className="lm-app">
      {/* MAIN SCROLL AREA */}
      <main className="lm-main">
        {/* HERO / WELCOME CARD */}
        <section className="lm-hero-card">
          <div className="lm-hero-header">
            <h2 className="lm-hero-title">LumiSkin</h2>
            <p className="lm-hero-subtitle">Your Personal Skincare Journey</p>
          </div>

          <div className="lm-hero-inner">
            <div className="lm-hero-icon-wrap">
              <div className="lm-hero-icon">
                <span>♡</span>
              </div>
            </div>

            <h3 className="lm-hero-heading">Welcome to LumiSkin</h3>
            <p className="lm-hero-text">
              Discover your perfect skincare routine with personalized
              recommendations, track your progress, and connect with expert
              dermatologists.
            </p>

            <button className="lm-btn lm-btn-primary" onClick={goToLoginPage}>
              Get Started
            </button>

            <button className="lm-btn lm-btn-outline" onClick={goToSignupPage}>
              Create Account
            </button>
          </div>
        </section>

        {/* QUICK ACTION CARDS */}
        <section className="lm-quick-actions">
          <div className="lm-qa-card" onClick={goToProfile}>
            <div className="lm-qa-icon profile">
              <span>👤</span>
            </div>
            <span className="lm-qa-label">Profile</span>
          </div>

          <div className="lm-qa-card" onClick={goToRoutine}>
            <div className="lm-qa-icon routine">
              <span>📅</span>
            </div>
            <span className="lm-qa-label">Routine</span>
          </div>
        </section>
      </main>

      {/* BOTTOM NAVBAR */}
      <nav className="lm-bottom-nav">
        <button
          className={`lm-nav-item ${
            location.pathname === "/" ? "active" : ""
          }`}
          onClick={goToHome}
        >
          <span className="lm-nav-icon">⌂</span>
          <span className="lm-nav-label">Home</span>
        </button>

        <button
          className={`lm-nav-item ${
            location.pathname === "/progress" ? "active" : ""
          }`}
          onClick={goToProgress}
        >
          <span className="lm-nav-icon">📊</span>
          <span className="lm-nav-label">Progress</span>
        </button>
      

        <button
          className={`lm-nav-item ${
            location.pathname === "/shop" ? "active" : ""
          }`}
          onClick={goToShop}
        >
          <span className="lm-nav-icon">🛒</span>
          <span className="lm-nav-label">Shop</span>
        </button>

        {/* ❤️ DOCTORS TAB (UPDATED) */}

        <button className="lm-nav-item" onClick={goToDoctors}>
            <span className="lm-nav-icon">❤</span>
            <span className="lm-nav-label">Doctors</span>
        </button>
        
        <button
          className={`lm-nav-item ${
            location.pathname === "/profile" ? "active" : ""
          }`}
          onClick={goToProfile}
        >
          <span className="lm-nav-icon">👤</span>
          <span className="lm-nav-label">Profile</span>
        </button>
      </nav>
    </div>
  );
}
