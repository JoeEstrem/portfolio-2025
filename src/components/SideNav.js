import "./SideNav.css";

import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/HousingJapan", label: "Housing Japan" },
    { to: "/Kohls", label: "Kohl's" },
    { to: "/Kollab", label: "Kollab" },
    { to: "/WaniKani", label: "WaniKani" },
  ];

  return (
    <div className="sidenav">

      <div className="nav-header">
        <p className="nav-item">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "category-link-h4 active-link-h4"
                : "category-link-h4"
            }
          >
            Joe Estrem
          </NavLink>
        </p>

        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {links.map((link) => (
          <p className="nav-item" key={link.to}>
            <NavLink
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "category-link active-link"
                  : "category-link"
              }
            >
              {link.label}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
