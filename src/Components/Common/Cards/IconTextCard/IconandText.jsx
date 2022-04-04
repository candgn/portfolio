import React from "react";
import { withTranslation } from "react-i18next";

import "./IconandText.css";

const IconandText = ({ t, icon, title, desc }) => {
  return (
    <div className="icon-text-container">
      <div className="icon-text-icon">{icon}</div>
      <div className="icon-text-text-container">
        <p className="icon-text-title">{t(title)}</p>
        <p className="icon-text-desc">{t(desc)}</p>
      </div>
    </div>
  );
};

export default withTranslation()(IconandText);
