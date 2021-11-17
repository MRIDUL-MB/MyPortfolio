import { Navbar, Container, Nav } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import './component.css';

export default function NavbarComponent() {
  return (
    <Navbar expand='sm' className='navbar-component'>
      <Container className=' justify-content-center d-grid '>
        <NavbarToggle aria-controls='navbarScroll'>
          <i className='fa-solid fa-bars'></i>
        </NavbarToggle>
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            style={{ maxHeight: '120px' }}
            navbarScroll
            className='text-center'
          >
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#project'>Project</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
