import React from "react";
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

const TopNav = () =>
    <Navbar inverse collapseOnSelect>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#brand">React-Bootstrap</a>
        </Navbar.Brand>
        <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
        {/* <Nav>
            <NavItem eventKey={1} href="#">
                Link
            </NavItem>
            <NavItem eventKey={2} href="#">
                Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
        </Nav> */}
        <Nav pullRight>
            <NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Leave Classroom</MenuItem>
                <MenuItem eventKey={3.2} href="signup">Sign Up</MenuItem>
                <MenuItem eventKey={3.3}href="login">Log in</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="/logout">Log Out</MenuItem>
            </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Navbar>;

export default TopNav;