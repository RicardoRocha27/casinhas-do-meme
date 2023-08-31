import { Stack, Typography } from "@mui/material";
import React from "react";

const Arrive = ({ data }) => {
  return (
    <Stack
      mx={"auto"}
      direction={"column"}
      maxWidth={850}
      mt={10}
      spacing={3}
      sx={{ width: { xs: 300, md: "100%" } }}
    >
      <Stack direction={"column"}>
        <Typography align="center" variant="h6" color="textSecondary">
          {data.titles[0]}
        </Typography>
        <Typography align="center">{data.contents[0]}</Typography>
      </Stack>
      <Stack direction={"column"}>
        <Typography align="center" variant="h6" color="textSecondary">
          {data.titles[1]}
        </Typography>
        <Typography align="center">{data.contents[1]}</Typography>
      </Stack>
      <Stack direction={"column"}>
        <Typography align="center" variant="h6" color="textSecondary">
          {data.titles[2]}
        </Typography>
        <Typography align="center">{data.contents[2]}</Typography>
      </Stack>
      <Stack direction={"column"}>
        <Typography align="center" variant="h6" color="textSecondary">
          {data.titles[3]}
        </Typography>
        <Typography align="center">{data.contents[3]}</Typography>
        <Typography align="center">{data.contents[4]}</Typography>
      </Stack>
    </Stack>
  );
};

export default Arrive;
