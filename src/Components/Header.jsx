import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventNoteIcon from '@mui/icons-material/EventNote';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='navbar bg_color '>
      <Container fluid>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Leads</Nav.Link>
            <Nav.Link href="#pricing">Templates</Nav.Link>
            
          </Nav>
         
          <Nav>
          <Nav.Link href="#"><SearchIcon/></Nav.Link>
            <Nav.Link href="#"><NotificationsActiveIcon/></Nav.Link>
            <Nav.Link href="#"><EventNoteIcon/></Nav.Link>
            <Nav.Link href="#"><StorefrontIcon/></Nav.Link>
            <Nav.Link href="#"><SettingsIcon/></Nav.Link>
            <Nav.Link className='br_l' href="#"><AccountCircleIcon/></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;





