import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to="/" href="#home">BD Movies</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/" href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
            </Container>
        </Navbar>
    );
};

export default Header;