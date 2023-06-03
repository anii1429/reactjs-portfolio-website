import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const pages = ["About", "experience", "Projects"];

const NavBar = ({ setCurrentTheme, currentTheme }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: currentTheme === "light" ? "white" : "#121212",
          color: "primary",
        }}
        elevation={0}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ height: "64px" }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                // display: { xs: "none", md: "flex" },
                fontFamily: "Arial, sans-serif",
                fontWeight: 900,
                fontSize: "1.5rem",
                textTransform: "uppercase",
                background: "linear-gradient(to right, #FFC107, #3F51B5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textDecoration: "none",
              }}
            >
              <Link to={"/"} relative="path" style={{ textDecoration: "none" }}>
                anil
                <span
                  style={{
                    background: "linear-gradient(to right, #3F51B5, #FFC107)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  chauhan
                </span>
              </Link>
            </Typography>

            <IconButton
              sx={{display: { xs: "flex", md: "none" ,marginLeft:"32px"}}}
              onClick={() =>
                setCurrentTheme(currentTheme === "light" ? "dark" : "light")
              }
            >
              {currentTheme == "light" ? (
                <DarkModeIcon style={{ color: "#121212" }} />
              ) : (
                <LightModeIcon style={{ color: "white" }} />
              )}
            </IconButton>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color={currentTheme === "light" ? "white" : "#121212"}
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
                {pages.map((page) => (
                  <Link
                    to={`/${page}`}
                    relative="path"
                    style={{ textDecoration: "none" }}
                    key={page}
                  >
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
             
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <IconButton
              sx={{display: { xs: "none", md: "flex" }}}
              onClick={() =>
                setCurrentTheme(currentTheme === "light" ? "dark" : "light")
              }
            >
              {currentTheme == "light" ? (
                <DarkModeIcon style={{ color: "#121212" }} />
              ) : (
                <LightModeIcon style={{ color: "white" }} />
              )}
            </IconButton>
              {pages.map((page) => (
                <Link
                  to={`/${page}`}
                  relative="path"
                  style={{ textDecoration: "none" }}
                  key={page}
                >
                  <Button
                    key={page}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: currentTheme === "light" ? "#121212" : "white",
                      display: "block",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default NavBar;
