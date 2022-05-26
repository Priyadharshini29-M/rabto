import React from 'react';
import Home from "./screens/Home"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './screens/Profile';

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
