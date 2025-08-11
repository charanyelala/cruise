import React, { useState, useEffect } from 'react';
import { 
  Anchor, Menu, X, Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter, Youtube, Linkedin,
  ChevronRight, Send, Clock, Calendar, Star,
  Award, Shield, Users, Waves, Ship, Compass,
  ArrowUpRight, Heart, Globe, ChevronDown
} from 'lucide-react';

// Header Component
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'Cruises', 
      dropdown: ['Day Cruises', 'Sunset Cruises', 'Private Charters', 'Corporate Events'] 
    },
    { 
      name: 'Destinations', 
      dropdown: ['Santorini', 'Mykonos', 'Hydra', 'Aegina', 'Poros'] 
    },
    { 
      name: 'Fleet', 
      dropdown: ['Luxury Yachts', 'Catamarans', 'Motor Boats', 'Sailing Yachts'] 
    },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  const headerStyles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    topBar: {
      background: scrolled 
        ? 'linear-gradient(90deg, #001e3c 0%, #003d7a 100%)' 
        : 'transparent',
      padding: '0.5rem 0',
      fontSize: '0.875rem',
      color: '#ffffff',
      borderBottom: scrolled 
        ? '1px solid rgba(212, 175, 55, 0.3)' 
        : 'none',
      display: scrolled ? 'none' : 'block',
      transition: 'all 0.3s ease',
    },
    topBarContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      '@media (min-width: 768px)': {
        padding: '0 2rem'
      }
    },
    mainNav: {
      background: scrolled 
        ? 'rgba(0, 30, 60, 0.98)' 
        : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled 
        ? '1px solid rgba(212, 175, 55, 0.2)' 
        : 'none',
      padding: scrolled ? '0.75rem 0' : '1rem 0',
      boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    navContent: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '@media (min-width: 768px)': {
        padding: '0 2rem'
      }
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      color: '#ffffff',
      fontSize: '1.75rem',
      fontWeight: '700',
      letterSpacing: '-0.5px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    logoIcon: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      padding: '0.5rem',
      borderRadius: '12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
    },
    navMenu: {
      display: 'flex',
      gap: '2.5rem',
      alignItems: 'center',
      '@media (max-width: 968px)': { display: 'none' }
    },
    navItem: {
      position: 'relative',
    },
    navLink: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
      padding: '0.5rem 0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      letterSpacing: '0.3px',
      textShadow: scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)',
    },
    dropdown: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: '1rem',
      background: 'rgba(0, 30, 60, 0.98)',
      backdropFilter: 'blur(12px)',
      borderRadius: '12px',
      padding: '0.75rem',
      minWidth: '200px',
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.3s ease',
    },
    dropdownVisible: {
      opacity: 1,
      visibility: 'visible',
      marginTop: '0.5rem',
    },
    dropdownItem: {
      color: '#ffffff',
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      display: 'block',
      transition: 'all 0.3s ease',
      fontSize: '0.9rem',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    ctaButtons: {
      display: 'flex',
      gap: '1rem',
      alignItems: 'center',
    },
    bookButton: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#001e3c',
      padding: '0.75rem 1.75rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    mobileMenuButton: {
      display: 'none',
      background: 'transparent',
      border: 'none',
      color: '#ffffff',
      cursor: 'pointer',
      padding: '0.5rem',
      '@media (max-width: 968px)': { display: 'block' }
    },
    mobileMenu: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '85%',
      maxWidth: '380px',
      height: '100vh',
      background: 'linear-gradient(180deg, #001e3c 0%, #003d7a 100%)',
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      zIndex: 1001,
      overflowY: 'auto',
      boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)'
    },
    mobileMenuHeader: {
      padding: '1.5rem',
      borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    mobileMenuContent: {
      padding: '1.5rem',
    },
    mobileNavItem: {
      marginBottom: '1rem',
    },
    mobileNavLink: {
      color: '#ffffff',
      fontSize: '1.1rem',
      padding: '0.75rem',
      display: 'block',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: mobileMenuOpen ? 'block' : 'none',
      zIndex: 1000,
    }
  };

  return (
    <>
      <header style={headerStyles.header}>
        {/* Top Bar - Only shows when not scrolled */}
        {!scrolled && (
          <div style={headerStyles.topBar}>
          
          </div>
        )}

        {/* Main Navigation */}
        <nav style={headerStyles.mainNav}>
          <div style={headerStyles.navContent}>
            <div 
              style={{
                ...headerStyles.logo,
                fontSize: window.innerWidth <= 480 ? '1.25rem' : '1.75rem'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                ...headerStyles.logoIcon,
                padding: window.innerWidth <= 480 ? '0.4rem' : '0.5rem'
              }}>
                <Anchor size={window.innerWidth <= 480 ? 20 : 24} color="#001e3c" />
              </div>
              <div>
                <div style={{ 
                  fontSize: window.innerWidth <= 480 ? '1.1rem' : '1.5rem', 
                  fontWeight: '700' 
                }}>
                  Cruise in Athens
                </div>
                <div style={{ 
                  fontSize: window.innerWidth <= 480 ? '0.65rem' : '0.75rem', 
                  color: '#d4af37', 
                  letterSpacing: '1px',
                  textShadow: scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  LUXURY YACHTING
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div style={{ 
              display: window.innerWidth > 968 ? 'flex' : 'none',
              gap: '2.5rem', 
              alignItems: 'center' 
            }}>
              {navItems.map((item, index) => (
                <div 
                  key={index}
                  style={headerStyles.navItem}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a 
                    style={{
                      ...headerStyles.navLink,
                      textShadow: scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseEnter={e => {
                      e.target.style.color = '#d4af37';
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = '#ffffff';
                    }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </a>
                  {item.dropdown && (
                    <div style={{
                      ...headerStyles.dropdown,
                      ...(activeDropdown === index ? headerStyles.dropdownVisible : {})
                    }}>
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          style={headerStyles.dropdownItem}
                          onMouseEnter={e => {
                            e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                            e.target.style.paddingLeft = '1.25rem';
                          }}
                          onMouseLeave={e => {
                            e.target.style.background = 'transparent';
                            e.target.style.paddingLeft = '1rem';
                          }}
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={headerStyles.ctaButtons}>
              {/* Desktop Book Button */}
              {window.innerWidth > 968 && (
                <button 
                  style={headerStyles.bookButton}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                  }}
                >
                  Book Now <ArrowUpRight size={18} />
                </button>
              )}
              
              {/* Mobile Menu Button */}
              {window.innerWidth <= 968 && (
                <button
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => setMobileMenuOpen(true)}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Menu size={28} />
                </button>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div style={{
          ...headerStyles.mobileMenu,
          transform: `translateX(${mobileMenuOpen ? '0' : '100%'})`,
          right: 0
        }}>
          <div style={headerStyles.mobileMenuHeader}>
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
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
              }}
            >
              <X size={24} />
            </button>
          </div>
          <div style={headerStyles.mobileMenuContent}>
            {navItems.map((item, index) => (
              <div key={index} style={headerStyles.mobileNavItem}>
                <a 
                  href={item.link ? item.link : "#"}
                  style={headerStyles.mobileNavLink}
                  onMouseEnter={e => {
                    e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                    e.target.style.paddingLeft = '1.25rem';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = 'transparent';
                    e.target.style.paddingLeft = '0.75rem';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {item.name}
                    {item.dropdown && <ChevronRight size={18} style={{ opacity: 0.7 }} />}
                  </div>
                </a>
                {item.dropdown && (
                  <div style={{ 
                    paddingLeft: '1rem', 
                    marginTop: '0.5rem',
                    borderLeft: '2px solid rgba(212, 175, 55, 0.3)',
                    marginLeft: '0.75rem'
                  }}>
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <a
                        key={dropIndex}
                        style={{ 
                          ...headerStyles.mobileNavLink, 
                          fontSize: '0.95rem',
                          padding: '0.5rem 0.75rem',
                          color: 'rgba(255, 255, 255, 0.8)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                        onMouseEnter={e => {
                          e.target.style.background = 'rgba(212, 175, 55, 0.05)';
                          e.target.style.color = '#ffffff';
                        }}
                        onMouseLeave={e => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                        }}
                      >
                        <div style={{
                          width: '4px',
                          height: '4px',
                          background: '#d4af37',
                          borderRadius: '50%'
                        }} />
                        {dropItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              style={{
                ...headerStyles.bookButton,
                width: '100%',
                marginTop: '2rem',
                padding: '1rem',
                fontSize: '1.05rem',
                justifyContent: 'center'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
              }}
            >
              Book Your Cruise <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        {/* Overlay */}
        <div 
          style={headerStyles.overlay}
          onClick={() => setMobileMenuOpen(false)}
        />
      </header>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
};

export default Header;