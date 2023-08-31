import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useContext } from "react";
import Slider from "react-slick";
import "../styles/style.css";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

const images = ["hero_image_1.jpg", "hero_image_2.jpg", "hero_image_3.jpg"];

export const Hero = () => {
  const { language } = useContext(LanguageContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <Box position="relative">
      <Box
        width="100%"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
        }}
      >
        <Typography
          variant={isMobile ? "h4" : "h2"}
          color="secondary"
          mb={{ md: 3, xs: 1 }}
          sx={{
            textAlign: "center",
            textShadow: "0px 0px 3px var(--common-black)",
          }}
        >
          Casinhas do Mé-Mé
        </Typography>
        <Button
          href={`accommodations`}
          variant="contained"
          size={isMobile ? "small" : "large"}
          sx={{
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          {language === "pt" ? "Ver Mais!" : "See More!"}
        </Button>
      </Box>

      <Slider {...settings}>
        {images.map((image, id) => (
          <img
            key={id}
            src={require(`../../../assets/images/${image}`)}
            alt="Serra da Estrela"
            style={{ filter: "brightness(50%)" }}
          />
        ))}
      </Slider>
    </Box>
  );
};
