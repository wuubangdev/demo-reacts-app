import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/users">User</Link>
            <Link className="nav-link" to="/admins">Admin</Link>
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item>Login</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Item>Manager</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
