import React from "react";
import { withTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import "./TwoColumn.css";

const TwoColumn = ({
  t,
  image,
  title,
  subTitle,
  desc,
  link,
  additionalImages,
}) => {
  return (
    <div className="info-two-column-container">
      <p className="info-tc-title">{t(title)}</p>
      <div className="info-two-column-content-container">
        <div className="info-first-column">
          <img src={image} alt={image} className="info-fc-image" />
        </div>
        <div className="info-second-column">
          {subTitle && <p className="info-tc-sub-title">{t(subTitle)}</p>}
          <p className="info-tc-desc">{t(desc)}</p>
          {link && (
            <Link to={link} className="info-read-more">
              <Button variant={"contained"}>{t("readMore")}</Button>
            </Link>
          )}
          {additionalImages && (
            <div className="info-additional-img-container">
              {additionalImages.map((image, i) => (
                <img
                  src={image}
                  alt={title + "-" + i}
                  className="info-add-img"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(TwoColumn);
