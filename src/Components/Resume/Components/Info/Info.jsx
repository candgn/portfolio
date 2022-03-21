import React from "react";
import { withTranslation } from "react-i18next";
import Avatar from "@mui/material/Avatar";
import "./Info.css";
import PersonalInfo from "../../Constants/PersonalInfo";

const Info = ({ t }) => {
  const personalData = [
    { title: "birth", data: PersonalInfo.birth },
    { title: "nationality", data: PersonalInfo.nationality },
    { title: "gender", data: PersonalInfo.gender },
    { title: "location", data: PersonalInfo.location },
  ];
  return (
    <div className="info-container">
      <div className="info-image-container">
        <Avatar sx={{ width: 128, height: 128 }} alt="candogan" />
      </div>
      <div className="info-data-container">
        <p className="name-surname">
          {PersonalInfo.name} {PersonalInfo.surname}
        </p>
        <div className="info-data-container-details">
          {personalData.map((data, i) => (
            <p className="personal-data-detail" key={"personal-data-" + i}>
              <span>{t(data.title)}: </span>
              {t(data.data)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Info);
