import React, { useEffect, useState } from 'react'
import { Container, Col, Row, Image, Button, Form, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './userstyle.css'
function Userhome() {
    const [userdata, setUserData] = useState({});
    const [postdata, setPost] = useState([]);
    const [search, setSearch] = useState({ search: '' });
    const navigate = useNavigate()

    const logout = async () => {
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
                },
            }

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
    const handleInputChange =async (e) => {
        const { name, value } = e.target;
        setSearch({
            [name]: value
        });

        // console.log(search)
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
                if (!post) {
                    // setPost()
                    postDatafetch()
                }
                console.error('Data insertion failed.');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
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

 async function checksession() {
            try {
                console.log("my home");
                const response = await fetch('/checksession', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 401) {
                    navigate('/')
                  }
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }


    useEffect(() => {
        checksession()
        async function fetchData() {
            try {
                console.log("my home");
                const response = await fetch('/userhomedata', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }

                );
                const userdataselect = await response.json();
                setUserData(userdataselect.userdata)
                console.log(userdataselect);

                // Process the response here
            } catch (error) {
                console.error('An error occurred:', error);
            }
        }
        // code for view post



        postDatafetch();
        fetchData(); // Call the async function immediately

    }, [setPost]);
// const apply=(postid)=>{
//     console.log(postid)

// }
async function  apply(postid){

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Do you want to apply for this job?",
        // text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, apply it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then(async (result) => {
        if (result.isConfirmed) {


            const response = await fetch('/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({postid}),
            });
            if (response.status === 201) {
                console.log('Data inserted successfully.');
                // toast.error("Already applyed");
                swalWithBootstrapButtons.fire({
                    title: "Already applied!",
                    text: "Your application has already been sent",
                    icon: "warning"
                  });
            } else {
                swalWithBootstrapButtons.fire({
                    title: "Applied successfully!",
                    text: "our application has been sent.",
                    icon: "success"
                  });
            }

            

        } 
        // else if (
        //   /* Read more about handling dismissals below */
        //   result.dismiss === Swal.DismissReason.cancel
        // ) {
        //   swalWithBootstrapButtons.fire({
        //     title: "Cancelled",
        //     text: "Job appication cancelled",
        //     icon: "error"
        //   });
        // }
      });

    
    // console.log(postid);
    // try {
    //     const response = await fetch('/apply', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({postid}),
    //     });
    //     if (response.status === 201) {
    //         console.log('Data inserted successfully.');
    //         toast.error("Already applyed");

    //     } else {
    //         // toast.success("Login successfully");
    //         console.error('Data insertion failed.');
    //     }
    // } catch (error) {
    //     console.error('An error occurred:', error);
    // }

}

    return (
        <>

            <Container fluid className="bg">
                <Row className="">
                    <Col lg={1}>
                    </Col>
                    <Col>
                        <Row>
                            <Col lg={3} className=' rounded-4  profileside mt-lg-2 ' >
                                <div className='bg-white  p-2 rounded-4'>
                                    <Form className="d-flex  mx-lg-2" onSubmit={handleSubmit}>
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
                                                <li><a className="dropdown-item" href="/userhome">Home</a></li>
                                                <li><a className="dropdown-item" href="/profile">Profile</a></li>
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
                                        <Link to='/profile' className='text-decoration-none '><h3 className="profiletext">My Profile</h3></Link>

                                    </div>
                                </div>
                                <div className='bg-white d-none d-lg-block mt-2 rounded-4 py-3 mt-3 px-3'>
                                    <small className="text-center">{userdata.name}, unlock your full potential with Job Portal Premium</small>
                                    <p><a href="" className="btn1-grad  mt-2">Try for Free</a></p>
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
                                                <Link to={`/viewprofile/${item.hrloginid}`} className='text text-decoration-none '>
                                                <Row>
                                                    <Col xs={2} md={1} sm={1} xm={1}>
                                                        <div className="imgprofile  ">
                                                            <Image src={`./uploads/${item.allpost[0].profile}`} className="img-fluid profileimages"  ></Image>
                                                        </div>
                                                    </Col>
                                                    <Col xs className="py-1  ">
                                                        <div className=''>
                                                            <h6 className='text-black'>{item.allpost[0].name}</h6>
                                                            <p className='location text-black-50 '>
                                                                <small>{item.location}</small></p>
                                                        </div>
                                                    </Col>
                                                    <Col xs className="py-2">
                                                        <p className="text-end"> <i className="fa-solid fa-ellipsis-vertical me-1 fs-5"></i></p>
                                                    </Col>
                                                </Row>
                                                </Link>

                                                <div className=''>
                                                    <h6 className='text-dark'>{item.allpost[0].company}</h6>
                                                    <div className="dv">
                                                        {/* <Card> */}
                                                        <Image src={item.photo} className='img-fluid postImg1 rounded-3 py-2' />

                                                        {/* </Card> */}
                                                        {/* <Image src={`./uploads/${item.photo}`} className='img-fluid rounded-3 py-2' /> */}
                                                    </div>
                                                    <Row>
                                                        <Col xs={7}>
                                                            <h5 className='text-primary mt-2'>{item.role} </h5>
                                                        </Col>
                                                        <Col xs={5} className="text-end mx-auto d-flex justify-content-center">
                                                            <div className='px-1'>
                                                                <a variant="primary mt-2  border-0" className='btn-gradde px-5 ' onClick={() => apply(item._id)}>
                                                                    Apply
                                                                </a>
                                                            </div>
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








                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Userhome;
