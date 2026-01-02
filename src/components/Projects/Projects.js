import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import btec from "../../Assets/Btec_img.png";
import cheapbuy from "../../Assets/cheapbuylogin.gif";
import slash from "../../Assets/Slash_1.gif";
import gene from "../../Assets/Gene_2.png";
import explore from "../../Assets/Explore_Black.png";
import event from "../../Assets/Event_1.png";

const projects = [
  {
    imgPath: btec,
    title: "BTEC Advanced Anomaly Detection System",
    description:
      "Developed an advanced Python-based analytical tool for North Carolina State University's BTEC water treatment facility. The system uses an LSTM neural network for real-time anomaly detection in time series data, with features like secure GraphQL authentication, dynamic state management, and automated notifications. Key technologies include TensorFlow, Keras, and Pandas.",
    ghLink: "https://github.com/Anish7-anish/BTEC-State-Detection",
    alt: "BTEC water treatment monitoring dashboard",
  },
  {
    imgPath: event,
    title: "Wolf Events Management System",
    description:
      "Developed WolfEvents, an event management system enabling users to manage events, book tickets, and leave reviews. Admins can manage users, events, rooms, and reviews, with features like attendee filtering and ticket booking for others. Built using Ruby on Rails and deployed on VCL.",
    ghLink: "https://github.com/Anish7-anish/WolfEvents-Event-Management-System",
    alt: "WolfEvents management interface",
  },
  {
    imgPath: gene,
    title: "Gene Based Cancer Classification",
    description:
      "Built a genomic pan-cancer classification system using image-based deep learning with Inception-ResNet-v2 and Guided Grad-CAM visualization. Includes data preprocessing, model training, and heatmap generation to improve interpretability.",
    ghLink: "https://github.com/Anish7-anish/Gene-Based-Cancer-Classification",
    alt: "Genomic heatmap visualization",
  },
  {
    imgPath: slash,
    title: "Slash",
    description:
      "Developed a Python-based tool that scrapes e-commerce sites to find the best deals. Features sorting, filtering, wishlist management, and currency conversion for quick price comparisons.",
    ghLink: "https://github.com/csc510fall23g45/slash",
    alt: "Slash price comparison interface",
  },
  {
    imgPath: cheapbuy,
    title: "Cheap Buy",
    description:
      "Built a web-based tool for real-time price comparisons across Amazon, Walmart, and eBay. Includes accounts, wishlists, and advanced filtering for a streamlined shopping experience.",
    ghLink: "https://github.com/csc510fall23g45/cheapBuy",
    alt: "CheapBuy login and pricing view",
  },
  {
    imgPath: explore,
    title: "Explore Black",
    description:
      "A digital platform celebrating the history and achievements of the Black community, with public educational content and a secure member space for discussions, blogs, and chat.",
    ghLink: "https://github.com/VrushankiPatel/Explore-Black",
    alt: "Explore Black homepage preview",
  },
];

function Projects() {
  return (
    <Box className="project-section">
      <Particle />
      <Container maxWidth="lg">
        <Typography variant="h3" className="project-heading" sx={{ fontWeight: 700 }}>
          My Recent <span className="purple">Works</span>
        </Typography>
        <Typography sx={{ color: "text.secondary", mt: 1 }}>
          Here are a few projects I've worked on recently.
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
