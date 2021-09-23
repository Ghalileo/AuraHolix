import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

const Navigation = () => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/services">Services</Nav.Link>
                    <NavDropdown title="Holics" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/art">Art</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/astro">Astro</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/addict">Addict</NavDropdown.Item>
                        
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    {/* <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation; 