import React, { useContext } from "react";
import Accommodation from "./components/Accommodation";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import Data from "./data/index.json";
import { SectionHeader } from "common/components/SectionHeader";
import { Box } from "@mui/material";

export const Accommodations = () => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Box mt={10}>
        <SectionHeader
          title={Data[language].localAccommodations.title}
          subtitle={Data[language].localAccommodations.subtitle}
        />
        {Data[language].localAccommodations.accommodations.map((acc, id) => (
          <Accommodation key={id} data={acc} />
        ))}
      </Box>
      <Box mt={10}>
        <SectionHeader
          title={Data[language].lmtAccommodations.title}
          subtitle={Data[language].lmtAccommodations.subtitle}
        />
        {Data[language].lmtAccommodations.accommodations.map((acc, id) => (
          <Accommodation key={id} data={acc} />
        ))}
      </Box>
    </>
  );
};
