import React from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import ".././style.css";
import SkillsComponent from "../components/SkillsComponent";
import Footer from "../components/Footer";
import Education from "../components/Education";
import myPhoto from "../Assets/photo.avif"; 

const aboutMe = require("../data/aboutme.json");
const skillsData = require("../data/skills.json");

const AboutMe = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ overflowY: "hidden", "::-webkit-scrollbar": { display: "none" } }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <img className="" src={myPhoto} alt="my photo" style={{ maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto" }}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={8} sm={8}>
            <Box
              sx={{
                px: 4,
                overflowY: "scroll",
                height: "calc(100vh - 130px)",
                "::-webkit-scrollbar": { display: "none" },
                // Add padding to the bottom for small devices
                [theme.breakpoints.down("sm")]: {
                  paddingBottom: "80px",
                },
              }}
            >
              <Typography
                variant="h2"
                gutterBottom
                sx={{ color: theme.palette.primary.main }}
              >
                ABOUT ME
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
                sx={{ color: theme.palette.text.secondary }}
              >
                {aboutMe.Personal_info.about}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: theme.palette.text.secondary }}
              >
                Location: {aboutMe.Personal_info.city_country}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: theme.palette.text.secondary }}
              >
                Email: {aboutMe.Personal_info.email}
              </Typography>
              <Grid container>
                <Grid item lg={6} sm={6} md={6} xs={12}>
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                      Skills
                    </Typography>
                    <SkillsComponent skillsData={skillsData} />
                  </Box>
                </Grid>
                <Grid item lg={6} sm={6} md={6} xs={12}>
                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                      Education
                    </Typography>
                    <Education />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutMe;
