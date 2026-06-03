import { 
  Button,
  Container,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import "./Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../context/useAuth";

export default function Navigation() {
  const { token, user, logout } = useAuth();
  
  const navigate = useNavigate();
  const isAuth = !!token;

  function handleLogout() {
    logout();
    navigate("/auth/login");
  }

  console.log("TOKEN:", token);
  console.log("USER:", user);

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

          {isAuth && user ? (
            <NavDropdown
              title={
                <span className="user-dropdown-title">
                  <span className="user-avatar">
                    {user.name.charAt(0).toUpperCase()}
                  </span>

                  {user.name}
                </span>
              }
              align="end"
              className="user-dropdown"
            >

              <NavDropdown.Item disabled>
                Signed in as {user.name}
                
              </NavDropdown.Item>
              
              <NavDropdown.Item
                as={Link}
                to={`/user/${user.id}`}
              >
                Go to Profile
              </NavDropdown.Item>
              
              <NavDropdown.Divider />

              <NavDropdown.Item
                as={Link}
                to={"/posts/create"}
              >
                Create Post
              </NavDropdown.Item>

              <NavDropdown.Item
                className="logout-item"
                onClick={handleLogout}
              >
                Logout
              </NavDropdown.Item>

            </NavDropdown>
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