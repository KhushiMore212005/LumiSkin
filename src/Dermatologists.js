import React from "react";
import "./Dermatologists.css";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";


export default function Dermatologists() {
  const navigate = useNavigate();

  return (
    <div className="derm-page">
      <div className="derm-container">

        {/* ================= SINGLE CARD ================= */}
        <div className="derm-card">

          {/* Card Header (like Profile page) */}
          <div className="derm-card-header">
            <IoArrowBack
              className="derm-back"
              onClick={() => navigate(-1)}
            />
            <h2 className="derm-title">Dermatologists</h2>
          </div>

          <p className="derm-subtitle">
            Consult certified skin experts.
          </p>

          {/* Doctor Card 1 */}
          <div className="doctor-card">
            <div className="doc-header">
              <div>
                <h4>Dr. Reshma P. Gadkari</h4>
                <span>Cosmetic Dermatology</span>
              </div>
              <span className="price">₹1000</span>
            </div>

            <p className="doc-desc">
              Acne care, anti-aging treatments, and professional skin analysis.
            </p>
            <button
                className="primary-btn"
                  onClick={() =>
                  window.open("https://www.justdial.com/Mumbai/Dr-Reshma-Pramod-Gadkari-Near-Canara-Banknext-To-Domestic-Airport-Vile-Parle-East/022PXX22-XX22-131130181417-B5K8_BZDET", "_blank")
                  }
            >
              Book Consultation
            </button>
          </div>

          {/* Doctor Card 2 */}
          <div className="doctor-card">
            <div className="doc-header">
              <div>
                <h4>Dr. Tushar Shah</h4>
                <span>Medical Dermatology</span>
              </div>
              <span className="price">₹150</span>
            </div>

            <p className="doc-desc">
              Expert in eczema, inflammation, and chronic skin conditions.
            </p>

            <button
                className="primary-btn"
                  onClick={() =>
                  window.open("https://www.justdial.com/Mumbai/Dr-Tushar-M-Shah-Rushabh-Clinic-Near-Shivsena-Office/022PXX22-XX22-190612103332-M7I1_BZDET", "_blank")
                  }
            >
              Book Consultation
            </button>
          </div>

          {/* Doctor Card 3 */}
          <div className="doctor-card">
            <div className="doc-header">
              <div>
                <h4>Dr. Kanan Shah</h4>
                <span>Cosmetic Dermatology</span>
              </div>
              <span className="price">₹500</span>
            </div>

            <p className="doc-desc">
              Acne care, anti-aging treatments, and professional skin analysis.
            </p>
              <button
                className="primary-btn"
                  onClick={() =>
                  window.open("https://www.justdial.com/Mumbai/Dr-Kanan-Shah-Santacruz-West/022PXX22-XX22-131218201017-N2N8_BZDET", "_blank")
                  }
            >
              Book Consultation
            </button>
          </div>
         {/* Doctor Card 4 */}
          <div className="doctor-card">
            <div className="doc-header">
              <div>
                <h4>Dr. Meghna Mour</h4>
                <span>Cosmetic Dermatology</span>
              </div>
              <span className="price">₹1000</span>
            </div>

            <p className="doc-desc">
              Acne care, anti-aging treatments, and professional skin analysis.
            </p>
              <button
                className="primary-btn"
                  onClick={() =>
                  window.open("https://www.justdial.com/Mumbai/Dr-Meghna-Mour-Face-Skin-Clinic-Vile-Parle-East/022PXX22-XX22-170804190454-G9B5_BZDET", "_blank")
                  }
            >
              Book Consultation
            </button>
          </div>
        {/* Doctor Card 5 */}
          <div className="doctor-card">
            <div className="doc-header">
              <div>
                <h4>Dr. Avina Jain</h4>
                <span>Cosmetic Dermatology</span>
              </div>
              <span className="price">₹1000</span>
            </div>

            <p className="doc-desc">
              Acne care, anti-aging treatments, and professional skin analysis.
            </p>
              <button
                className="primary-btn"
                  onClick={() =>
                  window.open("https://www.justdial.com/Mumbai/Dr-Avina-Jain-Auro-Skin-Clinic-Opposite-Cnm-School-Vile-Parle-West/022PXX22-XX22-230403160058-B1D3_BZDET", "_blank")
                  }
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
