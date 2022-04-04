import React from "react";
import { withTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./ImageTextButtonCard.css";

const ImageTextButtonCard = ({ t, img, title, desc, link }) => {
  return (
    <div className="image-text-button">
      <img
        className="image-text-button-image"
        src={img ? img : "/images/placeholder.png"}
        alt="card"
      />
      <p className="image-text-button-title">{title ? t(title) : t("LoremTitle")}</p>
      <p className="image-text-button-desc">{desc ? t(desc) : t("LoremDesc")}</p>
      <Link to={link} className="image-text-button-detail-link">
        <Button variant="contained" className="image-text-button-button">
          {t("details")}
        </Button>
      </Link>
    </div>
  );
};

export default withTranslation()(ImageTextButtonCard);
