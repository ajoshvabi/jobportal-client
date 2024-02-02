// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// import { Link } from "react-router-dom";

// function Userreg() {
//   const [userData, setUserData] = useState({
//     name: "",
//     about: "",
//     email: "",
//     password: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('/userreg', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });

//       if (response.status === 201) {
//         console.log('Data inserted successfully.');
//         setUserData({
//           name: "",
//           about: "",
//           email: "",
//           password: "",
//           contact:"",
//           stack:""
//         });
//       } else {
//         console.error('Data insertion failed.');
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     }
//   };

//   return (
//     <Container fluid className="bgimglogin  ">
//     <Container className="py-lg-2 ">
//         <p className="invisible">-</p>
//         {/* <p className="invisible my-2">-</p> */}
//         <Row className=" justify-content-center">
//             <Col lg={6} className="py-lg-5 ">

//                 <Row className="mt-lg-4">
//                 <p className="invisibe mb-lg-5">-</p>

//                     <Col xs></Col>
//                     <Col xs={2} md={2} className="mt-lg-5 mb-lg-5 "><b><i className=" mt-5 fa-solid fa-users fs-1 text-end loginhead"></i></b></Col>
//                     <Col xs={8} md={8} className="mt-lg-4">

//                         <h2 className="text-start mt-lg-5 "><b className="loginhead">Job Portal</b></h2>
//                         <p className="text-start">Find Your Perfect Job</p>
//                     </Col>
//                 </Row>
//             </Col>
//             <Col lg={6} className="loginbox rounded-4 py-5">
//                 <h3 className="text-center  "><b>User Registration</b></h3>
//                 <Form className="px-3" onSubmit={handleSubmit} >
//                     <Row>
//                         <Col>
//                             <Form.Group className="mb-4">
//                                 <Form.Label>Name</Form.Label>
//                                 <Form.Control 
//                                 type="text" 
//                                 name="name"
//                                 value={userData.name}
//                                 onChange={handleInputChange}
//                                 size="lg"
//                                 required />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Group className="mb-4">
//                                 <Form.Label>Stack</Form.Label>
//                                 <Form.Control 
//                                 type="text" 
//                                 name="stack"
//                                 value={userData.stack}
//                                 onChange={handleInputChange}
//                                 size="lg" 
//                                 required />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col>
//                             <Form.Group className="mb-4">
//                                 <Form.Label>About me</Form.Label>
//                                 <Form.Control 
//                                 as="textarea"  
//                                 type="text" 
//                                 name="about"
//                                 value={userData.about}
//                                 onChange={handleInputChange} 
//                                 size="lg" 
//                                 rows={1} 
//                                 required />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Group className="mb-4">
//                                 <Form.Label>Contact</Form.Label>
//                                 <Form.Control 
//                                 type="number" 
//                                 name="contact"
//                                 value={userData.contact}
//                                 onChange={handleInputChange}
//                                 size="lg" 
//                                 required />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col>
//                             <Form.Group className="mb-4">
//                                 <Form.Label>Email address</Form.Label>
//                                 <Form.Control 
//                                 type="email" 
//                                 name="email"
//                                 value={userData.email}
//                                 onChange={handleInputChange} 
//                                 size="lg" 
//                                 required />
//                             </Form.Group>
//                         </Col>
//                         <Col>
//                             <Form.Group className="mb-4">
//                                 <Form.Label>Password</Form.Label>
//                                 <Form.Control 
//                                 type="password" 
//                                 name="password"
//                                 value={userData.password}
//                                 onChange={handleInputChange}
//                                 size="lg"
//                                 required />
//                             </Form.Group>
//                         </Col>
//                     </Row>
//                     <Row>
//                         <Col xs={6} lg={7}>
//                         <p>Don't have account <a href="" className="text-decoration-none "><b><Link to='/hrreg' className="text-decoration-none ">siginup as HR</Link></b></a></p>
//                         </Col>
//                         <Col xs={6} lg={5} className="text-center">
//                         <a type='submit' onClick={handleSubmit} className=" px-md-4 border-0 w-50 rounded-5 btn-grad">
//                             Register
//                             </a>
//                         </Col>
//                     </Row>
//                 </Form>
//             </Col>
//         </Row>
//     </Container>
// </Container>
//   );
// }

// export default Userreg;




import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm,reset } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Userreg() {
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();

  const onSubmit1 = async (data) => {
    try {
      const response = await fetch('/userreg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.status === 201) {
        toast("Registration Success");
        reset();


      } else {
        // console.error('Data insertion failed.');
        toast("Registration Failed");

      }

      // Your form submission logic here
      console.log(data);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <Container fluid className="bgimglogin">
      <Container className="py-lg-2">
        <p className="invisible">-</p>
        <Row className="justify-content-center">
          <Col lg={6} className="py-lg-5 mt-lg-5">
          <Row className="mt-lg-4">
          <p className="invisibe mb-lg-4">-</p>

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
            <h3 className="text-center">
              <b>User Registration</b>
            </h3>
            <Form className="px-3" onSubmit={handleSubmit(onSubmit1)}>
              <Row>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      size="lg"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Stack</Form.Label>
                    <Form.Control
                      type="text"
                      name="stack"
                      size="lg"
                      {...register("stack", { required: "Stack is required" })}
                    />
                    {errors.stack && <p className="text-danger">{errors.stack.message}</p>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>About me</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="about"
                      size="lg"
                      rows={1}
                      {...register("about", { required: "About is required" })}
                    />
                    {errors.about && <p className="text-danger">{errors.about.message}</p>}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="number"
                      name="contact"
                      size="lg"
                      {...register("contact", { required: "Contact is required" })}
                    />
                    {errors.contact && <p className="text-danger">{errors.contact.message}</p>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      // type="email"
                      name="email"
                      size="lg"
                      {...register("email", { required: "Email is required",pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address"
                      } })}
                    />
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      size="lg"
                      {...register("password", { required: "Password is required", minLength: {
                        value: 6,
                        message: "Password contain six charactors"
                      } })}
                    />
                    {errors.password && <p className="text-danger">{errors.password.message}</p>}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={6} lg={7}>
                  <p>
                    Don't have an account{" "}
                    <Link to="/hrreg" className="text-decoration-none">
                      <b>signup as HR</b>
                    </Link>
                  </p>
                </Col>
                <Col xs={6} lg={5} className="text-center">
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

export default Userreg;





// AIzaSyAfasK-UbllRdyeuyZkvJfYynaydVPLzGo




