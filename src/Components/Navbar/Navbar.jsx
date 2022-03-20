import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Languages from "./Components/Languages/Languages";

const Navbar = ({ t }) => {
  return (
    <div className="navbar">
      <div style={{ position: "absolute", bottom: "10px" }}>
        <Languages />
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
    </div>
  );
};

export default withTranslation()(Navbar);
