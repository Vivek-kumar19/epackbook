import React from "react";
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
const Login = () =>{
    return(
        <>
         <div className="login_bg py-5">
<Container className="bg_white px-5">
    <Row>
        <Col md={4} className="px-2">
        <h4 className="py-5 ">Log In</h4>
        <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Enter Mobile Number </Form.Label>
        <Form.Control type="number" placeholder="9874xxxxxx" />
      </Form.Group>
      
      <Form.Group className="mb-3 pt-3" >
        <div className="frgt_pswd"><Form.Label>Enter Password </Form.Label> <span className="cl_green">Forgot Password?</span></div>
        <Form.Control type="text" placeholder="Enter 6 character or more" />
      </Form.Group>
      
      <Form.Group className="mb-3 pt-3" >
        <Form.Check  className="cl_light rm_me" type="switch" id="custom-switch" label="Remember me" />
      </Form.Group>


      <Button type="submit" className="mt-3 py-2" style={{backgroundColor: '#00A1E5',width:'100%'}} >Login</Button>

      <div className="loginwith my-4"><span></span> <div className="cl_light">or login with</div> <span></span> </div>

      <div className="loginwith_ic"> 

      <img src={process.env.PUBLIC_URL + '/images/googleIcon.svg'} alt="login img" width='30' />
      <img src={process.env.PUBLIC_URL + '/images/facebookIcon.svg'} alt="login img" width='40' />

       </div>


    </Form>
        </Col>

        <Col md={8} className="py-5 py-xl-2 ">
        <div className=" forlogimg">
        <img className="logimg d-none d-md-block" src={process.env.PUBLIC_URL + '/images/loginImg.svg'} width='90%' alt="login img" />
        </div>
        </Col>
    </Row>
</Container>
         </div>
        </>
    )
}

export default Login;