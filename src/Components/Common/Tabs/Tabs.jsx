import React, { useState } from "react";
import { withTranslation } from "react-i18next";
import "./Tabs.css";

const Tabs = ({ t, tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].title);

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
            style={{
              display: tab.title === activeTab ? "block" : "none",
              height: "70vh",
              overflowY: "scroll",
            }}
          >
            {tab.Content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default withTranslation()(Tabs);
