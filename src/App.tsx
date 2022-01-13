import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';


function App() {
  return (
    <div className="App">
      <Header title={"REACT Multi-Tenant"}>
      </Header>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path=":id/*" element={<BlogPost />} />
        </Routes>
      </BrowserRouter>
      <Footer title={'REACT CMS'}></Footer>
    </div>
  );
}

export default App;
