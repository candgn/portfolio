import React, { useState } from "react";
import "./ScrollIndicator.css";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState("0%");

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent + "%");
  };

  window.addEventListener("scroll", onScroll);

  return <div class="line" style={{ height: scroll }}></div>;
};

export default ScrollIndicator;
