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
          I’m <span className="purple">Anish Rao Toorpu</span>, an AI / ML Engineer with around
          nine years of experience building machine learning systems and shipping them into
          production.
          <br />
          <br />
          I currently work at BNY Mellon, where I build Generative AI services for enterprise
          knowledge retrieval, including RAG pipelines, LangGraph-based agentic workflows, and
          Model Context Protocol integrations.
          <br />
          <br />
          Across earlier roles at Cigna, Nationwide, Citibank, and LatentView Analytics, I have
          shipped clinical NLP services, underwriting and claims models, fraud analytics, customer
          segmentation workflows, and analytics platforms for business teams.
          <br />
          <br />
          I treat ML work like software: design the data flow, build the model or retrieval layer,
          expose clean APIs, add CI/CD and monitoring, and leave behind documentation that the
          rest of the team can extend.
          <br />
          <br />
          My toolkit spans Python, SQL, PySpark, FastAPI, scikit-learn, XGBoost, PyTorch,
          Hugging Face, LangChain, LangGraph, FAISS, Pinecone, MLflow, Docker, and cloud
          platforms across AWS, Azure, and GCP.
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
