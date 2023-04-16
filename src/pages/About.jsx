import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const AboutMe = () => {
  return (
    <Box sx={{ p: 4, height: '80vh' }}>
      <Grid container spacing={4} alignItems="center">
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
              John Doe
            </Typography>
            <Typography variant="h6" gutterBottom>
              React JS Developer
            </Typography>
            <Typography variant="body1" gutterBottom>
              Hi, I'm John Doe! I am a React JS developer with over 5 years of experience in creating web applications. I am passionate about creating user-friendly interfaces and developing scalable solutions. I have experience working with a variety of technologies including React, Redux, Node.js, MongoDB, and PostgreSQL.
            </Typography>
            <Typography variant="body2" gutterBottom>
              Location: New York, USA
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: john.doe@example.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
