import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Box className="about-section">
      <Particle />
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" sx={{ py: 2 }}>
          <Grid item xs={12} md={9}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Know Who <span className="purple">I'M</span>
            </Typography>
            <Aboutcard />
          </Grid>
          <Grid item xs={12} md={3} className="about-img" sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={laptopImg}
              alt="Work setup illustration"
              sx={{ width: "100%", maxWidth: 420 }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" className="project-heading" sx={{ fontWeight: 700, mt: 4 }}>
          Professional <span className="purple">Skillset</span>
        </Typography>
        <Techstack />

        <Typography variant="h4" className="project-heading" sx={{ fontWeight: 700, mt: 3 }}>
          <span className="purple">Tools</span> I use
        </Typography>
        <Toolstack />
      </Container>
    </Box>
  );
}

export default About;
