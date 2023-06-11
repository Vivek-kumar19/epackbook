import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const styling={
    fontSize: '16px',
    color:'#000',
    fontWeight:'600'
}
const stylingforcity={
    fontSize:'12px',
    fontWeight:'600',
    color:'#000'
}



function HeaderTwo(props) {
  return (
 <>
      <Navbar>
      <Container fluid>
      <Navbar.Brand style={styling} href="#"><ArrowBackIcon/></Navbar.Brand>
      <Navbar.Brand  href="#"><img src= {process.env.PUBLIC_URL +  props.imgSrc} alt={props.imgSrc}></img></Navbar.Brand>
        {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}

        <div>
        <Navbar.Brand style={styling} href="#">{props.branchName}</Navbar.Brand> <br/>
        <span style={stylingforcity} href="#">{props.city}</span> 
        </div>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <h6 className="d-flex ms-auto">Branch ID : {props.BranchId}</h6>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default HeaderTwo;