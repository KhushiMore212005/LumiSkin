import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProgressTracker.css";

function ProgressTracker() {
  const navigate = useNavigate();

  return (
    <div className="progress-wrapper">

      {/* HEADER */}
      <div className="pt-header">
        <span className="pt-back" onClick={() => navigate(-1)}>←</span>
        <h2>Progress Tracker</h2>
      </div>

      {/* TABS */}
      <div className="pt-tabs">
        <div className="pt-tab active">Charts</div>
        <div
          className="pt-tab"
          onClick={() => navigate("/photos")}
        >
          Photos
        </div>
        <div className="pt-tab">Notes</div>
      </div>

      {/* CARD 1: PROGRESS GRID */}
      <div className="pt-card">
        <h3 className="pt-title">Track Your Progress</h3>

        <div className="pt-grid">
          <div className="pt-box pt-primary">
            <strong>Overall Skin Health</strong>
            <span>8.8/10</span>
          </div>

          <div className="pt-box">
            <strong>Hydration Level</strong>
            <span>8.5/10</span>
          </div>

          <div className="pt-box">
            <strong>Acne Score</strong>
            <span>1.2/10</span>
          </div>

          <div className="pt-box">
            <strong>Skin Texture</strong>
            <span>8.7/10</span>
          </div>
        </div>
      </div>

      {/* CARD 2: GRAPH */}
      <div className="pt-card">
        <h3 className="pt-title">Overall Skin Health Trend</h3>

        <div className="pt-legend">
          <div className="pt-dot"></div>
          <span>Last 30 days</span>
        </div>

        <div className="pt-graph">
          <div className="pt-line"></div>
        </div>
      </div>

    </div>
  );
}

export default ProgressTracker;
