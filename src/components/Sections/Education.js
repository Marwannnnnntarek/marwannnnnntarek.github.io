
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { education } from "../../content/portfolioContent";

function Education() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "25px" }}>
          <strong className="purple">Education</strong>
        </h1>
        <Row className="mb-5">
          {education.map((edu, idx) => (
            <Col key={idx} md={12}>
              <div className="resume-item">
                <h4 className="resume-title" style={{ fontSize: "1.15em" }}>
                  {edu.institution}
                </h4>
                <p className="mb-0" style={{ color: "rgb(178, 176, 185)" }}>
                  <strong>{edu.faculty}</strong> — {edu.department}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
