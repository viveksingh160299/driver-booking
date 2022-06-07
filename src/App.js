import {Form} from './component/Form';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import { Dashboard } from './component/Dashboard/Dashboard';
import {OtpVerification} from './component/OtpVerification';

import './App.css';


const authGuard = (Component) => {
    
     return localStorage.getItem("otp_token") ?<Component/>:<Navigate to='/Form'/>;
        
    
}

const authDashboardGuard = (Component) => {
    
  return localStorage.getItem("AccessToken") ? <Dashboard/>:<Navigate to='/Form'/>;

}


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={authDashboardGuard(Dashboard)}/>
          <Route exact path="/Form" element={<Form/>}/>
          <Route exact path="/driver-booking" element={authDashboardGuard(Dashboard)}/>
          <Route exact path="/OtpVerification" element={authGuard(OtpVerification)}/>
          <Route exact path="/Dashboard" element={authDashboardGuard(Dashboard)}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
