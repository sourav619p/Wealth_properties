import React from "react";
import {Nav,Navbar,Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Logo from '../Pictures/Logo.png';
import Group6 from '../Pictures/Group 6.png';
import Group7 from '../Pictures/Group 7.png';
import '../App.css'

function Header(){
    return(
        <>
        <div className="violetshade"></div>
        <div className="redshade"></div>
        <div className="blueshade"></div>
        <div className="outerDesign">
        <Navbar>
        <Container>
            <img className="mx-auto img-fluid" src={Logo} alt="" />
        </Container>
        <Container>
          <Navbar.Brand href="#home" >HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">PROFILE</Nav.Link>
            <Nav.Link href="#features">REPORTS</Nav.Link>
            <Nav.Link href="#pricing">INSIGHTS</Nav.Link>
          </Nav>
        </Container>
        <Container className=" d-flex justify-content-center align-items-center">
        <Button className="rounded-0" variant="outline-dark" style={{fontSize:'1rem',fontWeight:'500'}}>LOGIN</Button>
        <div className="mx-1"></div>
        <Button className="rounded-0" variant="outline-dark" style={{fontSize:'1rem',fontWeight:'500'}}>GET STARTED</Button>    
        </Container>
      </Navbar>  
            <div className="row section">
                <div className="row">
                    <div className="col-md-1 my-auto">
                    </div>
                    <div className="col-md-4 my-auto ps-md-5">
                    <h1>BUY YOUR</h1>
                    <p className="fs-1 fw-bold">DREAM HOME</p>
                    <h1>IN KYIV!</h1>
                    <Button className="getstartbtn" variant="secondary" style={{fontSize:'0.80vw',fontWeight:'500'}}>GET STARTED</Button>
                    </div>
                    <div className="col-md-6 my-auto position-relative">
                    <div className="mainpict">
                      <img src={Group6} alt="" className="img-fluid" />
                    </div>
                    <div className="subpict">
                      <img src={Group7} alt="" className="img-fluid" />
                    </div>
                    </div>
                </div>
            </div>
      </div>
      </>
    )
}

export default Header;