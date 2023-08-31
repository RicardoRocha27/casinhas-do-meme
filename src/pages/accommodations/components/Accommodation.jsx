import React, { useContext } from "react";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import BannerContent from "./BannerContent";
import { useNavigate } from "react-router";
import { Box } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";

const Accommodation = ({ data }) => {
  const { language } = useContext(LanguageContext);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/${language}/accommodations/${data.link}`);
    scroll.scrollToTop({ duration: 200, smooth: "smooth" });
  };

  return (
    <>
      {data.available === "True" ? (
        <Box onClick={onClick} sx={{ cursor: "pointer" }}>
          <BannerContent data={data} />
        </Box>
      ) : (
        <BannerContent data={data} />
      )}
    </>
  );
};

export default Accommodation;
