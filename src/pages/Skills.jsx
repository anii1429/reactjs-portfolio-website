import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';

const Skills = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Front-end Development
            </Typography>
            <LinearProgress variant="determinate" value={80} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              React
            </Typography>
            <LinearProgress variant="determinate" value={90} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              HTML & CSS
            </Typography>
            <LinearProgress variant="determinate" value={85} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Back-end Development
            </Typography>
            <LinearProgress variant="determinate" value={75} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Node.js
            </Typography>
            <LinearProgress variant="determinate" value={80} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              Databases
            </Typography>
            <LinearProgress variant="determinate" value={70} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
