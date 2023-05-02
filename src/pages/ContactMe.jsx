import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import SocialIcons from "../components/SocialIcons";
const aboutMe = require("../data/aboutme.json");

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    description:""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box sx={{ backgroundColor: "#f5f5f5",}}>
      <Grid
        container
        spacing={3}
        sx={{
          // backgroundColor: "pink",
          width: "100%",
          margin: "auto",
          padding: "5px",
        }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Just Say hi.
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center", mb: 1,fontSize:"25px" }}
            >
              I am always open to discuss your project and talk about new things
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    mb: 1,
                  }}
                >
                  <span style={{ marginRight: "8px" }}>Mail me at</span>{" "}
                  anilc7089@gmail.com
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  mb: 1,
                  width:"50%"
                }}
              >
                <Typography variant="body1">Follow me</Typography>
                <Box><SocialIcons accounts={aboutMe.Social}/></Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ padding: "10px" }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#212121",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            {/* <Typography variant="h4" gutterBottom>Get in touch</Typography> */}
            {submitted ? (
              <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                Thank you for your message! I'll get back to you as soon as
                possible.
              </Typography>
            ) : (
              <form>
                <Grid container spacing={2} sx={{ padding: "0 20px 5px 20px" }}>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Name"
                      fullWidth
                      margin="normal"
                      variant="standard"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Email"
                      fullWidth
                      margin="normal"
                      variant="standard"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your budget"
                      fullWidth
                      margin="normal"
                      variant="standard"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your Project Description"
                      fullWidth
                      margin="normal"
                      variant="standard"
                      multiline
                      rows={4}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={submitting}
                      >
                        Submit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            )}
          </Box>
        </Grid>
      </Grid>
      {/* <Container maxWidth="lg">
      </Container> */}
    </Box>
  );
};

export default ContactMe;
