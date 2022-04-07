import React from "react";
import { withTranslation } from "react-i18next";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import english from "../../../../utils/Images/usa.png";
import german from "../../../../utils/Images/german.png";
import turkish from "../../../../utils/Images/turkish.png";
import i18next from "i18next";

const Languages = ({ t }) => {
  const onClick = (lang) => {
    i18next.changeLanguage(lang);
  };
  return (
    <Stack
      direction="row"
      spacing={0.5}
      sx={{ marginLeft: "10px", marginTop: "10px" }}
    >
      <Avatar
        onClick={() => onClick("en")}
        sx={{
          width: 24,
          height: 24,
          border: i18next.language === "en" && 1,
          borderColor: "white",
          cursor: "pointer",
        }}
        alt="english"
        src={english}
      />
      <Avatar
        onClick={() => onClick("de")}
        sx={{
          width: 24,
          height: 24,
          border: i18next.language === "de" && 1,
          borderColor: "white",
          cursor: "pointer",
        }}
        alt="german"
        src={german}
      />
      <Avatar
        onClick={() => onClick("tr")}
        sx={{
          width: 24,
          height: 24,
          border: i18next.language === "tr" && 1,
          borderColor: "white",
          cursor: "pointer",
        }}
        alt="turkish"
        src={turkish}
      />
    </Stack>
  );
};

export default withTranslation()(Languages);
