// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import Routine from "./Routine";
// import your other pages if you have them:
import Progress from "./ProgressTracker";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Dermatologists from "./Dermatologists";
import Shop from "./Shop";



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home screen */}
        <Route path="/" element={<App />} />

        {/* Keep your existing pages here */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/doctors" element={<Dermatologists />} />
        {Progress && <Route path="/progress" element={<Progress />} />}
         <Route path="/shop" element={<Shop />} />
        {/*{Shop && <Route path="/shop" element={<Shop />} />}*/}
        {/*Doctors && <Route path="/doctors" element={<Doctors />} />*/}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);




