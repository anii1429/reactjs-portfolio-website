import { Box, Button, Grid,Typography } from "@mui/material";
import React, { useState } from "react";
import Text from "../components/Text";
import img from "../Assets/man.avif"
import ".././style.css";
import SocialIcons from "../components/SocialIcons";
const aboutMe = require("../data/aboutme.json");

const HomePage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding:"20px"
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={8} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography
              variant="h1"
              sx={{ fontFamily: "Poppins", fontWeight: "bold", fontSize: 45 }}
            >
             Hey i Am
            </Typography>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                fontFamily: "Poppins",
                fontWeight: "semibold",
                fontSize: 30,
              }}
            >
              anil chauhan
            </Typography>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                fontFamily: "Poppins",
                fontWeight: "semibold",
                fontSize: 20,
              }}
            >
               i am professional React JS developer with expertise in front-end technologies,
                API connectivity, project management, and a strong ability to
                collaborate with cross-functional teams. Skilled in
                implementing form management and validation to ensure robust
                web applications.
            </Typography>
          </Box>
        </Grid>
            <Grid item xs={12}>
              <Button variant="contained">
                <a
                  style={{ textDecoration: "none" }}
                  download="AnilChauhan_Resume_new.pdf"
                  href="/files/AnilChauhan_Resume_new.pdf"
                  className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                  aria-label="Download Resume"
                >
                  <span className="text-sm sm:text-lg font-general-medium duration-100">
                    Download CV
                  </span>
                </a>
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <SocialIcons accounts={aboutMe.Social} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <div
            className="imagedeveloper"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img className="manImage" src={img} alt="my photo" />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;

