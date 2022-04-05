import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import ScrollIndicator from "../ScrollIndicator/ScrollIndicator";
import "./Tabs.css";

const Tabs = ({ t, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

  const [scrolled, setScrolled] = useState("0%");

  const handleScroll = (event) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const scroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
    console.log(
      "sh: " + scrollHeight + " st: " + scrollTop + " ch: " + clientHeight
    );
    setScrolled(`${scroll}%`);

    if(scroll>10){
      document.getElementById()
    }
  };

  return (
    <div className="tab-container">
      <div className="tab-title-container">
        {tabs.map((tab, i) =>
          tab.title === activeTab ? (
            <div
              className="active-tab"
              key={tab.title + "-" + i}
              onClick={() => setActiveTab(tab.title)}
            >
              <div className="tab-icon">{tab.icon}</div>
              <p>{t(tab.title)}</p>
            </div>
          ) : (
            <div
              className="passive-tab"
              key={tab.title + "-" + i}
              onClick={() => setActiveTab(tab.title)}
            >
              <div className="tab-icon">{tab.icon}</div>
              <p>{t(tab.title)}</p>
            </div>
          )
        )}
      </div>
      <div className="tab-content-container">
        {tabs.map((tab, i) => (
          <div
            onScroll={handleScroll}
            style={{
              display: tab.title === activeTab ? "block" : "none",
              height: "80vh",
              overflowY: "scroll",
            }}
          >
            <ScrollIndicator scrolled={scrolled} />
            {tab.Content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Tabs);
