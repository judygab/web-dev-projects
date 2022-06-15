import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className="wow zoomIn">
            <img src={contactImg} alt="Contact Us"/>
          </Col>
          <Col size={12} md={6} className="wow fadeIn">
            <h2>Get In Touch</h2>
            <form>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="text" placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="email" placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input type="tel" placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                </Col>
                <Col size={12} className="px-1">
                  <textarea rows="6" placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                  <button><span>Send</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
