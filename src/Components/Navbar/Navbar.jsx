import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";

import Languages from "./Components/Languages/Languages";

const openMobileMenu = () => {
  const navItems = document.getElementsByClassName("navbar-list-item");
  const navbar = document.getElementsByClassName("navbar")[0];
  navbar.style.height = navbar.style.height === "100%" ? "" : "100%";
  for (let i = 0; i < navItems.length; i++) {
    navItems[i].style.display =
      navItems[i].style.display === "block" ? "none" : "block";
  }
};

const Navbar = ({ t }) => {
  return (
    <div className="navbar">
      <div className="icon" onClick={openMobileMenu}>
        <MenuIcon />
      </div>

      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/" className="navbar-link">
            {t("Resume")}
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/portfolio" className="navbar-link">
            {t("Portfolio")}
          </Link>
        </li>
      </ul>
      <div style={{ position: "absolute", bottom: "10px" }}>
        <Languages />
      </div>
    </div>
  );
};

export default withTranslation()(Navbar);
