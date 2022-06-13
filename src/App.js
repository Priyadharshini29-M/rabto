import React from 'react';
import Home from "./dummy/screens/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './dummy/screens/Profile';
import Dash from './dummy/screens/Admin';


import PrivateRoute from './dummy/routes/PrivateRoutes';
import Tools from './dummy/screens/Tools';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:username' element={<Profile/>} />
        <Route path='/' element={<Home/>} />
        <Route path="/admin" element={<Dash />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </Router>
  );
}

export default App;
