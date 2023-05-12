import React from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import img from "../Assets/man.avif";
import ".././style.css";
import SkillsComponent from '../components/SkillsComponent';
import Footer from '../components/Footer';

const aboutMe = require("../data/aboutme.json");
const skillsData = require("../data/skills.json");

const AboutMe = () => {
  const theme = useTheme();
  return (
    <Box sx={{ overflowY: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
              <img className="" src={"https://i.pinimg.com/564x/66/25/54/662554f03cccb2dfa2169b5d27ac4272.jpg"} alt="my photo" />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ px: 4, overflowY: 'scroll', height: 'calc(100vh - 64px)' }}>
              <Typography variant="h2" gutterBottom sx={{ color: theme.palette.primary.main }}>
                ABOUT ME
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.secondary }}>
                {aboutMe.Personal_info.about}
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ color: theme.palette.text.secondary }}>
                Location: {aboutMe.Personal_info.city_country}
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ color: theme.palette.text.secondary }}>
                Email: {aboutMe.Personal_info.email}
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" gutterBottom>
                  Skills
                </Typography>
                <SkillsComponent skillsData={skillsData}/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </Box>
  );
};

export default AboutMe;
