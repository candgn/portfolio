import React from "react";
import { withTranslation } from "react-i18next";
import "./Languages.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const tableHeadTitle = { color: "#222", fontWeight: "700" };
const tableHeadSubTitle = { color: "#222" };

const Languages = ({ t }) => {
  return (
    <div>
      <p className="mother-lang-text">
        {t("motherLang")}: {t("turkish")}
      </p>

      <TableContainer
        sx={{
          margin: "10%",
          marginTop: "5%",
          width: "80%",
          backgroundColor: "#f2f2f2",
        }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ ...tableHeadTitle, borderRight: "solid 1px #22222220" }}
                align="center"
                colSpan={3}
              ></TableCell>
              <TableCell sx={tableHeadTitle} align="center" colSpan={2}>
                Understanding
              </TableCell>
              <TableCell sx={tableHeadTitle} align="center" colSpan={2}>
                Speaking
              </TableCell>
              <TableCell sx={tableHeadTitle} align="center" colSpan={1}>
                Writing
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ ...tableHeadTitle, borderRight: "solid 1px #22222220" }}
                align="center"
                colSpan={3}
              ></TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                Listening
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                Reading
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                Spoken production
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                Spoken interaction
              </TableCell>
              <TableCell
                sx={tableHeadTitle}
                align="center"
                colSpan={1}
              ></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                sx={{ ...tableHeadTitle, borderRight: "solid 1px #22222220" }}
                align="center"
                colSpan={3}
              >
                German
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                C1
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                C1
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                B2
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                B2
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                C1
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                sx={{ ...tableHeadTitle, borderRight: "solid 1px #22222220" }}
                align="center"
                colSpan={3}
              >
                English
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                C1
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                C1
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                B2
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                C1
              </TableCell>
              <TableCell sx={tableHeadSubTitle} align="center" colSpan={1}>
                B2
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withTranslation()(Languages);
