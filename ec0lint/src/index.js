import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import MainPage from './MainPage';
import FeaturesPage from './FeaturesPage';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <span className="mainContainer">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="privacy-policy" element={<FeaturesPage />} />
        <Route path="get-started" element={<FeaturesPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="use-cases" element={<FeaturesPage />} />
        <Route path="blog" element={<FeaturesPage />} />
        <Route path="team" element={<FeaturesPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </span>
);
