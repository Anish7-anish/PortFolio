import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Particle from "../Particle";
import ExperienceCards from "./ExperienceCard";
import ncsu from "../../Assets/ncsu.png";
import ncsubtec from "../../Assets/ncsu_logo.png";
import cog from "../../Assets/cog_logo.png";
import isimcha from "../../Assets/iSimcha.png";

const experiences = [
  {
    imgPath: isimcha,
    role: "Software Engineer",
    company: "iSimcha, LLC",
    dates: "May 2025 - Present",
    alt: "iSimcha logo",
    bullets: [
      "Built distributed LLM inference pipelines on GCP, improving throughput by 30% and enabling scalable deployments.",
      "Fine-tuned healthcare LLMs and integrated LiteLLM, reducing perplexity by 18% and boosting translation accuracy.",
      "Deployed Cloud Functions + Firestore workflows, improving model selection efficiency by 25%.",
    ],
  },
  {
    imgPath: ncsu,
    role: "AI Engineer",
    company: "North Carolina State University",
    dates: "May 2025 - Present",
    alt: "North Carolina State University logo",
    bullets: [
      "Built GPT-based NLP models to classify 500+ course objectives with 85% accuracy and flag accessibility gaps.",
      "Delivered a secure Python/OAuth2 backend for Moodle extraction, cutting audit time by 60%.",
      "Shipped a React interface with real-time feedback and encryption, improving review efficiency by 40%.",
    ],
  },
  {
    imgPath: ncsubtec,
    role: "Software Engineer",
    company: "North Carolina State University",
    dates: "September 2023 - May 2025",
    alt: "NCSU BTEC logo",
    bullets: [
      "Built an LSTM anomaly detection system for BTEC, improving operational efficiency by 40%.",
      "Hardened token retrieval + GraphQL flows, reducing data issues by 30%.",
      "Created AWS-backed analytics and serverless APIs, boosting reliability and automation.",
    ],
  },
  {
    imgPath: cog,
    role: "Software Engineer",
    company: "Cognizant Technology Solutions",
    dates: "February 2023 - June 2023",
    alt: "Cognizant logo",
    bullets: [
      "Built scalable loan systems in Java/Spring Boot, improving efficiency by 30%.",
      "Resolved production issues with Git/Jenkins workflows, cutting complaints by 20%.",
      "Automated event streaming with Kafka to reduce manual effort and costs.",
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
          Recent projects and roles overview.
        </Typography>
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {experiences.map((experience) => (
            <Grid key={experience.title + experience.imgPath} item xs={12} md={4}>
              <ExperienceCards {...experience} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Experience;
