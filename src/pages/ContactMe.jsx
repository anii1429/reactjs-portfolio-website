import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Button, Typography } from '@mui/material';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    <Box sx={{ backgroundColor: '#f5f5f5', heigh: '80vh', py: 6 }}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom>Contact Information</Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <span style={{ marginRight: '8px' }}>Name:</span> John Doe
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <span style={{ marginRight: '8px' }}>Email:</span> john.doe@example.com
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <span style={{ marginRight: '8px' }}>Address:</span> 123 Main St, Anytown USA
              </Typography>
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px' }}>Contact Number:</span> (123) 456-7890
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h6" gutterBottom>Get in touch</Typography>
              {submitted ? (
                <Typography variant="body1" align="center" sx={{ mb: 2 }}>Thank you for your message! I'll get back to you as soon as possible.</Typography>
              ) : (
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField label="Name" fullWidth margin="normal" name="name" value={formData.name} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Email" fullWidth margin="normal" name="email" value={formData.email} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Message" fullWidth margin="normal" multiline rows={4} name="message" value={formData.message} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" color="primary" disabled={submitting}>
                          Send
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactMe;
