import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function HeaderThree(props) {
  return (
    <>
      <Navbar className='wh_color'>
        <Container fluid>
          <Navbar.Brand className='page_title' href="#home">{props.tittle}</Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  );
}

export default HeaderThree;