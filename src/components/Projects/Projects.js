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
              title="MEP"
              description="Merchant exchange platform for ethiopian traditional cloths for sell merchants on platform by register, components realtime chat ,payment in chapa,manage all using MERN crud ."
              ghLink="https://github.com/aschalew-star/MEP-defence"
              demoLink="#"
            />
          </Col> <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="MEP"
              description="Merchant exchange platform for ethiopian traditional cloths for sell merchants on platform by register, components realtime chat ,payment in chapa,manage all using MERN crud ."
              ghLink="https://github.com/aschalew-star/MEP-defence"
              demoLink="#"
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
