import React, { useState } from "react";
import { withTranslation } from "react-i18next";

import "./CssAnimations.css";
import Constants from "./Constants";
import { Button } from "@mui/material";
import DropDownButton from "../DropDown/DropDownButton";

const CssAnimations = ({ t, title }) => {
  const animationProperties = Constants.animationProperties;
  const [property, setProperty] = useState(animationProperties[0].property);

  const [propertyValue, setPropertyValue] = useState("");

  const [usedAnimationProperties, setUsedAnimationProperties] = useState({
    animationDuration: "4s",
    animationIterationCount: "infinite",
  });

  // Handle selected property from dropdown button
  const handleSelectedProperty = (value) => {
    setProperty(value);
  };

  // Preparing an array data for properties dropdown button
  const propertiesDropdownData = animationProperties?.map(
    (item) => item.property
  );

  // Input Component of selected properties
  const InputComponent = animationProperties?.find(
    (item) => item.property === property
  )?.component;

  // Handle changes in Input Component of selected properties
  const handleInput = (value) => {
    setPropertyValue(value);
  };

  // Add animation properties to animated box
  const handleAdd = () => {
    // Checks property value. if nothing has given dont add property
    if (propertyValue !== "") {
      const inlineProperty = animationProperties?.find(
        (item) => item.property === property
      )?.inlineProperty;
      setUsedAnimationProperties({
        ...usedAnimationProperties,
        [inlineProperty]: propertyValue,
      });
      setPropertyValue("");
    }
  };

  // Remove animation property from animated box
  const handleRemove = (inlineProperty) => {
    const { [inlineProperty]: foo, ...removedObject } = usedAnimationProperties;
    setUsedAnimationProperties({
      ...removedObject,
    });
  };

  return (
    <div className="css-animations-container">
      <div className="css-animations-title-wrapper">
        <p className="css-animations-title">{t(title)}</p>
      </div>
      <div className="css-animations-wrapper">
        <div className="css-animations-input-output-wrapper">
          <div className="css-animations-input-wrapper">
            <DropDownButton
              label="properties"
              data={propertiesDropdownData}
              selectedValue={property}
              setSelectedValue={handleSelectedProperty}
            />
            <InputComponent handleInput={handleInput} label={property} />

            <Button variant="outlined" onClick={handleAdd}>
              {t("add")}
            </Button>
          </div>
          <div className="css-animations-properties-wrapper">
            {Object.entries(usedAnimationProperties)?.map((item, i) => {
              const inlinePropertyKey = item[0];
              const propertiesValue = item[1];

              const usedProperty = animationProperties.find(
                (prop) => prop.inlineProperty === inlinePropertyKey
              )?.property;

              return (
                <div
                  className="css-animations-used-properties-wrapper"
                  key={
                    "css-animations-used-properties-wrapper-" + i + usedProperty
                  }
                >
                  <p>{usedProperty + " : " + propertiesValue}</p>
                  <Button
                    variant="outlined"
                    onClick={() => handleRemove(inlinePropertyKey)}
                  >
                    {t("remove")}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="css-animations-output-wrapper">
          <div
            className="css-animated-box"
            style={usedAnimationProperties}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default withTranslation()(CssAnimations);
