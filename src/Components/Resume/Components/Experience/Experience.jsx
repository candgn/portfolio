import React from "react";
import { withTranslation } from "react-i18next";
import "./Experience.css";
import { GoLocation } from "react-icons/go";

const Experience = ({
  t,
  startDate,
  endDate,
  location,
  logo,
  link,
  title,
  subTitle,
  desc,
  bullets,
  additionalIcons,
}) => {
  return (
    <div className="exp-container">
      <div className="exp-date-container">
        {location && (
          <div className="exp-location-container">
            <GoLocation className="exp-location-icon" />
            <p className="exp-location-text">{t(location)}</p>
          </div>
        )}

        <p className="exp-end-date">{t(endDate)}</p>
        <p className="exp-start-date">{t(startDate)}</p>
      </div>
      <div className="exp-info-container">
        <div className="exp-info-title-container">
          {logo && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img className="exp-logo" src={logo} alt={title + "-logo"} />
            </a>
          )}

          <p className="exp-title">{t(title)}</p>
          <p className="exp-sub-title">{t(subTitle)}</p>
        </div>

        {desc && <p className="exp-desc">{t(desc)}</p>}
        {bullets && (
          <ul>
            {bullets.map((bullet, i) => (
              <li key={"exp-bullets-" + title + "-" + i}>{t(bullet)}</li>
            ))}
          </ul>
        )}
        <div className="exp-additional-icon-container">
          {additionalIcons && additionalIcons.map((icon) => <div className="exp-additional-icon">{icon}</div>)}
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(Experience);
