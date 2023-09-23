import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="bg-teal h-16 p-4 grid justify-between navbar">
      <div className="logo">
        <img className="inline" src="logo192.png" alt="logo" />
        <a className="inline">Stars Vet Animal & Bird Clinic</a>
      </div>
      <div className="nav-items flex-row gap-10">
        <a className="nav-item nav-item-arrow" id="species">Species We Treat</a>
        <a className="nav-item nav-item-arrow" id="services">Services</a>
        <a className="nav-item" id="location">Location</a>
        <a className="nav-item" id="about">About Us</a>
        <a className="nav-item" id="contact">Contact Us</a>
      </div>
    </div>
  );
}
