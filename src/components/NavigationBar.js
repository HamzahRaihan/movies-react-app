import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>MOVIES</Navbar.Brand>
          <Nav>
            <Nav.Link>
              <NavLink className="nav-link" to="/">
                Homepage
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-link" to="/trending">
                Trending
              </NavLink>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
