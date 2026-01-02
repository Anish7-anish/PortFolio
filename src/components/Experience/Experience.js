import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Particle from "../Particle";
import ExperienceCards from "./ExperienceCard";
import ncsu from "../../Assets/ncsu.png";
import ncsubtec from "../../Assets/ncsu_logo.png";
import cog from "../../Assets/cog_logo.png";
import skill from "../../Assets/skill_logo.png";

const experiences = [
  {
    imgPath: ncsu,
    title: "Software Engineer",
    alt: "North Carolina State University logo",
    bullets: [
      "Leveraged Python to perform comprehensive data analysis on student mental health and transfer student preparedness, delivering actionable insights for program improvements.",
      "Designed and launched the program website in WordPress to catalog professional development training and integrate with course registration.",
    ],
  },
  {
    imgPath: ncsubtec,
    title: "Software Engineer",
    alt: "NCSU BTEC logo",
    bullets: [
      "Developed an anomaly detection system for the NCSU BTEC water treatment facility using LSTM neural networks, boosting operational efficiency by 40%.",
      "Engineered secure token retrieval and improved GraphQL request handling, reducing data retrieval issues by 30%.",
      "Designed visualization tools and automated email notifications for proactive operational management, improving system reliability by 25%.",
    ],
  },
  {
    imgPath: cog,
    title: "Software Engineer",
    alt: "Cognizant logo",
    bullets: [
      "Led development of loan management applications on the Pega low-code platform, increasing operational efficiency by 30%.",
      "Collaborated with cross-functional teams to resolve bugs quickly, reducing customer complaints by 20%.",
      "Built automated workflows that saved time and costs while improving productivity.",
    ],
  },
  {
    imgPath: skill,
    title: "Machine Learning Engineer",
    alt: "Skill badge logo",
    bullets: [
      "Performed exploratory data analysis and feature engineering across diverse datasets.",
      "Built and tuned machine learning models from the ground up to hit targeted outcomes.",
      "Applied advanced statistical techniques to improve data quality, raising predictive accuracy by 35%.",
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
