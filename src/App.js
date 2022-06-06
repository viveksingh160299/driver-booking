import {Form} from './component/Form';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Dashboard } from './component/Dashboard/Dashboard';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
       <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/Form" element={<Form/>}/>
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
