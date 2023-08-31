import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Typography } from "@mui/material";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import { useContext } from "react";
import Logo from "../../assets/brand/logo.png";
import { LinkWithScroll } from "../../common/components/LinkWithScroll";

const NotFound = () => {
  const { language } = useContext(LanguageContext);

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <img src={Logo} alt="Logo Ás de Saber" width="120px" height="auto" />
      <Typography variant="h2" color="primary" textAlign="center" mt={5}>
        {language === "pt"
          ? "404 - Página não encontrada"
          : "404 - Page not found"}
      </Typography>
      <Typography variant="body1" color="common.black" mt={3}>
        {language === "pt"
          ? "Pedimos desculpa, a página que procura não existe."
          : "We apologize, the page you are looking for does not exist."}
      </Typography>
      <LinkWithScroll to={`/${language}`} style={{ textDecoration: "none" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            sx={{
              borderRadius: "50%",
              display: "flex",
              flexDirection: "column",
              marginTop: 5,
            }}
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
                backgroundColor: "var(--common-white)",
              }}
            >
              <ArrowBackIcon color="primary" />
            </Box>
          </Button>
          <Typography variant="body1" color="primary">
            {language === "pt" ? "Voltar ao website" : "Back to website"}
          </Typography>
        </Box>
      </LinkWithScroll>
    </Box>
  );
};

export default NotFound;
