import React from 'react';

import {BrowserRouter , Route,  Routes} from 'react-router-dom'
import Navbar from './Modules/Layout/Components/Navbar';
import Home from './Modules/Layout/Components/Home';
import EmployeeList from './Modules/Employee/Components/EmployeeList';
import About from './Modules/Layout/Components/About';
import PageNotFound from './Modules/Users/Components/PageNotFound';




let App=()=>{
  return(
    <React.Fragment>
       <BrowserRouter>
         <Navbar/>
       
      <Routes>
       <Route exact={true} path='/' Component={Home}/>
       <Route exact={true} path='/' Component={Home}/>
       <Route exact={true} path='/employee/list' element={<EmployeeList/>}/>
       <Route exact={true} path='/about' Component={About}/>
       <Route  path='*' Component={PageNotFound}/>
       </Routes>
       </BrowserRouter>
   
    </React.Fragment>
  );
}
export default App