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
  new PostContent("12.19.2021", "Phony Media", "I swear to God, something that annoys the hell out of me is using \
   corny stupid social media site like Twitter or Instagram. Like it makes me depressed. Imagine posting \
    something and millions of people viewing it and making phony reactions. Online bastards, or just bastards. ",
    "https://cdn.webtekno.com/media/cache/content_detail_v2/article/75345/twitter-instagram-hesabi-acti-1567611915.jpg"),

  new PostContent("12.21.2021", "Out of breath", "I'm in lousy shape, for chris's sake. I swear to God I'm a terrible madman, \
    if you know what I mean, when I got to Spencer's. Now that I’m flunked from #PenceyPrep might as well give old Phoebe a buzz, or not. What a kid. Would've felth the cold here in the hill\
    watching the Sxaon Hall match if it wasn't for such a kid.",
    "https://i1.sndcdn.com/artworks-bWM5fw3XpzAvx6hL-k5hGCw-t500x500.jpg"),
  new PostContent("12.21.2021", "Out of Pencies",
    "I have this boy named Stradlater over here on #PenceyPrep. What a corny phony he is. He is the most conceited phony\
      I've ever seen. That’s the thing about these rich kids. They always act like a prince but keep their damn razor in rust and hair. \
      Like they don’t even tell your old girl about the checkers and beat you up when you ask them the shit they’d done in the back of a car. I hate this,\
       I really do. #SLEEPTIGHTYAMORONS",
    "https://m.media-amazon.com/images/I/71E6Up+Zj4L._AC_SL1500_.jpg"),
  new PostContent("12.21.2021", "Let the thing stay as it is",
    "Picked a cab in NY and turned on my phone to watch this unboxing compilation. Like why won’t you just let the thing remain packed in its box? Why does that thing \
    ever need to come out of its box? I swear to God I disliked it, and the video. ",
    "https://i.ytimg.com/vi/RwlPIoCGZR0/maxresdefault.jpg"),
  new PostContent("12.21.2021", "Things spread",
    "Got up a hotel room somewhere here in NY. Went to the bar to see 0 social distancing and no masks, even in personnel. That’s the stupid \
    thing about these places. They’re damn corona multiplication zones. I am glad they got this virus spread out. Like if I ever get it, I’d just sit\
     down and wait dying. I’m not kidding. Like how bad it’s to die of this? That cringe depresses me.",
    "https://media-cdn.tripadvisor.com/media/photo-s/14/cf/a6/3b/our-bar-on-a-busy-night.jpg"),
  new PostContent("12.22.2021", "Stuck looking at the phone",
    "I’ve got bogged down in horsing around with this queen of all phonies Sally. Like that girl must be using TikTok.\
       Now I started reading this timetable of the New York metro I had on my phone. Just to stop lying. Once I get started,\
        I can go on for hours if I feel like it. No kidding. Hours. ",
    "https://i.insider.com/6148fa88c2c9630018f58085?width=700"),

  new PostContent("12.22.2021", "People who are not like themselves",
    "Met the Old Luce. He was strictly a pain in the ass, but he certainly had a good vocabulary. He had the largest vocabulary of any boy at Whooton when I was there.\
 The thing with guys like these is that they never come out even if they’re obviously not straight. Like why wouldn’t you just show who you’re? That thing depresses me. It really does. ",
    "https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/31/2013/04/05115234/comingout.jpg"),


  new PostContent("12.23.2021", "People imagining stuff",
    "I can’t sleep in this cold train station. I watched one of those rocket launches again. I swear to God, if I\
     were some guy like Elon Musk and all these dopes thought I was creative and innovative in space things and all,\
      I would hate it, I really would.",
    "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/oeskpyncdomq6mkx_1616055869.jpeg"),

  new PostContent("12.23.2021", "Who will catch these kids?",
    "At old Phoebe’s school. This place has a ton of pupils with nice old eyes and darker skin.\
     These kids came all the way of thousands of miles to only study here and work their life off in some phony company.\
      That thing with those companies is that they’ve often got some dude acting all nice but they’re just looking for more dough.\
       Like I don’t get how they get so much dough.",
    "https://i.insider.com/5d9b627f754caa34b3321ae7?width=700"),

  new PostContent("12.23.2021", "Let 'em grab",
    "The thing with the kids is, if they want to go out and see the sky and grab for the gold ring, you have to let them do it, and not say anything.\
     If they fall off, they fall off, and break off their lousy phones, but it’s bad if you say anything to them.",
    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Carousel.gif"),

  new PostContent("3.3.2022", "End...",
    "Don’t ever tell anybody anything. If you do, you start missing.",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b2d7b73e-94bc-4cfb-b372-a5ea5cd44c9b/d16trgz-057f31cd-6a82-4c9b-be3a-684b13bd882c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IyZDdiNzNlLTk0YmMtNGNmYi1iMzcyLWE1ZWE1Y2Q0NGM5YlwvZDE2dHJnei0wNTdmMzFjZC02YTgyLTRjOWItYmUzYS02ODRiMTNiZDg4MmMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.svlTxbqta1jQispki46yzruXSpn5OOiNqrzAlqeLsFI"),


]

const posts = <>
  <h2>My Posts</h2>
  <br></br>
  {data.map(props => Post(props))}
</>;

function Post(props) {
  return (
    <>
      <Card border="danger" style={{ width: "500px" }}>
        <Card.Header >{props.date}</Card.Header>
        <Card.Body>
          <Card.Title >{props.title}</Card.Title>
          <Card.Text style={{ wordBreak: 'break-word' }}>
            {props.text}
          </Card.Text>
          <Image src={props.img} style={{ maxWidth: "400px", maxHeight: "400px" }}></Image>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

function App() {
  return (
    <div className="App"  >
      {Navig}
      <Container className="d-flex justify-content-between">
        <Row>
          <Col>
          <Card bg="danger" text="light">
              <Card.Body>
                <Image src="https://cdn.quotesgram.com/img/26/69/1663937446-holden-1.png"  style={{ width: "240px", height: "240px" }}></Image>
              </Card.Body>
              <p>It's me. Holden Caulfield. Writing.</p>
              </Card>
          </Col>
          <Col>
            <Card bg="danger" style={{ width: "800px" }}>
              <Card.Body>
                <Image src="https://qph.fs.quoracdn.net/main-qimg-d0c33d90193e80ce92cca99d8b6aa11d" style={{ width: "750px", height: "450px" }}></Image>
              </Card.Body>
            </Card>
            <br/>
            {posts}
          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default App;
