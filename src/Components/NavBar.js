import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import '../nav.css';

function NavBar() {
  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)
  const NAVBAR_HEIGHT = 60;

  const changeBackground = () => {
    console.log(window.scrollY);
    console.log(navbar);
    if (window.scrollY >= NAVBAR_HEIGHT) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <Navbar data-bs-theme="dark" fixed='top' expand="lg" className={navbar ? "bg-body-tertiary navbar-custom active" : "bg-body-tertiary navbar-custom"}>
      <Container>
        <Navbar.Brand href="/">Space Noob</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/blogs">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;