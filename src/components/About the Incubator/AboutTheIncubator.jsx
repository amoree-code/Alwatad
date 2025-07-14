import React from "react";
import "./About-the-Incubator.css";
// "../../../public/images/image 1.png";

export default function AboutTheIncubator() {
  return (
    <div className="about-incubator-container">
      <div className="about-incubator-header-row">
        <h1 className="about-incubator-title">About the Incubator</h1>
        <div className="about-incubator-description">
          Empowering Founders.
          <br />
          Acceleratising Impact.
        </div>
      </div>

      <div className="about-incubator-image-card">
        <div className="about-incubator-image-placeholder">
          <img
            src="/images/image 1.png"
            alt="Incubator"
            className="about-incubator-main-img"
          />
        </div>
      </div>

      <div className="about-incubator-stats-row">
        <div className="about-incubator-stat-card">
          <img
            src="/icons/Frame 88.png"
            alt="Startups"
            className="about-incubator-stat-icon"
          />
          <div>
            <div className="about-incubator-stat-title">120+</div>
            <div className="about-incubator-stat-desc">Startups Incubated</div>
          </div>
          <div className="about-incubator-stat-caption">
            Streamline Your Processes and Increase Efficiency
          </div>
        </div>

        <div className="about-incubator-stat-card">
          <img
            src="/icons/Frame 86.png"
            alt="Funding"
            className="about-incubator-stat-icon"
          />
          <div>
            <div className="about-incubator-stat-title">$18M+</div>
            <div className="about-incubator-stat-desc">in Funding Raised</div>
          </div>
          <div className="about-incubator-stat-caption">
            Streamline Your Processes and Increase Efficiency
          </div>
        </div>

        <div className="about-incubator-stat-card">
          <img
            src="/icons/Frame 87.png"
            alt="Mentors"
            className="about-incubator-stat-icon"
          />
          <div>
            <div className="about-incubator-stat-title">50+</div>
            <div className="about-incubator-stat-desc">Active Mentors</div>
          </div>
          <div className="about-incubator-stat-caption">
            Streamline Your Processes and Increase Efficiency
          </div>
        </div>
      </div>
    </div>
  );
}
