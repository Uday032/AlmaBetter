//compnents
import MarksForm from './components/MarksForm'
import LeaderBoard from './components/LeaderBoard'
import {Container, Tab, Nav} from 'react-bootstrap'

// bootstrap CSS 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav variant="pills" className="row">
            <Nav.Item>
              <Nav.Link eventKey="first">Add Marks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Show LeaderBoard</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <MarksForm />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <LeaderBoard />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      
    </div>
  );
}

export default App;
