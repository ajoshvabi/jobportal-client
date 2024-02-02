import React,{useState} from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom';
import "./nav.css";

function Usernav() {
  const [isExpanded, setExpendState] = useState(false);
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
    return (
      <>
        <div className="nav1 d-none d-lg-block">
            {/* <Row> */}
                {/* <Col lg={1}> */}
		<div
			className={
				isExpanded
					? "side-nav-container navcolor"
					: "side-nav-container side-nav-container-NX navcolor"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading mb-5">
					{isExpanded && (
						<div className="nav-brand">
							{/* <img src="icons/Logo.svg" alt="" srcset="" /> */}
							<i className=" mt-4 fa-solid fa-users text-white ms-3"></i>
							<h5 className="mt-4 text-white ms-2"><b>Job Portaal</b></h5>
						</div>
					)}
					<button
						className={
							// isExpanded ? "hamburger hamburger-in bg-dark" : "hamburger hamburger-out bg-dark"
                            "hamburger border-0"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span><i className="hamburger hamburger-in hamburger-out fa-solid fa-bars text-white"></i></span>
						<span></span>
						<span></span>
					</button>
				</div>

                <div className="nav-menu text-white">
					<a className={isExpanded ? "menu-item mb-3" : "menu-item menu-item-NX mb-3"} href="/userhome">
                        <i className="fa-solid fa-house-chimney fa-lg mt-2"></i>
						{isExpanded && <b className="ms-4 ">Home</b>}
					</a>
					<a className={isExpanded ? "menu-item mb-3" : "menu-item menu-item-NX mb-3 mb-3"} href="/profile">
                        <i className="fa-solid fa-user fa-lg mt-2"></i>
						{isExpanded && <b className="ms-4 ">Profile</b>}
					</a>
					<a className={isExpanded ? "menu-item mb-3" : "menu-item menu-item-NX mb-3"} href="#">
                        <i className="fa-solid fa-paperclip fa-lg mt-2"></i>
						{isExpanded &&<b className="ms-4 ">Apply</b>}
					</a>
					<a className={isExpanded ? "menu-item mb-3" : "menu-item menu-item-NX mb-3"} href="#">
                        <i className="fa-solid fa-magnifying-glass fa-lg mt-2"></i>
						{isExpanded &&  <b className="ms-4 ">Search</b>}
					</a>
					<a className={isExpanded ? "menu-item mb-3" : "menu-item menu-item-NX mb-3"} href="#" onClick={logout}>
					<i className="fa-solid fa-right-from-bracket fa-lg mt-2"></i>
						{isExpanded && <b className="ms-4 ">Logout</b>}
					</a>
				</div>
			</div>
			{/* <div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">M Showkat</p>
							<p className="nav-footer-user-position">store admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div> */}
		</div>
        {/* </Col> */}
            {/* </Row> */}
        </div>
      </>
    );
  }
  
  export default Usernav;
  