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
<Grid item lg={6} md={6} sm={12} xs={12} sx={{ textAlign: { xs: "center", sm: "center", md: "start" } }}>
  <div style={{ marginLeft: "auto" }}>
    <a href={`mailto:${aboutMe.Personal_info.email}`} style={{ color: "#777777" }}>
      {aboutMe.Personal_info.email}
    </a>
  </div>
</Grid>

<Grid item lg={6} md={6} sm={12} xs={12} container justifyContent={{ xs: "center", md: "flex-end" }}>
  <SocialIcons accounts={aboutMe.Social} />
</Grid>

</Grid>

    </footer>
  );
};

export default Footer;
