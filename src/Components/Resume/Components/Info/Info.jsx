import React from "react";
import { withTranslation } from "react-i18next";

const Info = ({ t }) => {
  return <div>{t("Portfolio")}</div>;
};

export default withTranslation()(Info);
