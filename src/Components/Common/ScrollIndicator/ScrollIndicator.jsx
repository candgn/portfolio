import React, { useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = ({ scrolled }) => {
  const [scroll, setScroll] = useState("0%");

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent + "%");
  };

  if (!scrolled) {
    window.addEventListener("scroll", onScroll);
  }

  console.log(scrolled);
  return (
    <div class="line" style={{ height: scrolled ? scrolled : scroll }}></div>
  );
};

export default ScrollIndicator;
