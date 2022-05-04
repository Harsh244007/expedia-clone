import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import hotel from "../../../assets/icons/hotel.png";
import car from "../../../assets/icons/car-wash.png";
import plane from "../../../assets/icons/plane.png";
import tour from "../../../assets/icons/tour.png";
import activity from "../../../assets/icons/activity.png";
import "./Navbar.css";
export const NavbarComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="More Travel" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  {" "}
                  <img
                    alt="hotel logo"
                    src={hotel}
                    className="nav-icons"
                  />{" "}
                  Stays
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  {" "}
                  <img alt="flight logo" src={plane} className="nav-icons" />
                  Flights
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {" "}
                  <img alt="car logo" src={car} className="nav-icons" />
                  Cars
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {" "}
                  <img alt="tour logo" src={tour} className="nav-icons" />
                  packages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {" "}
                  <img
                    alt="activity logo"
                    src={activity}
                    className="nav-icons"
                  />
                  Holiday activities
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Deals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Groups &amp; meetings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Mobile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">English</Nav.Link>
              <Nav.Link href="#deets">List Your Property</Nav.Link>
              <Nav.Link href="#deets">Support</Nav.Link>
              <Nav.Link href="#deets">Trips</Nav.Link>
              <Nav.Link href="#deets">Sign in</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
