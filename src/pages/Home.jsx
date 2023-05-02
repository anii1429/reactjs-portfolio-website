import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Text from "../components/Text";
import img from "../Assets/man.avif"
import ".././style.css";
import SocialIcons from "../components/SocialIcons";
const aboutMe = require("../data/aboutme.json");

const HomePage = () => {
  return (
    <div className="">
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
              <Button  variant="contained">
              <a
              style={{textDecoration:"none"}}
						download="AnilChauhan_Resume_new.pdf"
						href="/files/AnilChauhan_Resume_new.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
						aria-label="Download Resume"
					>
						<span className="text-sm sm:text-lg font-general-medium duration-100">
							Download CV
						</span>
					</a>

              </Button>
            </Grid>
            <Grid item xs={8} md={12}>
            <Box><SocialIcons accounts={aboutMe.Social}/></Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} md={4}>
          {/* <div className="imagedeveloper"></div> */}
          <div className="imagedeveloper">
          <img  className="manImage" src={img} alt="my photo" />
          <div className="manImageDiv"></div>
          </div>
        </Grid>
        <Grid item xs={8} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
