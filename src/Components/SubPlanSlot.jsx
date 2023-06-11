import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "./Sidebar";
import HeaderThree from "./HeaderThree";
import AccSubPlanSlot from "./AccSubPlanSLot";





const SubPlanSlot = () =>{

        const Accordionstyle = {
            borderRadius : 'none',
            border: 'unset'
        }

    return(
        <>
        <Container fluid>
            <Row>
              
            <Col md={3} className="d-none d-md-block" >
                    <Sidebar permission='no_margin' ></Sidebar>
                </Col>

                <Col md={9} xs={12}>
                <HeaderThree tittle='Subscription Plans' />


                <div className="layoutmargin" style={{padding: 'unset'}}>
          <AccSubPlanSlot/>
                </div>


                </Col>


            </Row>
        </Container>
        </>
    )
}

export default SubPlanSlot;