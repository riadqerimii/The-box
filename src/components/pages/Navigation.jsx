import { Navbar, Container, Nav } from "react-bootstrap";
import PropTypes from "prop-types";

const Navigation = ({ logo }) => {
  return (
    <Navbar
      className="text-center"
      bg="white"
      expand="lg"
      variant="light"
      id="nav"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top m-1"
            alt="Your Logo"
          />
          The Box
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#reputation">About us</Nav.Link>
            <Nav.Link href="#services">Service</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#subscribe" className="contact">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Navigation.propTypes = {
  logo: PropTypes.string.isRequired,
};

export default Navigation;
