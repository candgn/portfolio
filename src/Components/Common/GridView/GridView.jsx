import React from "react";
import { withTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "./GridView.css";

const GridView = ({
  t,
  datas,
  title,
  Card,
  titlePosition,
  titleMoreButtonLink,
  hideTitle,
}) => {
  return (
    <div className="grid-view-container">
      <div className="grid-view-title-container">
        {hideTitle !== true && (
          <p className="grid-view-title" style={{ textAlign: titlePosition }}>
            {t(title ? title : "LoremTitle")}
          </p>
        )}

        {titleMoreButtonLink && (
          <Link
            to={titleMoreButtonLink}
            className="grid-view-title-more-button"
          >
            {t("more")} &#62;
          </Link>
        )}
      </div>
      <div className="grid-view">
        {datas.map((data, i) => (
          <div className="grid-card" key={title + "-cards-" + i}>
            <Card {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(GridView);
