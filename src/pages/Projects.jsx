import React from "react";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";
import { Box, Typography, useTheme } from "@mui/material";
import Footer from "../components/Footer";
const projectdata = require("../data/projects.json");

const Projects = ({ currentTheme }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        padding: "0px 10px",
        [theme.breakpoints.down("sm")]: {
          padding: "0 30px 100px 30px",
        },
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ textAlign: "center" }}
      >
         <Grid xs={12} item>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}> {/* Adjusted font size */}
            My Projects
          </Typography>
          <Typography
            variant="body1" // Adjusted to smaller text size
            color="text.secondary"
            sx={{ fontWeight: "bold" }}
          >
            Check out some of my recent work and see what I've been up to lately.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: "8px" }}
          >
            These are my personal projects created for learning and growth.
          </Typography>
        </Grid>
        {projectdata.map((value, i) => (
          <Grid key={i} xs={12} sm={6} md={4} lg={3} item>
            <ProjectCard project={value} currentTheme={currentTheme} />
          </Grid>
        ))}
      </Grid>
      <Footer currentTheme={currentTheme} />
    </Box>
  );
};

export default Projects;