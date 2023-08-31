import { Box, Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

const BannerContent = ({ data }) => {
  const { language } = useContext(LanguageContext);

  const onClick = (event) => {
    window.open(`${data.buttonLink}`);
    event.stopPropagation();
  };

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        width: "100vw",
        maxHeight: "400px",
        overflow: "hidden",
        marginBottom: 2,
        "&:hover img": {
          transform: data.available === "True" ? "scale(1.05)" : "none",
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
        alt={data.name}
        src={`${require(`assets/images/${data.image}`)}`}
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.5s",
          filter: "brightness(60%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container maxWidth="md" sx={{ overflow: "hidden" }}>
          <Typography
            variant="h6"
            color="secondary"
            mb={{ xs: 1, md: 2 }}
            sx={{
              textShadow: "0px 0px 3px var(--common-black)",
            }}
          >
            {data.name}
          </Typography>
          <Typography
            variant="body1"
            color="secondary"
            mb={{ xs: 2, md: 3 }}
            sx={{
              textShadow: "0px 0px 2px var(--common-black)",
              overflow: "hidden",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              whiteSpace: "pre-wrap",
            }}
          >
            {data.description}
          </Typography>
          {data.available === "True" ? (
            <Button
              variant="contained"
              color="primary"
              onClick={onClick}
              target="_blank"
            >
              {language === "pt" ? "Reserve Online!" : "Book Online!"}
            </Button>
          ) : (
            <Button
              color="primary"
              variant="contained"
              disabled
              sx={{
                ":disabled": {
                  backgroundColor: "gray",
                  color: "var(--common-black)",
                },
              }}
            >
              {language === "pt" ? "Indisponível" : "Unavailable"}
            </Button>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default BannerContent;
