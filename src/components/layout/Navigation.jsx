import { 
  Button,
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
    >
      <Container>

        <Navbar.Brand as={Link} to="/">
          {"</>"} Api-Blog
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar" />

        <Navbar.Collapse id="navbar">

          <Nav className="me-auto" variant="underline">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link href="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to={"/posts"}>
              Posts
            </Nav.Link>
            
            <Nav.Link href="/about">
              Contact
            </Nav.Link>
          </Nav>

          <div className="d-flex gap-2">
            <Button 
              as={Link}
              to={"/login"}
              variant="outline-light"
            >
              Log-In
            </Button>

            <Button 
              className="hero-btn"
              as={Link}
              to={"/register"}
            >
              Sign-Up
            </Button>
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}