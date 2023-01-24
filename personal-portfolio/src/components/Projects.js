import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import sunacrip from "../assets/img/SUNACRIP.png";
import bitsdapp from "../assets/img/BITS.png";
import projImg1 from "../assets/img/reto2.png";
import projImg2 from "../assets/img/avilacoin2.png";
import projImg3 from "../assets/img/Building.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects2 = [
    {
      title: "SUNACRIP",
      description: "Analista de Zonas Economicas Especiales PETRO y Criptoactivos",
      imgUrl: sunacrip,
    },
    {
      title: "BitsDapps",
      description: "Desarrollador Blockchain",
      imgUrl: bitsdapp,
    },

  ];

  const projects = [
    {
      title: "NFT Love",
      description: "ERC-721 & Mint Dapp",
      imgUrl: projImg1,
    },
    {
      title: "AvilaCoin $AVLC2",
      description: "ERC-20 and Social Test",
      imgUrl: projImg2,
    },
    {
      title: "BUILDING...",
      description: "Coming Soon",
      imgUrl: projImg3,
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {
              <div className= "animate__animated animate__fadeIn">
                <h2>Background</h2>
                <p>
                I am actively working to build my professional career, with a broad understanding of the cryptocurrency industry. I have an impeccable work ethic, and I thrive in a collaborative team environment. I am dedicated to continuously learning and expanding my knowledge in the field, and I am committed to delivering high-quality work on every project.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Coming Soon 🛠️...</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className= "animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
