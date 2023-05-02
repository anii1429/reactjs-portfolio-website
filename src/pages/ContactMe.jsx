import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <Box sx={{ backgroundColor: "blue", height: "100%" }}>
      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: "pink",
          width: "100%",
          margin: "auto",
          padding: "5px",
          height: "100%",
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
              sx={{ display: "flex", alignItems: "center", mb: 1 }}
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
                }}
              >
                <Typography variant="body1">Follow me</Typography>
                <Box></Box>
              </Box>
            </Box>
            {/* <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <span style={{ marginRight: '8px' }}>Email:</span> john.doe@example.com
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <span style={{ marginRight: '8px' }}>Address:</span> 123 Main St, Anytown USA
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>Contact Number:</span> (123) 456-7890
              </Typography> */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ padding: "10px" }}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "yellow",
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
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Your budget"
                      fullWidth
                      margin="normal"
                      variant="standard"
                      name="budget"
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.message}
                      onChange={handleChange}
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
