import logo from './logo.svg';
import './App.css';
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import { questions } from "./Questions";

function App() {
  const [index, setIndex] = useState(1);

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index - 3) {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className="App">
      <Container className="h-100">
        <Row className="m-5">
          <Col className="align-self-center">
            <MultiStepProgressBar
              step={index}
              />
          </Col>
        </Row>
        <Row>
          <Card>
            <Card.Body>
              <MultiStepForm
                list={questions}
                />
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
              <Button onClick={prevButton} disabled={index == 1}>Previous</Button>
              <Button onClick={nextButton}>Next</Button>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
