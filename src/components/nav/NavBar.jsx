import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <span
          className="material-symbols-outlined"
          style={{
            fontSize: "42px",
            color: "#7ba591",
            fontVariationSettings: `'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
          }}
        >
          directions_car
        </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="nav-font" as={Link} to="/schedule">
              Schedule
            </Nav.Link>
            <Nav.Link className="nav-font" as={Link} to="/rides">
              Rides
            </Nav.Link>
            <NavDropdown className="nav-font" title="Settings" id="collapsible-nav-dropdown">
              <NavDropdown.Item className="nav-font" as={Link} to="/account">
                Account
              </NavDropdown.Item>
              {localStorage.getItem("carpool_driver") ? (
                <NavDropdown.Item
                  as={Link}
                  className="nav-font"
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
