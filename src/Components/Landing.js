import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Profile from './cover.jpg';
// import Schedule from './Schedule.png';
// import notetaker from './notetaker.png';
// import Movie from './Movie.png';
// import password from './password.png';
// import teamprofilegenerator from './teamprofilegenerator.png';
// import invitor from './invitor.png';
import './Land.css';

import Footer from './Footer';


// Maybe see live instead of deployed
// Landing page Navbar
const Landing = () => {
    return (
        <div className= "photo">
            <Container>
                <Row>
                <style>{'body { background-image: url("./background.jpg"); }'}</style>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <Image style={{ height: 450, width: 300, marginTop: '2rem', marginLeft: '4rem', marginRight: '5rem'}} className="avatar avatar-user width full border bg-white" src={Profile} alt="Profile" roundedCircle />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <Card border="secondary" style={{ width: '29rem', marginTop: '2rem', marginRight: '6rem'}}>
                            {/* <Card.Header>Hi My Name is Lilli!</Card.Header> */}
                            <Card.Body>
                                <Card.Title>About Me</Card.Title>
                                <Card.Text>
                                Full Stack Web Developer passionate about learning new languages to construct sophisticated, user friendly, applications. Recently earned a certificate in full stack development from the University of Arizona. Highly organized, self-motivated, and proficient with computers. Enthusiastic about crafting the ideal websites for businesses, startups and companies to create both a positive and energetic experience. Positioned to provide a useful perspective on user interface as well as constructing applications with a group.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
            </Container>

            <CardColumns>
                <Card bg="dark" text="white" className="p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            "Don't let the noise of others' opinions drown out your own inner voice."
        </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Steve Jobs<cite title="Source Title"></cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card bg="dark" text="white" className="text-center p-3">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Technologies used + Skills Aquired
                            technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS
            </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                University of Arizona <cite title="Source Title">Coding Bootcamp Graduate</cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
                <Card bg="dark" text="white" className="text-right">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            "Computers are incredibly fast, accurate and stupid; humans are incredibly slow, inaccurate and brilliant; together they are powerful beyond imagination."
            </p>
                        <footer className="blockquote-footer">
                            <small className="text-muted">
                                Albert Einstein <cite title="Source Title"></cite>
                            </small>
                        </footer>
                    </blockquote>
                </Card>
    
            </CardColumns>
            <Footer />
        </div>


    );
};

export default Landing;