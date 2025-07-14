import React from "react";
import "./mentorExpertNetwork.css";
export default function MentorExpertNetwork() {
  return (
    <div className="mentor-expert-network">
      <div className="mentor-expert-network-header-custom">
        <div className="mentor-expert-network-header-left">
          <h2 className="mentor-expert-network-header-title">
            Mentor & Expert
            <br />
            Network
          </h2>
        </div>
        <div className="mentor-expert-network-header-right">
          <div className="mentor-expert-network-header-desc">
            Our mentor and expert network is the backbone of our incubation
            journey.
          </div>
        </div>
      </div>

      <div className="mentor-expert-network-images">
        <div className="mentor-expert-network-image-container">
          <img
            src="../../../public/images/Frame 110.png"
            alt="Mentor 1"
            className="mentor-expert-network-image"
          />
        </div>

        <div className="mentor-expert-network-image-container">
          <img
            src="../../../public/images/Frame 267.png"
            alt="Mentor 2"
            className="mentor-expert-network-image"
          />
        </div>

        <div className="mentor-expert-network-image-container">
          <img
            src="../../../public/images/Frame 267.png"
            alt="Mentor 2"
            className="mentor-expert-network-image"
          />
        </div>

        <div className="mentor-expert-network-image-container">
          <img
            src="../../../public/images/Frame 267.png"
            alt="Mentor 2"
            className="mentor-expert-network-image"
          />
        </div>

        <div className="mentor-expert-network-image-container">
          <img
            src="../../../public/images/Frame 267.png"
            alt="Mentor 2"
            className="mentor-expert-network-image"
          />
        </div>
      </div>
    </div>
  );
}
