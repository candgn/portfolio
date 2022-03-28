import React from "react";
import { withTranslation } from "react-i18next";
import "./Languages.css";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const tableHeadTitle = { color: "white", fontWeight: "700" };
const tableHeadSubTitle = { color: "white" };

const Languages = ({ t }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ ...tableHeadTitle, borderRight: "solid 1px #f2f2f2" }}
              align="center"
              colSpan={3}
            >
            
            </TableCell>
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
              sx={{ ...tableHeadTitle, borderRight: "solid 1px #f2f2f2" }}
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
              sx={{ ...tableHeadTitle, borderRight: "solid 1px #f2f2f2" }}
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
              sx={{ ...tableHeadTitle, borderRight: "solid 1px #f2f2f2" }}
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
  );
};

export default withTranslation()(Languages);
