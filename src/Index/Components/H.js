import React from "react";
import './userstyle.css'
import { Row,Col, Container,Image,Button ,Form} from "react-bootstrap";


function H(){
    return(
        <>
       <Container fluid className="bg">
       <Row className="">
            <Col lg={1}>
            </Col>
            <Col>
            <Row>
                    <Col lg={3} className=' rounded-4  profileside mt-lg-2 ' >
                    <div className='bg-white  p-2 rounded-4'>
                    <Form className="d-flex  mx-lg-2" >
                    <i className="  fa-solid fa-users fs-4 mt-2 ms-2 me-3  text-end profiletext"></i>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2  rounded-pill border-3"
                    aria-label="Search"
                    // value={search.search}
                    // onChange={handleInputChange}
                    name='search'
                    />
                    {/* <Button className="rounded-pill px-3" type="submit" variant="outline-primary" >
                    Search
                    </Button> */}
                    {/* <i className=" d-lg-none  fa-solid fa-bars fs-4 mt-2 ms-2 me-3  text-end profiletext"></i> */}
                    <div className="btn-group">
  <button type="button" className="border-0 bg-white d-lg-none" data-bs-toggle="dropdown" aria-expanded="false">
    <i className="   fa-solid fa-bars fs-4 mt-2 ms-2 me-3  text-end profiletext"></i>

  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Home</a></li>
    <li><a className="dropdown-item" href="#">Post</a></li>
    <li><a className="dropdown-item" href="#">Profile</a></li>
    <li><a className="dropdown-item" href="#">Logout</a></li>
  </ul>
</div>
                    </Form>
                    
                    </div>




                    <div className='bg-white d-none d-lg-block mt-2 rounded-4 py-3 mt-3 px-2'>
                        <div className="profileimagesection mx-auto  ">
                            <Image src="./uploads/report3.jpg" className="img-fluid profileimages"  ></Image>
                        </div>
                        <div className="text-center">
                        <h4 className='mt-2 username'>Ajosh v Abi</h4>
                        <h6 className='stack text-black-50 '>MERN </h6>
                        <p className='fs-6 text-black-50 px-3'>
                        Intern @softzane solutions || Full stack developer || MERN || Flutter developer || React JS || Node JS || Express JS || Mongo DB
                        </p>
                        <h3 className="profiletext">My Profile</h3>

                        </div>
                    </div>
                    <div className='bg-white d-none d-lg-block mt-2 rounded-4 py-3 mt-3 px-3'>
                       <small className="text-center">Ajosh, unlock your full potential with Job Portal Premium</small>
                       <p><a href="" className="btn1-grad mx-5 mt-2">Try for Free</a></p>
                    </div>


                    {/* <div className='bg-white d-none d-md-block mt-2'>
                        <p><b>Filter job</b></p>
                        <hr />
                        <div className='ms-4 '>
                            <p><i className="bi bi-filter me-2 text-primary"></i>India</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Remote</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Freshers</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Professional</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Work from Home</p>
                        </div>
                    </div> */}
                </Col>
                <Col lg={3} className=' rounded-4 mx-3 text-center py-4'>
                </Col>
                <Col className=' rounded-3 mt-xs-5 mx-4'>

                <Row className='bg-white my-2 mt-xs-5 rounded-4'>
                    <p className='display-none'></p>
                    <Col className=''>
                        <div className='py-2 px-2'>
                            <Row>
                                <Col xs={1} md={1} sm={1} xm={1}>
                                    <div className="imgprofile  ">
                                        <Image src="./uploads/report3.jpg" className="img-fluid profileimages"  ></Image>
                                    </div>
                                </Col>
                                <Col xs className="py-1">
                                    <h6 className=''>Nayana</h6>
                                    <p className='location'><i className="fa-solid fa-location-dot me-1"></i><small>kollam</small></p>
                                </Col>
                                <Col xs className="py-2">
                                    <p className="text-end"> <i className="fa-solid fa-ellipsis-vertical me-1 fs-5"></i></p>
                                </Col>
                            </Row>
                            <div className=''>
                            <h6 className='text-dark'>Company name</h6>
                                <div className=" mx-auto">
                                    <Image src='./uploads/home1.jpg' className='img-fluid rounded-3 py-2'/>
                                </div>
                                <Row>
                                    <Col xs={8}>
                                        <h5 className='text-primary mt-2'>Software Engineer </h5>
                                    </Col>
                                    <Col xs={4} className="text-end me-auto">
                                        <a variant="primary mt-2  border-0" className='btn-gradde'>
                                            More Details
                                        </a>
                                    </Col>
                                </Row>
                                
                                <p className='text-black-50'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <Row className='bg-white my-2 mt-xs-5 rounded-4'>
                    <p className='display-none'></p>
                    <Col className=''>
                        <div className='py-2 px-2'>
                            <Row>
                                <Col xs={1} md={1} sm={1} xm={1}>
                                    <div className="imgprofile  ">
                                        <Image src="./uploads/report3.jpg" className="img-fluid profileimages"  ></Image>
                                    </div>
                                </Col>
                                <Col xs className="py-1">
                                    <h6 className=''>Nayana</h6>
                                    <p className='location'><i className="fa-solid fa-location-dot me-1"></i><small>kollam</small></p>
                                </Col>
                                <Col xs className="py-2">
                                    <p className="text-end"> <i className="fa-solid fa-ellipsis-vertical me-1 fs-5"></i></p>
                                </Col>
                            </Row>
                            <div className=''>
                            <h6 className='text-dark'>Company name</h6>
                                <div className=" mx-auto">
                                    <Image src='./uploads/dd.png' className='img-fluid rounded-3 py-2'/>
                                </div>
                                <Row>
                                    <Col xs={8}>
                                        <h5 className='text-primary mt-2'>Software Engineer </h5>
                                    </Col>
                                    <Col xs={4} className="text-end me-auto">
                                        <a variant="primary mt-2  border-0" className='btn-gradde'>
                                            More Details
                                        </a>
                                    </Col>
                                </Row>
                                
                                <p className='text-black-50'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <Row className='bg-white my-2 mt-xs-5 rounded-4'>
                    <p className='display-none'></p>
                    <Col className=''>
                        <div className='py-2 px-2'>
                            <Row>
                                <Col xs={1} md={1} sm={1} xm={1}>
                                    <div className="imgprofile  ">
                                        <Image src="./uploads/report3.jpg" className="img-fluid profileimages"  ></Image>
                                    </div>
                                </Col>
                                <Col xs className="py-1">
                                    <h6 className=''>Nayana</h6>
                                    <p className='location'><i className="fa-solid fa-location-dot me-1"></i><small>kollam</small></p>
                                </Col>
                                <Col xs className="py-2">
                                    <p className="text-end"> <i className="fa-solid fa-ellipsis-vertical me-1 fs-5"></i></p>
                                </Col>
                            </Row>
                            <div className=''>
                            <h6 className='text-dark'>Company name</h6>
                                <div className="d-flux justify-content-center  mx-auto">
                                    <Image src='./uploads/n2.jpg' className='img-fluid rounded-3 py-2'/>
                                </div>
                                <Row>
                                    <Col xs={6}>
                                        <h5 className='text-primary mt-2'>Software Engineer </h5>
                                    </Col>
                                    <Col xs={3} className="text-end">
                                        <a variant=" mt-2  border-0" className='btn-gradde'>
                                            More Details
                                        </a>
                                    </Col>
                                </Row>
                                
                                <p className='text-black-50'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>



                  

                </Col>
            </Row>
            </Col>
        </Row>
       </Container>
        </>

    )
}export default H