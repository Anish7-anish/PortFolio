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
          I’m <span className="purple">Anish Rao Toorpu</span>, an AI/ML Engineer with 9+ years of
          experience designing, training, and deploying machine learning systems in production.
          <br />
          <br />
          I currently work at Pfizer, where I build NLP, predictive analytics, and RAG-based
          solutions for clinical document analysis, patient risk assessment, and healthcare data
          workflows.
          <br />
          <br />
          Across previous roles at Exxon Mobil, AgFirst, JM Family Enterprises, and The Bridge
          Corp, I have delivered predictive maintenance models, semantic search systems, customer
          analytics, recommendation engines, and large-scale ML data pipelines.
          <br />
          <br />
          My work spans feature engineering, deep learning, GenAI applications, REST inference
          APIs, experiment tracking, CI/CD, model monitoring, and cloud deployment across AWS,
          Azure, and GCP.
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
