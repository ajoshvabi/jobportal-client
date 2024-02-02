import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Login() {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    // lo
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });


      if (response.status === 201) {
        toast("Login successfully");
        console.log('Login successfully.');


        setLoginData({
          email: "",
          password: "",
        });
        const data = await response.json();
        if (data.usertype == 'admin') {
          navigate("/userreg")

        } else if (data.usertype == 'user') {
          navigate("/userhome")

        } else if (data.usertype == 'hr') {
          navigate("/hrhome")
        }

      } else {
        // console.error('Data insertion failed.');
        navigate("/")

        toast.error("Login Failed");

        setLoginData({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Container fluid className="bgimglogin ">
      <Container className=" py-lg-5 ">
        <p className="invisible py-lg-4">-</p>
        {/* <p className="invisible my-2">-</p> */}
        <Row className=" justify-content-center">
          <Col lg={6} className="py-lg-5 mt-lg-5 mt-5 ">
            <Row className="mt-lg-4">
              <Col xs className='d-none d-lg-block '></Col>
              <Col xs={3} md={2} className="mt-lg-3 mt-4 d-flex justify-content-center "><b><i className=" mt-lg-5   fa-solid fa-users fs-1 text-end loginhead"></i></b></Col>
              <Col xs={8} md={8}>
                <h2 className="text-start mt-lg-5 ">
                  <b className="loginhead">Job Portal</b></h2>
                <p className="text-start">Find Your Perfect Job</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} className="loginbox rounded-4 py-5">
            <h3 className="text-center  "><b>Log in</b></h3>
            <Form className="px-3" onSubmit={handleSubmit} >
              <Form.Group className="mb-4">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' size="lg" value={loginData.email} onChange={handlechange} required />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' size="lg" value={loginData.password} onChange={handlechange} required />
              </Form.Group>
              <Row>
                <Col xs={6} lg={7}>
                  <p>Don't have account <a href="" className="text-decoration-none "><Link to='/userreg' className="text-decoration-none "><b>sign up</b></Link></a></p>
                </Col>
                <Col xs={6} lg={5} className="text-center">
                  <Button type='submit' className=" px-md-4 border-0  rounded-5 btn-grad">
                    Sign in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Container>



  );
}

export default Login;
