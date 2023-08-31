import React from "react";
import { Button, Box } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const WhatsappButton = () => {
  const handleOnClick = () => {
    const phoneNumber = process.env.REACT_APP_WHATSAPP_PHONE_NUMBER;
    window.open(`https://wa.me/${phoneNumber}`);
  };
  return (
    <Button
      sx={{
        borderRadius: "50%",
        position: "fixed",
        zIndex: 1000,
        bottom: 20,
        right: 20,
      }}
      onClick={handleOnClick}
    >
      <Box
        width="50px"
        height="50px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="0px 2px 10px 0px rgba(0,0,0,0.75)"
        borderRadius="50%"
        sx={{
          background: "linear-gradient(to right bottom, #A6ED6A, #00C91A)",
        }}
      >
        <WhatsAppIcon color="secondary" />
      </Box>
    </Button>
  );
};
