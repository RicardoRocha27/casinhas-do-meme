import { Card, CardContent, Typography } from "@mui/material";
import { SectionHeader } from "common/components/SectionHeader";
import React from "react";
import { Link } from "react-router-dom";

export const Info = ({ data }) => {
  return (
    <Card
      sx={{
        width: { xs: 300, sm: 400 },
        height: 470,
        backgroundColor: "transparent",
        border: "0.5px solid var(--clr-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: { xs: 3, md: 0 },
        borderRadius: 0,
      }}
      elevation={0}
    >
      <CardContent>
        <SectionHeader title={data.title} />
        <Typography
          sx={{ mb: 0, mt: 3.5 }}
          color="text.primary"
          fontWeight="bold"
          textAlign="center"
        >
          {data.phone.text}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {data.phone.number}
        </Typography>
        <Typography
          sx={{ mb: 0, mt: 3.5 }}
          color="text.primary"
          fontWeight="bold"
          textAlign="center"
        >
          {data.email.text}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {data.email.name}
        </Typography>
        <Typography
          sx={{ mb: 0, mt: 3.5 }}
          color="text.primary"
          fontWeight="bold"
          textAlign="center"
        >
          {data.address.text}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {data.address.name}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {data.address.nameSec}
        </Typography>
        <Typography
          sx={{ mb: 0, mt: 3.5 }}
          color="text.primary"
          fontWeight="bold"
          textAlign="center"
        >
          {data.social.text}
        </Typography>
        {data.social.content.map((soc, id) => (
          <Link
            to={soc.link}
            target="_blank"
            style={{ textDecoration: "none", color: "var(--clr-secondary)" }}
          >
            <Typography variant="body1" textAlign="center">
              {soc.type}
            </Typography>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
