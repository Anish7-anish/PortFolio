import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Particle from "../Particle";
import ExperienceCards from "./ExperienceCard";
import serviceNowLogo from "../../Assets/servicenow.png";
import virtualInfotechLogo from "../../Assets/virtual_infotech_solution_logo.png";

const experiences = [
  {
    imgPath: serviceNowLogo,
    role: "Software Engineer",
    company: "ServiceNow, IL",
    dates: "Oct 2024 - Present",
    alt: "ServiceNow logo",
    bullets: [
      "Built reusable React + TypeScript components with Hooks and Context for shared state across internal apps.",
      "Implemented Node.js/Express services with REST endpoints, request validation middleware, and JWT auth.",
      "Improved frontend performance by reducing re-renders and applying memoization for faster page responsiveness.",
      "Containerized backend services with Docker and deployed on AWS ECS with EC2-based infrastructure.",
      "Integrated OpenAI-powered automation for summarization and classification in internal workflows.",
      "Added prompt versioning, input sanitization, response validation, and fallback logic for reliability.",
      "Partnered with PM, QA, and platform teams on reviews, planning, and incident triage.",
      "Wrote unit/integration tests and supported CI pipelines for stable releases.",
    ],
  },
  {
    imgPath: virtualInfotechLogo,
    role: "Software Engineer",
    company: "Virtual Infotech Solution, India",
    dates: "Sep 2020 - Jul 2023",
    alt: "Virtual Infotech Solution logo",
    bullets: [
      "Delivered full-stack apps with React, Node.js, and Django based on client workflows.",
      "Built REST APIs with PostgreSQL/MongoDB, including CRUD, validation, and role-based access.",
      "Crafted responsive UI with HTML5, CSS3, Tailwind, and modern JavaScript.",
      "Integrated Firebase and third-party services for auth, notifications, and real-time sync.",
      "Optimized slow queries with indexing and ORM tuning to improve API latency.",
      "Deployed on AWS and GCP with environment config, monitoring, and access control.",
      "Participated in code reviews, debugging, and production issue resolution.",
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
