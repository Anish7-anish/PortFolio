import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    title: "Clinical NLP and RAG Systems",
    description:
      "Built clinical document analysis and patient risk workflows using NLP, predictive analytics, LLMs, and RAG-based retrieval patterns to support healthcare automation at scale.",
  },
  {
    title: "Predictive Maintenance and Anomaly Detection",
    description:
      "Designed telemetry-driven anomaly detection and predictive maintenance solutions for refinery and manufacturing systems, with real-time inference and distributed processing workflows.",
  },
  {
    title: "Enterprise GenAI Knowledge Retrieval",
    description:
      "Integrated transformer models, embeddings, vector search, and RAG pipelines to build semantic search and knowledge retrieval systems for operational and domain-specific documentation.",
  },
  {
    title: "Financial Forecasting and Lending Analytics",
    description:
      "Developed forecasting and customer analytics workflows using ARIMA, LSTM, Prophet, and ensemble methods to improve seasonal trend prediction and operational planning in financial domains.",
  },
  {
    title: "Segmentation and Recommendation Engines",
    description:
      "Built customer segmentation, clustering, and recommendation solutions to improve personalization, targeting, and retention across enterprise business workflows.",
  },
  {
    title: "MLOps and Model Monitoring",
    description:
      "Implemented CI/CD, experiment tracking, model versioning, drift detection, automated retraining, and cloud deployment patterns using Docker, Kubernetes, SageMaker, Databricks, and MLflow.",
  },
];

function Projects() {
  return (
    <Box className="project-section">
      <Particle />
      <Container maxWidth="lg">
        <Typography variant="h3" className="project-heading" sx={{ fontWeight: 700 }}>
          My projects
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
          Resume-backed problem areas and systems I have worked on across recent roles.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {projects.map((project) => (
            <Grid key={project.title} item xs={12} md={4}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
