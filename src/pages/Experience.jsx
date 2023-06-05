import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Footer from "../components/Footer";
const recentWork = require("../data/recentWork.json");

function ExperiencePage({ currentTheme }) {
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
        paddingBottom: "52px",
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Typography
            variant="h2"
            sx={{ fontWeight: "bold" }}
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
            <Typography
              variant="h5"
              sx={{
                mb: 2,
                [theme.breakpoints.down("sm")]: {
                  mb: 1,
                },
              }}
            >
              Technotery
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mb: 4,
                [theme.breakpoints.down("sm")]: {
                  mb: 0,
                },
              }}
            >
              React JS Developer
            </Typography>
            {recentWork.experience.map((item, i) => (
              <Typography variant="body1" sx={{ mt: 2 }}>
                {item}
              </Typography>
            ))}
          </Paper>
        </Grid>
      </Grid>
      <Footer currentTheme={currentTheme} />
    </Box>
  );
}

export default ExperiencePage;
