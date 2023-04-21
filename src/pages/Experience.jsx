import React from "react";
import { Typography, Paper, Grid, Box } from "@mui/material";

function ExperiencePage() {
  return (
    <Box
      sx={{
        p: 4,
        height: "75vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Grid container direction="column" alignItems="center" spacing={4}>
        <Grid item>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", color: "#008080" }}
          >
            My Experience
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} lg={6}>
          <Paper
            sx={{
              p: 2,
              textAlign: "left",
              backgroundColor: "#fff",
              boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: "#333" }}>
              Technotery
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4, color: "#008080" }}>
              React JS Developer
            </Typography>
            <Typography variant="body1" sx={{ color: "#555" }}>
              During my one-year tenure at Technotery, I gained extensive
              expertise in various front-end technologies, including React JS,
              Redux Thunk, JavaScript, and Material UI. One of my major
              accomplishments during this period was creating an npm package
              that integrated React JS on the Perl side. This package was a
              challenging undertaking, as it required using Webpack to tailor it
              to our users' specific needs. In addition to this project, I also
              worked on implementing form management and validation, Axios API
              connectivity, and handling API error codes. These tasks allowed me
              to deepen my understanding of React JS and front-end development
              principles.
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mt: 2 }}>
              As a React developer, I also possess a strong knowledge of GitHub,
              which I regularly utilized during my tenure at Technotery. I
              collaborated with other developers on various projects, performing
              code reviews and resolving merge conflicts. Additionally, I was
              responsible for managing project workflows using GitHub's project
              management features, such as issues and pull requests. My
              experience with GitHub has made me a more efficient and effective
              developer, able to work seamlessly with other team members.
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mt: 2 }}>
              Throughout my tenure at Technotery, I gained experience working
              with both class and function components in React, as well as
              expertise in managing React state and props. I also worked on
              props drilling, state uplifting, and calling functions from parent
              components. These skills allowed me to build complex and
              interactive user interfaces for web applications. Furthermore, I
              am passionate about staying up-to-date with the latest front-end
              technologies, attending conferences and workshops, and reading
              industry publications to continue to grow my skills and knowledge.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ExperiencePage;
