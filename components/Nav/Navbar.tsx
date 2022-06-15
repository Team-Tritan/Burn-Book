'use strict';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';

const NavMenu: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand style={{ color: '#ff69ff' }} href="/">
                    <Image height="85px" width="100px" src="/logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/feed">View Feed</Nav.Link>
                        <Nav.Link href="/feed#new">New Post</Nav.Link>
                        <NavDropdown title="Legal" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/privacy">Privacy Policy</NavDropdown.Item>
                            <NavDropdown.Item href="/tos">Terms of Service</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/report">Report a Post</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/auth/login">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="/auth/register">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavMenu;
