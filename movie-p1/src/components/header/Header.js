import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import '../header/Header.css'
import React from "react";
import { useNavigate } from "react-router-dom";


const Header = () => {

    const navigate = useNavigate();
    
    const nag = (value) => {
        navigate(value);
    };

    return (
        <div className="header">
            <Navbar bg="dark" variant="dark" expand= "lg">
                <Container fluid>
                    <Navbar.Brand href="/home" style={{"color":'gold'}}>
                        <FontAwesomeIcon icon={faVideoSlash}></FontAwesomeIcon>Gold
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{maxHeight: '100px'}} navbarScroll>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/watchList" >Watch List</NavLink>
                        </Nav>
                        <Button variant="outline-info" className="me-2" onClick={() => nag(`/login`)}>Login</Button>
                        <Button variant="outline-info" className="me-2" onClick={() => nag(`/signup`)}>Register</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;