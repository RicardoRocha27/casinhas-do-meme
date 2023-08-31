import { SectionHeader } from "common/components/SectionHeader";
import React, { useContext } from "react";
import Typography from "@mui/material/Typography";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import Data from "./data/index.json";
import { Box, Container, Grid } from "@mui/material";

export const Policy = () => {
  const { language } = useContext(LanguageContext);
  return (
    <Box my={10}>
      <SectionHeader
        title={Data[language].title}
        subtitle={Data[language].subtitle}
      />
      <Container maxWidth="md">
        {Data[language].texts.map((t, id) => (
          <Typography
            variant="body1"
            color="textPrimary"
            key={id}
            mb={id === 2 ? undefined : 2}
            textAlign="center"
          >
            {t.text}
          </Typography>
        ))}
        {language === "pt" ? (
          <Grid container columnSpacing={5} mt={2} mb={5}>
            <Grid item xs={12} md={6} textAlign={"center"}>
              <Typography fontWeight={700}>Proteção do Ambiente</Typography>
              <Typography mb={2}>
                Procuramos melhorar continuamente o desempenho ambiental
                inerente à atividade que desenvolvemos:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    As Casinhas do Mé-Mé estão implantadas em edifícios
                    requalificados, reduzindo o impacto ambiental da construção
                    e promovendo a regeneração urbana da Vila de Manteigas;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Procuramos minimizar a produção de resíduos através de
                    medidas de reutilização e de separação seletiva. As Casinhas
                    do Mé-Mé tem recipientes onde os hóspedes podem separar
                    devidamente o seu lixo;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Fomentamos, junto dos nossos clientes, o consumo de água da
                    rede pública (água potável de nascentes da Serra da
                    Estrela);
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Promovemos, junto dos nossos clientes, uma utilização
                    eficiente da água e da energia.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6} textAlign={"center"}>
              <Typography fontWeight={700}>
                Desenvolvimento da Economia Local
              </Typography>
              <Typography mb={2}>
                No desenvolvimento da nossa atividade privilegiamos a aquisição
                de produtos e serviços locais:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Uma parte considerável das mobílias do nosso Alojamento
                    Local foi restaurada e reutilizada;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    A manutenção das nossas instalações e da mobília é feita com
                    mão-de-obra local;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Os nossos cortinados foram feitos por costureiras da Vila de
                    Manteigas;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Os nossos cobertores foram produzidos em fábricas da região
                    da Serra da Estrela;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    O nosso azeite é de produtores do distrito da Guarda;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Informamos os nossos clientes sobre os produtos locais
                    disponíveis para venda e de qualidade reconhecida;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Disponibilizamos informação sobre o património natural e
                    cultural da Serra da Estrela, bem como de conduta para a sua
                    preservação.
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        ) : (
          <Grid container columnSpacing={5} mt={2} mb={5}>
            <Grid item xs={12} md={6} textAlign={"center"}>
              <Typography fontWeight={700}>Environmental Protection</Typography>
              <Typography mb={2}>
                We continuously seek to improve the environmental performance
                inherent to the activity we carry out:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    Mé-Mé Houses are located in requalified buildings, reducing
                    the environmental impact of construction and promoting urban
                    regeneration in the village of Manteigas;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    We aim to minimize waste production through reuse and
                    selective separation measures. Mé-Mé Houses have containers
                    where guests can properly separate their waste;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    We encourage our customers to use water from the public
                    network (potable water from springs in the Serra da Estrela)
                  </Typography>
                </li>
                <li>
                  <Typography>
                    We promote efficient use of water and energy among our
                    customers.
                  </Typography>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6} textAlign={"center"}>
              <Typography fontWeight={700}>
                Local Economic Development
              </Typography>
              <Typography mb={2}>
                In the development of our activity, we prioritize the
                acquisition of local products and services:
              </Typography>
              <ul>
                <li>
                  <Typography>
                    A significant portion of the furniture in our Local
                    Accommodation has been restored and reused;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    "The maintenance of our facilities and furniture is carried
                    out by local labor;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Our curtains were made by seamstresses from the village of
                    Manteigas;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Our blankets were produced in factories from the Serra da
                    Estrela region;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Our olive oil is sourced from producers in the Guarda
                    district;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    We inform our customers about locally available products of
                    recognized quality for sale;
                  </Typography>
                </li>
                <li>
                  <Typography>
                    We provide information about the natural and cultural
                    heritage of Serra da Estrela, as well as guidelines for its
                    preservation.
                  </Typography>
                </li>
              </ul>
            </Grid>
          </Grid>
        )}
      </Container>
    </Box>
  );
};
