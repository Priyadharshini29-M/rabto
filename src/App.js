import React from 'react';
import Home from "./dummy/screens/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './dummy/screens/Profile';
import Dash from './dummy/screens/Admin';
import './index.css'

// Recoil 
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
// 


import PrivateRoute from './dummy/routes/PrivateRoutes';
import Tools from './dummy/screens/Tools';
import Company from './dummy/screens/Company';
import Personal from './dummy/components/Personal';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:username' element={<Profile/>} />
        <Route path='/' element={<Home/>} />
        <Route path="/admin" element={<Dash />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/thedot_tech" element={<Company />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Router>
  );
}

export default App;
