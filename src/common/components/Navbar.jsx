import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Data from "common/data/index.json";
import MenuIcon from "@mui/icons-material/Menu";
import { LanguageContext } from "configuration/app-context-manager/LanguageContext";
import { LinkWithScroll, NavLinkWithScroll } from "./LinkWithScroll";
import logo from "assets/brand/logo.png";
import { useContext, useState } from "react";

export const Navbar = () => {
  const { language } = useContext(LanguageContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar color="secondary" sx={{ zIndex: 1001 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              width="100%"
              height="100%"
              display={{ xs: "none", md: "flex" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" alignItems="center">
                {Data[language].links
                  .map((link) => (
                    <NavLinkWithScroll
                      key={link.name}
                      to={`${language}/${link.to}`}
                      onClick={handleCloseNavMenu}
                      style={{
                        my: 2,
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      {({ isActive }) =>
                        isActive ? (
                          <Button
                            sx={{
                              color: "primary",
                              "&::before": {
                                content: "''",
                                display: "block",
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                height: "2px",
                                backgroundColor: "#C0A661",
                                borderRadius: "2em",
                              },
                            }}
                          >
                            {link.name}
                          </Button>
                        ) : (
                          <Button sx={{ color: "#080F25" }}>{link.name}</Button>
                        )
                      }
                    </NavLinkWithScroll>
                  ))
                  .slice(0, 3)}
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                sx={{
                  left: "50%",
                  transform: "translate(-50%, 0%)",
                }}
              >
                <LinkWithScroll
                  to={`/${language}/`}
                  style={{ position: "relative" }}
                >
                  <img
                    src={logo}
                    alt="logo casinhas do mémé"
                    id="logo"
                    height="60px"
                  />
                </LinkWithScroll>
              </Box>
              <Box display="flex">
                {Data[language].links
                  .map((link) => (
                    <NavLinkWithScroll
                      key={link.name}
                      to={`${language}/${link.to}`}
                      onClick={handleCloseNavMenu}
                      style={{
                        my: 2,
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      {({ isActive }) =>
                        isActive ? (
                          <Button
                            sx={{
                              color: "primary",
                              "&::before": {
                                content: "''",
                                display: "block",
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                height: "2px",
                                backgroundColor: "#C0A661",
                                borderRadius: "2em",
                              },
                            }}
                          >
                            {link.name}
                          </Button>
                        ) : (
                          <Button sx={{ color: "#080F25" }}>{link.name}</Button>
                        )
                      }
                    </NavLinkWithScroll>
                  ))
                  .slice(3, 5)}
              </Box>
            </Box>
            <Box
              width="100%"
              display={{ xs: "flex", md: "none" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  sx={{ color: "common.black" }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {Data[language].links.map((link) => (
                    <NavLinkWithScroll
                      key={link.name}
                      to={`${language}/${link.to}`}
                      style={{
                        color: "var(--common-black)",
                        textDecoration: "none",
                      }}
                    >
                      {({ isActive }) =>
                        isActive ? (
                          <MenuItem
                            key={link.name}
                            onClick={handleCloseNavMenu}
                          >
                            <Typography
                              textAlign="center"
                              variant="body2"
                              color="primary"
                            >
                              {link.name}
                            </Typography>
                          </MenuItem>
                        ) : (
                          <MenuItem
                            key={link.name}
                            onClick={handleCloseNavMenu}
                          >
                            <Typography textAlign="center" variant="body2">
                              {link.name}
                            </Typography>
                          </MenuItem>
                        )
                      }
                    </NavLinkWithScroll>
                  ))}
                </Menu>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <LinkWithScroll
                  to={`/${language}/`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={logo}
                    alt="logo casinhas do mémé"
                    style={{ height: "50px" }}
                  />
                </LinkWithScroll>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};
