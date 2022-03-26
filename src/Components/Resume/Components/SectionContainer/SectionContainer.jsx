import React from "react";
import { withTranslation } from "react-i18next";
import "./SectionContainer.css";

const SectionContainer = ({ t, title, children, icon }) => {
  return (
    <div className="section-container">
      <div className="section-title-container">
        {icon && icon}
        <p className="section-title">{t(title)}</p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default withTranslation()(SectionContainer);
