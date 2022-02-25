import React from 'react';
import {  Container, Form, FormControl, Nav ,Navbar, NavDropdown, } from 'react-bootstrap';
import { useHistory} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {logout} from "../../actions/userActions"

const Header = ({setSearch}) => {

const history= useHistory();
const dispatch=useDispatch();
const userLogin =useSelector((state)=> state.userLogin);
const {userInfo}= userLogin;

const logoutHandler=()=>{
  dispatch(logout());
  history.push("/")
}


  return (
    <Navbar bg="primary" expand="lg" variant="light">
    <Container>
      <Navbar.Brand href="/" >
         NOTE ZIPPER
         </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="m-auto">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setSearch(e.target.value)}
          />
          
        </Form>
        </Nav>
       {userInfo ?<Nav >
          <Nav.Link href="/mynotes">
           My notes
            </Nav.Link>
          
          <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
           
            
            <NavDropdown.Divider />
            <NavDropdown.Item 
            onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>:<Nav> <Nav.Link href="/login">
             <strong style={{fontSize:"17px" }}> LOGIN </strong>
            </Nav.Link></Nav>}
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header