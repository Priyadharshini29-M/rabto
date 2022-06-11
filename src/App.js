import React from 'react';
import Home from "./dummy/screens/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './dummy/screens/Profile';
import Admin from './dummy/screens/Admin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:username' element={<Profile/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;
