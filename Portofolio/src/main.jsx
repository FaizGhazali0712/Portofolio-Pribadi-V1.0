import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.jsx';
// Impor nama yang benar: HomeSection
import HomeSection from './Hero.jsx'; 
import Skill from './Skill.jsx';
import Project from './Project.jsx';
import Article from './Article.jsx';
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* Render nama yang benar: HomeSection */}
    <HomeSection /> 
    <Skill />
    <Project />
    <Article />
    <Footer />
  </StrictMode>,
)