import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Logo from "assets/brand/logo.png";
import { Box, Container, Typography } from "@mui/material";
import { LinkWithScroll } from "./LinkWithScroll";
import { Link } from "react-router-dom";
import data from "common/data/index.json";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

export const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Box mt="auto">
      <Box p={5} sx={{ backgroundColor: "common.black" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} lg={3}>
              <Box
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <LinkWithScroll to={`/${language}`}>
                  <img src={Logo} alt="Logo Ás de Saber" width="100px" />
                </LinkWithScroll>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
                mt={{ xs: 5, md: 0 }}
              >
                <Typography
                  variant="body2"
                  color="common.white"
                  fontWeight={700}
                  mb={2}
                >
                  Links
                </Typography>
                {data[language].footer.Links.map((page) => (
                  <LinkWithScroll
                    key={page.name}
                    to={`/${language}/${page.href}`}
                    style={{
                      textDecoration: "none",
                      marginBottom: "5px",
                    }}
                  >
                    <Typography
                      variant="body2"
                      color="common.white"
                      sx={{ "&:hover": { color: "#C0A661" } }}
                    >
                      {page.name}
                    </Typography>
                  </LinkWithScroll>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
                mt={{ xs: 5, md: 0 }}
              >
                <Typography
                  variant="body2"
                  color="common.white"
                  fontWeight={700}
                  mb={2}
                >
                  {language === "pt" ? "Redes Sociais" : "Social Media"}
                </Typography>
                {data[language].footer.SocialMedia.map((sm) => (
                  <Link
                    key={sm.name}
                    to={sm.href}
                    style={{
                      textDecoration: "none",
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "5px",
                    }}
                    target="_blank"
                  >
                    <img
                      src={require(`assets/svg/${sm.icon}`)}
                      alt={sm.name}
                      width="20px"
                    />
                    <Typography
                      variant="body2"
                      color="common.white"
                      ml={0.5}
                      sx={{ "&:hover": { color: "#C0A661" } }}
                    >
                      {sm.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={3} lg={3}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems={{ xs: "center", md: "flex-start" }}
                mt={{ xs: 5, md: 0 }}
              >
                <Typography
                  variant="body2"
                  color="common.white"
                  fontWeight={700}
                  mb={2}
                >
                  {language === "pt" ? "Contactos" : "Contacts"}
                </Typography>
                {data[language].footer.Contacts.map((contact) => (
                  <Box key={contact.text} display="flex" mb="5px">
                    <img
                      src={require(`assets/svg/${contact.icon}`)}
                      alt={contact.text}
                      width="20px"
                    />
                    {contact.email || contact.phone ? (
                      <a
                        href={
                          contact.email
                            ? `mailto:${contact.text}`
                            : `tel:+351${contact.text}`
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <Typography
                          variant="body2"
                          color="common.white"
                          ml={0.5}
                          textAlign={{ xs: "center", md: "left" }}
                          sx={{ "&:hover": { color: "#C0A661" } }}
                        >
                          {contact.text}
                        </Typography>
                      </a>
                    ) : (
                      <Typography
                        variant="body2"
                        color="common.white"
                        ml={0.5}
                        textAlign={{ xs: "center", md: "left" }}
                      >
                        {contact.text}
                      </Typography>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box backgroundColor="#3D3C3C" p={0.5}>
        <Container maxWidth="lg">
          <Typography
            variant="body1"
            fontSize="0.875rem"
            color="common.white"
            textAlign="center"
          >
            2023 © All rights reserved - Casinhas do mémé - R. Joaquim Pereira
            de Matos, Manteigas
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
