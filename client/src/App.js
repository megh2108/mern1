import React from 'react';
import './App.css';
import{Routes ,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Rei from './component/Rei';
import Login from './component/Login';
import About from './component/About';
// hello

function App() {
  return (
    <>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rei" element={<Rei />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  );
}

export default App;
