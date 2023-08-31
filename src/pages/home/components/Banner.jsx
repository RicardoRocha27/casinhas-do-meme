import { Box, Container, Typography } from "@mui/material";
import { LinkWithScroll } from "common/components/LinkWithScroll";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import React, { useContext } from "react";

export const Banner = ({ data }) => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="banner">
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "100vw",
          background: "var(--clr-primary)",
        }}
        mt={!data.hasImage ? -0.5 : undefined}
      >
        {data.hasImage ? (
          <LinkWithScroll to={`/${language}/region`}>
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                maxWidth: "100vw",
                minHeight: "200px",
                backgroundColor: "red",
                overflow: "hidden",
                "&:hover img": {
                  transform: "scale(1.05)",
                },
                "&::after": {
                  content: "''",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "common.black",
                  opacity: 0,
                  transition: "opacity 0.5s",
                },
                "&:hover::after": {
                  opacity: 0.2,
                },
              }}
            >
              <img
                alt="Serra da Estrela"
                src={`${require(`assets/images/${data.image}`)}`}
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  zIndex: 1000,
                }}
              >
                <Container maxWidth="md">
                  <Typography
                    variant="h6"
                    color="secondary"
                    mb={{ xs: 1, md: 2 }}
                  >
                    {data.title}
                  </Typography>
                  <Typography variant="body1" color="secondary">
                    {data.text}
                  </Typography>
                </Container>
              </Box>
            </Box>
          </LinkWithScroll>
        ) : (
          <Box display="flex" alignItems="center" minHeight="200px" py={3}>
            <Container maxWidth="md">
              <Typography variant="h6" color="secondary" mb={2}>
                {data.title}
              </Typography>
              <Typography variant="body1" color="secondary">
                {data.text}
              </Typography>
            </Container>
          </Box>
        )}
      </Box>
    </div>
  );
};
