import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Anish Rao Toorpu </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently working as a Graduate Student Assistant at CALS AP NCSU.
            <br />
            I am currently pursing my Masters in Computer Science at North Carolina State University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Valorant
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I have always believed that process is more important than results."{" "}
          </p>
          <footer className="blockquote-footer">Ms Dhoni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
