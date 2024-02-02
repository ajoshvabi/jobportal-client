        <Container fluid className='bg mt-5'>
            <Row className='p-3'>
                <Col lg={3} className='bg-white rounded-4  text-center py-4 profileside d-none d-lg-block mt-2'>
                    <Image roundedCircle  className='img-fluid px-5 mt-4 profilepic' src="./images/profile.jpg"></Image>
                    <h4 className='mt-2  '>{userdata.name}</h4>
                    <h6 className=''>{userdata.stack}</h6>
                    <p className='fs-6 text-black-50 px-3'>{userdata.about}</p>
                    <Link to='/profile'>
                    <Button variant="primary" className='px-5'>
                        PROFILE
                    </Button>
                    </Link>
                </Col>
                
                <Col lg={3} className=' rounded-4 mx-3 text-center py-4'>
                </Col>
                <Col className=' rounded-3 mt-xs-5'>
                {postdata.map((item, index) => ( 
                    <Row className='bg-white my-2 mt-xs-5 rounded-4' key={index}>
                        <p className='display-none'></p>
                        <Col className=''>
                            <div className='py-3 px-2'>
                                <i className="bi bi-person-circle fs-3"></i>
                                <b className='ms-2 '>{item.allpost[0].name}</b>
                                {/* <b className='ms-2 '>User Name</b> */}
                                    <p className='px-4'><i className="bi bi-geo-alt-fill text-primary "></i>{item.location}</p>
                                <div className='mt-3 py-2'>
                                    {/* <div> */}
                                        <Image src={`./uploads/${item.photo}`} className='img-fluid rounded-3 py-2'/>
                                    {/* </div> */}
                                    <h5 className='text-primary mt-2'>{item.role}</h5>
                                    <h6 className='text-dark'>{item.allpost[0].company}</h6>
                                    <h6 className='text-black-50'>Descripton</h6>
                                    <p className='text-black-50'>
                                    {item.description}
                                    </p>
                                    <Button variant="primary" className='px-5'>
                                        More Details
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                     ))}
                    {/* <Row className='bg-white my-2 mt-xs-5 rounded-4'>
                        <p className='display-none'></p>
                        <Col>
                            <div className='py-3  px-2'>
                                <i className="bi bi-person-circle fs-3"></i>
                                <b className='ms-2 '>User Name</b>
                                <div className='mt-3 py-2'>
                                    <p><i className="bi bi-geo-alt-fill text-primary "></i>Location</p>
                                    <h5 className='text-primary'>Job title</h5>
                                    <h6 className='text-dark'>Company name</h6>
                                    <h6 className='text-black-50'>Descripton</h6>
                                    <p className='text-black-50'>
                                    We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
                                    We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
                                    </p>
                                    <Button variant="primary" className='px-5'>
                                        More Details
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='bg-white my-2 mt-xs-5 rounded-4'>
                        <p className='display-none'></p>
                        <Col>
                            <div className='py-3 px-2'>
                                <i className="bi bi-person-circle fs-3"></i>
                                <b className='ms-2 '>User Name</b>
                                <div className='mt-3 py-2'>
                                    <p><i className="bi bi-geo-alt-fill text-primary "></i>Location</p>
                                    <h5 className='text-primary'>Job title</h5>
                                    <h6 className='text-dark'>Company name</h6>
                                    <h6 className='text-black-50'>Descripton</h6>
                                    <p className='text-black-50'>
                                    We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
                                    We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
                                    </p>
                                    <Button variant="primary" className='px-5'>
                                        More Details
                                    </Button>
      
                                </div>
                            </div>
                        </Col>
                    </Row> */}


                </Col>
                <Col lg={3} className=' rounded-2 mx-3' >
                </Col>

                <Col lg={3} className='bg-white rounded-4 mx-lg-3 sotrside mt-lg-2' >
                    <div className=''>
                    <Form className="d-flex my-lg-4 my-2 mx-2" action={handleSubmit}>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2  rounded-pill border-3"
                    aria-label="Search"
                    value={search.search}
                    onChange={handleInputChange}
                    name='search'
                    />
                    <Button className="rounded-pill px-3 d-none" type="submit" variant="outline-primary" onClick={handleSubmit}>
                    Search
                    </Button>
                    </Form>
                    </div>
                    <div className='d-none d-lg-block'>
                        <p><b>Filter job</b></p>
                        <hr />
                        <div className='ms-4 '>
                            <p><i className="bi bi-filter me-2 text-primary"></i>India</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Remote</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Freshers</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Professional</p>
                            <p><i className="bi bi-filter me-2 text-primary"></i>Work from Home</p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>




        <!-- nav user -->


                <Navbar expand="lg" bg="primary" fixed="top">
      <Container>
        <Navbar.Brand href="#home"  className='text-white'><b>Job Portal</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {/* <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Link</Nav.Link> */}
            <Link reloadDocument to='/userhome' className='text-white text-decoration-none mt-2 px-3'>Home</Link>
            <Link to='' className='text-white text-decoration-none mt-2 px-3'>Link</Link>
            <Link to='/profile' className='text-white text-decoration-none mt-2 px-3'>Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>




    // new form search


     <Form className="d-flex  mx-lg-2"  action={handleSubmit}>
                    <i className="  fa-solid fa-users fs-4 mt-2 ms-2 me-3  text-end profiletext"></i>
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2  rounded-pill border-3"
                    aria-label="Search"
                    value={search.search}
                    onChange={handleInputChange}
                    name='search'
                    />
                    <Button className="rounded-pill px-3" type="submit" variant="outline-primary" >
                    Search
                    </Button>
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



                    <!-- profle -->
                            {/* <Container className="mt-5">
            <Row className="">
                <Col></Col>
                <Col>
                    <div>
                    <Form className="mt-5">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Your age" /> 
        </Form.Group>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="" />
        </Form.Group> <br></br>
        <Button variant="primary" type="submit">
          Click here to submit
        </Button>
      </Form>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </Container> */}