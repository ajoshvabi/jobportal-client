import React,{ useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hrreg() {
  const [userData, setUserData] = useState({
    name: "",
    about: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(userData);
  };

  const handleSubmit = async (e) => {
    console.log("haiii");
    e.preventDefault();
    console.log(userData);
    try {
      const response = await fetch('/hrreg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 201) {
        console.log('Data inserted successfully.');
        setUserData({
          name: "",
          about: "",
          email: "",
          password: "",
          contact:"",
          company:""
        });
      } else {
        console.error('Data insertion failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    // <Container>
    //   <Row className="vh-100 d-flex justify-content-center align-items-center mt-5">
    //     <Col md={8} lg={6} xs={12}>
    //       <Card className="px-4">
    //         <Card.Body>
    //           <div className="mb-3 mt-md-4">
    //             <h2 className="fw-bold mb-2 text-center text-uppercase">
    //               Profile
    //             </h2>
    //             <div className="mb-3">
    //               <Form onSubmit={handleSubmit} >
    //                 <Form.Group className="mb-3" controlId="Name">
    //                   <Form.Label className="text-center">Name</Form.Label>
    //                   <Form.Control
    //                     type="text"
    //                     placeholder="Enter Name"
                        // name="name"
                        // value={userData.name}
                        // onChange={handleInputChange}
    //                     required
    //                   />
    //                 </Form.Group>

    //                 <Form.Group className="mb-3" controlId="company">
    //                   <Form.Label className="text-center">Company</Form.Label>
    //                   <Form.Control
    //                     type="text"
    //                     placeholder="Enter Your Stack"
    //                     name="company"
    //                     value={userData.company}
    //                     onChange={handleInputChange}
    //                     required
    //                   />
    //                 </Form.Group>

    //                 <Form.Group className="mb-3" controlId="formBasicAbout">
    //                   <Form.Label>About me</Form.Label>
    //                   <Form.Control
    //                     as="textarea"
    //                     placeholder="About me"
    //                     name="about"
    //                     value={userData.about}
    //                     onChange={handleInputChange}
    //                     required
    //                   />
    //                 </Form.Group>

    //                 <Form.Group className="mb-3" controlId="contact">
    //                   <Form.Label className="text-center">Contact</Form.Label>
    //                   <Form.Control
    //                     type="number"
    //                     placeholder="Enter Your Number"
                        // name="contact"
                        // value={userData.contact}
                        // onChange={handleInputChange}
    //                     required
    //                   />
    //                 </Form.Group>

    //                 <Form.Group className="mb-3" controlId="formBasicEmail">
    //                   <Form.Label className="text-center">
    //                     Email address
    //                   </Form.Label>
    //                   <Form.Control
    //                     type="email"
    //                     placeholder="Enter email"
    //                     name="email"
    //                     value={userData.email}
    //                     onChange={handleInputChange}
    //                     required
    //                   />
    //                 </Form.Group>

    //                 <Form.Group className="mb-3" controlId="formBasicPassword">
    //                   <Form.Label>Password</Form.Label>
    //                   <Form.Control
    //                     type="password"
    //                     placeholder="Password"
                        // name="password"
                        // value={userData.password}
                        // onChange={handleInputChange}
    //                     required
    //                   />
    //                 </Form.Group>

    //                 <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
    //                 <div className="d-grid">
    //                   <Button variant="primary" type="submit" >
    //                     Register
    //                   </Button>
    //                 </div>
    //               </Form>
    //               <div className="mt-3"></div>
    //             </div>
    //           </div>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
    <Container fluid className="bgimglogin  ">
    <Container className="py-lg-2 ">
        <p className="invisible">-</p>
        {/* <p className="invisible my-2">-</p> */}
        <Row className=" justify-content-center">
            <Col lg={6} className="py-lg-5 ">

                {/* <Row className="mt-lg-4">

                    <Col xs></Col>
                    <Col xs={2} md={2} className="mt-lg-5 mb-lg-5 "><b><i className=" mt-5 fa-solid fa-users fs-1 text-end loginhead"></i></b></Col>
                    <Col xs={8} md={8} className="mt-lg-4">

                        <h2 className="text-start mt-lg-5 "><b className="loginhead">Job Portal</b></h2>
                        <p className="text-start">Find Your Perfect Workers</p>
                    </Col>
                </Row> */}
                            <Row className="mt-lg-4">
                            <p className="invisibe mb-lg-5">-</p>

              <Col xs className='d-none d-lg-block '></Col>
              <Col xs={3} md={2} className="mt-lg-4 mt-4 d-flex justify-content-center "><b><i className=" mt-lg-5   fa-solid fa-users fs-1 text-end loginhead"></i></b></Col>
              <Col xs={8} md={8}>
                <h2 className="text-start mt-lg-5 ">
                  <b className="loginhead">Job Portal</b></h2>
                <p className="text-start">Find Your Perfect Job</p>
              </Col>
            </Row>
            </Col>
            <Col lg={6} className="loginbox rounded-4 py-5">
                <h3 className="text-center  "><b>Hr Registration</b></h3>
                <Form className="px-3" onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="name"
                                value={userData.name}
                                onChange={handleInputChange}
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
                                value={userData.company}
                                onChange={handleInputChange}
                                size="lg" 
                                required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>About me</Form.Label>
                                <Form.Control 
                                as="textarea"  
                                type="text" 
                                name="about"
                                value={userData.about}
                                onChange={handleInputChange}
                                size="lg" 
                                rows={1} 
                                required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>Contact</Form.Label>
                                <Form.Control 
                                type="number" 
                                name="contact"
                                value={userData.contact}
                                onChange={handleInputChange} 
                                size="lg" 
                                required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                type="email" 
                                name="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                size="lg" 
                                required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                type="password" 
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange} 
                                size="lg" 
                                required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} lg={7}>
                        <p>Do you have account <a href="" className="text-decoration-none "><b><Link to='/'  className="text-decoration-none ">Login</Link></b></a></p>
                        </Col>
                        <Col xs={6} lg={5} className="text-end">
                        <button type="submit" className="px-md-4 border-0  rounded-5 btn-grad">
                    Register
                  </button>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
</Container>
  );
}

export default Hrreg;
