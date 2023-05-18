import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import NoPage from './Pages/NoPage';
import Login from './Pages/Login';
import Data from './Pages/Data';
import About from './Pages/About';
import User from './Pages/User'; 
import { Contact } from './Pages/Contact';
import Succes from './Pages/Succes'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
         <Route index element={<Login />} /> 
          <Route path="/" element={<Layout />}>
            <Route path="Home" element={<Home />} />
            <Route path="NoPage" element={<NoPage />} />
            <Route path="Data" element={<Data />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact/>}/>
            <Route path="user/:id" element={<User />} /> 
            <Route path="Succes" element={<Succes />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
