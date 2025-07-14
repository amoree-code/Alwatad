import React from "react";
import "./header.css";
export default function HeaderLeft() {
  return (
    <>
      <div className="header-left">
        <h1 className="header-title">
          <span>Bold</span>
          <br />
          <span className="header-title-secondary">Startups</span>
          <br />
          <span>Start Here</span>
        </h1>
        <div className="header-desc-row">
          <span className="header-desc-label">We Help</span>
          <span className="header-desc-text">
            A compelling headline with a short blurb about your
            mission—empowering founders, accelerating innovation, and
            transforming ideas into ventures.
          </span>
        </div>
        <div className="header-btn-row">
          <button className="header-btn header-btn-outline">
            Explore Our Startups
          </button>
          <button className="header-btn header-btn-gradient">Apply Now</button>
        </div>
      </div>
    </>
  );
}
