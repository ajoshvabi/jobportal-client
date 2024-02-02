import React from "react";
import { useNavigate } from "react-router-dom";
function Userresponsivenav(){

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
    return(
        <div className="d-flex justify-content-end ">
            <div className="btn-group me-5 mt-1">
                <button type="button" className="border-0 bg-transparent  position-fixed rounded-3 d-lg-none " data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="   fa-solid fa-bars fs-2  text-end profiletext mt-1 p-1"></i>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/userhome">Home</a></li>
                    {/* <li><a className="dropdown-item" href="#">Post</a></li> */}
                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                    <li><a className="dropdown-item" href="#" onClick={logout}>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}export default Userresponsivenav
// d-lg-none