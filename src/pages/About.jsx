import React from 'react';
import { Box, Grid, Typography, LinearProgress, useTheme } from '@mui/material';
import img from "../Assets/man.avif";
import ".././style.css";
import SkillsComponent from '../components/SkillsComponent';
const aboutMe = require("../data/aboutme.json");
const skillsData = require("../data/skills.json");

const AboutMe = () => {
  const theme = useTheme();
  return (
    <Box sx={{backgroundColor: "#f5f5f5", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <div className="">
              <img className="" src={"https://i.pinimg.com/564x/66/25/54/662554f03cccb2dfa2169b5d27ac4272.jpg"} alt="my photo" />
              {/* <div className="manImageDiv"></div> */}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ px: 4 }}>
          <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" gutterBottom sx={{ color: theme.palette.primary.main }}>
          WHO AM I?
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
      </Grid>
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
  );
};

export default AboutMe;
