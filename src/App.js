import logo from './logo.svg';
import { Container, Navbar, Nav, NavDropdown, Image, Row, Col, Card, Button } from 'react-bootstrap';

//

const Navig = <><Navbar bg="danger" variant="dark" fixed="top" expand="lg">
  <Container>
    <Navbar.Brand href="home">Holden's Ryefield</Navbar.Brand>
    <Nav className="container-fluid">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
  </Container>
</Navbar>
  <br />
  <br />
  <br /></>;


const posts = <>
<h2>My Posts</h2>
<br></br>
<Card style={{width:"500px"}}>
  <Card.Header>12.24.2021</Card.Header>
  <Card.Body>
    <Card.Title>Phonies</Card.Title>
    <Card.Text style={{wordBreak: 'break-word'}}> 
    Phonies.
    </Card.Text>
      <Image src="https://i.pinimg.com/originals/24/d5/e7/24d5e7ba10d9a69461e4e4940b2b0565.jpg" style={{ width: "240px", height: "240px" }}></Image>
  </Card.Body>
</Card>
</>;

function App() {
  return (
    <div className="App">
      {Navig}
      <Container className="d-flex justify-content-between">
        <Row>
          <Col>
            <Image src="https://i.pinimg.com/originals/24/d5/e7/24d5e7ba10d9a69461e4e4940b2b0565.jpg" style={{ width: "240px", height: "240px" }}></Image>
          </Col>
          <Col>
            {posts}
          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default App;
