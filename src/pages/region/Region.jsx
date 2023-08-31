import React, { useContext } from "react";
import Section from "./components/Section";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import Data from "./data/index.json";
import { SectionHeader } from "common/components/SectionHeader";
import { Box } from "@mui/material";

export const Region = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Box my={10}>
      <SectionHeader
        title={Data[language].region.title}
        subtitle={Data[language].region.subtitle}
      />
      {Data[language].region.section.map((reg, id) => (
        <Section key={id} data={reg} />
      ))}
    </Box>
  );
};
