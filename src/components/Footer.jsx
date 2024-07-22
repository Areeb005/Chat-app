import React from 'react';
import { Box, Container, Typography, Link, Grid, IconButton, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: 'primary.main',
                color: 'common.white',
                py: 4,
                mt: 4,
            }}
        >
            <Container maxWidth="lg">
                <Box py={5} sx={{ display: "flex", gap: 15, }}>
                    <Box sx={{ maxWidth: "25%" }}>
                        <Typography variant="body2" paragraph>
                            Lorem ipsum dolor sit amet consectetur. Varius sit nec aliquet semper elit. Ut porttitor varius ultricies tincidunt turpis. Amet sagittis natoque felis in.
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Follow Us On:
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton color="inherit" href="#" sx={{
                                display: 'flex', width: "max-content", borderRadius: '50%', overflow: 'hidden', bgcolor: 'common.white', m: 0.5, '&:hover': { bgcolor: 'common.white', }}}>
                                <FacebookIcon sx={{ color: 'primary.main' }} />
                            </IconButton>
                            <IconButton color="inherit" href="#" sx={{
                                display: 'flex', width: "max-content", borderRadius: '50%', overflow: 'hidden', bgcolor: 'common.white', m: 0.5, '&:hover': { bgcolor: 'common.white', }}}>
                                <TwitterIcon sx={{ color: 'primary.main' }} />
                            </IconButton>
                            <IconButton color="inherit" href="#" sx={{
                                display: 'flex', width: "max-content", borderRadius: '50%', overflow: 'hidden', bgcolor: 'common.white', m: 0.5, '&:hover': { bgcolor: 'common.white', }}}>
                                <FacebookIcon sx={{ color: 'primary.main' }} />
                            </IconButton>
                            <IconButton color="inherit" href="#" sx={{
                                display: 'flex', width: "max-content", borderRadius: '50%', overflow: 'hidden', bgcolor: 'common.white', m: 0.5, '&:hover': { bgcolor: 'common.white', }}}>
                                <TwitterIcon sx={{ color: 'primary.main', height: "20px" }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Grid container spacing={0} gap={4}>
                        {[1, 2, 3, 4].map((item) => (
                            <Grid item xs={12} md={2} key={item}>
                                <Typography mb={3} variant="h6" gutterBottom>
                                    Company
                                </Typography>
                                <Link href="#" mb={1} variant="body2" color="inherit" display="block" underline="hover">
                                    <ChevronRightIcon />  About us
                                </Link>
                                <Link href="#" mb={1} variant="body2" color="inherit" display="block" underline="hover">
                                    <ChevronRightIcon /> Contact us
                                </Link>
                                <Link href="#" mb={1} variant="body2" color="inherit" display="block" underline="hover">
                                    <ChevronRightIcon /> Careers
                                </Link>
                                <Link href="#" mb={1} variant="body2" color="inherit" display="block" underline="hover">
                                    <ChevronRightIcon /> Find Jobs
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
            <Divider sx={{ bgcolor: "#E8E8E8" }} />
            <Box mt={4} textAlign="center">
                <Typography variant="body2">
                    Copyright © 2022 Tasdik. All rights reserved. This site is legally owned and operated by Tasdik
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
