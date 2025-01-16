import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import Footer from "../components/Footer";
import recentWork from "../data/recentWork"; // Now importing from JS file
// import { AccessAlarm, Event, Business, Settings, LocalHospital } from "@mui/icons-material";

function ExperiencePage({ currentTheme }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          mb: 6,
        },
        paddingBottom: "70px",
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={4}>
        {/* Experience Section */}
        <Grid item>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            My Experience
          </Typography>
        </Grid>
        {recentWork.experience.map((experience, index) => (
          <Grid item xs={12} md={8} lg={6} key={index}>
            <Paper
              sx={{
                padding: isMobile ? "1rem 1rem 5rem 1rem" : "2rem",
                margin: "0 20px",
                textAlign: "left",
                [theme.breakpoints.down("sm")]: {
                  margin: "0 20px 40px",
                },
                boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Typography variant="h5" sx={{ mb: 1 }}>
                {experience.company}
              </Typography>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                {experience.role}
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                sx={{ mb: 2 }}
              >
                {experience.duration}
              </Typography>
              {experience.details.map((detail, i) => (
                <Typography key={i} variant="body1" sx={{ mt: 1 }}>
                  • {detail}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}

        {/* Recent Projects Section */}
        <Grid item>
          <Typography variant="h2" sx={{ fontWeight: "bold", mt: 4 }}>
            Recent Work
          </Typography>
        </Grid>
        {recentWork["recent-projects"].map((project, index) => {
          return (
            <Grid item xs={12} md={8} lg={6} key={index}>
              <Paper
                sx={{
                  padding: isMobile ? "1rem 1rem 5rem 1rem" : "2rem",
                  margin: "0 20px",
                  textAlign: "left",
                  [theme.breakpoints.down("sm")]: {
                    margin: "0 20px 40px",
                  },
                  boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <IconButton>{project.icon}</IconButton>
                  <Typography variant="h5">{project.title}</Typography>
                </Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Technologies Used: {project.technologies}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Footer currentTheme={currentTheme} />
    </Box>
  );
}

export default ExperiencePage;
