import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import MainPage from './MainPage';
import FeaturesPage from './FeaturesPage';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <span className="mainContainer">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="privacy-policy" element={<FeaturesPage />} />
        <Route path="terms-of-conditions" element={<FeaturesPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </span>
);
