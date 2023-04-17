import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { Work as WorkIcon } from '@mui/icons-material';
const recentWork = require("../data/recentWork.json")

function ExperiencePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>Experience</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Timeline position="alternate">
            {recentWork.map((work,i)=>{
              return  <TimelineItem key={i}>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6">React Developer</Typography>
                <Typography variant="subtitle1" color="text.secondary">{work.title}</Typography>
                <Typography variant="subtitle2" color="text.secondary">{work.duration}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>{work.description}</Typography>
              </TimelineContent>
            </TimelineItem>
            })}
            </Timeline>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ExperiencePage;
