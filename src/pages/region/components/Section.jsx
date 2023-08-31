import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LinkWithScroll } from "common/components/LinkWithScroll";
import React, { useContext } from "react";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";

const Section = ({ data }) => {
  const { language } = useContext(LanguageContext);
  const isFullWidth = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <Box mt={5} display="flex" width="100%" sx={{ overflowX: "hidden" }}>
      <Container maxWidth="lg">
        <Grid
          display="grid"
          container
          columnSpacing={5}
          gridTemplateColumns={{
            xs: "1fr",
            md: data.imageFirst ? "1fr 1fr" : "1fr 1fr",
          }}
          gridTemplateAreas={
            data.imageFirst
              ? { xs: '"col1" "col2"', md: '"col1 col2"' }
              : { xs: '"col1" "col2"', md: '"col2 col1"' }
          }
        >
          <Grid item gridArea="col1" display="flex" alignItems="center">
            <Box
              display="flex"
              sx={{
                justifyContent: {
                  xs: "center",
                  md: data.imageFirst ? "left" : "right",
                },
              }}
            >
              <img
                src={require(`../../../assets/images/${data.image}`)}
                alt={data.title}
                width="100%"
              />
            </Box>
          </Grid>
          <Grid item gridArea="col2" mt={{ xs: 5, md: 0 }}>
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="center"
            >
              <Typography
                variant="h6"
                color="primary"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  mb: { xs: 1, md: 3 },
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="body1"
                color={"common.black"}
                sx={{ textAlign: { xs: "center", md: "left" } }}
                mb={{ xs: 3, md: 6 }}
              >
                {data.text}
              </Typography>
              <LinkWithScroll
                to={data.link}
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth={isFullWidth}
                >
                  {language === "pt" ? "Ver no Mapa" : "See on the Map"}
                </Button>
              </LinkWithScroll>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Section;
