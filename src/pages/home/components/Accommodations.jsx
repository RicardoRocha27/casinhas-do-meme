import { Box } from "@mui/material";
import React from "react";
import AccommodationImage from "./AccommodationImage";

export const Accommodations = ({ data }) => {
  return (
    <Box
      my={10}
      width="100vw"
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
    >
      <AccommodationImage data={data[0]} />
      <AccommodationImage data={data[1]} />
    </Box>
  );
};
