import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = (props) => {
  const navigate = useNavigate();
  const account = useSelector(state => state.user.account);
  const isAuthentication = useSelector(state => state.user.isAuthentication);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <NavLink className="navbar-brand" to="/">Quiz</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/users">User</NavLink>
            <NavLink className="nav-link" to="/admins">Admin</NavLink>
          </Nav>
          <Nav>
            {!isAuthentication ?
              <>
                <button className="btn-login" onClick={() => navigate('/login')}>Login</button>
                <button className="btn-signup">Sign up</button>
              </>
              :
              <NavDropdown title={account.username} id="basic-nav-dropdown">
                <NavDropdown.Item>Logout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
