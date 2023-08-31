import React, { useContext } from "react";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { Info } from "./components/Info";
import { Accommodations } from "./components/Accommodations";
import { Details } from "./components/Details";
import { MessageForm } from "common";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import Data from "./data/index.json";

export const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      <Hero />
      <Banner data={Data[language].banner[1]} />
      <Info data={Data[language].info[0]} />
      <Info data={Data[language].info[1]} />
      <Accommodations data={Data[language].accommodations} />
      <Details data={Data[language].details} />
      <Banner data={Data[language].banner[0]} />
      <MessageForm data={Data[language].form} />
    </div>
  );
};
