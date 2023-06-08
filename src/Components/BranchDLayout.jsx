import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from "./Sidebar";

import CallIcon from '@mui/icons-material/Call';
import DescriptionIcon from '@mui/icons-material/Description';
import Termscondition from "./Termscondition";

const BranchDLayout = () =>{
    return(
        <>
        <Container fluid>
            <Row>

                <Col md={3} className="d-none d-md-block" >
                    <Sidebar></Sidebar>
                </Col>

                <Col md={9} xs={12}>
                
                    <div className="layoutmargin">
                    <h6>Contact Details</h6>
                    <Row>

                        <Col xs={6} sm={6} md={3}>
                            <p>Company Name</p>
                            <p>Company Punchline</p>
                            <p>Phone</p>
                            <p>Mobile 1</p>
                            <p>Mobile 2</p>
                        </Col>

                        {/* Answers */}
                        <Col xs={6} sm={6} md={3} className="answers">
                            <p>Default Associated Company</p>
                            <p>Company Punchline</p>
                            <p>Phone</p>
                            <p>{<CallIcon/>}Mobile 1</p>
                            <p>{<CallIcon/>}Mobile 2</p>
                        </Col>


                        <Col xs={6} sm={6} md={3}>
                            <p>Manager Name</p>
                            <p>Website</p>
                            <p>GST No.</p>
                            <p>Email</p>
                            <p>Company Profile</p>
                        </Col>

                         {/* Answers */}
                        <Col xs={6} sm={6} md={3} className="answers">
                            <p>Lalit kumar</p>
                            <p>www.xyz.com</p>
                            <p>busdguf154ds</p>
                            <p>xyz@gmail.com</p>
                            <p>{<DescriptionIcon/>}</p>
                        </Col>

                    </Row>
                    </div>


                    <div className="layoutmargin">
                    <h6>Branch Address</h6>
                        <Row>

                        <Col xs={6} sm={6} md={3}>
                            <p>Address</p>
                            <p>State</p>
                          
                        </Col>

                        {/* Answers */}
                        <Col xs={6} sm={6} md={3} className="answers">
                            <p>4141 Sector 15B</p>
                            <p>Haryana</p>
                          
                        </Col>


                        <Col xs={6} sm={6} md={3}>
                            <p>Landmark</p>
                            <p>City</p>
                            <p>Zip Code</p>
                           
                        </Col>

                         {/* Answers */}
                        <Col xs={6} sm={6} md={3} className="answers">
                            <p>12312 sctor AB</p>
                            <p>Gurgaon</p>
                            <p>110054</p>
                           
                        </Col>

                    </Row>
                    </div>



                    <div className="layoutmargin">
                    <h6>Account Detail</h6>
                        <Row>

                        <Col xs={6} sm={6} md={3}>
                            <p>Bank Name</p>
                            <p>Account Name</p>
                            <p>Account No.</p>
                            <div className="foricdiv"><img src={process.env.PUBLIC_URL + '/images/Google_pay-Logo.wine.svg'} height={60} width={60} alt="" /></div>
                          
                        </Col>

                        {/* Answers */}
                        <Col xs={6} sm={6} md={3} className="answers">
                            <p>State Bank of India</p>
                            <p>DHL India</p>
                            <p>115677854469</p>
                            <p>8529637415</p>
                          
                        </Col>


                        <Col xs={6} sm={6} md={3}>
                            <p>IFSE Code</p>
                            <p>UPI ID</p>
                            <div className="foricdiv"><img src={process.env.PUBLIC_URL + '/images/PhonePe-Logo.wine.svg'} height={100} width={100} alt="" /></div>
                            <div className="foricdiv"><img src={process.env.PUBLIC_URL + '/images/Paytm-Logo.wine.svg'} height={80} width={80} alt="" /></div>
                           
                        </Col>

                         {/* Answers */}
                        <Col xs={6} sm={6} md={3} className="answers">
                            <p>6598sdrz6es468</p>
                            <p>84525778@ypl</p>
                            <p>8529637415</p>
                            <p>8529637415</p>
                           
                           
                        </Col>

                    </Row>
                    </div>

                   <div className="layoutmargin">
                   <Termscondition/>
                   </div>

                </Col>

            </Row>
        </Container>
        </>
    )
}


export default BranchDLayout;