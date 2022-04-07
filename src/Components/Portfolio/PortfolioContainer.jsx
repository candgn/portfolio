import React, { useState } from "react";
import { withTranslation } from "react-i18next";

//Components
import CardSlider from "../Common/CardSlider/CardSlider";
import ImageMore from "../Common/Cards/ImageMore/ImageMore";
import IconandText from "../Common/Cards/IconTextCard/IconandText";
import ImageTextButtonCard from "../Common/Cards/ImageTextButtonCard/ImageTextButtonCard";
import GridView from "../Common/GridView/GridView";
import DropDownButton from "../Common/DropDown/DropDownButton";
import TwoColumn from "../Common/TwoColumn/TwoColumn";

import Constants from "./Constants";

import "./PortfolioContainer.css";
import HalfColumnText from "../Common/HalfColumnText/HalfColumnText";

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
      {/* Card Slider Component */}
      <div className="portfolio-wrapper" style={{ marginRight: "100px" }}>
        <div style={{ float: "right", marginTop: "10px" }}>
          <DropDownButton
            data={Constants.cards}
            setSelectedValue={setSelectedCard}
            selectedValue={selectedCard}
          />
        </div>
        <CardSlider title="cardSlider" data={sixElement} Card={Cards} />
      </div>

      {/* Gric View Component */}
      <div className="portfolio-wrapper">
        <div style={{ float: "right", marginTop: "10px" }}>
          <DropDownButton
            data={Constants.cards}
            setSelectedValue={setSelectedCard}
            selectedValue={selectedCard}
          />
        </div>
        <GridView datas={sixElement} Card={Cards} title={"gridView"} />
      </div>

      {/* Two Column Info Text Button and Additioanal Images Component  */}
      <div className="portfolio-wrapper" style={{ padding: "0" }}>
        <TwoColumn
          image={Constants.dummyData.image}
          title={Constants.dummyData.title}
          subTitle={Constants.dummyData.subTitle}
          desc={Constants.dummyData.desc}
          link={Constants.dummyData.link}
          additionalImages={Constants.dummyData.additionalImages}
        />
      </div>

      {/* Half Column Text Component */}
      <div className="portfolio-wrapper" style={{ padding: "0" }}>
        <HalfColumnText
          img={Constants.dummyData.image}
          title="halfColumnText"
          desc={Constants.dummyData.desc}
        />
      </div>
    </div>
  );
};

export default withTranslation()(PortfolioContainer);
