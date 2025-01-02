import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import ".././style.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../components/Footer";

const HomePage = ({ currentTheme }) => {
  const theme = useTheme();
  return (
    <Fragment>
      <main className="background-text1 home-main">
        <Container className="background-text2">
          <Grid2
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: "20px", md: "40px" },
            }}
          >
            <Grid2
              item
              xs={12}
              md={12}
              lg={12}
              sm={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box sx={{ padding: "40px 0" }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: "yellow",
                    fontSize: { xs: "50px", md: "100px" },
                    textShadow: "2px 2px #000",
                    marginBottom: "20px",
                  }}
                >
                  HELLO.
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: currentTheme === "light" ? "#121212" : "white",
                    fontSize: { xs: "30px", md: "50px" },
                    marginBottom: "10px",
                  }}
                >
                  I am Anil Chauhan
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: currentTheme === "light" ? "#121212" : "white",
                    fontSize: { xs: "16px", md: "23px" },
                    marginBottom: "20px",
                  }}
                >
                  I specialize in creating high-performance web applications with React.js, focusing on delivering responsive, user-friendly interfaces. I thrive on solving complex problems and building solutions that enhance user experience and drive business success.
                </Typography>

                <Box sx={{ padding: "20px 0" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "blue",
                      padding: "10px 20px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "darkblue",
                      },
                    }}
                  >
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      download="AnilChauhan_Resume.pdf"
                      href="/files/AnilChauhan_Resume.pdf"
                    >
                      Download CV
                    </a>
                  </Button>
                </Box>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
        <Footer currentTheme={currentTheme} />
      </main>
    </Fragment>
  );
};

export default HomePage;
