import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from "./components/Layout.jsx";
import Reservas from "./components/Reservas.jsx";
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Ubicacion from './components/Ubicacion.jsx';
import Footer from './components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <video 
      className='fixed top-0 left-0 w-full h-full object-cover -z-10'
      autoPlay 
      muted 
      loop 
      playsInline 
      preload="auto"
    >
      <source src='../public/vid/estepa-drone.mp4' type="video/mp4" />
    </video>
    
    <Layout />
    
    <Reservas />
    
    <About />
    
    <Contact />
    
    <Ubicacion />
    
    <Footer />
  </>
)
