import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import Particle from "../Particle";
import ExperienceCards from "./ExperienceCard";
import bnyMellonVisual from "../../Assets/company_bnymellon.svg";
import cignaVisual from "../../Assets/company_cigna.svg";
import nationwideVisual from "../../Assets/company_nationwide.svg";
import citibankVisual from "../../Assets/company_citibank.svg";
import latentViewVisual from "../../Assets/company_latentview.svg";

const experiences = [
  {
    imgPath: bnyMellonVisual,
    role: "AI / ML Engineer - Generative AI",
    company: "BNY Mellon | New York, NY",
    dates: "Jan 2025 - Present",
    alt: "BNY Mellon company visual",
    accent: "#1F2A78",
    bullets: [
      "Built and deployed RAG services that let internal teams query policy, procedure, and product documents with grounded answers and citations.",
      "Developed ingestion, parsing, chunking, and embedding pipelines for PDFs, SharePoint content, and enterprise APIs to improve retrieval quality.",
      "Built multi-step agentic workflows with LangGraph for orchestration, tool calling, fallback handling, and controlled execution flows.",
      "Implemented Model Context Protocol servers so LLM agents could connect to internal document stores, databases, and tools through a standard interface.",
      "Exposed GenAI services as FastAPI endpoints, containerized them with Docker, and supported deployment, scaling, and observability on AWS.",
      "Set up CI/CD, guardrails, evaluation, model routing, and token and cost monitoring across GPT-4o, Claude, and open-weight models.",
    ],
  },
  {
    imgPath: cignaVisual,
    role: "Machine Learning Engineer",
    company: "Cigna | Bloomfield, CT",
    dates: "Sep 2023 - Dec 2024",
    alt: "Cigna company visual",
    accent: "#0070A8",
    bullets: [
      "Built and deployed NLP models over clinical notes and call transcripts to extract structured information for operations and analytics teams.",
      "Developed named entity recognition and text classification services with spaCy and Hugging Face transformers and packaged them as APIs.",
      "Evaluated Azure OpenAI workflows and built an early RAG prototype over policy and coverage documents for enterprise healthcare use cases.",
      "Fine-tuned transformer models on healthcare text with parameter-efficient methods and reviewed outputs with subject matter experts.",
      "Built PySpark ETL pipelines and gradient boosting models for claim triage and prioritization over large healthcare datasets.",
      "Deployed and monitored NLP and ML services across Azure ML and GCP using Docker and MLflow under strict privacy controls.",
    ],
  },
  {
    imgPath: nationwideVisual,
    role: "Machine Learning Engineer",
    company: "Nationwide | Columbus, OH",
    dates: "Jan 2022 - May 2023",
    alt: "Nationwide company visual",
    accent: "#1A3D7C",
    bullets: [
      "Built predictive models for underwriting and claims use cases, taking them from exploration through to deployment.",
      "Created text analytics on adjuster notes and claim descriptions using TF-IDF and embeddings to support classification and pattern detection.",
      "Developed classification and regression models with scikit-learn and XGBoost, with strong validation and overfitting controls.",
      "Moved model workflows into repeatable scheduled pipelines using Python, SQL, and Docker instead of one-off scripts.",
      "Used AWS S3 and EC2 for cloud-based data and training workloads and set up monitoring to track model performance after deployment.",
      "Built dashboards and documented modeling assumptions, limitations, and A/B-style checks for business partners.",
    ],
  },
  {
    imgPath: citibankVisual,
    role: "Machine Learning Engineer",
    company: "Citibank | New York, NY",
    dates: "Dec 2019 - Dec 2021",
    alt: "Citibank company visual",
    accent: "#C91F37",
    bullets: [
      "Built fraud and risk detection models over large transaction datasets, with attention to class imbalance and precision and recall tradeoffs.",
      "Developed customer analytics models for segmentation and churn analysis to support business and risk teams.",
      "Deployed models into reliable batch scoring pipelines and processed large banking datasets on Hadoop and Hive platforms.",
      "Wrote complex SQL and reproducible Python preparation steps across banking data warehouses and source systems.",
      "Applied NLP to customer interaction text for classification and keyword extraction.",
      "Documented model logic, dashboards, and validation artifacts to satisfy regulated model governance workflows.",
    ],
  },
  {
    imgPath: latentViewVisual,
    role: "Junior ML Engineer",
    company: "LatentView Analytics | Chennai, India",
    dates: "Apr 2017 - Oct 2019",
    alt: "LatentView company visual",
    accent: "#4B2E83",
    bullets: [
      "Built analysis and reporting for consumer and retail clients and translated client requirements into clear analytical tasks.",
      "Wrote SQL to pull and transform data and used Python to clean, analyze, and summarize findings.",
      "Built early predictive models such as customer segmentation solutions with scikit-learn.",
      "Created dashboards and visualizations in Tableau so client teams could track key metrics clearly.",
      "Performed exploratory data analysis, documented assumptions, and developed strong clean-code and version-control habits.",
      "Supported multiple projects in parallel and built a solid foundation in data handling and analytical thinking.",
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
          Generative AI, NLP, and machine learning roles across banking, healthcare, insurance, and financial services.
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
