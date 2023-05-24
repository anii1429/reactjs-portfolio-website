import React from "react";
import { Typography, Paper, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import Footer from "../components/Footer";

function ExperiencePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          mb: 6,
        },
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
          >
            My Experience
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Paper
            sx={{
              padding: isMobile ? "1rem 1rem 5rem 1rem" : "2rem", // Adjusted padding for mobile devices
              margin: "0 20px",
              textAlign: "left",
              [theme.breakpoints.down("sm")]: {
                margin: "0 20px 40px",
              },
              boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
             <Typography variant="h5" sx={{ 
              mb: 2, 
              color: "#333",
              [theme.breakpoints.down("sm")]: {
                mb: 1,
              },
              }}>
              Technotery
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, 
              color: "#008080",
              [theme.breakpoints.down("sm")]: {
                mb: 2,
              }
              }}>
              React JS Developer
            </Typography>
            <Typography variant="body1" sx={{ color: "#555" }}>
              I worked as a React JS developer at Technotery for one year.
              During this period, I gained expertise in various front-end
              technologies, including React JS, Redux Thunk, JavaScript, and
              Material UI.
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mt: 2 }}>
              I worked on implementing form management and validation, Axios API
              connectivity, and handling API error codes. These tasks allowed me
              to deepen my understanding of React JS and front-end development
              principles.
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mt: 2 }}>
              I also collaborated with other developers on various projects,
              performing code reviews and resolving merge conflicts.
              Additionally, I was responsible for managing project workflows
              using GitHub's project management features, such as issues and
              pull requests.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default ExperiencePage;
