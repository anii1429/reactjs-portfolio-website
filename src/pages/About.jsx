import React from 'react';
import { Box, Grid, Typography, LinearProgress } from '@mui/material';
import img from "../Assets/man.avif";
import ".././style.css";
const aboutMe = require("../data/aboutme.json");
const skillsData = require("../data/skills.json");

const AboutMe = () => {
  return (
    <Box sx={{backgroundColor: "#f5f5f5", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <div className="">
              <img className="" src={"https://i.pinimg.com/564x/66/25/54/662554f03cccb2dfa2169b5d27ac4272.jpg"} alt="my photo" />
              {/* <div className="manImageDiv"></div> */}
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ px: 4 }}>
            <Typography variant="h4" gutterBottom>
             WHO AM I?
            </Typography>
            {/* <Typography variant="h6" gutterBottom>
            {aboutMe.Personal_info.name}{aboutMe.Personal_info.profile}
            </Typography> */}
            <Typography variant="body1" gutterBottom>
              {aboutMe.Personal_info.about}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Location: {aboutMe.Personal_info.city_country}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Email: {aboutMe.Personal_info.email}
            </Typography>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" gutterBottom>
                Skills
              </Typography>
              {skillsData.map((obj,i)=>{
                return <Box key={obj.skill} sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {obj.skill}
                  </Typography>
                  <LinearProgress variant="determinate" value={obj.level} />
                </Box>
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
