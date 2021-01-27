import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';


// Landing page Navbar
const Landing = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Lillian Paris</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="./Components/Landing">Home</Nav.Link>
                    <Nav.Link href="./Components/Contact">Contact</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Resume</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Workday Scheduler</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Invitor +</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Note Taker</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Team Profile Generator</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Movie Eaters</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Weffle</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Github</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="Profile.jpeg/171x180" roundedCircle />
                    </Col>
                </Row>
            </Container>

            <CardColumns>
                <Card>
                    <Card.Img variant="top" src="Schedule.png/100px160" />
                    <Card.Body>
                        <Card.Title>Workday Scheduler</Card.Title>
                        <Card.Text>
                            This calender application helps its users manage their time more efficiently, alongside the demands of a busy
                            schedule. This application color codes activies based on past, present and future tasks also allowing the user to save their activities to view at a later time.
        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Invitor +</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <Card.Text>
                            This application is designed for users that need to keep track of a lot of
                            information. It can be easy to forget or be unable to recall inportant information. Being able to
                            take persistent notes allows users to have written information when needed.
       {' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card bg="primary" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Technologies used + Skills Aquired
      </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Title>Team Profile Generator</Card.Title>
                        <Card.Text>
                            Building a Node CLI One of the most important aspects of programming is writing
                            code that is readable, reliable, and maintainable. Oftentimes, how we design our code is just as
                            important as the code itself. In this homework assignment, your challenge is to build a Node CLI
                            that takes in information about employees and generates an HTML webpage that displays summaries for
                            each person. Since testing is a key piece in making code maintainable, you will also be ensuring
                    that all unit tests pass.{' '}
                        </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img src="holder.js/100px160" />
                </Card>
                <Card className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                            erat a ante.
      </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Movie Eaters</Card.Title>
                        <Card.Text>
                            The movie-eaters application allows
                            its users to use their time more efficiently during a movie night out. This application utilizes the MovieGlu API to provide users with a variety of options to chose from.
      </Card.Text>
                        <Card.Text>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Invitor +</Card.Title>
                        <Card.Text>
                            This applications allows its users to plan and post activities. Invitor + utilizes API's, displaying daily activities to users, allowing them to share with others as well as creating their own activities.
        </Card.Text>
                    </Card.Body>
                </Card>
            </CardColumns>
        </div>

    );
};

export default Landing;