import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Userreg from './Userreg';
import Hrreg from './Hrreg';
import Login from './Login';
import Userhome from './Userhome';
import Usernav from './Usernav';
import Profile from './Profile';
import HrHome from './Hrhome';
import Hrnav from './Hrnav';
import Hrprofile from './Hrprofile';
import Hrpost from './Hrpost';
import NEW from './New';
import Jobapply from './Jobapplication';
import Viewprofile from './Viewprofile';
import Hrviewprofile from './Hrviewprofile';
function Main() {
    return (
    <>
    <Router>
    <ToastContainer
position="top-left"  autoClose={5000} hideProgressBar={false}
newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <Routes>

        {/*user  */}
        {/* <Route  path='/userhome' element={<><NEW/><Userhome/></>}></Route> */}
        <Route  path='/userhome' element={<><Usernav/><Userhome/></>}></Route>
        <Route  path='/profile' element={<><Usernav/><Profile/></>}></Route>
        <Route  path='/viewprofile/:loginid' element={<><Usernav/><Viewprofile/></>}></Route>



        {/*hr  */}
        <Route  path='/hrhome' element={<><Hrnav/><HrHome/></>}></Route>
        <Route  path='/hrprofile' element={<><Hrnav/><Hrprofile/></>}></Route>
        <Route  path='/hrpost' element={<><Hrnav/><Hrpost/></>}></Route>
        <Route  path='/jobapply' element={<><Hrnav/><Jobapply/></>}></Route>
        <Route  path='/hrviewprofile/:loginid' element={<><Hrnav/><Hrviewprofile/></>}></Route>






        {/* index */}
        <Route  path='/' element={<><Login/></>}></Route>
        <Route  path='/userreg' element={<><Userreg/></>}></Route>
        <Route  path='/hrreg' element={<><Hrreg/></>}></Route>

      </Routes>
    </Router>      
    </>
    );
  }
  
  export default Main;
  