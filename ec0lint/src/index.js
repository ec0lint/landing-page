import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import MainPage from './pages/MainPage';
import GetStartedPage from './pages/GetStartedPage';
import FeaturesPage from './pages/FeaturesPage';
import Footer from './Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfConditionsPage from './pages/TermsOfConditionsPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <span className="mainContainer">
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-conditions" element={<TermsOfConditionsPage />} />
        <Route path="get-started" element={<GetStartedPage />} />
        <Route path="features" element={<FeaturesPage />} />
        <Route path="use-cases" element={<GetStartedPage />} />
        <Route path="blog" element={<GetStartedPage />} />
        <Route path="team" element={<GetStartedPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </span>
);
