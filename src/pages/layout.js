import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Layout = () => {
    return (
        <div>
          <Navbar>
            <Navbar.Brand className="navbar-item">React Collections</Navbar.Brand>
            <Nav>
              <NavLink className="navbar-item navbar-link" to="/">Home</NavLink>
              <NavDropdown className="dropbtn" 
                title={<span style={{color: "white"}}>Applications</span>}>
                  <NavDropdown.Item href="/counter">Counter</NavDropdown.Item>
                  <NavDropdown.Item href="/todo">To-Do</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>

          <Outlet />
        </div>
    )
}

export default Layout;