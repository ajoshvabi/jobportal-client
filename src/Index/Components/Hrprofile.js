import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, Card, Image, Modal } from "react-bootstrap";
import Hrrresponsivenav from "./Hrresponsivenav";
import Swal from 'sweetalert2'
function Hrpofile() {
  const [userData, setUserData] = useState({
    name: '', about: '', company: '', contact: '', profile: '',
    cover: ''
  });
  const [logindata, setLoginData] = useState({});
  const [postdata, setPostData] = useState([]);
  const [deletes, setDelete] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);







  useEffect(() => {
    async function fetchData() {
      try {
        
        const response = await fetch('/hrhomedata', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
        );
        const userdataselect = await response.json();
        // console.log("my post", userdataselect.postdata)
        setUserData(userdataselect.userdata)
        setLoginData(userdataselect.logindata)
        setPostData(userdataselect.postdata)
        // Process the response here
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }



    fetchData(); // Call the async function immediately

  }, [deletes]);


  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile' || name === 'cover') {
      setUserData({
        ...userData,
        [name]: files[0], // Use the selected file
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
    // console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // console.log("upate")
      // console.log(userData)
      const updateData = new FormData();
      updateData.append('name', userData.name);
      updateData.append('about', userData.about);
      updateData.append('company', userData.company);
      updateData.append('contact', userData.contact);
      // updateData.append('profile', userData.profile);
      // updateData.append('cover', userData.cover);
      updateData.append('photos', userData.cover);
      updateData.append('photos', userData.profile);
      // console.log(updateData);
      const response = await fetch('/updatehrreg', {
        method: 'POST',
        body: updateData,
      });

      if (response.status === 201) {
        console.log('Data inserted successfully.');
        setShow(false)
      } else {
        console.error('Data insertion failed.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  function view(index){
    // console.log("post index",postdata[index]);
  
    Swal.fire({
      title: postdata[index].role,
      text: postdata[index].description,
      imageUrl: postdata[index].photo,
      // imageUrl: `./uploads/${ postdata[index].photo}`,
      imageWidth: 400,
      imageHeight: 300,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonText: 'Delete Post',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
  
  
        const deletepost = async () => {
          try {
            // console.log("postdata[index]._id",postdata[index]._id);
  
              const response = await fetch(`/deletepost/${ postdata[index]._id}`, {
                  method: 'DELETE',
              }
              );
              const data = await response.json();
              if (response.status === 201) {
                Swal.fire('Post Deleted!', 'Your file has been deleted.', 'success')
                // fetchData()
                setDelete(data)
              }else{
                Swal.fire('Deletion Failed!', 'An error occurred.', 'error')
              }
          } catch (error) {
              console.error('An error occurred:', error);
          }
      }
      deletepost()
       
  
      } 
    })
  }




  return (

    <Container fluid className=" object-fit-cover " style={{ backgroundImage: `url(./uploads/${userData.cover})`, width: `100%`, maxHeight: `11rem` }}>
      <Hrrresponsivenav />
      <Row>
        <Col lg={1}></Col>
        <Col>
          <Row className="">
            <Col lg={3} className=" d-flux justify-content-center  positionimg fi">
              <div>
                <Image src={`./uploads/${userData.profile}`} className=" profilepagepic" roundedCircle  ></Image>
              </div>
            </Col>
            <Col lg={7}></Col>
          </Row>
          <Row>
            <Col lg={3} className=" d-flux justify-content-center  positionimg">
              <div className="mt-3">
                <div className="">
                  <h5 className="mt-2 text-center ">{userData.name}</h5>
                  <h6 className="mt-2  text-center text-black-50 px-4">{userData.company}</h6>
                </div>
                <div className="positionimg ">
                  <a variant="primary mt-2  border-0" className='btn-gradde  px-5' onClick={handleShow}>
                    Edit Profile
                  </a>
                </div>
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
                      {userData.about}
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
            {postdata.map((post1, index) => (
              <Col lg={3} md={4} className="p-4 px-3  border-4 border-black h-25" key={index} onClick={()=>view(index)}>
                <Card>
                  
                <Image src={post1.photo} className=" postImgpro"></Image>
                </Card>
                {/* <Image src={`./uploads/${post1.photo}`} className="img-fluid"></Image> */}
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
      <>
        <Modal size="xl" show={show} onHide={handleClose}>
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
                    <Form.Label>Cover photo</Form.Label>
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
        </Modal>
      </>


    </Container>



  )
} export default Hrpofile











//         <>



// <Container>
//       <Row className="vh-100 d-flex justify-content-center align-items-center mt-5">
//         <Col md={8} lg={6} xs={12}>
//           <Card className="px-4">
//             <Card.Body>
//               <div className="mb-3 mt-md-4">
//                 <h2 className="fw-bold mb-2 text-center text-uppercase">
//                   Profile
//                 </h2>
//                 <div className="mb-3">
//                   <Form >
//                     <Form.Group className="mb-3" controlId="Name">
//                       <Form.Label className="text-center">Name</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter Name"
//                         name="name"
//                         value={userData.name}
//                         // onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="company">
//                       <Form.Label className="text-center">Company</Form.Label>
//                       <Form.Control
//                         type="text"
//                         placeholder="Enter Your Stack"
//                         name="company"
//                         value={userData.company}
//                         // onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicAbout">
//                       <Form.Label>About me</Form.Label>
//                       <Form.Control
//                         as="textarea"
//                         placeholder="About me"
//                         name="about"
//                         value={userData.about}
//                         // onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="contact">
//                       <Form.Label className="text-center">Contact</Form.Label>
//                       <Form.Control
//                         type="number"
//                         placeholder="Enter Your Number"
//                         name="contact"
//                         value={userData.contact}
//                         // onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                       <Form.Label className="text-center">
//                         Email address
//                       </Form.Label>
//                       <Form.Control
//                         type="email"
//                         placeholder="Enter email"
//                         name="email"
//                         value={logindata.email}
//                         // onChange={handleInputChange}
//                         required
//                       />
//                     </Form.Group>


//                     <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
//                     <div className="d-grid">
//                       <Button variant="primary" type="submit" >
//                         Register
//                       </Button>
//                     </div>
//                   </Form>
//                   <div className="mt-3"></div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//         </>