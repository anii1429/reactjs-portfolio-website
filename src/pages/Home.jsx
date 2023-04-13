import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Text from "../components/Text";
import ".././style.css";

const HomePage = () => {
  return (
    <div className="homepagebackground">
      <Grid container spacing={2}>
        <Grid item xs={8} md={1}></Grid>
        <Grid item xs={8} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={8} md={12}>
              <h2 className="headtext">
                Hello <span className="wave">👋 </span>
              </h2>
              <h2 className="nametext">I am anil chauhan</h2>
              <span></span>
              <div style={{ height: "50px" }}>
                {" "}
                <Text />
              </div>
            </Grid>
            <Grid item xs={8} md={12}>
              <Button
                variant="contained"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1XfJshU8HebNftmq6DeH41M61a8rrHsZ9/view?usp=sharing"
                  )
                }
              >
                Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} md={4}>
          <div className="imagedeveloper"></div>
        </Grid>
        <Grid item xs={8} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
