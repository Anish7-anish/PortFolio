import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import btec from "../../Assets/Btec_img.png";
import cheapbuy from "../../Assets/cheapbuylogin.gif";
import slash from "../../Assets/Slash_1.gif";
import gene from "../../Assets/Gene_2.png";
import explore from "../../Assets/Explore_Black.png";
import event from "../../Assets/Event_1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={btec}
              isBlog={false}
              title="BTEC Advanced Anamoly Detection System"
              description="Developed an advanced Python-based analytical tool for North Carolina State University's BTEC water treatment facility. The system uses an LSTM neural network for real-time anomaly detection in time series data, with features like secure GraphQL authentication, dynamic state management, and automated notifications. Key technologies include TensorFlow, Keras, and Pandas."
              ghLink="https://github.com/Anish7-anish/BTEC-State-Detection"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Wolf Events Management System"
              description="Developed WolfEvents, an event management system enabling users to manage events, book tickets, and leave reviews. Admins have additional capabilities to manage users, events, rooms, and reviews. The system includes bonus features like attendee filtering and ticket booking for other users. The application is built using Ruby on Rails and deployed on VCL. It features robust functionalities for both admins and attendees, with easy installation and testing setup."
              ghLink="https://github.com/Anish7-anish/WolfEvents-Event-Management-System"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gene}
              isBlog={false}
              title="Gene Based Cancer Classification"
              description="Developed a genomic pan-cancer classification system using image-based deep learning, leveraging Inception-ResNet-v2 and Guided Grad-CAM visualization. The project involves generating mutation maps from genomic data, training deep neural networks, and reproducing experimental results using TensorFlow and Keras. The system classifies cancer types and identifies important genes through heatmap analysis. Key components include data preprocessing, model training, and heatmap generation to enhance model interpretability."
              ghLink="https://github.com/Anish7-anish/Gene-Based-Cancer-Classification"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={slash}
              isBlog={false}
              title="Slash"
              description="Developed Slash, a Python-based tool that scrapes popular e-commerce websites to find the best deals on searched items. The tool offers a user-friendly interface with features like sorting, filtering, wishlist management, and currency conversion. Designed to save time and money, Slash is ideal for students and data analysts needing quick, efficient price comparisons across multiple platforms."
              ghLink="https://github.com/csc510fall23g45/slash"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cheapbuy}
              isBlog={false}
              title="Cheap Buy"
              description="Developed CheapBuy, a web-based tool that simplifies online shopping by providing real-time price comparisons across multiple e-commerce platforms like Amazon, Walmart, and eBay. The platform features user accounts, personalized wishlists, and enhanced UI for a seamless shopping experience. CheapBuy enables users to effortlessly find the best deals, save time, and personalize their shopping process through advanced filtering and multi-site search capabilities."
              ghLink="https://github.com/csc510fall23g45/cheapBuy"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={explore}
              isBlog={false}
              title="Explore Black"
              description="Explore Black is a digital platform designed to celebrate the history, culture, and achievements of the Black community. It offers public access to educational content while providing an exclusive, secure space for community members to engage in discussions, blogs, and real-time chat. Built with HTML, CSS, and JavaScript, Explore Black strikes a balance between public awareness and fostering a sense of unity and belonging within the Black community."
              ghLink="https://github.com/VrushankiPatel/Explore-Black"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
