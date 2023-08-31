import { Box, Container, Typography } from "@mui/material";
import { SectionHeader } from "common/components/SectionHeader";
import React from "react";

export const Details = ({ data }) => {
  return (
    <Box my={10}>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <Container maxWidth="md">
        <Typography variant="body1" color="textPrimary" textAlign="center">
          {data.text1}
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          textAlign="center"
          mt={2}
        >
          {data.text2}
        </Typography>
      </Container>
    </Box>
  );
};
