import React from "react";
import { withTranslation } from "react-i18next";
import useWindowDimensions from "../../../Helpers/useWindowDimensions";

import "./HalfColumnText.css";

const HalfColumnText = ({ t, contentPosition, title, desc, img }) => {
  const { width } = useWindowDimensions();

  return (
    <div className="hct-container">
      <div
        className="hct-content-parent-container"
        style={{
          display: contentPosition === "right" && width < 800 && "none",
          backgroundImage:
            contentPosition === "right" &&
            "url(" + (img ? img : "/images/placeholder.png") + ")",
        }}
      >
        {contentPosition !== "right" && (
          <div className="hct-content-child-container">
            {title && <p className="hct-title">{t(title)}</p>}
            <p className="hct-desc">{t(desc)}</p>
          </div>
        )}
      </div>
      <div
        className="hct-content-parent-container"
        style={{
          display: contentPosition !== "right" && width < 800 && "none",
          backgroundImage:
            contentPosition !== "right" &&
            "url(" + (img ? img : "/images/placeholder.png") + ")",
        }}
      >
        {contentPosition === "right" && (
          <div className="hct-content-child-container">
            {title && <p className="hct-title">{t(title)}</p>}
            <p className="hct-desc">{t(desc)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default withTranslation()(HalfColumnText);
