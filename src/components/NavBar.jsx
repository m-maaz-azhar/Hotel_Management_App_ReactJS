import React from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt , faUserPlus,faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return (
        <div>
            <Navbar bg="light" className="mx3" expand="lg">
                <Navbar.Brand href="/" className="text-success"><strong>HOTEL MANAGEMENT APP</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-item nav-link active" to="/"></Link>
                    </Nav>
                    <Form inline>
                        {
                        sessionStorage.getItem("login_session") === true ? <FontAwesomeIcon icon={faUserCircle}/> :  <> 
                        <FontAwesomeIcon icon={faSignInAlt} className="text-success ml-3" size={"lg"}/>
                        <Link className="nav-item nav-link text-success" to="/login">Login</Link>
                        <FontAwesomeIcon icon={faUserPlus} className="text-success" size={"lg"}/>
                        <Link className="nav-item nav-link text-success" to="/signup">Sign Up</Link></>
                        }
                      
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
