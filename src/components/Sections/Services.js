import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import { services } from "../../content/portfolioContent";

function Services() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "25px" }}>
          <strong className="purple">Services</strong>
        </h1>
        <Row className="mb-5">
          {services.map((svc, idx) => (
            <Col key={idx} xs={12} md={6} lg={4} className="mb-3">
              <Card
                className="resume-service-card"
                style={{
                  background: "rgba(82, 52, 121, 0.25)",
                  border: "1px solid rgba(178, 121, 216, 0.3)",
                  color: "white",
                  height: "100%",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "1em",
                      color: "var(--imp-text-color)",
                      marginBottom: "8px",
                    }}
                  >
                    {svc.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      fontSize: "0.9em",
                      color: "rgb(200, 198, 210)",
                      marginBottom: 0,
                    }}
                  >
                    {svc.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Services;
