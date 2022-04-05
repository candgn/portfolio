import React, { useState } from "react";
import { withTranslation } from "react-i18next";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const DropDownButton = ({ t, setSelectedValue, selectedValue, data }) => {
  const [selected, setSelected] = useState(selectedValue);

  const handleChange = (event) => {
    setSelected(event.target.value);
    setSelectedValue(event.target.value);
  };
  return (
    <Select value={selected} onChange={handleChange}>
      {data.map((titleId, i) => (
        <MenuItem value={titleId} key={"card-name-" + i}>
          {t(titleId)}
        </MenuItem>
      ))}
    </Select>
  );
};

export default withTranslation()(DropDownButton);
