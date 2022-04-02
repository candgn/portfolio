import React from "react";
import { withTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import "./Info.css";

import constants from "../../constants";

const Info = ({ t, hideImage }) => {
  const personalData = [
    { title: "birth", data: constants.PERSONAL_INFO.birth },
    { title: "nationality", data: constants.PERSONAL_INFO.nationality },
    { title: "gender", data: constants.PERSONAL_INFO.gender },
    { title: "location", data: constants.PERSONAL_INFO.location },
  ];
  return (
    <div className="info-container">
      {hideImage !== true && (
        <div className="info-image-container">
          <Avatar
            src="/can.jpeg"
            sx={{ width: 110, height: 110 }}
            alt="candogan"
          />
        </div>
      )}

      <div className="info-data-container">
        <p className="name-surname">
          {constants.PERSONAL_INFO.name} {constants.PERSONAL_INFO.surname}
        </p>
        <div className="info-data-container-details">
          {personalData.map((data, i) => (
            <p className="personal-data-detail" key={"personal-data-" + i}>
              <span>{t(data.title)}: </span>
              {t(data.data)}
            </p>
          ))}
        </div>
        <div className="info-social-container"></div>
      </div>
    </div>
  );
};

export default withTranslation()(Info);
