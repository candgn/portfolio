import React from "react";
import { withTranslation } from "react-i18next";

import ScrollIndicator from "../Common/ScrollIndicator/ScrollIndicator";

import Info from "./Components/Info/Info";

import "./ResumeContainer.css";

const ResumeContainer = ({ t }) => {
  return (
    <div className="resume-container">
      <ScrollIndicator />
      <Info />
      {t("Resume")}
    </div>
  );
};

export default withTranslation()(ResumeContainer);
