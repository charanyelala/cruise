import React, { useState, useEffect } from 'react';
import { 
  Anchor, Menu, X, Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter, Youtube, Linkedin,
  ChevronRight, Send, Clock, Calendar, Star,
  Award, Shield, Users, Waves, Ship, Compass,
  ArrowUpRight, Heart, Globe, ChevronDown
} from 'lucide-react';

const Header = ({ currentPage = 'home' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth <= 1024 && window.innerWidth > 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { 
      name: 'Home', 
      link: '/' 
    },
    { 
      name: 'Cruises', 
      link: '/cruises',
      dropdown: ['3 ISLANDS CRUISE'] 
    },
    { 
      name: 'Destinations', 
      link: '/destinations',
      dropdown: ['The 3 Saronic Islands'] 
    },
    { 
      name: 'Fleet', 
      link: '/fleet',
      dropdown: ['Our Yachts'] 
    },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  const contactInfo = [
    { icon: <Phone size={14} />, text: '+30 210 123 4567' },
    { icon: <Mail size={14} />, text: 'info@saronicdreamcruise.com' },
    { icon: <MapPin size={14} />, text: 'Marina Alimos, Athens' }
  ];

  const socialLinks = [
    { icon: <Facebook size={16} />, url: '#' },
    { icon: <Instagram size={16} />, url: '#' },
    { icon: <Twitter size={16} />, url: '#' },
    { icon: <Youtube size={16} />, url: '#' }
  ];

  const handleNavigation = (link) => {
    // Close mobile menu when navigating
    setMobileMenuOpen(false);
    // Navigate to the page
    window.location.href = link;
  };

  return (
    <>
      <style>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .top-bar {
          background: ${scrolled 
            ? 'linear-gradient(90deg, #001e3c 0%, #003d7a 100%)' 
            : 'transparent'};
          padding: 0.5rem 0;
          font-size: 0.875rem;
          color: #ffffff;
          border-bottom: ${scrolled 
            ? '1px solid rgba(212, 175, 55, 0.3)' 
            : 'none'};
          display: ${scrolled || isMobile ? 'none' : 'block'};
          transition: all 0.3s ease;
        }
        
        .top-bar-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        @media (min-width: 768px) {
          .top-bar-content {
            padding: 0 2rem;
          }
        }
        
        .contact-info {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .contact-info {
            gap: 1rem;
            font-size: 0.75rem;
          }
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          transition: color 0.3s ease;
        }
        
        .contact-item:hover {
          color: #d4af37;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        @media (max-width: 768px) {
          .social-links {
            gap: 0.5rem;
          }
        }
        
        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.1);
          border: 1px solid rgba(212, 175, 55, 0.3);
          color: #d4af37;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .social-link:hover {
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: #001e3c;
          transform: translateY(-2px);
        }
        
        .main-nav {
          background: ${scrolled 
            ? 'rgba(0, 30, 60, 0.98)' 
            : 'transparent'};
          backdrop-filter: ${scrolled ? 'blur(12px)' : 'none'};
          border-bottom: ${scrolled 
            ? '1px solid rgba(212, 175, 55, 0.2)' 
            : 'none'};
          padding: ${scrolled ? '0.75rem 0' : '1rem 0'};
          box-shadow: ${scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'};
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        @media (min-width: 768px) {
          .nav-content {
            padding: 0 2rem;
          }
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #ffffff;
          font-size: ${isMobile ? '1.1rem' : '1.75rem'};
          font-weight: 700;
          letter-spacing: -0.5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .logo:hover {
          transform: scale(1.05);
        }
        
        .logo-icon {
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          padding: ${isMobile ? '0.4rem' : '0.5rem'};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        }
        
        .logo-text {
          font-size: ${isMobile ? '1rem' : '1.5rem'};
          font-weight: 700;
        }
        
        .logo-subtitle {
          font-size: ${isMobile ? '0.6rem' : '0.75rem'};
          color: #d4af37;
          letter-spacing: 1px;
          text-shadow: ${scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'};
        }
        
        .nav-menu {
          display: ${isMobile ? 'none' : 'flex'};
          gap: ${isTablet ? '1.5rem' : '2.5rem'};
          align-items: center;
        }
        
        .nav-item {
          position: relative;
        }
        
        .nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: ${isTablet ? '0.9rem' : '0.95rem'};
          font-weight: 500;
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: all 0.3s ease;
          cursor: pointer;
          letter-spacing: 0.3px;
          text-shadow: ${scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'};
          border: none;
          background: transparent;
        }
        
        .nav-link:hover {
          color: #d4af37;
        }
        
        .nav-link.active {
          color: #d4af37;
          position: relative;
        }
        
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          border-radius: 2px;
        }
        
        .dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 1rem;
          background: rgba(0, 30, 60, 0.98);
          backdrop-filter: blur(12px);
          border-radius: 12px;
          padding: 0.75rem;
          min-width: 200px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(212, 175, 55, 0.2);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .dropdown.visible {
          opacity: 1;
          visibility: visible;
          margin-top: 0.5rem;
        }
        
        .dropdown-item {
          color: #ffffff;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          display: block;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          cursor: pointer;
          text-decoration: none;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
        }
        
        .dropdown-item:hover {
          background: rgba(212, 175, 55, 0.1);
          color: #d4af37;
          padding-left: 1.25rem;
        }
        
        .cta-buttons {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        
        .book-button {
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: #001e3c;
          padding: ${isMobile ? '0.6rem 1.2rem' : '0.75rem 1.75rem'};
          border-radius: 50px;
          border: none;
          font-size: ${isMobile ? '0.85rem' : '0.95rem'};
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          display: ${isMobile ? 'none' : 'flex'};
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
        }
        
        .book-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
        }
        
        .mobile-menu-button {
          display: ${isMobile ? 'block' : 'none'};
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .mobile-menu-button:hover {
          background: rgba(212, 175, 55, 0.1);
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 85%;
          max-width: 380px;
          height: 100vh;
          background: linear-gradient(180deg, #001e3c 0%, #003d7a 100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
          overflow-y: auto;
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
          transform: translateX(${mobileMenuOpen ? '0' : '100%'});
        }
        
        .mobile-menu-header {
          padding: 1.5rem;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .mobile-menu-content {
          padding: 1.5rem;
        }
        
        .mobile-nav-item {
          margin-bottom: 1rem;
        }
        
        .mobile-nav-link {
          color: #ffffff;
          font-size: 1.1rem;
          padding: 0.75rem;
          display: block;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }
        
        .mobile-nav-link:hover {
          background: rgba(212, 175, 55, 0.1);
          color: #d4af37;
          padding-left: 1.25rem;
        }
        
        .mobile-nav-link.active {
          background: rgba(212, 175, 55, 0.2);
          color: #d4af37;
        }
        
        .mobile-dropdown {
          padding-left: 1rem;
          margin-top: 0.5rem;
          border-left: 2px solid rgba(212, 175, 55, 0.3);
          margin-left: 0.75rem;
        }
        
        .mobile-dropdown-item {
          padding: 0.5rem 0.75rem;
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          background: transparent;
          width: 100%;
          text-align: left;
        }
        
        .mobile-dropdown-item:hover {
          background: rgba(212, 175, 55, 0.05);
          color: #ffffff;
        }
        
        .mobile-book-button {
          width: 100%;
          margin-top: 2rem;
          padding: 1rem;
          font-size: 1.05rem;
          justify-content: center;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: #001e3c;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .mobile-book-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
        }
        
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: ${mobileMenuOpen ? 'block' : 'none'};
          z-index: 1000;
        }
        
        @media (max-width: 480px) {
          .top-bar-content {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }
          
          .contact-info {
            justify-content: center;
          }
          
          .nav-content {
            padding: 0 0.5rem;
          }
          
          .logo {
            font-size: 1rem;
            gap: 0.5rem;
          }
          
          .logo-icon {
            padding: 0.3rem;
          }
        }
        
        @media (max-width: 375px) {
          .mobile-menu {
            width: 90%;
          }
          
          .logo-text {
            font-size: 0.9rem;
          }
          
          .logo-subtitle {
            font-size: 0.55rem;
          }
        }
      `}</style>

      <header className="header-container">
        {/* Top Bar - Only shows when not scrolled and not mobile */}
        {!scrolled && !isMobile && (
          <div className="top-bar">
            <div className="top-bar-content">
              <div className="contact-info">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <div key={index} className="social-link">
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Navigation */}
        <nav className="main-nav">
          <div className="nav-content">
            <div className="logo" onClick={() => handleNavigation('/')}>
              <div className="logo-icon">
                <Anchor size={isMobile ? 18 : 24} color="#001e3c" />
              </div>
              <div>
                <div className="logo-text">
                  SARONIC DREAM CRUISE
                </div>
                <div className="logo-subtitle">
                  PREMIUM YACHTING
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="nav-menu">
              {navItems.map((item, index) => (
                <div 
                  key={index}
                  className="nav-item"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button 
                    className={`nav-link ${currentPage === item.name.toLowerCase() ? 'active' : ''}`}
                    onClick={() => handleNavigation(item.link)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </button>
                  {item.dropdown && (
                    <div className={`dropdown ${activeDropdown === index ? 'visible' : ''}`}>
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <button
                          key={dropIndex}
                          className="dropdown-item"
                          onClick={() => handleNavigation(item.link)}
                        >
                          {dropItem}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="cta-buttons">
              {/* Desktop Book Button */}
              <button className="book-button" onClick={() => handleNavigation('/contact')}>
                Book Now <ArrowUpRight size={18} />
              </button>
              
              {/* Mobile Menu Button */}
              <button
                className="mobile-menu-button"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                padding: '0.5rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Anchor size={20} color="#001e3c" />
              </div>
              <div style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '600' }}>
                Menu
              </div>
            </div>
            <button
              style={{ 
                background: 'rgba(212, 175, 55, 0.1)', 
                border: '1px solid rgba(212, 175, 55, 0.3)',
                color: '#ffffff', 
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="mobile-menu-content">
            {navItems.map((item, index) => (
              <div key={index} className="mobile-nav-item">
                <button 
                  className={`mobile-nav-link ${currentPage === item.name.toLowerCase() ? 'active' : ''}`}
                  onClick={() => handleNavigation(item.link)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {item.name}
                    {item.dropdown && <ChevronRight size={18} style={{ opacity: 0.7 }} />}
                  </div>
                </button>
                {item.dropdown && (
                  <div className="mobile-dropdown">
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <button
                        key={dropIndex}
                        className="mobile-dropdown-item"
                        onClick={() => handleNavigation(item.link)}
                      >
                        <div style={{
                          width: '4px',
                          height: '4px',
                          background: '#d4af37',
                          borderRadius: '50%'
                        }} />
                        {dropItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              className="mobile-book-button"
              onClick={() => handleNavigation('/contact')}
            >
              Book Your Cruise <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div 
          className="overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      </header>
    </>
  );
};

export default Header;