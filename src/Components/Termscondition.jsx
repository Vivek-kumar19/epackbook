import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


const Termscondition =()=>{
    return(
        <>
        <Col md={12} sm={12}>
        <div className='terms_condition'>
        <Form.Label>Company terms and Conditions</Form.Label> <br/>

        <Form.Label className='color_bl'>This Content will be use while creating quotation template</Form.Label>
        
        </div>
        </Col>
        </>
    )
}

export default Termscondition;