import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar.js';
import More from './components/places/More.js';
import AddJob from './components/places/Add.js';
import Edit from './components/places/Edit.js';
import React from 'react';


function App() {
  // let {userId} = useParams();
  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/morejobs" element={<More/>}/>
    <Route path="/addjobs" element={<AddJob/>}/>
    <Route path="/more/:jobsId/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
