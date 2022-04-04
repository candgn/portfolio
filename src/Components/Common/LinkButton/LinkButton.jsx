import React from "react";
import { withTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = ({ t, variant, link }) => {
  return (
    <Link to={link ? link : "/contact"} className="link-button">
      <Button variant={variant ? variant : "contained"}>
        {t("LinkButton")}
      </Button>
    </Link>
  );
};

export default withTranslation()(LinkButton);
