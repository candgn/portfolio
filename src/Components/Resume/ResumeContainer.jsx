import React from "react";
import { withTranslation } from "react-i18next";

const ResumeContainer = ({t}) => {
  return <div>{t("Resume")}</div>;
};

export default withTranslation()(ResumeContainer);
