import React from "react";
import { withTranslation } from "react-i18next";

const PortfolioContainer = ({ t }) => {
  return <div>{t("Portfolio")}</div>;
};

export default withTranslation()(PortfolioContainer);
