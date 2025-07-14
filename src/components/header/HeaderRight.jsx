import React from "react";
import "./header.css";
export default function HeaderRight() {
  return (
    <>
      <div className="header-right">
        {/* Icons Top Row */}
        <div className="header-icons-row header-icons-row-top">
          <img
            src="/public/icons/1.png"
            alt="icon1"
            className="header-icon header-icon-purple"
          />
          <img
            src="/public/icons/Group 1.png"
            alt="icon2"
            className="header-icon header-icon-green"
          />
          <img
            src="/public/icons/Group 3.png"
            alt="icon3"
            className="header-icon header-icon-purple"
          />
          <img
            src="/public/icons/Group 4.png"
            alt="icon4"
            className="header-icon header-icon-orange"
          />
        </div>
        {/* Card */}
        <div className="header-card">
          <span className="header-card-label">Trusted by more than</span>
          <span className="header-card-number">500,000+</span>
          <span className="header-card-desc">Companies</span>
        </div>
        {/* Icons Bottom Row */}
        <div className="header-icons-row header-icons-row-bottom">
          <img
            src="/public/icons/Group 1.png"
            alt="icon5"
            className="header-icon header-icon-orange"
          />
          <img
            src="/public/icons/Group 5.png"
            alt="icon6"
            className="header-icon header-icon-purple"
          />
          <img
            src="/public/icons/Group 6.png"
            alt="icon7"
            className="header-icon header-icon-orange"
          />
          <img
            src="/public/icons/1.png"
            alt="icon8"
            className="header-icon header-icon-purple"
          />
        </div>
      </div>
    </>
  );
}
