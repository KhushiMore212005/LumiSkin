import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Routine.css";

export default function Routine() {
  const navigate = useNavigate();   // ✅ added

  const [routines, setRoutines] = useState({
    morning: [
      {
        id: 1,
        title: "Gentle Cleanser",
        brand: "CeraVe Foaming Facial Cleanser",
        time: "2 mins",
        desc: "Cleanse face with lukewarm water for 30 seconds",
        done: true,
      },
      {
        id: 2,
        title: "Vitamin C Serum",
        brand: "The Ordinary Vitamin C Suspension",
        time: "1 min",
        desc: "Apply 2-3 drops to face and neck, avoid eye area",
        done: true,
      },
      {
        id: 3,
        title: "Moisturizer",
        brand: "Neutrogena Hydro Boost",
        time: "1 min",
        desc: "Apply evenly to face and neck in upward motions",
        done: false,
      },
      {
        id: 4,
        title: "Sunscreen",
        brand: "EltaMD UV Clear SPF 46",
        time: "1 min",
        desc: "Apply generously 15 minutes before sun exposure",
        done: false,
      },
    ],
    afternoon: [
      {
        id: 1,
        title: "Refresh Cleanser",
        brand: "Simple Micellar Facial Gel Wash",
        time: "2 mins",
        desc: "Gently cleanse to remove sweat and surface oils",
        done: false,
      },
      {
        id: 2,
        title: "Hydrating Mist",
        brand: "Avene Thermal Spring Water",
        time: "30 sec",
        desc: "Spritz lightly all over face, let it air dry",
        done: false,
      },
      {
        id: 3,
        title: "Sunscreen Reapply",
        brand: "EltaMD UV Clear SPF 46",
        time: "1 min",
        desc: "Reapply sunscreen especially to exposed areas",
        done: false,
      },
    ],
    night: [
      {
        id: 1,
        title: "Oil Cleanser",
        brand: "Hada Labo Gokujyun Cleansing Oil",
        time: "2 mins",
        desc: "Massage on dry skin to dissolve makeup and sunscreen",
        done: false,
      },
      {
        id: 2,
        title: "Foam Cleanser",
        brand: "CeraVe Hydrating Cleanser",
        time: "2 mins",
        desc: "Double cleanse with lukewarm water, rinse well",
        done: false,
      },
      {
        id: 3,
        title: "Treatment / Serum",
        brand: "The Ordinary Niacinamide 10% + Zinc 1%",
        time: "1 min",
        desc: "Apply thin layer to problem areas, avoid eye area",
        done: false,
      },
      {
        id: 4,
        title: "Night Moisturizer",
        brand: "CeraVe PM Facial Moisturizing Lotion",
        time: "1 min",
        desc: "Apply evenly to face and neck before bed",
        done: false,
      },
    ],
  });

  const [activeTab, setActiveTab] = useState("morning");
  const currentSteps = routines[activeTab];

  const toggleStep = (stepId) => {
    setRoutines((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((step) =>
        step.id === stepId ? { ...step, done: !step.done } : step
      ),
    }));
  };

  const getTitle = () => {
    if (activeTab === "morning") return "Morning Routine";
    if (activeTab === "afternoon") return "Afternoon Routine";
    if (activeTab === "night") return "Night Routine";
    return "Routine";
  };

  return (
    <div className="routine-page">
      <div className="routine-card">

        {/* HEADER */}
        <header className="rt-header">
          <div className="rt-back" onClick={() => navigate(-1)}>
            ←
          </div>
          <h2>Daily Routine</h2>
          <div style={{ width: "22px" }}></div>
        </header>

        {/* TABS */}
        <div className="rt-tabs">
          <div
            className={`rt-tab ${activeTab === "morning" ? "active" : ""}`}
            onClick={() => setActiveTab("morning")}
          >
            Morning
          </div>
          <div
            className={`rt-tab ${activeTab === "afternoon" ? "active" : ""}`}
            onClick={() => setActiveTab("afternoon")}
          >
            Afternoon
          </div>
          <div
            className={`rt-tab ${activeTab === "night" ? "active" : ""}`}
            onClick={() => setActiveTab("night")}
          >
            Night
          </div>
        </div>

        {/* ROUTINE CARD */}
        <div className="rt-card">
          <div className="rt-title">{getTitle()}</div>

          {currentSteps.map((step) => (
            <StepItem
              key={`${activeTab}-${step.id}`}
              step={step}
              toggleStep={() => toggleStep(step.id)}
            />
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <button className="rt-footer-btn">Complete All Steps</button>
      </div>
    </div>
  );
}

/* STEP ITEM */
function StepItem({ step, toggleStep }) {
  return (
    <div className={`rt-task ${step.done ? "done" : ""}`} onClick={toggleStep}>
      <div className={`rt-check ${step.done ? "checked" : ""}`}>
        {step.done && "✓"}
      </div>

      <div className="rt-task-details">
        <div className="rt-task-title-row">
          <span className="rt-task-title">{step.title}</span>
          <span className="rt-task-time">{step.time}</span>
        </div>
        <div className="rt-task-brand">{step.brand}</div>
        <div className="rt-task-desc">{step.desc}</div>
      </div>
    </div>
  );
}
