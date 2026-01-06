import React from "react";
import { useNavigate } from "react-router-dom";
import "./PhotosTab.css";


function PhotosTab() {
  const navigate = useNavigate();

  const photos = [
    "https://via.placeholder.com/120x120?text=Skin+1",
    "https://via.placeholder.com/120x120?text=Skin+2",
    "https://via.placeholder.com/120x120?text=Skin+3",
    "https://via.placeholder.com/120x120?text=Skin+4",
    "https://via.placeholder.com/120x120?text=Skin+5",
    "https://via.placeholder.com/120x120?text=Skin+6",
  ];

  return (
    <div className="photos-wrapper">
      {/* HEADER */}
      <div className="photos-header">
        <span className="photos-back" onClick={() => navigate(-1)}>←</span>
        <h2>Photos</h2>
      </div>

      {/* PHOTO GRID */}
      <div className="photos-grid">
        {photos.map((url, index) => (
          <div key={index} className="photo-card">
            <img src={url} alt={`Skin progress ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* ADD NEW PHOTO BUTTON */}
      <div className="add-photo-container">
        <button className="add-photo-btn">+ Add New Photo</button>
      </div>
    </div>
  );
}

export default PhotosTab;
