import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';


function App() {
  return (
    <div className="App">
      <div className="d-flex flex-column h-100">
        <BrowserRouter>
        <React.Fragment>
              <Header title={process.env.REACT_APP_WEBSITE_NAME}>
              </Header>
            </React.Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about/*" element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id/*" element={<BlogPost />} />
            <Route path='login/*' element={<Login />} />
            <Route path='*' element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Footer title={process.env.REACT_APP_WEBSITE_NAME}></Footer>
      </div>
    </div>
  );
}

export default App;
