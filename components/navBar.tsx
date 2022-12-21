import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar className='bg-orange-500'>
        <Container>

          <Navbar.Brand className='fs-1 fw-bold text-light'> Fordastore </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="/home" className='fs-5 ms-5'> Home </Nav.Link>
            <Nav.Link href="/" className='fs-5 ms-5'> Log-out </Nav.Link>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar