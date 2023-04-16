import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import img from "../Assets/photo.avif"

function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h4"
                sx={{ fontFamily: 'Montserrat', fontWeight: 600, mb: 2 }}
              >
                About Us
              </Typography>
              <Typography variant="body1" sx={{ fontFamily: 'Montserrat', mb: 2 }}>
                Welcome to my portfolio website! I'm a self-taught React developer with a passion for creating user-friendly and visually appealing web applications. 

                With over 2 years of experience in the field, I have gained a deep understanding of React and its ecosystem. My expertise includes creating responsive user interfaces, managing state with Redux, and working with serverless architectures.

                I have experience working on a variety of projects, from small-scale applications to large-scale enterprise solutions. I enjoy working collaboratively with clients and stakeholders to ensure that their vision is brought to life in a timely and efficient manner.

                If you're interested in working together, please don't hesitate to get in touch. Let's create something great!
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3 }}>
              <img 
                src={img} 
                alt="landing" 
                style={{ 
                  width: '50%', 
                  borderRadius: '100%' 
                }} 
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage;
