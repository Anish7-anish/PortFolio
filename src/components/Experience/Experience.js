import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCards from "./ExperienceCard";
import ncsu from "../../Assets/ncsu.png";
import ncsubtec from "../../Assets/ncsu_logo.png";
import cog from "../../Assets/cog_logo.png";
import skill from "../../Assets/skill_logo.png";

const title1 = <strong className="purple">Graduate Student Assistant</strong>;
const title2 = <strong className="purple">Software Engineer Intern</strong>;
const title3 = <strong className="purple">Data Science Intern</strong>;

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Work Experience </strong>
        </h1>
        <p style={{ color: "white" }}>
            Recent Projects Overview
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={ncsu}
              isBlog={false}
              title= {title1}
              description={
                <>
                    <p>Leveraged Python to perform comprehensive Data Analysis to deliver actionable insights on projects focused on Student Mental Health Data and Transfer Student Preparedness that informed program improvements.</p>
                    <p>Designed and launched the program’s website using WordPress to catalog professional development training and integrated it with the course registration system, and provided support in instructional design</p>
                </>
                }
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={ncsubtec}
              isBlog={false}
              title={title2}
              description={
              <>
                  <p>Developed and implemented an Advanced Anomaly Detection System for NCSU BTEC Water Treatment Facility using LSTM neural networks, enhancing operational efficiency by 40%.</p>
                  <p>Engineered secure token retrieval and enhanced GraphQL request handling, improving data security and reducing data retrieval issues by 30%.</p>
                  <p>Designed visualization tools and automatic email notifications, facilitating proactive operational management and timely responses to anomalies, resulting in a 25% improvement in system reliability.</p>
              </>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={cog}
              isBlog={false}
              title={title2}
              description={
                <>
                    <p>Pioneered the development and successful implementation of loan management applications using the Pega low code platform, leading to a remarkable 30% boost in operational efficiency.</p>
                    <p>Actively collaborated with cross-functional teams to swiftly identify and expertly resolve bugs and issues within the loan management applications, yielding a noteworthy 20% reduction in customer complaints.</p>
                    <p>Leveraged Pega's low code platform to craft and deploy automated workflows, resulting in substantial time and cost savings, thus enhancing company productivity.</p>
                </>
                }            
            />
          </Col>

          <Col md={4} className="project-card">
            <ExperienceCards
              imgPath={skill}
              isBlog={false}
              title={title3}
              description={
                <>
                    <p>Conducted in-depth Exploratory Data Analysis (EDA) and executed precise Feature Engineering on diverse datasets.</p>
                    <p>Acquired foundational expertise in constructing machine learning models from the ground up and adeptly fine-tuned parameters to achieve targeted outcomes.</p>
                    <p>Applied advanced statistical techniques during Exploratory Data Analysis (EDA) and leveraged Feature Engineering to enhance data quality, contributing to a substantial 35% increase in predictive model accuracy.</p>
                </>
                }
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
