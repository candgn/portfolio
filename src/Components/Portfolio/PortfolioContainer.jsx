import React, { useState } from "react";
import { withTranslation } from "react-i18next";

//Components
import CardSlider from "../Common/CardSlider/CardSlider";
import ImageMore from "../Common/Cards/ImageMore/ImageMore";
import IconandText from "../Common/Cards/IconTextCard/IconandText";
import ImageTextButtonCard from "../Common/Cards/ImageTextButtonCard/ImageTextButtonCard";
import GridView from "../Common/GridView/GridView";
import DropDownButton from "../Common/DropDown/DropDownButton";

import Constants from "./Constants";

import "./PortfolioContainer.css";

const sixElement = Array.from({ length: 6 }, () => Constants.dummyData);

const PortfolioContainer = ({ t }) => {
  const [selectedCard, setSelectedCard] = useState("ImageMore");

  const Cards =
    selectedCard === "ImageMore"
      ? ImageMore
      : selectedCard === "IconText"
      ? IconandText
      : ImageTextButtonCard;

  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div style={{ float: "right", marginTop: "10px" }}>
          <DropDownButton
            data={Constants.cards}
            setSelectedValue={setSelectedCard}
            selectedValue={selectedCard}
          />
        </div>
        <CardSlider title="cardSlider" data={sixElement} Card={Cards} />
      </div>
      <div className="portfolio-wrapper">
        <div style={{ float: "right" }}>
          <DropDownButton
            data={Constants.cards}
            setSelectedValue={setSelectedCard}
            selectedValue={selectedCard}
          />
        </div>
        <GridView datas={sixElement} Card={Cards} title={"gridView"} />
      </div>
    </div>
  );
};

export default withTranslation()(PortfolioContainer);
