import React from 'react';
import Home from "./dummy/screens/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './dummy/screens/Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/:username' element={<Profile/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
