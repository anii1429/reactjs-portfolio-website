import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import React, { Fragment } from "react";
import ".././style.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../components/Footer";

const HomePage = ({ currentTheme }) => {
  const theme = useTheme();
  return (
    <Fragment>
      <main
        className="background-text1 home-main"
      >
        <Container className="background-text2">
          <Grid2
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: "0", md: "40px 0" },
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
              }}
            >
              <Box sx={{ padding: "40px 0" }}>
                <Typography
                  variant="h1"
                  sx={{
                    color: "yellow",
                    fontSize: "100px",
                    textShadow: "2px 2px #000",
                  }}
                >
                  hello.
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: currentTheme === "light" ? "#121212" : "white",
                    fontSize: "50px",
                  }}
                >
                  i am anil chauhan
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: currentTheme === "light" ? "#121212" : "white",
                    fontSize: "23px",
                  }}
                >
                  i am react js developer with one year of experience{" "}
                </Typography>
                <Box sx={{ padding: "20px 0" }}>
                  <Button variant="contained" color="primary">
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                      download="AnilChauhan_Resume_portfolio.pdf"
                      href="/files/AnilChauhan_Resume_portfolio.pdf"
                      className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-white font-bold duration-500"
                      aria-label="Download Resume"
                    >
                      <span className="text-sm sm:text-lg font-general-medium duration-100">
                        Download CV
                      </span>
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
