import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projects = [
  {
    title: "Enterprise RAG With Citations",
    description:
      "Built retrieval systems over policy, procedure, and product documents with ingestion, chunking, embeddings, reranking, citations, and grounded answers for internal teams.",
  },
  {
    title: "Agentic Workflows and MCP",
    description:
      "Built multi-step GenAI workflows with LangGraph and exposed internal tools and data sources through Model Context Protocol servers for cleaner enterprise integrations.",
  },
  {
    title: "Clinical NLP and Healthcare Retrieval",
    description:
      "Developed NLP pipelines over clinical notes, transcripts, and policy documents using transformers, Azure OpenAI patterns, PySpark ETL, and monitored model APIs.",
  },
  {
    title: "Underwriting and Claims Modeling",
    description:
      "Built predictive models, text analytics, and scheduled scoring pipelines for underwriting and claims workflows using scikit-learn, XGBoost, SQL, Docker, and AWS.",
  },
  {
    title: "Fraud and Risk Analytics",
    description:
      "Shipped fraud detection, churn, and segmentation models over large transaction datasets, with batch scoring pipelines, Hadoop and Hive processing, and governance-ready validation.",
  },
  {
    title: "MLOps and Service Delivery",
    description:
      "Implemented CI/CD, containerized services, experiment tracking, evaluation harnesses, monitoring, and cost controls across FastAPI, MLflow, Docker, AWS, Azure ML, and GCP.",
  },
];

function Projects() {
  return (
    <Box className="project-section">
      <Particle />
      <Container maxWidth="lg">
        <Typography variant="h3" className="project-heading" sx={{ fontWeight: 700 }}>
          Featured work areas
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
          Resume-backed systems and problem areas from my latest AI, ML, and GenAI roles.
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
