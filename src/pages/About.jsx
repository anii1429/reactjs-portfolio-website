import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import img from "../Assets/man.avif"
import ".././style.css";
const aboutMe = require("../data/aboutme.json")

const AboutMe = () => {
  return (
    <Box sx={{ p: 4, height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' ,borderRadius: '50%'}}>
          <div className="imagedeveloper">
          <img  className="manImage" src={img} alt="my photo" />
          <div className="manImageDiv"></div>
          </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ px: 4 }}>
            <Typography variant="h4" gutterBottom>
              {aboutMe.Personal_info.name}
            </Typography>
            <Typography variant="h6" gutterBottom>
            {aboutMe.Personal_info.profile}
            </Typography>
            <Typography variant="body1" gutterBottom>
            {aboutMe.Personal_info.about}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Location: {aboutMe.Personal_info.city_country}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: {aboutMe.Personal_info.email}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
