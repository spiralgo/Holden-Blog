import logo from './logo.svg';
import { Container, Navbar, Nav, NavDropdown, Image, Row, Col, Card, Button } from 'react-bootstrap';

//
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


class PostContent {
  constructor(date, title, text, img) {
    this.date = date;
    this.title = title;
    this.text = text;
    this.img = img;
  }
}
const data = [
  new PostContent("12.23.2021", "Phony Media", "Something that annoys the hell out of me is using \
   corny stupid social media site like Twitter or Instagram. Like it makes me depressed. Imagine posting \
    something and millions of people viewing it and making phony reactions. Online bastards, or just bastards. ",
    "https://cdn.webtekno.com/media/cache/content_detail_v2/article/75345/twitter-instagram-hesabi-acti-1567611915.jpg"),

  new PostContent("12.23.2021", "Out of Pencies", "I'm in lousy shape, for chris's sake. I swear to God I'm a terrible madman, \
    if you know what I mean. Now that I’m flunked from #PenceyPrep might as well give old Phoebe a buzz. What a kid.",
    "https://cdn.quotesgram.com/img/26/69/1663937446-holden-1.png"),
  new PostContent("12.23.2021", "Out of Pencies",
    "I have this boy named Stradlater over here on #PenceyPrep. What a corny phony he is. He is the most conceited phony\
      I've ever seen. That’s the thing about these rich kids. They always act like a prince but keep their damn razor in rust and hair. \
      Like they don’t even tell your old girl about the checkers and beat you up when you ask them the shit they’d done in the back of a car. I hate this,\
       I really do. #SLEEPTIGHTYAMORONS",
    "https://m.media-amazon.com/images/I/71E6Up+Zj4L._AC_SL1500_.jpg"),

]

const posts = <>
  <h2>My Posts</h2>
  <br></br>
  {data.map(props => Post(props))}
</>;

function Post(props) {
  return <Card style={{ width: "500px" }}>
    <Card.Header>{props.date}</Card.Header>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text style={{ wordBreak: 'break-word' }}>
        {props.text}
      </Card.Text>
      <Image src={props.img} style={{ width: "240px", height: "240px" }}></Image>
    </Card.Body>
  </Card>;
}

function App() {
  return (
    <div className="App">
      {Navig}
      <Container className="d-flex justify-content-between">
        <Row>
          <Col>
            <Image src="https://cdn.quotesgram.com/img/26/69/1663937446-holden-1.png" style={{ width: "240px", height: "240px" }}></Image>
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
