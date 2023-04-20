import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';
const skillsData = require("../data/skills.json")

const Skills = () => {
  return (
    <Box sx={{ p: 4, height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Skills
          </Typography>
        </Grid>
        {skillsData.map((obj,i)=>{
          return <Grid key = {obj.skill} item xs={12} md={6}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom>
              {obj.skill}
            </Typography>
            <LinearProgress variant="determinate" value={obj.level} />
          </Box>
        </Grid>
        })}
      </Grid>
    </Box>
  );
};

export default Skills;
