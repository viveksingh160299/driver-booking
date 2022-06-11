import {Form} from './component/Form';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import { Dashboard } from './component/Dashboard/Dashboard';
import {OtpVerification} from './component/OtpVerification';
import { Home } from './component/Home';

import './App.css';


const authGuard = (Component) => {
    
     return localStorage.getItem("otp_token") ?<Component/> : <Navigate to='/'/>;
     
}

const authDashboardGuard = (Component) => {
    
  return localStorage.getItem("AccessToken") ? <Dashboard/> : <Navigate to='/'/>;

}


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/driver-booking" element={<Home/>}/>
          <Route exact path="/Form" element={<Form/>}/>
          <Route exact path="/OtpVerification" element={authGuard(OtpVerification)}/>
          <Route exact path="/Dashboard" element={authDashboardGuard(Dashboard)}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
