import React, { useState } from "react";
import { withTranslation } from "react-i18next";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";

const DropDownButton = ({
  t,
  setSelectedValue,
  selectedValue,
  data,
  label,
}) => {
  const [selected, setSelected] = useState(selectedValue);

  const handleChange = (event) => {
    setSelected(event.target.value);
    setSelectedValue(event.target.value);
  };
  return (
    <FormControl style={{ minWidth: "230px" }}>
      {label && <InputLabel id={label + "-label"}>{t(label)}</InputLabel>}

      <Select
        labelId={label && label + "-label"}
        label={label && t(label)}
        value={selected}
        onChange={handleChange}
      >
        {data.map((titleId, i) => (
          <MenuItem value={titleId} key={"card-name-" + i}>
            {t(titleId)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default withTranslation()(DropDownButton);
