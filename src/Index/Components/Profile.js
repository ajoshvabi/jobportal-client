import React,{useEffect,useState} from "react";
import { Container,Row,Col,Form,Button,Card,Image,Modal } from "react-bootstrap";
import Userresponsivenav from "./Userresponsivenav";
import './userstyle.css'
import Swal from 'sweetalert2'

function Profile(){
  const [userdata,setUserData]=useState({});
  const [logindata,setLoginData]=useState({});
  const [appication,setAppication]=useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profile' || name === 'cover'|| name==='cv') {
      setUserData({
        ...userdata,
        [name]: files[0], // Use the selected file
      });
    } else {
      setUserData({
        ...userdata,
        [name]: value,
      });
    }
    console.log(userdata);
  };
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("upate")
      console.log(userdata)
      const updateData = new FormData();
      updateData.append('name', userdata.name);
      updateData.append('about', userdata.about);
      updateData.append('stack', userdata.stack);
      updateData.append('contact', userdata.contact);
      updateData.append('photos', userdata.cover);
      updateData.append('photos', userdata.profile);
      updateData.append('photos', userdata.cv);
      console.log(updateData);
      const response = await fetch('/updateuserreg', {
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

  async function fetchAppication() {
    try {
        console.log("my home");
    const response = await fetch('/fetchAppication', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
    },}
    );
    const appication = await response.json();
    console.log(appication.data);
    setAppication(appication.data)
    // console.log(userdataselect.userdata);
    // console.log(userdataselect.logindata);
    // setUserData(userdataselect.userdata)
    // setLoginData(userdataselect.logindata)
    // Process the response here
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

function view(index){
  console.log("post index",appication[index].postdata[0].role);

  Swal.fire({
      title: appication[index].postdata[0].role,
      // text: post[index].location,
      html: `<small>Loction:${appication[index].postdata[0].location}</small> 
      <br> 
      Description:${appication[index].postdata[0].description}
      `,
      imageUrl: appication[index].postdata[0].photo,
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

  
  useEffect(() => {
    fetchAppication();
    async function fetchData() {
        try {
            // console.log("my home");
        const response = await fetch('/userhomedata', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
        },}
        );
        const userdataselect = await response.json();
        // console.log(userdataselect.userdata);
        // console.log(userdataselect.logindata);
        setUserData(userdataselect.userdata)
        setLoginData(userdataselect.logindata)
        // Process the response here
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  
    fetchData(); // Call the async function immediately
  
  }, [setShow]);
    return(
        <>
{/* <Container>
      <Row className="vh-100 d-flex justify-content-center align-items-center mt-5">
        <Col md={8} lg={6} xs={12}>
          <Card className="px-4">
            <Card.Body>
              <div className="mb-3 mt-md-4">
                <h2 className="fw-bold mb-2 text-center text-uppercase">
                  Profile
                </h2>
                <div className="mb-3">
                  <Form >
                    <Form.Group className="mb-3" controlId="Name">
                      <Form.Label className="text-center">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        value={userdata.name}
                        // onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="stack">
                      <Form.Label className="text-center">Stack</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Stack"
                        name="stack"
                        value={userdata.stack}
                        // onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAbout">
                      <Form.Label>About me</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="About me"
                        name="about"
                        value={userdata.about}
                        // onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contact">
                      <Form.Label className="text-center">Contact</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Your Number"
                        name="contact"
                        value={userdata.contact}
                        // onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email address
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={logindata.email}
                        // onChange={handleInputChange}
                        required
                      />
                    </Form.Group>



                    <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
                    <div className="d-grid">
                      <Button variant="primary" type="submit" >
                        Update
                      </Button>
                    </div>
                  </Form>
                  <div className="mt-3"></div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */}
    {/* <Container fluid> */}
      <Container fluid className=" object-fit-cover " style={{backgroundImage:`url(./uploads/${userdata.cover})`,width:`100%`,maxHeight:`11rem`,objectFit:'cover',position:'center'}}>

<Userresponsivenav/>

        <Row>
          <Col lg={1}></Col>
          <Col>
        <Row className="">
          <Col lg={3} className=" d-flux justify-content-center  positionimg fi">
            <div>
            <Image src={`./uploads/${userdata.profile}`} className=" profilepagepic"></Image>
            </div>
          </Col>
          <Col lg={7}></Col>
        </Row>
        <Row>
          <Col lg={3} className=" d-flux justify-content-center  positionimg">
            <div className="mt-3">
              <div className=""> 
                <h5 className="mt-2 text-center ">{userdata.name}</h5>
                <h6 className="mt-2  text-center text-black-50 ">{userdata.stack}</h6>
              </div>
                <div className="positionimg">
                <a variant="primary mt-2  border-0" className='btn-gradde px-4 py-2' onClick={handleShow}>
                    Edit Profile
                </a> 

                </div>
                <div className="positionimg">
                <a variant="  border-0" className='btn btn-outline-primary  px-5 mt-2 rounded-3'href={`/uploads/${userdata.cv}`} target="_blank">
                  My CV
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
                  {userdata.about}
                    </p>
                    {/* <p className="text-black-50 ">{logindata.email}</p>
                    <p className="text-black-50 ">{userdata.contact}</p> */}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {appication.map((a,index)=>(                     
      <Col lg={3} md={4} className="p-4 px-3  border-4 border-black h-25" key={index} onClick={()=>view(index)}>
      <Card>
        
      <Image src={a.postdata[0].photo} className=" "></Image>
      </Card>
      {/* <Image src={`./uploads/${post1.photo}`} className="img-fluid"></Image> */}
    </Col>
          ))}

        </Row>


        </Col>
        </Row>
      </Container>

    {/* </Container> */}
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
                      value={userdata.name}
                      onChange={handleInputChange}
                      size="lg"
                      // placeholder="Ente your name" 
                      required />
                  </Form.Group>
                </Col>
                <Col lg>
                  <Form.Group className="mb-4">
                    <Form.Label>Stack</Form.Label>
                    <Form.Control
                      type="text"
                      name='stack'
                      value={userdata.stack}
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
                      value={userdata.about}
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
                      value={userdata.contact}
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
                      // value={userdata.profile}
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
                      // value={userdata.profile}
                      size="lg"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
              <Col>
                  <Form.Group className="mb-4">
                    <Form.Label>Cv</Form.Label>
                    <Form.Control
                      type="file"
                      name="cv"
                      // value={userdata.profile}
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
    )
}export default Profile