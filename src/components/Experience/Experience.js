import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Particle from "../Particle";
import ExperienceCards from "./ExperienceCard";
import pfizerVisual from "../../Assets/company_pfizer.svg";
import exxonMobilVisual from "../../Assets/company_exxonmobil.svg";
import agFirstVisual from "../../Assets/company_agfirst.svg";
import jmFamilyVisual from "../../Assets/company_jmfamily.svg";
import bridgeCorpVisual from "../../Assets/company_bridgecorp.svg";

const experiences = [
  {
    imgPath: pfizerVisual,
    role: "AI/ML Engineer",
    company: "Pfizer | New York, New York",
    dates: "May 2025 - Present",
    alt: "Pfizer company visual",
    accent: "#0B5ED7",
    bullets: [
      "Built NLP and predictive analytics models for clinical document analysis, patient risk assessment, and healthcare data processing.",
      "Developed LLM and RAG solutions for intelligent automation and knowledge retrieval in clinical workflows.",
      "Implemented MLOps pipelines with CI/CD, experiment tracking, model versioning, and production monitoring.",
      "Deployed Flask and FastAPI inference services for real-time enterprise integration.",
      "Improved clinical document retrieval accuracy by 28% through embedding optimization and RAG pipelines.",
    ],
  },
  {
    imgPath: exxonMobilVisual,
    role: "AI/ML Engineer",
    company: "Exxon Mobil | Irving, Texas",
    dates: "Jan 2023 - Apr 2025",
    alt: "Exxon Mobil company visual",
    accent: "#E1251B",
    bullets: [
      "Architected scalable ML systems spanning data ingestion, distributed training, and real-time inference for production AI applications.",
      "Built enterprise GenAI applications with LLMs, vector databases, embedding pipelines, and RAG frameworks.",
      "Designed predictive maintenance and anomaly detection models for refinery equipment using telemetry data and deep learning.",
      "Implemented MLOps ecosystems with CI/CD, validation, governance, and automated retraining.",
      "Reduced anomaly detection response time by 35% by optimizing streaming inference workflows.",
    ],
  },
  {
    imgPath: agFirstVisual,
    role: "ML Engineer",
    company: "AgFirst | Columbia, South Carolina",
    dates: "Jul 2020 - Dec 2022",
    alt: "AgFirst company visual",
    accent: "#2F8F3D",
    bullets: [
      "Developed and deployed ML models with Scikit-learn, TensorFlow, and PyTorch for lending and financial analytics use cases.",
      "Built feature pipelines, large-scale data workflows, and model monitoring systems for production reliability.",
      "Created time-series forecasting models with ARIMA, LSTM, and Prophet for seasonal financial trend prediction.",
      "Improved forecasting accuracy by 22% through ensemble methods and optimized feature engineering.",
      "Integrated cloud platforms and CI/CD orchestration to accelerate training, deployment, and monitoring.",
    ],
  },
  {
    imgPath: jmFamilyVisual,
    role: "ML Engineer",
    company: "JM Family Enterprises | Deerfield Beach, Florida",
    dates: "Oct 2018 - Jun 2020",
    alt: "JM Family Enterprises company visual",
    accent: "#2E698F",
    bullets: [
      "Built predictive models across classification, regression, clustering, and forecasting to support business decision-making.",
      "Developed customer segmentation and recommendation systems to improve automotive service engagement and retention.",
      "Created dashboards and visualizations with Tableau, Power BI, Matplotlib, and Seaborn for stakeholder reporting.",
      "Deployed ML models as REST APIs using Flask and FastAPI for real-time inference.",
      "Increased customer segmentation accuracy by 18% through optimized clustering and feature engineering.",
    ],
  },
  {
    imgPath: bridgeCorpVisual,
    role: "Data Scientist",
    company: "The Bridge Corp | Hyderabad, India",
    dates: "Sep 2016 - May 2018",
    alt: "The Bridge Corp company visual",
    accent: "#F97316",
    bullets: [
      "Designed end-to-end data science solutions for customer analytics, sales forecasting, and business reporting.",
      "Applied statistical testing, regression modeling, clustering, and recommendation techniques to improve decision support.",
      "Built scalable data pipelines with Python, SQL, Pandas, and NumPy for large structured and unstructured datasets.",
      "Developed ML services with Scikit-learn and TensorFlow and exposed them through REST APIs.",
      "Delivered dashboards and visualizations that made analytical insights accessible to technical and business teams.",
    ],
  },
];

function Experience() {
  return (
    <Box className="project-section">
      <Particle />
      <Container maxWidth="lg">
        <Typography variant="h3" className="project-heading" sx={{ fontWeight: 700 }}>
          My <span className="purple">Work Experience</span>
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
          AI/ML roles across healthcare, energy, finance, automotive, and enterprise analytics.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {experiences.map((experience) => (
            <Grid key={`${experience.company}-${experience.dates}`} item xs={12} md={6}>
              <ExperienceCards {...experience} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Experience;
