import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <header>
        <h3>App Header </h3>
      </header>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="about/*" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer title={'Kingsley Tagbo'}></Footer>
    </div>
  );
}

export default App;
