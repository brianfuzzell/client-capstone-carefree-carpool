import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Carefree Carpool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/schedule">
              Schedule
            </Nav.Link>
            <Nav.Link as={Link} to="/rides">
              Rides
            </Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/account">
                Account
              </NavDropdown.Item>
              {localStorage.getItem("carpool_driver") ? (
                <NavDropdown.Item
                  as={Link}
                  to="/login"
                  onClick={() => {
                    localStorage.removeItem("carpool_driver");
                    navigate("/", { replace: true });
                  }}
                >
                  Logout
                </NavDropdown.Item>
              ) : (
                ""
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
