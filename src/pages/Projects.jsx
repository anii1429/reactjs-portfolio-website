import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
const projectdata = require("../data/projects.json");

const Projects = () => {
  return (
    <Box sx={{ p: 4, height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        {projectdata.map((value, i) => (
          <Grid key={i} xs={12} md={4} lg={3} item>
            <ProjectCard project={value} />
          </Grid>
        ))}
      </Grid>
</Box>
  );
};

export default Projects;
