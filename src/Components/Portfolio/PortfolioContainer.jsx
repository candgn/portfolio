import React from "react";
import { withTranslation } from "react-i18next";
import CardSlider from "../Common/CardSlider/CardSlider";
import ImageMore from "../Common/Cards/ImageMore/ImageMore";
import Constants from "./Constants";

import "./PortfolioContainer.css";

const threeElement = Array.from({ length: 6 }, () => Constants.dummyData);

const PortfolioContainer = ({ t }) => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <CardSlider title="cardSlider" data={threeElement} Card={ImageMore} />
      </div>
    </div>
  );
};

export default withTranslation()(PortfolioContainer);
