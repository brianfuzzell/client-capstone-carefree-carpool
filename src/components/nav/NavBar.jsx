import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    /* 
    <>
    <ul>
      <li>
        <Link to="/schedule">Schedule</Link>
      </li>
      <li>
        <Link to="/rides">Rides</Link>
      </li>
      {/* TODO:<li>
        <Link>Settings dropdown menu</Link>
      </li>
    </ul>
    </> 
    */
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Carefree Carpool</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/rides">Rides</Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown">
              <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              {/* TODO: Continue here */}
              <NavDropdown.Item href="#action/3.2">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

  );
};
