import React from "react";

import { Container,Row,Col,Form,Button,Card } from "react-bootstrap";
import './new.css'


function Newhrreg(){
    return(
        <>
        <Container fluid className="bgimglogin  ">
            <Container className="py-lg-2 ">
                <p className="invisible">-</p>
                {/* <p className="invisible my-2">-</p> */}
                <Row className=" justify-content-center">
                    <Col lg={6} className="py-lg-5 ">

                        <Row className="mt-lg-4">
                        <p className="invisibe mb-lg-5">-</p>

                            <Col xs></Col>
                            <Col xs={2} md={2} className="mt-lg-5 mb-lg-5 "><b><i className=" mt-5 fa-solid fa-users fs-1 text-end loginhead"></i></b></Col>
                            <Col xs={8} md={8} className="mt-lg-4">

                                <h2 className="text-start mt-lg-5 "><b className="loginhead">Job Portal</b></h2>
                                <p className="text-start">Find Your Perfect Workers</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="loginbox rounded-4 py-5">
                        <h3 className="text-center  "><b>Hr Registration</b></h3>
                        <Form className="px-3">
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        name='name' 
                                        size="lg"
                                        // placeholder="Ente your name" 
                                        required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Company</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        name='company' 
                                        size="lg" 
                                        required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>About me</Form.Label>
                                        <Form.Control as="textarea"  type="text" name='about' size="lg" rows={1} required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control type="text" name='contact' size="lg" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name='email' size="lg" required />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-4">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name='password' size="lg" required />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={6} lg={7}>
                                <p>Do you have account <a href=""><b>Login</b></a></p>
                                </Col>
                                <Col xs={6} lg={5} className="text-end">
                                    <a type='submit' className=" px-md-4 border-0 w-50 rounded-5 btn-grad">
                                    Register
                                    </a>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}export default Newhrreg