import { Container } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Termscondition from './Termscondition';
import TextField from '@mui/material/TextField';

const btnstyling={
    display :'flex',
    alignItems :'center',
    justifyContent : 'center',
    margin:'20px 0'
}

const FsAddbranch=()=>{

    const [details,setdetails] = useState({
        branchname : "",
        branchmanagername : "",
        mobile1 : "",
        mobile2 : "",
        phone : "",
        email : "",
        address : "",
        landmark : "",
        pincode : "",
        state : "",
        city : "",
        file :"",
        gstno : ""

    });

    const handlechange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setdetails((prev)=>{
            return{...prev,[name] : value}
        })
    }
    const submitdata = (e)=>{
        e.preventDefault();
        console.log(details);
        window.alert("Save succesfully");
    }

    

    return(
        <>
   <div className='form_slot'>
   <Container>
   <Form onSubmit={submitdata}>
      <Row>

        <Col md={6} sm={12}>
        <Form.Label>Branch Name :</Form.Label>
          <Form.Control onChange={handlechange} type='text' name='branchname'  required />
          {/* <TextField fullWidth onChange={handlechange} type='text' name='branchname'  required label="Branch Name" variant='standard' id="fullWidth" /> */}
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>Branch Manager Name :</Form.Label>
          <Form.Control  onChange={handlechange}  type='text' name='branchmanagername' required  />
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>Mobile 1 :</Form.Label>
          <Form.Control type='number' onChange={handlechange}  name='mobile1'  />
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>Mobile 2 :</Form.Label>
          <Form.Control type='number' onChange={handlechange}  name='mobile2' />
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>Phone :</Form.Label>
          <Form.Control type='number' onChange={handlechange}  name='phone' />
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>Email :</Form.Label>
          <Form.Control type='email' onChange={handlechange}  name='email' />
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>Address :</Form.Label>
          <Form.Control type='text' onChange={handlechange}  name='address' />
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>Landmark :</Form.Label>
          <Form.Control type='text' onChange={handlechange}  name='landmark' />
        </Col>


        <Row className="mb-3">
        <Form.Group as={Col}  md={4} sm={12}  controlId="formGridCity" >
          <Form.Label>Pincode :</Form.Label>
          <Form.Control  type='number' onChange={handlechange}  name='pincode' />
        </Form.Group>

        <Form.Group as={Col}  md={4} sm={12}  controlId="formGridState">
          <Form.Label>State :</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={handlechange}  name='state'>
            <option>Choose...</option>
            <option>Delhi</option>
            <option>Delhi</option>
            <option>Delhi</option>
            <option>Delhi</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md={4} sm={12} controlId="formGridState">
          <Form.Label>City :</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={handlechange}  name='city'>
            <option>Choose...</option>
            <option>city</option>
            <option>city</option>
            <option>city</option>
           
          </Form.Select>
        </Form.Group>
      </Row>

      <Col md={6} sm={12}>
        <Form.Label>Company Profile :</Form.Label>
          <Form.Control type='file' onChange={handlechange}  name='file' />
        </Col>

        <Col md={6} sm={12}>
        <Form.Label>GST No. :</Form.Label>
          <Form.Control type='text' onChange={handlechange}  name='gstno' />
        </Col>

        <Termscondition/>


        <Col style={btnstyling}>
        <Button type="reset" className='me-5' variant="outline-secondary">Cancel</Button>
        <Button type='submit' variant="primary">Save</Button>
        </Col>

       
      </Row>
    </Form>
   </Container>
   </div>
        </>
    )
}

export default FsAddbranch;



