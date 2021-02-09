import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card';
import React from 'react';
import Schedule from './Schedule.png';
import notetaker from './notetaker.png';
import Movie from './Movie.png';
import password from './password.png';
import teamprofilegenerator from './teamprofilegenerator.png';
import invitor from './invitor.png';
import Button from 'react-bootstrap/Button';


const Project = () => {
    return (
        <div>
            <CardColumns>
                <Card>
                    <Card.Img variant="top" src={Schedule} alt="Schedule" />
                    <Card.Body>
                        <Card.Title>Workday Scheduler</Card.Title>
                        <Card.Text>
                            This calender application helps its users manage their time more efficiently, alongside the demands of a busy
                            schedule. This application color codes activies based on past, present and future tasks also allowing the user to save their activities to view at a later time.
        </Card.Text>
                        <Button href="https://github.com/lillianparis/work-day-scheduler" variant="dark">Repository</Button>{' '}
                        <Button href="https://lillianparis.github.io/work-day-scheduler/" variant="dark">Deployed</Button>{' '}
                    </Card.Body>
                </Card>
                {/* <Card bg="dark" text="white" className="p-3">
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
                </Card> */}
                <Card>
                    <Card.Img variant="top" src={notetaker} alt="notetaker" />
                    <Card.Body>
                        <Card.Title>Note Taker</Card.Title>
                        <Card.Text>
                            This application is designed for users that need to keep track of a lot of
                            information. It can be easy to forget or be unable to recall inportant information. Being able to
                            take persistent notes allows users to have written information when needed.
            {' '}
                        </Card.Text>
                        <Button href="https://lillianparis.github.io/note-taker/" variant="dark">Repository</Button>{' '}
                        <Button href=" https://arcane-shore-48502.herokuapp.com/" variant="dark">Deployed</Button>{' '}
                    </Card.Body>

                </Card>
                {/* <Card bg="dark" text="white" className="text-center p-3">
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
                </Card> */}
                <Card className="text-center">
                    <Card.Img variant="top" src={teamprofilegenerator} alt="teamprofilegenerator" />
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
                        <Button href="https://github.com/lillianparis/template_engine" variant="dark">Repository</Button>{' '}
                        <Button href="https://drive.google.com/file/d/1MxspBT2Xze1QpznwIGkqXLbvKcreYTV3/view?usp=sharing" variant="dark">Deployed</Button>{' '}

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={password} alt="password" />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                            This application serves to create a better sense of security for password keeping.
                            Employers want interactive pages that are also secure and user
                    friendly, this page is meant to showcase the creators javascript knowledge and logic.{' '}
                        </Card.Text>
                        <Button href="https://github.com/lillianparis/password-generator" variant="dark">Repository</Button>{' '}
                        <Button href="https://lillianparis.github.io/password-generator/" variant="dark">Deployed</Button>{' '}

                    </Card.Body>
                </Card>
                {/* <Card bg="dark" text="white" className="text-right">
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
                </Card> */}
                <Card>
                    <Card.Img variant="top" src={Movie} alt="Movie" />
                    <Card.Body>
                        <Card.Title>Movie Eaters</Card.Title>
                        <Card.Text>
                            The movie-eaters application allows
                            its users to use their time more efficiently during a movie night out. This application utilizes the MovieGlu API to provide users with a variety of options to chose from.
      </Card.Text>
                        <Button href="https://github.com/Daellarrek/Team-Grass" variant="dark">Repository</Button>{' '}
                        <Button href="https://daellarrek.github.io/Team-Grass/" variant="dark">Deployed</Button>{' '}

                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={invitor} alt="invitor" />
                    <Card.Body>
                        <Card.Title>Invitor +</Card.Title>
                        <Card.Text>
                            This applications allows its users to plan and post activities. Invitor + utilizes API's, displaying daily activities to users, allowing them to share with others as well as creating their own activities.
        </Card.Text>
                        <Button href="https://proj2-dionysus.herokuapp.com/" variant="dark">Repository</Button>{''}
                        <Button href="https://github.com/Erin-Leal/Project-2-Dionysus" variant="dark">Deployed</Button>{''}
                    </Card.Body>
                </Card>
            </CardColumns>


        </div>
    );
};

export default Project;