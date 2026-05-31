import { 
  Button,
  Container,
  Nav,
  Navbar
} from "react-bootstrap";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";

export default function Navigation() {
  const { token, logout } = useAuth();
  
  const navigate = useNavigate();
  const isAuth = !!token;

  function handleLogout() {
    logout();
    navigate("/auth/login");
  }

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

            <Nav.Link as={Link} to={"/about"}>
              About
            </Nav.Link>

            <Nav.Link as={Link} to={"/posts"}>
              Posts
            </Nav.Link>
          </Nav>

          {isAuth ? (
            <div className="d-flex gap-2">
              <Button
                as={Link}
                to={"/posts/create"}
                className="hero-btn"
              >
                New Post
              </Button>

              <Button
                onClick={handleLogout}
                variant="outline-light"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="d-flex gap-2">
              <Button 
                as={Link}
                to={"/auth/login"}
                variant="outline-light"
              >
                Log-In
              </Button>

              <Button 
                className="hero-btn"
                as={Link}
                to={"/auth/register"}
              >
                Sign-Up
              </Button>
            </div>
          )}


        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}