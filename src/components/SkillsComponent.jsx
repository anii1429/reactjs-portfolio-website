import React from 'react';
import { Box, Grid, Typography, LinearProgress, useTheme } from '@mui/material';

const SkillsComponent = (props) => {
  const theme = useTheme();
  
  return (
    <>
      {props.skillsData.map((obj,i)=>{
        return (
          <Box key={obj.skill} sx={{ mb: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#333333' }}>
              {obj.skill}
            </Typography>
            <LinearProgress variant="determinate" value={obj.level} sx={{ height: 10, borderRadius: 5 }}>
              <Typography variant="caption" sx={{ color: '#333333' }}>
                {`${obj.level}%`}
              </Typography>
            </LinearProgress>
          </Box>
        );
      })}
    </>
  );
};

export default SkillsComponent;
