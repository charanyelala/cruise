// src/App.js - Updated with Cruise Routing
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import CruiseDetails from './pages/cruises'; // 👈 Import your cruise page
import Destinations from './pages/destinations'; // 👈 Import your destinations page
import Fleet from './pages/fleet'; // 👈 Import your fleet page
import BookingPage from './pages/booking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 👈 Main cruise route */}
          <Route path="/cruises" element={<CruiseDetails />} />
          
          {/* 👈 Placeholder routes for future cruise pages */}
          <Route path="/cruises/sunset" element={
            <div style={{
              paddingTop: '120px', 
              minHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌅 Sunset Cruises</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Coming Soon - Romantic evening cruises with dinner</p>
              <a href="/cruises" style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1a1a1a',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                View Available Cruises
              </a>
            </div>
          } />
          
          <Route path="/cruises/private" element={
            <div style={{
              paddingTop: '120px', 
              minHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛥️ Private Charters</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Coming Soon - Exclusive yacht rentals for your group</p>
              <a href="/cruises" style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1a1a1a',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                View Available Cruises
              </a>
            </div>
          } />
          
          <Route path="/cruises/corporate" element={
            <div style={{
              paddingTop: '120px', 
              minHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏢 Corporate Events</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Coming Soon - Team building and corporate experiences</p>
              <a href="/cruises" style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1a1a1a',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                View Available Cruises
              </a>
            </div>
          } />
          
          {/* 👈 Destination routes */}
          <Route path="/destinations" element={<Destinations />} />
          
          <Route path="/destinations/*" element={
            <div style={{
              paddingTop: '120px', 
              minHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗺️ Destination Details</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Coming Soon - Detailed destination guides</p>
              <a href="/cruises" style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1a1a1a',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Book a Cruise
              </a>
            </div>
          } />
          
          {/* 👈 Fleet routes */}
          <Route path="/fleet" element={<Fleet />} />
          
          <Route path="/fleet/*" element={
            <div style={{
              paddingTop: '120px', 
              minHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>⛵ Fleet Details</h1>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Coming Soon - Detailed yacht specifications</p>
              <a href="/cruises" style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1a1a1a',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Book a Cruise
              </a>
            </div>
          } />
          
          <Route path="/booking" element={<BookingPage />} />

          {/* 👈 Contact page placeholder */}
          <Route path="/contact" element={
            <div style={{
              paddingTop: '120px', 
              minHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              flexDirection: 'column',
              background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
              color: '#ffffff',
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>📞 Contact Us</h1>
              <div style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                <p>📧 info@saronicdreamcruise.com</p>
                <p>📱 +30 6984922197</p>
                <p>📍 Marina Zeas 18536, Piraeus, Greece</p>
              </div>
              <a href="/cruises" style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1a1a1a',
                padding: '1rem 2rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: '600'
              }}>
                Book a Cruise
              </a>
            </div>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;