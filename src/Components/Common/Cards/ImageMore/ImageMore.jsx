import { Link } from "react-router-dom";
import React from "react";
import { withTranslation } from "react-i18next";

import "./ImageMore.css";
import ContactButton from "../../LinkButton/LinkButton";

const ImageMore = ({ t, img, title, link }) => {
  return (
    <div className="image-more-container">
      <img src={img} alt={title} className="image-more-card-img" />
      <div className="image-more-title-container">
        <p className="image-more-title">{t(title)}</p>
        <Link
          to={link}
          className="image-more-detail-button"
          onClick={() => {
            console.log(link);
          }}
        >
          <p className="image-more-more">{t("more")} &#62;</p>
        </Link>
      </div>
      <div className="image-more-form-button">
        <ContactButton />
      </div>
    </div>
  );
};

export default withTranslation()(ImageMore);
