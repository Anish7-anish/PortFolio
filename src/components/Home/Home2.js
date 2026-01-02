import React from "react";
import { Container, Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt/dist/index.umd.js";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Box className="home-about-section" id="about">
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8} className="home-about-description">
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </Typography>
            <Typography className="home-about-body">
              I fell in love with programming and I have at least learnt something, I think…
              <br />
              <br />I am fluent in powerful languages like
              <b className="purple"> Python, Java and JavaScript.</b>
              <br />
              <br />
              My fields of interest include building innovative
              <b className="purple"> Web Technologies and Products </b>
              as well as exploring the exciting domains of
              <b className="purple"> Machine Learning and Data Science.</b>
              <br />
              <br />
              Whenever possible, I also channel my passion into developing solutions using
              <b className="purple"> React.js, Spring</b> and
              <b className="purple"> cutting-edge tools</b> like
              <b className="purple"> Tensorflow and Keras</b>.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className="myAvtar">
            <Tilt>
              <Box component="img" src={myImg} className="img-fluid" alt="Anish avatar" />
            </Tilt>
          </Grid>
        </Grid>
        <Box className="home-about-social">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
            FIND ME ON
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Feel free to <span className="purple">connect</span> with me
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <IconButton
              component="a"
              href="https://github.com/Anish7-anish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="home-social-icons"
            >
              <AiFillGithub />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/anish-rao-toorpu-a4463821a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="home-social-icons"
            >
              <FaLinkedinIn />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/anishhh_07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="home-social-icons"
            >
              <AiFillInstagram />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
export default Home2;
