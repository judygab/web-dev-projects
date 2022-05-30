import logo from './logo.svg';
import './App.css';
import { MultiStepProgressBar } from "./components/MultiStepProgressBar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="h-100">
        <Row className="h-100">
          <Col className="align-self-center">
            <MultiStepProgressBar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
