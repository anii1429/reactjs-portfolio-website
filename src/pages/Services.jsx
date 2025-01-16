import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Box, useTheme, useMediaQuery } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const services = [
    {
        title: 'Web Development',
        description: 'Creating responsive, scalable, and high-performing websites using modern frameworks like React, Next.js, and TypeScript.',
        icon: <WebIcon style={{ fontSize: 50, color: '#1976d2' }} />,
    },
    {
        title: 'Mobile App Development',
        description: 'Building cross-platform mobile apps for iOS and Android using React Native to provide seamless user experiences.',
        icon: <PhoneIphoneIcon style={{ fontSize: 50, color: '#1976d2' }} />,
    },
    {
        title: 'UI/UX Design',
        description: 'Crafting user-friendly designs that align with business goals and enhance usability.',
        icon: <DesignServicesIcon style={{ fontSize: 50, color: '#1976d2' }} />,
    },
    {
        title: 'MERN Stack Development',
        description: 'Developing full-stack web applications using MongoDB, Express.js, React, and Node.js.',
        icon: <WebIcon style={{ fontSize: 50, color: '#1976d2' }} />,
    },
];

const ServicesPage = ({ currentTheme }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflow: 'hidden',
                [theme.breakpoints.down('sm')]: {
                    mb: 6,
                },
                paddingBottom: '70px',
            }}
        >
            <Container maxWidth="lg" style={{ marginTop: '40px' }}>
                {/* Hero Section */}
                <Box textAlign="center" marginBottom={4}>
                    <Typography variant="h2" gutterBottom>
                        What I Offer
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        Providing scalable and user-centric solutions for your digital needs.
                    </Typography>
                </Box>

                {/* Services Grid */}
                <Grid container spacing={2} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                            <Card elevation={3} style={{ height: '100%' }}>
                                <Box textAlign="center" paddingTop={2}>
                                    {service.icon}
                                </Box>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom textAlign="center">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" textAlign="center">
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Call-to-Action Section */}
                <Box textAlign="center" marginTop={6}>
                    <Typography variant="h4" gutterBottom>
                        Ready to work together?
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        component={Link}
                        to="/contact"
                    >
                        Contact Me
                    </Button>
                </Box>
            </Container>

            {/* Footer */}
            <Footer currentTheme={currentTheme} />
        </Box>
    );
};

export default ServicesPage;
