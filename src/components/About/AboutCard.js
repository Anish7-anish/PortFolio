import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      sx={{ backgroundColor: "background.paper", borderRadius: 3, width: "100%" }}
    >
      <CardContent sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 4 } }}>
        <Typography variant="body1" sx={{ lineHeight: 1.9, color: "text.secondary", textAlign: "left" }}>
          I’m <span className="purple">Anish Rao Toorpu</span>, a Software Engineer based in Raleigh,
          North Carolina.
          <br />
          <br />
          I currently work at iSimcha, LLC, where I build and deploy scalable, distributed LLM
          inference pipelines on cloud platforms.
          <br />
          <br />
          I completed my Master of Computer Science from North Carolina State University in May
          2025, with a strong focus on machine learning, distributed systems, and full-stack
          development.
          <br />
          <br />
          I’m actively seeking full-time Software Development Engineer (SDE) or Machine Learning
          Engineer (MLE) roles where I can design and deliver production-grade, high-impact systems.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </Typography>

        <Box sx={{ mt: 3, display: "grid", gap: 1 }}>
          {[
            "Playing Valorant",
            "Playing Cricket",
            "Watching Movies",
          ].map((activity) => (
            <Box key={activity} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <ChevronRightIcon fontSize="small" />
              <Typography variant="body2">{activity}</Typography>
            </Box>
          ))}
        </Box>

        <Typography variant="subtitle2" sx={{ mt: 3, color: "text.secondary", textAlign: "left" }}>
          "I have always believed that process is more important than results."
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary", textAlign: "left" }}>
          Ms Dhoni
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AboutCard;
