import React from "react";

import Button from '@mui/material/Button';
import Accordion from 'react-bootstrap/Accordion';
import Checkbox from '@mui/material/Checkbox';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


const AccSubPlanSlot = () =>{
    return(
        <>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>

<Accordion.Item eventKey="0" style={Accordionstyle}>
  <Accordion.Header>Basic</Accordion.Header>
  <Accordion.Body>
      <Form>
      <div className="modules">
      <h6 className="br_unset">Modules</h6>

      
      <div className="modules_child">
      <h6>Quotation</h6>
      <Form.Check aria-label="option 1" />
      </div>
      <div className="hrline"></div>

      <Container className="py-4 bg-eee" >
          <Row>
              <Col>
              <Table striped bordered hover>
<thead>
  <tr>
    
    <th>FEATURES</th>
    <th></th>
    <th>AMOUNT</th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>ADD</td>
    <td><Form.Check aria-label="option 1" /></td>
    <td><Form.Control  type='text' /></td>

  </tr>
  <tr>
    <td>DELETE</td>
    <td><Form.Check aria-label="option 1" /></td>
    <td><Form.Control  type='text' /></td>
  </tr>

  <tr>
    <td>EDIT</td>
    <td><Form.Check aria-label="option 1" /></td>
    <td><Form.Control  type='text' /></td>
  </tr>
 
</tbody>
</Table>


     <Row>
      <Col md={3}> <div className="modules_child bg_white p-2">INVOICE <Form.Check aria-label="option 1" /></div></Col>
      <Col md={3}> <div className="modules_child bg_white p-2">BILTY <Form.Check aria-label="option 1" /></div></Col>
      <Col md={3}> <div className="modules_child bg_white p-2">MONEY RECEIPT <Form.Check aria-label="option 1" /></div></Col>
      <Col md={3}> <div className="modules_child bg_white p-2">CAR CONDITION <Form.Check aria-label="option 1" /></div></Col>
     </Row>
      
              </Col>
          </Row>
          
      </Container>

      <Button className="my-3" variant="contained">Submit</Button>
    </div>



      </Form>
  </Accordion.Body>
</Accordion.Item>



</Accordion>
</>
    )
}


export default AccSubPlanSlot;