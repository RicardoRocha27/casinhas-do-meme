import { Container, Typography } from "@mui/material";
import React from "react";

export const SectionHeader = ({ title, subtitle }) => {
  return (
    <Container maxWidth="md">
      <Typography variant="h6" color="textSecondary" textAlign="center">
        {title}
      </Typography>
      <Typography
        variant="body1"
        fontWeight="bold"
        color="textPrimary"
        textAlign="center"
        mb={{ xs: 2, md: 6 }}
      >
        {subtitle}
      </Typography>
    </Container>
  );
};
