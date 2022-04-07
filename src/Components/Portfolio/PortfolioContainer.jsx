import React, { useState } from "react";
import { withTranslation } from "react-i18next";

//Components
import { TextField } from "@mui/material";
import CardSlider from "../Common/CardSlider/CardSlider";
import ImageMore from "../Common/Cards/ImageMore/ImageMore";
import IconandText from "../Common/Cards/IconTextCard/IconandText";
import ImageTextButtonCard from "../Common/Cards/ImageTextButtonCard/ImageTextButtonCard";
import GridView from "../Common/GridView/GridView";
import DropDownButton from "../Common/DropDown/DropDownButton";
import TwoColumn from "../Common/TwoColumn/TwoColumn";
import HalfColumnText from "../Common/HalfColumnText/HalfColumnText";

import Constants from "./Constants";

import "./PortfolioContainer.css";

const sixElement = Array.from({ length: 6 }, () => Constants.dummyData);

const PortfolioContainer = ({ t }) => {
  const [selectedCard, setSelectedCard] = useState("ImageMore");
  const [searchKeyword, setSearchKeyword] = useState("");

  const compareFiltered = (componentId) => {
    return searchKeyword === ""
      ? true
      : t(componentId).toLowerCase().includes(searchKeyword.toLowerCase());
  };

  const onSearch = (e) => {
    let searchKeywordInput = e.target.value;
    setSearchKeyword(searchKeywordInput);
  };

  const Cards =
    selectedCard === "ImageMore"
      ? ImageMore
      : selectedCard === "IconText"
      ? IconandText
      : ImageTextButtonCard;

  return (
    <div className="portfolio-container">
      {/* Component Search Bar  */}
      <div
        className="portfolio-wrapper"
        style={{ paddingTop: "5%", paddingBottom: "0" }}
      >
        <TextField
          sx={{ width: "90%" }}
          id="outlined-basic"
          label={t("searchComponent")}
          variant="outlined"
          onChange={onSearch}
        />
      </div>
      {/* Card Slider Component */}
      <div
        className="portfolio-wrapper"
        style={{
          marginRight: "100px",
          display: compareFiltered("cardSlider") === true ? "block" : "none",
        }}
      >
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
      <div
        className="portfolio-wrapper"
        style={{
          display: compareFiltered("gridView") === true ? "block" : "none",
        }}
      >
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
      <div
        className="portfolio-wrapper"
        style={{
          padding: "0",
          display: compareFiltered("twoColumnInfo") === true ? "block" : "none",
        }}
      >
        <TwoColumn
          image={Constants.dummyData.image}
          title="twoColumnInfo"
          subTitle={Constants.dummyData.subTitle}
          desc={Constants.dummyData.desc}
          link={Constants.dummyData.link}
          additionalImages={Constants.dummyData.additionalImages}
        />
      </div>

      {/* Half Column Text Component */}
      <div
        className="portfolio-wrapper"
        style={{
          padding: "0",
          display:
            compareFiltered("halfColumnText") === true ? "block" : "none",
        }}
      >
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
