import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LogoutButton } from './logoutButton';

function NavBar() {
  return (
    <>
      <Navbar className="bg-gradient-to-r from-orange-500 to-yellow-500">
        <Navbar.Brand className="fs-1 mx-4 font-sans fw-bold text-light ">
          Fordastore
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home" className="fs-5 ms-5 text-light">
            Home
          </Nav.Link>
          <Nav.Link>
            <LogoutButton />
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default NavBar;
