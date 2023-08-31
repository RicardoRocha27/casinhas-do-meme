import { Button, ButtonGroup } from "@mui/material";
import React, { useContext } from "react";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

export const LanguageButton = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <ButtonGroup
      variant="contained"
      sx={{
        position: "fixed",
        zIndex: 1000,
        bottom: 32,
        left: 20,
      }}
    >
      <Button
        color={language === "en" ? "primary" : "secondary"}
        onClick={() => (language === "pt" ? setLanguage("en") : undefined)}
        sx={{ fontWeight: 700 }}
      >
        EN
      </Button>
      <Button
        color={language === "pt" ? "primary" : "secondary"}
        onClick={() => (language === "en" ? setLanguage("pt") : undefined)}
        sx={{ fontWeight: 700 }}
      >
        PT
      </Button>
    </ButtonGroup>
  );
};
