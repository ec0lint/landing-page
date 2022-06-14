import React from "react";
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
import UseCasesPage from './pages/UseCasesPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import RulePage from './pages/RulePage';
import TeamPage from './pages/TeamPage';
import { blog, features } from './text';

const root = ReactDOM.createRoot(document.getElementById('root')!);
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
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="team" element={<TeamPage />} />
      
        <Route path="blog/introduction-to-digital-ecology" element={<BlogPostPage data={blog.posts[0]}/>} />
        <Route path="blog/ec0lint" element={<BlogPostPage data={blog.posts[1]}/>} />
        <Route path="blog/change-your-online-habits" element={<BlogPostPage data={blog.posts[2]}/>} />

        <Route path="features/no-ttf-font-files" element={<RulePage data={features[0]}/>} />
        <Route path="features/lighter-http" element={<RulePage data={features[1]}/>} />
        <Route path="features/lighter-image-files" element={<RulePage data={features[2]}/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </span>
);
