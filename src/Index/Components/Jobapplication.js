import React, { useEffect, useState } from "react";
import Hrrresponsivenav from "./Hrresponsivenav";
import { Container, Row, Col, Image ,Button} from "react-bootstrap";

function Jobapply() {
    const [datatomap, setDatatomap] = useState([])
    const applications = async () => {
        try {
            // console.log("hr home");
            const response = await fetch('/allapplications', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            );
            const jobappication = await response.json()
            console.log(jobappication.data);
            setDatatomap(jobappication.data)
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }
    function openPdfInNewTab(pdfUrl) {
        window.open(pdfUrl, '_blank');
      }
    useEffect(() => {
        applications()
    }, [])
    return (
        <>
            <Container fluid className="bg">
            <Hrrresponsivenav />
                <Row>
                    <Col lg={1}></Col>
                    <Col className=" ">
                        <Row>
                            <h5 className="text-center my-4"><b >Job Applications</b></h5>
                        {datatomap.map((item, index) => ( 
                            <Col lg={6} md={6} className="my-2  mx-md-0 hovershadow" key={index}>
                                <div className="hai mx-3">
                                <Row className="bg-white rounded-4 py-2 px-3 " >
                                    <Col xs={4} lg={3}>
                                        <Image src={`./uploads/${item.alluser[0].profile}`} className=" profileUserImg" roundedCircle  ></Image>
                                    </Col>
                                    <Col lg className="mt-4 mx-2">
                                        <h5>{item.alluser[0].name}</h5>
                                        <p>{item.alluser[0].stack}</p>
                                        <h6>As {item.alljob[0].role}</h6>
                                        {/* <h6>ppp {item.alluser[0].email}</h6> */}

                                    </Col>
                                    <Col lg={3} className="mt-lg-4">
                                        <div className="d-grid gap-2 py-2">
                                            <a href={`/uploads/${item.alluser[0].cv}`} onclick={() => openPdfInNewTab(`/uploads/${item.alluser[0].cv}`)} target="_blank"  className="btn btn-outline-primary" variant="primary">
                                                View CV
                                            </a>

                                                <a
                                                    href={`mailto:${item.alluser[0].email}`}
                                                    target="_blank"
                                                    className="btn btn-outline-primary"
                                                    variant="primary"
                                                >
                                                    Hire
                                                </a>
                                         </div>
                                    </Col>
                                </Row>
                                </div>
                            </Col>
                        ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
} export default Jobapply

{/* <h2>hai</h2>

{datatomap.map((item, index) => ( 
<>
<p>{item.postid}</p>
    <p>{item.alljob[0].role}</p>
    <p>{item.alluser[0].name}</p>
    <img src={`./uploads/${item.alluser[0].profile}`} alt="" />
</>
))} */}