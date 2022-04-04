import React from "react";
import { withTranslation } from "react-i18next";

//Carousel default css import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./CardSlider.css";

import useWindowDimensions from "../../../Helpers/useWindowDimensions";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "auto" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "auto" }}
      onClick={onClick}
    />
  );
}

const CardSlider = ({ t, data, Card, title }) => {
  const { width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width < 800 ? 1 : 3,
    slidesToScroll: width < 800 ? 1 : 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <p className="card-slider-title">{t(title)}</p>
      <Slider {...settings}>
        {data.map((item, i) => (
          <Card key={"card-" + item.title} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default withTranslation()(CardSlider);
