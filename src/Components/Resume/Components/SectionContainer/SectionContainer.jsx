import React from "react";
import { withTranslation } from "react-i18next";
import "./SectionContainer.css";

const SectionContainer = ({
  t,
  style,
  sectionContentStyle,
  title,
  children,
  icon,
}) => {
  return (
    <div className="section-container" style={{ ...style }}>
      <div className="section-title-container">
        {icon && icon}
        <p className="section-title">{t(title)}</p>
      </div>
      <div style={{ ...sectionContentStyle }}>{children}</div>
    </div>
  );
};

export default withTranslation()(SectionContainer);
