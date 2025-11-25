import "./SideNav.css";

import React from 'react';
import { NavLink } from 'react-router-dom';

function SideNav() {
  return (


    <div class="sidenav">

      <div>
        <h4>Joe Estrem</h4>
        <p><NavLink to="/HousingJapan" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>Housing Japan</NavLink></p>
        <p><NavLink to="/Kohls" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>Kohl's</NavLink></p>
        <p><NavLink to="/Kollab" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>Kollab</NavLink></p>
        {/* <p><NavLink to="/PlansTonight" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>Plans Tonight</NavLink></p> */}
        <p><NavLink to="/WaniKani" className={({ isActive }) => isActive ? "category-link active-link" : "category-link"}>WaniKani</NavLink></p>
      </div>
    </div>
  );
}

export default SideNav;
