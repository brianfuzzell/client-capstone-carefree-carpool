import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Carefree Carpool</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/rides">Rides</Nav.Link>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              {localStorage.getItem("carpool_driver") ? (
                <NavDropdown.Item
                  href="/login"
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
