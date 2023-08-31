import { Box, Container } from "@mui/material";
import React from "react";

export const Map = () => {
  return (
    <Box mt={5} mb={10}>
      <Container
        sx={{
          overflow: "hidden",
          width: { xs: 380, sm: 500, md: "59dvw" },
          height: { xs: "50dvh", sm: "50dvh", md: "70dvh" },
        }}
      >
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.2749680787592!2d-7.546819915958051!3d40.402758997806686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3cd9d423bb93c3%3A0xdc081984401f08d2!2sCasinhas%20Do%20M%C3%A9-Me!5e0!3m2!1spt-PT!2spt!4v1689330209178!5m2!1spt-PT!2spt"
          style={{
            border: 0,
            display: "block",
            margin: "auto",
            width: "100%",
            height: "100%",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </Container>
    </Box>
  );
};
