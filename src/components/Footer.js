import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  
  return (
    <Container fluid className="footer" style={{ 
      background: "rgba(26, 20, 40, 0.9)",
      padding: "20px 0",
      borderTop: "1px solid rgba(178, 121, 216, 0.2)"
    }}>
      <Row>
        <Col md={4} className="footer-copywright" style={{ textAlign: "center", padding: "10px 0" }}>
          <h3 style={{ 
            color: "rgb(200, 198, 210)", 
            fontSize: "1em",
            fontWeight: "400",
            margin: 0
          }}>
            Designed and Developed by Marwan Tarek
          </h3>
        </Col>
        <Col md={4} className="footer-copywright" style={{ textAlign: "center", padding: "10px 0" }}>
          <h3 style={{ 
            color: "rgb(200, 198, 210)", 
            fontSize: "1em",
            fontWeight: "400",
            margin: 0
          }}>
            Copyright © {year} Marwan Tarek
          </h3>
        </Col>
        <Col md={4} className="footer-body" style={{ textAlign: "center", padding: "10px 0" }}>
          <ul className="footer-icons" style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            alignItems: "center"
          }}>
            <li>
              <a
                href="https://github.com/Marwannnnnntarek"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  fontSize: "1.8em",
                  display: "inline-block",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "var(--imp-text-color)";
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="Visit my GitHub profile"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/marwantarekawad/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  fontSize: "1.8em",
                  display: "inline-block",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "var(--imp-text-color)";
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/marwann__02?igsh=MWdoaHk2dXplMnA4Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  fontSize: "1.8em",
                  display: "inline-block",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "var(--imp-text-color)";
                  e.currentTarget.style.transform = "scale(1.15)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
                aria-label="Visit my Instagram profile"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;