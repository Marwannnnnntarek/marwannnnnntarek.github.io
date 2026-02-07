import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import movie from "../../Assets/Projects/movie-app.png";
import budgetmanagement from "../../Assets/Untitled design.png";
import islamicapp from "../../Assets/Dark Blue Graphic Design Portofolio Presentations.png";
import pantho from "../../Assets/Projects/Pantho.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

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
              imgPath={islamicapp}
              isBlog={false}
              title="News App"
              description="A modern and responsive News Application built with Flutter and Dart, following the MVVM architecture for clean and maintainable code. The app uses Cubit for efficient state management and Dio for seamless API communication.It fetches real-time articles from NewsData.io and provides categorized browsing with the ability to open full articles via URL Launcher."

              ghLink="https://github.com/Marwannnnnntarek/news"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetmanagement}
              isBlog={false}
              title="ToDO App"
              description="Todo – Flutter To‑Do List App A sleek, cross‑platform Flutter app to help users manage daily tasks. Features include Firebase authentication (sign-in, sign-up, email verification), real-time task creation, editing, deletion, and state management with BLoC/Cubit. Responsive UI with animated splash screen, built-in routing via go_router, and persistent user data via Firebase. Optimized for smooth UX and maintainable architecture."
              ghLink="https://github.com/Marwannnnnntarek/todoapp"
            // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
