import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';
import MainPage from './pages/MainPage';
import GetStartedPage from './pages/GetStartedPage';
import DocsPage from './pages/DocsPage'
import FeaturesPage from './pages/FeaturesPage';
import ServicesPage from './pages/ServicesPage'
import Footer from './Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfConditionsPage from './pages/TermsOfConditionsPage';
import UseCasesPage from './pages/UseCasesPage';  
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import RulePage from './pages/RulePage';
import TeamPage from './pages/TeamPage';
import { blog, features } from './text';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <span className="mainContainer">
    <BrowserRouter>
      <ScrollToTop />
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms-of-conditions" element={<TermsOfConditionsPage />} />
        <Route path="get-started" element={<GetStartedPage />} />
        <Route path="docs" element={<DocsPage />}>
          {features.map(x =>
            <Route path={`${x.name}`} element={<RulePage data={x} />} />)}
        </Route>
    
        <Route path="features" element={<FeaturesPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="team" element={<TeamPage />} />

        <Route path="blog/introduction-to-digital-ecology" element={<BlogPostPage data={blog.posts[0]}/>} />
        <Route path="blog/ec0lint" element={<BlogPostPage data={blog.posts[1]}/>} />
        <Route path="blog/change-your-online-habits" element={<BlogPostPage data={blog.posts[2]}/>} />
        <Route path="blog/five-websites-we-recommend" element={<BlogPostPage data={blog.posts[3]}/>} />

        {/* {features.map(x => <Route path={`features/${x.name}`} element={<RulePage data={x}/>}/>)} */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  </span>
);
