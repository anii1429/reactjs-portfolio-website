import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
const aboutMe = require("../data/aboutme.json")

const AboutMe = () => {
  return (
    <Box sx={{ p: 4, height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://avatars.githubusercontent.com/u/27229817?s=400&u=07c1b5f584bc5dc5b5d1b5e10e5c937c5fde79d6&v=4"
              alt="My Profile Image"
              height="200px"
              width="200px"
              sx={{ borderRadius: '50%' }}
            />
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
