import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import CardSlider from "../Common/CardSlider/CardSlider";
import ImageMore from "../Common/Cards/ImageMore/ImageMore";
import IconandText from "../Common/Cards/IconTextCard/IconandText";
import ImageTextButtonCard from "../Common/Cards/ImageTextButtonCard/ImageTextButtonCard";

import Constants from "./Constants";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import "./PortfolioContainer.css";

const threeElement = Array.from({ length: 6 }, () => Constants.dummyData);

const PortfolioContainer = ({ t }) => {
  const [selectedCard, setSelectedCard] = useState("ImageMore");
  const handleChange = (event) => {
    setSelectedCard(event.target.value);
  };
  return (
    <div className="portfolio-container">
      <div className="portfolio-wrapper">
        <div style={{ float: "right", marginTop: "10px" }}>
          <Select value={selectedCard} onChange={handleChange}>
            {Constants.cards.map((CardName, i) => (
              <MenuItem value={CardName} key={"card-name-" + i}>
                {t(CardName)}
              </MenuItem>
            ))}
          </Select>
        </div>
        <CardSlider
          title="cardSlider"
          data={threeElement}
          Card={
            selectedCard === "ImageMore"
              ? ImageMore
              : selectedCard === "IconText"
              ? IconandText
              : ImageTextButtonCard
          }
        />
      </div>
    </div>
  );
};

export default withTranslation()(PortfolioContainer);
