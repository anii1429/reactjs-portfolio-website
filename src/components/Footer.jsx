import { Instagram } from '@mui/icons-material'
import { Grid, Stack } from '@mui/material'
import React from 'react'
const about = require("../data/aboutme.json")

const Footer = () => {
  return (
    <div style={{height:"60vh"}}>
      <Grid container spacing={2}>
      <Grid item xs={8} md={3}></Grid>
      <Grid item xs={8} md={6}>
      <Stack direction="row" spacing={2}>
           {about.Social.map((ele)=>{
            return <p>{ele.name}</p>
           })}
    </Stack>
      </Grid>
      <Grid item xs={8} md={3}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
