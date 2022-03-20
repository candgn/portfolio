import React from "react";
import { withTranslation } from "react-i18next";

import ScrollIndicator from "../Common/ScrollIndicator/ScrollIndicator";

import "./ResumeContainer.css";

const ResumeContainer = ({ t }) => {
  return (
    <div className="resume-container">
      <ScrollIndicator />
      {t("Resume")}
    </div>
  );
};

export default withTranslation()(ResumeContainer);
