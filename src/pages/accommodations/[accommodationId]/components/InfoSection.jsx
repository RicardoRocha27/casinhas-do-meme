import React, { useContext } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import { LinkWithScroll } from "common/components/LinkWithScroll";

const InfoSection = ({ specificAcc }) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Stack mb={5}>
            <Typography
              variant="h6"
              color={"var(--clr-primary)"}
              sx={{ textAlign: { xs: "center", md: "initial" } }}
            >
              {specificAcc.name}
            </Typography>
            <Typography sx={{ textAlign: { xs: "center", md: "initial" } }}>
              {specificAcc.personNumber}
            </Typography>
          </Stack>
          <Stack mb={5}>
            <Typography
              variant="h6"
              color={"var(--clr-primary)"}
              sx={{ textAlign: { xs: "center", md: "initial" } }}
            >
              {language === "pt" ? "Descrição" : "Description"}
            </Typography>
            <Typography sx={{ textAlign: { xs: "center", md: "initial" } }}>
              {specificAcc.description}
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="h6"
              color={"var(--clr-primary)"}
              sx={{ textAlign: { xs: "center", md: "initial" } }}
            >
              {language === "pt" ? "Alguma Dúvida?" : "Want to know more?"}
            </Typography>
            <LinkWithScroll
              style={{
                color: "black",
              }}
              to={`/${language}/contacts`}
            >
              <Typography sx={{ textAlign: { xs: "center", md: "initial" } }}>
                {language === "pt" ? "Contacte-nos" : "Contact us"}
              </Typography>
            </LinkWithScroll>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} mb={10}>
          <Typography
            variant="h6"
            mb={3}
            color={"var(--clr-primary)"}
            sx={{ textAlign: { xs: "center", md: "initial" } }}
          >
            {language === "pt" ? "Comodidades" : "Commodities"}
          </Typography>
          <Grid container spacing={3} mb={5}>
            {Object.keys(specificAcc.comodities).map((key, index) => {
              return (
                <Grid item xs={6} key={index}>
                  <Typography
                    fontWeight={600}
                    fontSize={16}
                    key={index}
                    sx={{ textAlign: { xs: "center", md: "initial" } }}
                  >
                    {key}:
                  </Typography>
                  {specificAcc.comodities[key].map((value, subIndex) => {
                    return (
                      <Typography
                        key={subIndex}
                        sx={{ textAlign: { xs: "center", md: "initial" } }}
                      >
                        {value}
                      </Typography>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default InfoSection;
