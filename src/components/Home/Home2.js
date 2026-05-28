import React from "react";
import { Container, Grid, Typography, Box, IconButton, Stack } from "@mui/material";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt/dist/index.umd.js";
import { AiFillGithub } from "react-icons/ai";
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
              I build production-ready
              <b className="purple"> AI/ML and Generative AI systems</b> with a strong software
              engineering mindset.
              <br />
              <br />
              Over the last several years I have focused on
              <b className="purple"> LLM applications</b> across banking, healthcare, and
              insurance, including RAG, agentic workflows, and Model Context Protocol
              integrations.
              <br />
              <br />
              My day-to-day stack includes
              <b className="purple"> Python, SQL, PySpark, FastAPI, scikit-learn, XGBoost,</b>
              <b className="purple"> PyTorch, Hugging Face, LangChain, LangGraph,</b> and
              <b className="purple"> LlamaIndex</b>.
              <br />
              <br />
              I also work across
              <b className="purple"> FAISS, Pinecone, Docker, MLflow, GitHub Actions, AWS
              SageMaker, Azure ML,</b> and
              <b className="purple"> GCP</b> to ship scalable, monitored services.
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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
export default Home2;
