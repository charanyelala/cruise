// src/components/header.js - Updated with Cruise Navigation
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Anchor, Menu, X, Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter, Youtube, Linkedin,
  ChevronRight, Send, Clock, Calendar, Star,
  Award, Shield, Users, Waves, Ship, Compass,
  ArrowUpRight, Heart, Globe, ChevronDown
} from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👈 Updated navigation items with proper cruise links
  const navItems = [
    { 
      name: 'Cruises', 
      link: '/cruises',
      dropdown: [
        { name: 'Daily 3 Islands Cruise', link: '/cruises' },
        { name: 'Sunset Cruises', link: '/cruises/sunset' },
        { name: 'Private Charters', link: '/cruises/private' },
        { name: 'Corporate Events', link: '/cruises/corporate' }
      ]
    },
    { 
      name: 'Destinations', 
      link: '/destinations',
      dropdown: [
        { name: 'Santorini', link: '/destinations/santorini' },
        { name: 'Mykonos', link: '/destinations/mykonos' },
        { name: 'Hydra', link: '/destinations/hydra' },
        { name: 'Aegina', link: '/destinations/aegina' },
        { name: 'Poros', link: '/destinations/poros' }
      ]
    },
    { 
      name: 'Fleet', 
      link: '/fleet',
      dropdown: [
        { name: 'Luxury Yachts', link: '/fleet/luxury' },
        { name: 'Catamarans', link: '/fleet/catamarans' },
        { name: 'Motor Boats', link: '/fleet/motor' },
        { name: 'Sailing Yachts', link: '/fleet/sailing' }
      ]
    },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' }
  ];

  const isActiveRoute = (path) => location.pathname === path;

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Top Bar - Only shows when not scrolled */}
        {!scrolled && (
          <div style={{
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
          }}>
          </div>
        )}

        {/* Main Navigation */}
        <nav style={{
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
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {/* Logo */}
            <Link 
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: '#ffffff',
                fontSize: '1.75rem',
                fontWeight: '700',
                letterSpacing: '-0.5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                padding: '0.5rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
              }}>
                <Anchor size={24} color="#001e3c" />
              </div>
              <div>
                <div style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700' 
                }}>
                  Cruise in Athens
                </div>
                <div style={{ 
                  fontSize: '0.75rem', 
                  color: '#d4af37', 
                  letterSpacing: '1px',
                  textShadow: scrolled ? 'none' : '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}>
                  LUXURY YACHTING
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div style={{ 
              display: 'flex',
              gap: '2.5rem', 
              alignItems: 'center' 
            }}>
              {navItems.map((item, index) => (
                <div 
                  key={index}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    to={item.link}
                    style={{
                      color: isActiveRoute(item.link) ? '#d4af37' : '#ffffff',
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
                      borderBottom: isActiveRoute(item.link) ? '2px solid #d4af37' : '2px solid transparent',
                    }}
                    onMouseEnter={e => {
                      if (!isActiveRoute(item.link)) {
                        e.target.style.color = '#d4af37';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActiveRoute(item.link)) {
                        e.target.style.color = '#ffffff';
                      }
                    }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </Link>
                  
                  {/* 👈 Updated dropdown with proper links */}
                  {item.dropdown && (
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      marginTop: activeDropdown === index ? '0.5rem' : '1rem',
                      background: 'rgba(0, 30, 60, 0.98)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '12px',
                      padding: '0.75rem',
                      minWidth: '220px',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(212, 175, 55, 0.2)',
                      opacity: activeDropdown === index ? 1 : 0,
                      visibility: activeDropdown === index ? 'visible' : 'hidden',
                      transition: 'all 0.3s ease',
                    }}>
                      {item.dropdown.map((dropItem, dropIndex) => (
                        <Link
                          key={dropIndex}
                          to={dropItem.link}
                          style={{
                            color: '#ffffff',
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            display: 'block',
                            transition: 'all 0.3s ease',
                            fontSize: '0.9rem',
                            cursor: 'pointer',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={e => {
                            e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                            e.target.style.paddingLeft = '1.25rem';
                            e.target.style.color = '#d4af37';
                          }}
                          onMouseLeave={e => {
                            e.target.style.background = 'transparent';
                            e.target.style.paddingLeft = '1rem';
                            e.target.style.color = '#ffffff';
                          }}
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
            }}>
              <Link 
                to="/contact"
                style={{
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
                  textDecoration: 'none',
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
                Book Now <ArrowUpRight size={18} />
              </Link>
              
              <button
                style={{ 
                  background: 'transparent',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  display: 'none', // You can control this with media queries or state
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
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div style={{
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
          boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.3)',
          transform: `translateX(${mobileMenuOpen ? '0' : '100%'})`,
        }}>
          <div style={{
            padding: '1.5rem',
            borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
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
          
          <div style={{ padding: '1.5rem' }}>
            {navItems.map((item, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <Link 
                  to={item.link}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: isActiveRoute(item.link) ? '#d4af37' : '#ffffff',
                    fontSize: '1.1rem',
                    padding: '0.75rem',
                    display: 'block',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    background: isActiveRoute(item.link) ? 'rgba(212, 175, 55, 0.2)' : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (!isActiveRoute(item.link)) {
                      e.target.style.background = 'rgba(212, 175, 55, 0.1)';
                      e.target.style.paddingLeft = '1.25rem';
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActiveRoute(item.link)) {
                      e.target.style.background = 'transparent';
                      e.target.style.paddingLeft = '0.75rem';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {item.name}
                    {item.dropdown && <ChevronRight size={18} style={{ opacity: 0.7 }} />}
                  </div>
                </Link>
                
                {/* 👈 Updated mobile dropdown with proper links */}
                {item.dropdown && (
                  <div style={{ 
                    paddingLeft: '1rem', 
                    marginTop: '0.5rem',
                    borderLeft: '2px solid rgba(212, 175, 55, 0.3)',
                    marginLeft: '0.75rem'
                  }}>
                    {item.dropdown.map((dropItem, dropIndex) => (
                      <Link
                        key={dropIndex}
                        to={dropItem.link}
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ 
                          fontSize: '0.95rem',
                          padding: '0.5rem 0.75rem',
                          color: 'rgba(255, 255, 255, 0.8)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          borderRadius: '8px',
                          transition: 'all 0.3s ease',
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
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <Link 
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#001e3c',
                width: '100%',
                marginTop: '2rem',
                padding: '1rem',
                fontSize: '1.05rem',
                justifyContent: 'center',
                borderRadius: '50px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
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
            </Link>
          </div>
        </div>

        {/* Overlay */}
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: mobileMenuOpen ? 'block' : 'none',
            zIndex: 1000,
          }}
          onClick={() => setMobileMenuOpen(false)}
        />
      </header>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @media (max-width: 968px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
        
        @media (min-width: 969px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;