import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Box className="home-section" id="home">
        <Particle />
        <Container maxWidth="lg" className="home-content">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7} className="home-header">
              <Typography variant="h2" className="heading" sx={{ pb: 2 }}>
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </Typography>

              <Typography variant="h2" className="heading-name" sx={{ fontWeight: 700 }}>
                I'M <span className="main-name">ANISH RAO TOORPU</span>
              </Typography>

              <Box sx={{ pt: 6, textAlign: "left" }}>
                <Type />
              </Box>
            </Grid>

            <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                component="img"
                src={homeLogo}
                alt="Illustration of developer at work"
                sx={{ maxHeight: 420, width: "100%", maxWidth: 420 }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Home2 />
    </section>
  );
}

export default Home;
