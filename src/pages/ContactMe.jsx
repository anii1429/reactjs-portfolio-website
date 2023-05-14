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
    description: "",
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
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Grid
        container
        spacing={3}
        sx={{
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
            <Typography
              variant="h1"
              sx={{ fontFamily: "Poppins", fontWeight: "bold", fontSize: 45 }}
            >
              Just Say hi.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 1,
                fontFamily: "Poppins",
                fontWeight: "semibold",
                fontSize: 30,
              }}
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
                    fontFamily: "Poppins",
                    fontWeight: "medium",
                    fontSize: 20,
                    color: "#777777",
                  }}
                >
                  <span style={{ marginRight: "8px" }}>Mail me at</span>{" "}
                  <a
                    href={`mailto:${aboutMe.Personal_info.email}`}
                    style={{ color: "#777777", }}
                  >
                   {aboutMe.Personal_info.email}
                  </a>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  mb: 1,
                  width: "50%",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "medium",
                    fontSize: 20,
                    color: "#777777",
                  }}
                >
                  Follow me
                </Typography>
                <Box>
                  <SocialIcons accounts={aboutMe.Social} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ padding: "10px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "90%",
              padding: "20px",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              border: "1px solid #ccc",
              borderRadius:"5px"
            }}
          >
            {submitted ? (
              <Typography variant="body1" align="center" sx={{ mb: 2 }}>
                Thank you for your message! I'll get back to you as soon as
                possible.
              </Typography>
            ) : (
              <form>
                <Grid container spacing={2}>
                  {Object.keys(formData).map((key, i) => {
                    return (
                      <Grid item xs={12} key={i}>
                        <TextField
                          key={i}
                          label={`Your ${key}`}
                          fullWidth
                          margin="normal"
                          variant="standard"
                          name={key}
                          value={formData[key]}
                          onChange={handleChange}
                          color="secondary"
                          multiline={key == "description"}
                          rows={key == "description" && 4}
                        />
                      </Grid>
                    );
                  })}
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
