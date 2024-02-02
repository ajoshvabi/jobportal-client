import React, { useEffect,useState } from 'react'
import { Container,Col,Row,Image,Card,Form } from 'react-bootstrap';
import { Link ,useNavigate} from 'react-router-dom';

import './userstyle.css'
function HrHome() {
    const [postdata,setPost]=useState([]);
    const [userdata,setUserData]=useState({});
    const [search,setSearch]=useState({search:''});
    const navigate=useNavigate()
    const logout=async ()=>{
        try {
            const response = await fetch('/logout', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(),
            });
            const logout = await response.json();
            console.log(logout)
            if (response.status === 201) {
            //   console.log('Data inserted successfully.');
            navigate('/')
            } else {
              console.error('Data insertion failed.');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
    }

    async function postDatafetch() {
      try {
          console.log("my home");
      const response = await fetch('/jobpostdata', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
      },}
      
      );
      const post = await response.json();
  
      // setUserData(userdataselect.userdata)
      setPost(post.postdata); 
      console.log(post.postdata);
      // console.log(postdata);
      // Process the response here
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearch({
          [name]: value
        });
        if(search){
          // setPost()
          postDatafetch()
      }
        console.log(search)
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/searchfor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(search),
          });
          const post = await response.json();
          setPost(post.searchdata);
          if (response.status === 201) {
            console.log('Data inserted successfully.');
          } else {
            console.error('Data insertion failed.');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };
      const mypost = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('/mypost', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          });
          const post = await response.json();
          setPost(post.postdata);
          if (response.status === 201) {
            console.log('Data inserted successfully.');
          } else {
            console.error('Data insertion failed.');
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      };

    useEffect(() => {
        async function fetchData() {
            try {
            const response = await fetch('/hrhomedata', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
            },}
            
            );
            const userdataselect = await response.json();
            setUserData(userdataselect.userdata)

            // Process the response here
          } catch (error) {
            console.error('An error occurred:', error);
          }
        }
        async function postDatafetch() {
            try {
                console.log("my home");
            const response = await fetch('/jobpostdata', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
            },}
            
            );
            const post = await response.json();
        
            // setUserData(userdataselect.userdata)
            setPost(post.postdata);
            console.log(post.postdata);
            // console.log(postdata);
            // Process the response here
          } catch (error) {
            console.error('An error occurred:', error);
          }
        }

        
        postDatafetch();
        fetchData(); // Call the async function immediately
      
      }, [setPost]);
      
    
    return (
      // <>
      //   <Container fluid className='bg mt-5'>
      //       <Row className='p-3'>
      //           <Col lg={3} className='bg-white rounded-4  text-center py-4 profileside d-none d-lg-block mt-2'>
      //               <Image roundedCircle  className='img-fluid px-5 mt-4 profilepic' src="./images/profile.jpg"></Image>
      //               <h4 className='mt-2  '>{userdata.name}</h4>
      //               <h6 className=''>{userdata.stack}</h6>
      //               <p className='fs-6 text-black-50 px-3'>{userdata.about}</p>
      //               <Link to='/hrprofile'>
      //               <Button variant="primary" className='px-5'>
      //                   PROFILE
      //               </Button>
      //               </Link>
      //               {/* <Link to='/mypost'> */}
      //               <Button variant="primary" className='px-5' onClick={mypost}>
      //                   Post
      //               </Button>
      //               {/* </Link> */}
      //           </Col>
                
      //           <Col lg={3} className=' rounded-4 mx-3 text-center py-4'>
      //           </Col>
      //           <Col className=' rounded-3 mt-xs-5'>
      //           {postdata.map((item, index) => ( 
      //               <Row className='bg-white my-2 mt-xs-5 rounded-4' key={index}>
      //                   <p className='display-none'></p>
      //                   <Col className=''>
      //                       <div className='py-3 px-2'>
      //                           <i className="bi bi-person-circle fs-3"></i>
      //                           <b className='ms-2 '>{item.allpost[0].name}</b>
      //                           {/* <b className='ms-2 '>User Name</b> */}
      //                               <p className='px-4'><i className="bi bi-geo-alt-fill text-primary "></i>{item.location}</p>
      //                           <div className='mt-3 py-2'>
      //                               {/* <div> */}
      //                                   <Image src={`./uploads/${item.photo}`} className='img-fluid rounded-3 py-2'/>
      //                               {/* </div> */}
      //                               <h5 className='text-primary mt-2'>{item.role}</h5>
      //                               <h6 className='text-dark'>{item.allpost[0].company}</h6>
      //                               <h6 className='text-black-50'>Descripton</h6>
      //                               <p className='text-black-50'>
      //                               {item.description}
      //                               </p>
      //                               <Button variant="primary" className='px-5'>
      //                                   More Details
      //                               </Button>
      //                           </div>
      //                       </div>
      //                   </Col>
      //               </Row>
      //                ))}
      //               {/* <Row className='bg-white my-2 mt-xs-5 rounded-4'>
      //                   <p className='display-none'></p>
      //                   <Col>
      //                       <div className='py-3  px-2'>
      //                           <i className="bi bi-person-circle fs-3"></i>
      //                           <b className='ms-2 '>User Name</b>
      //                           <div className='mt-3 py-2'>
      //                               <p><i className="bi bi-geo-alt-fill text-primary "></i>Location</p>
      //                               <h5 className='text-primary'>Job title</h5>
      //                               <h6 className='text-dark'>Company name</h6>
      //                               <h6 className='text-black-50'>Descripton</h6>
      //                               <p className='text-black-50'>
      //                               We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
      //                               We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
      //                               </p>
      //                               <Button variant="primary" className='px-5'>
      //                                   More Details
      //                               </Button>
      //                           </div>
      //                       </div>
      //                   </Col>
      //               </Row>
      //               <Row className='bg-white my-2 mt-xs-5 rounded-4'>
      //                   <p className='display-none'></p>
      //                   <Col>
      //                       <div className='py-3 px-2'>
      //                           <i className="bi bi-person-circle fs-3"></i>
      //                           <b className='ms-2 '>User Name</b>
      //                           <div className='mt-3 py-2'>
      //                               <p><i className="bi bi-geo-alt-fill text-primary "></i>Location</p>
      //                               <h5 className='text-primary'>Job title</h5>
      //                               <h6 className='text-dark'>Company name</h6>
      //                               <h6 className='text-black-50'>Descripton</h6>
      //                               <p className='text-black-50'>
      //                               We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
      //                               We're on the lookout for talented and driven Software Engineers/Senior Software Engineers to join our dynamic team.
      //                               </p>
      //                               <Button variant="primary" className='px-5'>
      //                                   More Details
      //                               </Button>
      
      //                           </div>
      //                       </div>
      //                   </Col>
      //               </Row> */}


      //           </Col>
      //           <Col lg={3} className=' rounded-2 mx-3' >
      //           </Col>

      //           <Col lg={3} className='bg-white rounded-4 mx-lg-3 sotrside mt-lg-2' >
      //               <div className=''>
      //               <Form className="d-flex my-lg-4 my-2 mx-2" action={handleSubmit}>
      //               <Form.Control
      //               type="search"
      //               placeholder="Search"
      //               className="me-2  rounded-pill border-3"
      //               aria-label="Search"
      //               value={search.search}
      //               onChange={handleInputChange}
      //               name='search'
      //               />
      //               <Button className="rounded-pill px-3" type="submit" variant="outline-primary" onClick={handleSubmit}>
      //               Search
      //               </Button>
      //               </Form>
      //               </div>
      //               <div className='d-none d-lg-block'>
      //                   <p><b>Filter job</b></p>
      //                   <hr />
      //                   <div className='ms-4 '>
      //                       <p><i className="bi bi-filter me-2 text-primary"></i>India</p>
      //                       <p><i className="bi bi-filter me-2 text-primary"></i>Remote</p>
      //                       <p><i className="bi bi-filter me-2 text-primary"></i>Freshers</p>
      //                       <p><i className="bi bi-filter me-2 text-primary"></i>Professional</p>
      //                       <p><i className="bi bi-filter me-2 text-primary"></i>Work from Home</p>
      //                   </div>
      //               </div>
      //           </Col>

      //       </Row>
      //   </Container>
      // </>



      <>

      <Container fluid className="bg">
             <Row className="">
                  <Col lg={1}>
                  </Col>
                  <Col>
                  <Row>
                          <Col lg={3} className=' rounded-4  profileside mt-lg-2 ' >
                          <div className='bg-white  p-2 rounded-4'>
                          <Form className="d-flex  mx-lg-2"  onSubmit={handleSubmit}>
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
                          {/* <Button className="rounded-pill px-3" type="submit" variant="outline-primary"  onClick={handleSubmit}>
                          Search
                          </Button> */}
                          {/* <i className=" d-lg-none  fa-solid fa-bars fs-4 mt-2 ms-2 me-3  text-end profiletext"></i> */}
                          <div className="btn-group">
        <button type="button" className="border-0 bg-white d-lg-none" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="   fa-solid fa-bars fs-4 mt-2 ms-2 me-3  text-end profiletext"></i>
      
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-item" href="/hrhome">Home</a></li>
          <li><a className="dropdown-item" href="/hrpost">Post</a></li>
          <li><a className="dropdown-item" href="/jobapply">Applications</a></li>
          <li><a className="dropdown-item" href="/hrprofile">Profile</a></li>
          <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>
        </ul>
      </div>
                          </Form>
                          
                          </div>
      
      
      
      
                          <div className='bg-white d-none d-lg-block mt-2 rounded-4 py-3 mt-3 px-2'>
                              <div className="profileimagesection mx-auto  ">
                                  <Image src={`./uploads/${userdata.profile}`} className="img-fluid profileimages"  ></Image>
                              </div>
                              <div className="text-center">
                              <h4 className='mt-2 username'>{userdata.name}</h4>
                              <h6 className='stack text-black-50 '>{userdata.stack} </h6>
                              <p className='fs-6 text-black-50 px-3'>
                              {userdata.about}                        </p>
                              <Link to='/hrprofile' className='text-decoration-none '><h3 className="profiletext">My Profile</h3></Link>
      
                              </div>
                          </div>
                          <div className='bg-white d-none d-lg-block mt-2 rounded-4 py-3 mt-3 px-3'>
                             <small className="text-center">{userdata.name}, unlock your full potential with Job Portal Premium</small>
                             <p><a href="" className="btn1-grad mt-2">Try for Free</a></p>
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
                      <Col lg={3} className=' rounded-4 my-2 text-center py-4'>
                      </Col>
                      <Col className=' rounded-3 mt-xs-5 mx-4'>
      
                    {postdata.map((item, index) => ( 
                      <Row className='bg-white my-2 mt-xs-5 rounded-4' key={index}>
                          <p className='display-none'></p>
                          <Col className=''>
                              <div className='py-2 px-2'>
                              <Link to={`/hrviewprofile/${item.hrloginid}`} className='text text-decoration-none '>

                                  <Row>
                                      <Col xs={1} md={1} sm={1} xm={1}>
                                          <div className="imgprofile  ">
                                              <Image src={`./uploads/${item.allpost[0].profile}`} className="img-fluid profileimages"  ></Image>
                                          </div>
                                      </Col>
                                      <Col xs className="py-1  ms-lg-0 ms-4 ">
                                          <h6 className='text-black'>{item.allpost[0].name}</h6>
                                          <p className='location text-black-50 '>
                                            <small>{item.location}</small></p>
                                      </Col>
                                      <Col xs className="py-2">
                                          <p className="text-end"> <i className="fa-solid fa-ellipsis-vertical me-1 fs-5"></i></p>
                                      </Col>
                                  </Row>
                                  </Link>
                                  <div className=''>
                                  <h6 className='text-dark'>{item.allpost[0].company}</h6>
                                      <div className="dv  ">
                                          {/* <Image src={`./uploads/${item.photo}`} className='img-fluid rounded-3 py-2'/> */}
                                          {/* <Card className=''> */}

                                          <Image src={item.photo} className=' rounded-3 postImg1 img-fluid   '/>
                                          {/* </Card> */}

                                      </div>

                                      <Row className='mt-3'>
                                          <Col xs={8}>
                                              <h5 className='text-primary'>{item.role} </h5>
                                          </Col>
                                          <Col xs={4} className="text-end me-auto">
                                              <a variant="primary mt-2  border-0" className='btn-gradde px-5 '>
                                              More
                                              </a>
                                          </Col>
                                      </Row>
                                      
                                      <p className='text-black-50'>
                                      {item.description}                                
                                      </p>
                                  </div>
                              </div>
                          </Col>
                      </Row>
                    ))}
      
                      
                      {/* <Row className='bg-white my-2 mt-xs-5 rounded-4'>
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
                      </Row> */}
                      
                      {/* <Row className='bg-white my-2 mt-xs-5 rounded-4'>
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
                      </Row> */}
      
      
      
                        
      
                      </Col>
                  </Row>
                  </Col>
              </Row>
             </Container>
            </>
    );
  }
  
  export default HrHome;
  