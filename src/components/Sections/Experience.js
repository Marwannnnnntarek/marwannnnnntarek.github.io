import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { experience } from "../../content/portfolioContent";

function Experience() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "25px" }}>
          <strong className="purple">Experience</strong>
        </h1>
        <Row className="mb-5">
          {experience.current.map((job, idx) => (
            <Col key={idx} md={12} className="mb-4">
              <div className="resume-item">
                <h4 className="resume-title" style={{ fontSize: "1.15em" }}>
                  {job.role} — {job.company}
                </h4>
                <p className="mb-2" style={{ color: "rgb(178, 176, 185)", fontSize: "0.95em" }}>
                  {job.type} · {job.period}
                </p>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: "4px" }}>{b}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
          <Col md={12}>
            <h5 style={{ color: "var(--imp-text-color)", marginBottom: "18px", fontWeight: "600" }}>
              Internships
            </h5>
          </Col>
          {experience.internships.map((job, idx) => (
            <Col key={idx} md={12} className="mb-4">
              <div className="resume-item">
                <h4 className="resume-title" style={{ fontSize: "1.1em" }}>
                  {job.role} — {job.company}
                </h4>
                <p className="mb-2" style={{ color: "rgb(178, 176, 185)", fontSize: "0.9em" }}>
                  {job.period}
                </p>
                <ul className="mb-0" style={{ paddingLeft: "1.2rem" }}>
                  {job.bullets.map((b, i) => (
                    <li key={i} style={{ marginBottom: "4px" }}>{b}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
