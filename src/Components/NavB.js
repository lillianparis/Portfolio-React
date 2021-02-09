import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from "react-router-dom";



const NavB = () => {
    return (

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Lillian Paris</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Project">Projects</Nav.Link>
                

                <Nav.Link href="/Contact">Contact</Nav.Link>
                <Nav.Link href="/Resume">Resume</Nav.Link>
                <NavDropdown title="Direct Links" id="basic-nav-dropdown">
                    <NavDropdown.Item href="https://lillianparis.github.io/work-day-scheduler/">Workday Scheduler</NavDropdown.Item>
                    <NavDropdown.Item href="https://github.com/Erin-Leal/Project-2-Dionysus">Invitor +</NavDropdown.Item>
                    <NavDropdown.Item href="https://arcane-shore-48502.herokuapp.com/">Note Taker</NavDropdown.Item>
                    <NavDropdown.Item href="https://drive.google.com/file/d/1MxspBT2Xze1QpznwIGkqXLbvKcreYTV3/view?usp=sharing">Team Profile Generator</NavDropdown.Item>
                    <NavDropdown.Item href="https://daellarrek.github.io/Team-Grass/">Movie Eaters</NavDropdown.Item>
                    <NavDropdown.Item href="https://lillianparis.github.io/password-generator/">Password Generator</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://github.com/lillianparis">Github</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>

    );
};

export default NavB;