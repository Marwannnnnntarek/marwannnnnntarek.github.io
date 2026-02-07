import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { contact } from "../../content/portfolioContent";
import { AiFillGithub, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const iconMap = {
  FaLinkedinIn,
  AiFillGithub,
  AiFillInstagram,
};

function Contact() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="project-heading" style={{ paddingBottom: "15px" }}>
              Let's <strong className="purple">Connect</strong>
            </h1>
            <p
              style={{
                color: "rgb(200, 198, 210)",
                fontSize: "1.1em",
                marginBottom: "3rem",
                textAlign: "center",
                maxWidth: "600px",
                margin: "0 auto 3rem",
              }}
            >
              {contact.tagline}
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center" }}>
          {contact.email && (
            <Col xs={12} md={8} lg={6} className="mb-5" style={{ textAlign: "center" }}>
              <a
                href={`mailto:${contact.email}`}
                className="contact-email-button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  color: "white",
                  fontSize: "1.1em",
                  fontWeight: "500",
                  textDecoration: "none",
                  border: "2px solid var(--imp-text-color)",
                  padding: "16px 32px",
                  borderRadius: "12px",
                  background: "rgba(82, 52, 121, 0.3)",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(10px)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "var(--imp-text-color)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(178, 121, 216, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "rgba(82, 52, 121, 0.3)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                aria-label={`Send email to ${contact.email}`}
              >
                <AiOutlineMail size={28} />
                <span>{contact.email}</span>
              </a>
            </Col>
          )}

          <Col xs={12} style={{ textAlign: "center" }}>
            <h3
              style={{
                color: "rgb(200, 198, 210)",
                fontSize: "1.2em",
                marginBottom: "1.5rem",
                fontWeight: "400",
              }}
            >
              Find me on
            </h3>
            <ul
              className="footer-icons"
              style={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                justifyContent: "center",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
              {contact.links.map((link, idx) => {
                const Icon = iconMap[link.icon];
                return (
                  <li key={idx}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-link"
                      style={{
                        color: "white",
                        fontSize: "2.8em",
                        display: "inline-block",
                        transition: "all 0.3s ease",
                        filter: "drop-shadow(0 0 0 transparent)",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "var(--imp-text-color)";
                        e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
                        e.currentTarget.style.filter = "drop-shadow(0 4px 12px rgba(178, 121, 216, 0.5))";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "white";
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                        e.currentTarget.style.filter = "drop-shadow(0 0 0 transparent)";
                      }}
                      aria-label={`Visit my ${link.name} profile`}
                      title={link.name}
                    >
                      {Icon ? <Icon /> : link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;