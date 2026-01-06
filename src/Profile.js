import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import "./Profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [skinResult, setSkinResult] = useState(null);

  const skinResults = {
    dry: {
      title: "Skin Type: Dry",
      desc: `Your blotting paper remained clean.
Your skin may feel tight and flaky.
Moisturizer and hydration are essential.`,
    },
    oily: {
      title: "Skin Type: Oily",
      desc: `Oil appeared on all areas.
Your skin produces excess sebum.
Use oil-control products.`,
    },
    combo: {
      title: "Skin Type: Combination",
      desc: `Oil appeared mainly in T-zone.
Balance care for oily & dry areas.`,
    },
    normal: {
      title: "Skin Type: Normal",
      desc: `Very little oil detected.
Your skin is well balanced.`,
    },
  };

  return (
    <div className="pf-page">
      <div className="pf-container">
        <div className="pf-card">

          {/* Header */}
          <div className="pf-card-header">
            <IoArrowBack className="pf-back" onClick={() => navigate(-1)} />
            <h2 className="pf-title">Profile</h2>
          </div>

          {/* Tabs */}
          <div className="pf-tabs">
            <button
              className={`pf-tab ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
            <button
              className={`pf-tab ${activeTab === "skinTest" ? "active" : ""}`}
              onClick={() => setActiveTab("skinTest")}
            >
              Skin Test
            </button>
          </div>

          {/* ================= PROFILE TAB ================= */}
          {activeTab === "profile" && (
            <>
              <div className="pf-user">
                <div className="pf-avatar">
                  <div className="pf-avatar-circle">👤</div>
                  <button className="pf-avatar-edit">✎</button>
                </div>
                <h3>Sarah Johnson</h3>
                <p>sarah.johnson@email.com</p>
              </div>

              <hr />

              <h4 className="pf-section-title">Personal Information</h4>

              <div className="pf-row"><span>Full Name</span><span>Sarah Johnson</span></div>
              <div className="pf-row"><span>Email</span><span>sarah.johnson@email.com</span></div>
              <div className="pf-row"><span>Phone</span><span>+1 (555) 123-4567</span></div>
              <div className="pf-row"><span>Age</span><span>28</span></div>

              <button className="pf-edit-btn">Edit Profile</button>

              <hr />

              <h4 className="pf-section-title">Skin Profile</h4>
              <div className="pf-row"><span>Skin Type</span><span>Combination</span></div>
            </>
          )}

          {/* ================= SKIN TEST TAB ================= */}
          {activeTab === "skinTest" && (
            <>
              <div className="skin-test-card">
                <h4>📄 Blotting Paper Skin Test</h4>
                <p className="pf-desc">
                  This simple test helps determine your true skin type.
                </p>

                <h5>Steps:</h5>
                <ol className="pf-steps">
                  <li>Wash your face & let it dry naturally.</li>
                  <li>Wait 30 minutes.</li>
                  <li>Press blotting paper on forehead, nose & cheeks.</li>
                </ol>

                <div className="skin-btn-group">
                  <button onClick={() => setSkinResult("dry")}>No Oil on Paper</button>
                  <button onClick={() => setSkinResult("oily")}>Oil on All Areas</button>
                  <button onClick={() => setSkinResult("combo")}>Oil on T-Zone Only</button>
                  <button onClick={() => setSkinResult("normal")}>Very Little Oil</button>
                </div>
              </div>

              {skinResult && (
                <div className="skin-result">
                  <h4>{skinResults[skinResult].title}</h4>
                  <p>{skinResults[skinResult].desc}</p>
                </div>
              )}
            </>
          )}

        </div>
      </div>
    </div>
  );
}
