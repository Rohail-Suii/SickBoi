// basic imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// component imports
import Signup from '../components/Signup';
import Login from '../components/Login';
import Home from '../components/Home';
import Forget from '../components/Forget';


// main component
const AppRoutes = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path='/' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/forget' element={<Forget/>} />
            </Routes>
        </Router>
    </div>

  )
};


// component exported
export default AppRoutes;