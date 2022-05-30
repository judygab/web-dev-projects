import logo from './logo.svg';
import './App.css';
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(1);

  return (
    <div className="App">
      <Container className="h-100">
        <Row className="h-100">
          <Col className="align-self-center">
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
