import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LogoutButton } from './logoutButton';

function NavBar() {
  return (
    <>
      <Navbar className=' flex items-center justify-between flex-wrap bg-orange-500 '>
      <Container>

          <Navbar.Brand className='fs-1 fw-bold text-light '> Fordastore </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home" className='fs-5 ms-5 text-light'> Home </Nav.Link>
            <Nav.Link href="/" className='fs-5 ms-5 text-light'> Log-out </Nav.Link>
          </Nav>
          </Container>

      </Navbar>
    </>
  );
}

export default NavBar