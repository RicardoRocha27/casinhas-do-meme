import React, { useContext } from "react";
import ImageSection from "./components/ImageSection";
import InfoSection from "./components/InfoSection";
import Container from "@mui/material/Container";
import Data from "../data/index.json";
import { useLocation } from "react-router";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

export const Accommodation = () => {
  const { language } = useContext(LanguageContext);
  const location = useLocation();

  function getAccommodationInfo() {
    const pathInfo = location.pathname.split("/")[3];

    const localData = Data[language].localAccommodations.accommodations;
    const lmtData = Data[language].lmtAccommodations.accommodations;

    let accommodationInfo = localData.find((acc) => acc.link === pathInfo);

    if (accommodationInfo === undefined) {
      accommodationInfo = lmtData.find((acc) => acc.link === pathInfo);
    }

    return accommodationInfo;
  }

  const specificAcc = getAccommodationInfo();

  return (
    <Container maxWidth="lg" sx={{ mt: 10 }}>
      <ImageSection specificAcc={specificAcc} />
      <InfoSection specificAcc={specificAcc} />
    </Container>
  );
};
