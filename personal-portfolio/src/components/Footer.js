import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo2.png";
import navIcon1 from '../assets/img/lk1.png';
import navIcon2 from '../assets/img/git.png';
import navIcon3 from '../assets/img/ig3.png';
import navIcon4 from '../assets/img/tw1.png';
//<MailchimpForm />
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end"><div className="social-icon">
                <a href="https://www.linkedin.com/in/diego-villanueva-045933158/"><img src={navIcon1} alt="Linkedin" /></a>
                <a href="https://github.com/diegovillacrypto"><img src={navIcon2} alt="Github" /></a>
                <a href="https://www.instagram.com/diegovilla_0/"><img src={navIcon3} alt="Instagram" /></a>
                <a href="https://twitter.com/diegovilla_0"><img src={navIcon4} alt="Github" /></a>
              </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
