import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Grid from '@mui/material/Grid';
const projectdata = require("../data/projects.json")

const Projects = () => {
  return (
      <div sx={{mx: 'auto', mt: 8}}>
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
             <Grid item xs={12}>
               <Grid container justifyContent="center" alignItems={"center"} spacing={2}>
                 {projectdata.map((value,i) => (
                <Grid key={i} xs={12} md={4} lg={3} item>
              <ProjectCard project={value}/>
            </Grid>
                ))}
              </Grid>
      </Grid>
    </Grid>
      </div>
  )
}

export default Projects
