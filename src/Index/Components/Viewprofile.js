import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card, Image, Modal } from "react-bootstrap";
import Userresponsivenav from "./Userresponsivenav";

import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'
function Viewprofile() {
    const { loginid } = useParams();
    const [profiledata,setProfileData]=useState({})
    const [post,setPostData]=useState([])
    useEffect(()=>{
        console.log("profile i",loginid);
        async function userprofiledata() {
            try {
                console.log("my home");

                const response = await fetch(`/userprofiledata/${loginid}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
    
                );
                const data = await response.json();
                console.log(data);
                setProfileData(data.profiledata)
                setPostData(data.postdata)
                console.log(profiledata);
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }
        userprofiledata()
    },[])

    function view(index){
        // console.log("post index",postdata[index]);
      
        Swal.fire({
            title: post[index].role,
            // text: post[index].location,
            html: `<small>Loction:${post[index].location}</small> 
            <br> 
            Description:${post[index].description}
            `,
            imageUrl:post[index].photo,
            imageWidth: 400,
            imageHeight: 300,
            imageAlt: 'Custom image',
            showCancelButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              // Your logic for confirmed action
            } 
          });
        }
          

  return (

    <Container fluid className=" object-fit-cover " style={{ backgroundImage: `url(/uploads/${profiledata.cover})`, width: `100%`, maxHeight: `11rem` }}>
      <Userresponsivenav />
      <Row>
        <Col lg={1}></Col>
        <Col>
          <Row className="">
            <Col lg={3} className=" d-flux justify-content-center  positionimg fi">
              <div>
                <Image src={`/uploads/${profiledata.profile}`} className=" profilepagepic" roundedCircle  ></Image>
              </div>
            </Col>
            <Col lg={7}></Col>
          </Row>
          <Row>
            <Col lg={3} className=" d-flux justify-content-center  positionimg">
              <div className="mt-3">
                <div className="">
                  <h5 className="mt-2 text-center ">{profiledata.name}</h5>
                  <h6 className="mt-2  text-center text-black-50 px-4">{profiledata.company}</h6>
                </div>
                {/* <div className="positionimg ">
                  <a variant="primary mt-2  border-0" className='btn-gradde  px-5' >
                    Edit Profile
                  </a> 
                </div>*/}
                <div>
                </div>
              </div>
            </Col>
            <Col lg={9} className=" my-4 px-4">
              <Row className="profilebgcolor rounded-5">
                <Col className="py-3 ">
                  <div className=" mt-2 px-4">
                    <h5 className="text-start">About</h5>
                    <p className="text-start">
                      {/* {userData.about} */}
                      {profiledata.about}
                    </p>
                    {/* <p className="text-black-50 ">{logindata.email}</p>
                    <p className="text-black-50 ">{userdata.contact}</p> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="me-lg-4">
            {/* {postdata.map((item, index) => (  */}
            {post.map((post1, index) => (
              <Col lg={3} md={4} className="p-4 px-3 border-4 border-black h-25" key={index} onClick={()=>view(index)}>

                <Card>

                <Image src={post1.photo} className="postImgpro"></Image>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <>
        {/* <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header className="loginbox" closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body className="loginbox">
            <Form className="px-3" enctype="multipart/form-data" method="POST" action={handleSubmit}>
              <Row>
                <Col lg>
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
                <Col lg>
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
                <Col lg>
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
                <Col lg>
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
                <Col >
                  <Form.Group className="mb-4">
                    <Form.Label>Profile photo</Form.Label>
                    <Form.Control
                      type="file"
                      name="profile"
                      // value={userData.profile}
                      onChange={handleInputChange}
                      size="lg"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="file"
                      name="cover"
                      // value={userData.profile}
                      size="lg"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="d d-flex justify-content-end  ">
                  <a type='submit' onClick={handleSubmit} className=" px-md-4 border-0  rounded-5 btn-gradde">
                    Update
                  </a>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal> */}
      </>


    </Container>



  )
} export default Viewprofile