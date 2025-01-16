import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Footer from "../components/Footer";

const ContactPage = ({ currentTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // Add functionality to send form data to an email or server
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "90vh",
      }}
    >
      <Container maxWidth="md" style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Box textAlign="center" marginBottom={4}>
          <Typography variant="h2" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="textSecondary" paragraph>
            I would love to hear from you! Whether you have a question, want to discuss a project, or just want to say hi, feel free to drop a message using the form below.
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={isMobile ? 4 : 6}
                required
              />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                sx={{ mt: 2 }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>

      <Footer currentTheme={currentTheme} />
    </Box>
  );
};

export default ContactPage;
