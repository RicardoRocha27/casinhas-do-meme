import { SectionHeader } from "common/components/SectionHeader";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import React, { useContext } from "react";
import Data from "./data/index.json";
import { Box, Container } from "@mui/material";
import { Info } from "./components/Info";
import { Map } from "./components/Map";
import Arrive from "./components/Arrive";

export const Contacts = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Box my={10}>
      <SectionHeader
        title={Data[language].title}
        subtitle={Data[language].subtitle}
      />
      <Map />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "flex-start" },
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {Data[language].info.map((inf, id) => (
          <Info key={id} data={inf} />
        ))}
      </Container>
      <Arrive data={Data[language].arrive}></Arrive>
    </Box>
  );
};
