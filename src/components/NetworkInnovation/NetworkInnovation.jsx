import React from "react";

import "./networkInnovation.css";
const features = [
  {
    title: "Expert Mentors",
    desc: "Seasoned founders, domain specialists, and ex-operators who provide hands-on guidance across strategy, product, go-to-market, and more.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect
          x="6"
          y="10"
          width="24"
          height="16"
          rx="3"
          stroke="#fff"
          strokeWidth="2"
        />
        <path
          d="M12 26v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Venture Capital Network",
    desc: "Direct access to early-stage and growth-stage investors — from angel syndicates to institutional VCs actively scouting new opportunities.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <rect
          x="8"
          y="12"
          width="20"
          height="12"
          rx="3"
          stroke="#fff"
          strokeWidth="2"
        />
        <path
          d="M18 18v-4"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="18" cy="22" r="1" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "Industry & Corporate Partners",
    desc: "Collaboration opportunities with industry leaders in tech, health, finance, and sustainability — for pilots, co-innovation, and credibility.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="8" stroke="#fff" strokeWidth="2" />
        <path d="M18 10v16M10 18h16" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Innovation Hubs & Universities",
    desc: "A pipeline to global talent, research support, and cross-border expansion via our partnerships with leading innovation centers and academic institutions.",
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="10" stroke="#fff" strokeWidth="2" />
        <path d="M12 24c2-2 8-2 12 0" stroke="#fff" strokeWidth="2" />
        <circle cx="18" cy="16" r="3" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function NetworkInnovation() {
  return (
    <section className="network-section">
      <div className="network-container">
        <div className="network-header">
          <div>
            <h2 className="network-title">
              A Network That
              <br />
              Powers Innovation
            </h2>
          </div>
          <div className="network-desc">
            At the heart of our incubator is a dynamic ecosystem
            <br />
            built to elevate startups beyond the early stage.
          </div>
        </div>
        <div className="network-grid">
          {features.map((f, i) => (
            <div className="network-card" key={i}>
              <div className="network-icon">{f.icon}</div>
              <div>
                <h3 className="network-card-title">{f.title}</h3>
                <p className="network-card-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
