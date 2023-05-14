import { Grid } from "@mui/material";
import React from "react";
import SocialIcons from "./SocialIcons";
const aboutMe = require("../data/aboutme.json");

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "#ffffff",
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: "5px 10px" }}
      >
        <a
          href={`mailto:${aboutMe.Personal_info.email}`}
          style={{ color: "#777777" }}
        >
          {aboutMe.Personal_info.email}
        </a>
        <SocialIcons accounts={aboutMe.Social} />
      </Grid>
    </footer>
  );
};

export default Footer;
