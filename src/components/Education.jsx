import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { School as SchoolIcon } from '@mui/icons-material';
const aboutMe = require("../data/aboutme.json")

function Education() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        {/* <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>Education</Typography> */}
        <Grid container spacing={2}>
          {aboutMe["education"].map((item,i)=>{
            return (
              <Grid item xs={12} md={12} lg={12} sm={12} key={i}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SchoolIcon sx={{ mr: 2 }} />
                  <Box>
                    <Typography variant="h6">{item.field_of_study}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{item.institute}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{item.year}</Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ mt: 1 }}>{item.description}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default Education;
