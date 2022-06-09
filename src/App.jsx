import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Converter from './Pages/Converter';
import Blogs from './Pages/Blogs';
import Test from './Pages/Test';
function App() {
  return (
    <>
      <Router>
        <Header title="React Js" />




        <Routes>
          <Route path="/" element={<Home />} exact ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/converter" element={<Converter />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/test" element={<Test />}></Route>




        </Routes>

      </Router>

    </>

  );
}

export default App;