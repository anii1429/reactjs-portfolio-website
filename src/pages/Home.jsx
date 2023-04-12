import { Grid } from '@mui/material';
import React from 'react';
import ".././style.css"
import Text from '../components/Text';
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';

const HomePage = () => {
  return (
    <div className='homepagebackground'>
    <Grid container spacing={2}>
    <Grid item xs={8}  md={7}>
    <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
          <h2 className='nametext'>I am anil chauhan</h2>
          <span></span>
          <Text />
      
  </Grid>
  <Grid item xs={8} md={5}>
  <div className="imagedeveloper">
          </div>
  </Grid>
  <Grid item xs={12} md={12}>
  <button onClick={() => {
            window.open("https://github.com/rahulvijay81");
          }}
            className='socailmediabtn'>
              <GitHub className='icon' /> 
              </button>
          <button onClick={() => {
            window.open("https://www.linkedin.com/in/rahulvijay81/");
          }}
            className='socailmediabtn'>
              <LinkedIn className='icon' />
            </button>
          <button onClick={() => {
            window.open("https://twitter.com/rahulvijay8156");
          }}
            className='socailmediabtn'>
              <Twitter className='icon' />
              </button>
          <button onClick={() => {
            window.open("https://instagram.com/rahulvijay81");
          }}
            className='socailmediabtn'
            >
              <Instagram className='icon' />
            </button>
  </Grid>
    </Grid>
  </div>
  );
};

export default HomePage;
