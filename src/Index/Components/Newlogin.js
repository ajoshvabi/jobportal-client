import React from "react";

import { Container,Row,Col,Form,Button,Card } from "react-bootstrap";
import './new.css'


function Newlogin(){
    return(
        <>
        <Container fluid className="bgimglogin  ">
            <Container className=" py-md-5 ">
                <p className="invisible py-md-4">-</p>
                {/* <p className="invisible my-2">-</p> */}
                <Row className=" justify-content-center">
                    <Col lg={6} className="py-md-5 ">
                        <Row className="mt-5">
                            <Col xs></Col>
                            <Col xs={2} md={2} className="mt-4"><b><i className=" mt-5 fa-solid fa-users fs-1 text-end loginhead"></i></b></Col>
                            <Col xs={8} md={8}>
                                <h2 className="text-start mt-5 "><b className="loginhead">Job Portal</b></h2>
                                <p className="text-start">Find Your Perfect Job</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} className="loginbox rounded-4 py-5">
                        <h3 className="text-center  "><b>Log in</b></h3>
                        <Form className="px-3">
                            <Form.Group className="mb-4">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' size="lg" required />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name='password' size="lg" required />
                            </Form.Group>
                            <Row>
                                <Col xs={6} lg={7}>
                                <p>Don't have account <a href=""><b>siginup</b></a></p>
                                </Col>
                                <Col xs={6} lg={5} className="text-center">
                                    <a type='submit' className=" px-md-4 border-0 w-50 rounded-5 btn-grad">
                                    Sign in
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
}export default Newlogin