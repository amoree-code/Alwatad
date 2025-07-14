import React from "react";
import "./header.css";
import HeaderRight from "./HeaderRight";
import HeaderLeft from "./HeaderLeft";
export default function Header() {
  return (
    <div className="header-container">
      {/* Left Section */}
      <HeaderLeft />
      {/* Right Section */}
      <HeaderRight />
    </div>
  );
}
