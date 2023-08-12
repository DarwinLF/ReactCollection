import { Outlet, Link, NavLink } from "react-router-dom";
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
                  <NavDropdown.Item><NavLink className="navbar-link" to="/counter">Counter</NavLink></NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
          {/* <Nav className="navbar">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown className="dropdown-btn" title="Applications" id="basic-nav-dropdown">
              <NavDropdown.Item className="dropdown-item" href="/counter">Counter</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}

          <Outlet />
        </div>
    )
}

export default Layout;