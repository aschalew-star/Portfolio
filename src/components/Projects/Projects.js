import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import emotion from "../../Assets/Projects/emotion.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the one projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="MEP"
              description="Merchant exchange platform for ethiopian traditional cloths for sell merchants on platform by register, components realtime chat ,payment in chapa,manage all using MERN crud ."
              ghLink="https://github.com/aschalew-star/MEP-defence"
              demoLink="#"
            />
          </Col>
 <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Tender frontend"
              description="A comprehensive, enterprise-ready tender management platform designed to streamline the entire tender lifecycle for organizations and suppliers. The platform allows users to create, manage, and participate in tenders efficiently."
              ghLink="https://github.com/aschalew-star/Tender"
              demoLink="#"
            />
          </Col> <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="Tender Backend"
              description="A comprehensive, enterprise-ready tender management platform designed to streamline the entire tender lifecycle for organizations and suppliers. The platform allows users to create, manage, and participate in tenders efficiently"
              ghLink="https://github.com/aschalew-star/Backend-Tender"
              demoLink="#"
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
