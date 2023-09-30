import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import '../nav.css';

function NavBar() {
  const [opacity, setOpacity] = useState(0);
  const ref = useRef(null);

  const NAVBAR_ACTIVE = 100;
  const BACKGROUND_COLOR = '#041937';

  const changeBackground = () => {
    let scrollDiff = (1+((window.scrollY-NAVBAR_ACTIVE)/NAVBAR_ACTIVE));
    setOpacity(getBytes(scrollDiff));
  }

  function getBytes(val) {
    if(val >= 1) return 'ff';
    return Math.floor(val * 255).toString(16).padStart(2, '0');
  }

  useLayoutEffect(()=> {
    ref.current.style.setProperty('background-color', `${BACKGROUND_COLOR}${opacity}`, 'important')
  }, [opacity])

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <Navbar ref={ref} data-bs-theme="dark" fixed='top' expand="lg" className= "bg-body-tertiary navbar-custom active">
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