import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar.jsx';
import More from './components/places/More.jsx';
import AddJob from './components/places/Add.jsx';
import Edit from './components/places/Edit.jsx';


function App() {
  // let {userId} = useParams();
  return (
  <BrowserRouter>
  <NavBar />
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/morejobs" element={<More/>}/>
    <Route exact path="/addjobs" element={<AddJob/>}/>
    <Route exact path="/more/:jobsId/edit" element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
