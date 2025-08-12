import React, { useState, useEffect } from 'react';
import { 
  Anchor, Menu, X, Phone, Mail, MapPin, 
  Facebook, Instagram, Twitter, Youtube, Linkedin,
  ChevronRight, Send, Clock, Calendar, Star,
  Award, Shield, Users, Waves, Ship, Compass,
  ArrowUpRight, Heart, Globe, ChevronDown
} from 'lucide-react';
const Footer = () => {
  const [email, setEmail] = useState('');

  const footerStyles = {
    footer: {
      background: 'linear-gradient(180deg, #001e3c 0%, #000d1a 100%)',
      color: '#ffffff',
      paddingTop: '4rem',
      position: 'relative',
      overflow: 'hidden',
    },
    waveDecoration: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%23ffffff' fill-opacity='0.05' d='M0,50 C360,0 720,100 1440,50 L1440,0 L0,0 Z'%3E%3C/path%3E%3C/svg%3E")`,
      backgroundSize: 'cover',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
    },
    topSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '3rem',
      marginBottom: '3rem',
      paddingBottom: '3rem',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
    },
    column: {
      animation: 'fadeInUp 0.8s ease-out',
    },
    columnTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: '#d4af37',
      letterSpacing: '0.5px',
    },
    link: {
      color: 'rgba(255, 255, 255, 0.8)',
      textDecoration: 'none',
      padding: '0.5rem 0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontSize: '0.95rem',
      cursor: 'pointer',
    },
    socialIcons: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1.5rem',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: 'rgba(212, 175, 55, 0.1)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    newsletter: {
      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
      borderRadius: '16px',
      padding: '2rem',
      border: '1px solid rgba(212, 175, 55, 0.2)',
    },
    newsletterForm: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem',
      flexWrap: 'wrap',
    },
    input: {
      flex: 1,
      minWidth: '200px',
      padding: '0.75rem 1rem',
      borderRadius: '50px',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      background: 'rgba(255, 255, 255, 0.05)',
      color: '#ffffff',
      fontSize: '0.95rem',
      outline: 'none',
      transition: 'all 0.3s ease',
    },
    subscribeButton: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#001e3c',
      padding: '0.75rem 2rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '0.95rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
    },
    bottomSection: {
      padding: '2rem 0',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)',
    },
    bottomContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
    },
    trustBadges: {
      display: 'flex',
      gap: '2rem',
      marginTop: '2rem',
      flexWrap: 'wrap',
    },
    badge: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.5rem 1rem',
      background: 'rgba(212, 175, 55, 0.1)',
      borderRadius: '8px',
      border: '1px solid rgba(212, 175, 55, 0.2)',
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      border: '1px solid rgba(212, 175, 55, 0.2)',
    }
  };

  const socialLinks = [
   { icon: <Instagram size={16} />, url: 'https://www.instagram.com/saronicdreamcruise' },
      { icon: <Youtube size={16} />, url: 'https://www.youtube.com/@CRUISEINATHENS' }
  ];

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.waveDecoration}></div>
      
      <div style={footerStyles.container}>
        {/* Top Section */}
        <div style={footerStyles.topSection}>
          {/* Company Info */}
          <div style={footerStyles.column}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                padding: '0.75rem',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
              }}>
                <Anchor size={28} color="#001e3c" />
              </div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: '700' }}>SARONIC DREAM CRUISE</div>
                <div style={{ fontSize: '0.75rem', color: '#d4af37' }}>Luxury Yachting Adventures</div>
              </div>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Experience the timeless beauty of the Saronic Gulf with our luxury yacht cruises. 
              Creating unforgettable memories since 2014.
            </p>
            <div style={footerStyles.socialIcons}>
              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  style={footerStyles.socialIcon}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #d4af37, #f4d03f)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.querySelector('svg').style.color = '#001e3c';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.querySelector('svg').style.color = '#d4af37';
                  }}
                >
                  {React.cloneElement(social.icon, { color: '#d4af37' })}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Quick Links</h3>
            {['Our Fleet', 'Destinations', 'Day Cruises', 'Private Charters', 'Corporate Events', 'Special Occasions'].map((item, index) => (
              <a
                key={index}
                style={footerStyles.link}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#d4af37';
                  e.currentTarget.style.paddingLeft = '0.5rem';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                <ChevronRight size={16} /> {item}
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Contact Info</h3>
            <div style={footerStyles.contactCard}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <MapPin size={18} color="#d4af37" />
                  <span>Marina Zeas Pireaus, Athens 17455, Greece</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Phone size={18} color="#d4af37" />
                  <span>+30 698 492 2197 </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <Mail size={18} color="#d4af37" />
                  <span>info@saronicdreamcruise.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={18} color="#d4af37" />
                  <span>Mon-Sun: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
            <div style={footerStyles.trustBadges}>
              <div style={footerStyles.badge}>
                <Shield size={18} color="#d4af37" />
                <span style={{ fontSize: '0.85rem' }}>Licensed</span>
              </div>
              <div style={footerStyles.badge}>
                <Award size={18} color="#d4af37" />
                <span style={{ fontSize: '0.85rem' }}>Certified</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div style={footerStyles.column}>
            <h3 style={footerStyles.columnTitle}>Newsletter</h3>
            <div style={footerStyles.newsletter}>
              <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                Get Exclusive Offers
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Subscribe to receive special deals and updates about our cruises
              </p>
              <div style={footerStyles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={footerStyles.input}
                  onFocus={e => {
                    e.target.style.borderColor = '#d4af37';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={e => {
                    e.target.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
                <button 
                  style={footerStyles.subscribeButton}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                  }}
                >
                  Subscribe <Send size={18} />
                </button>
              </div>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', marginTop: '0.75rem' }}>
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            {/* Awards */}
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Star size={18} color="#d4af37" />
                <Star size={18} color="#d4af37" />
                <Star size={18} color="#d4af37" />
                <Star size={18} color="#d4af37" />
                <Star size={18} color="#d4af37" />
                <span style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  5.0 Rating • 500+ Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={footerStyles.bottomSection}>
          <div style={footerStyles.bottomContent}>
            <div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.9rem' }}>
                © 2025 SARONIC DREAM CRUISE. All rights reserved. | 
                <a style={{ color: '#d4af37', marginLeft: '0.5rem', marginRight: '0.5rem' }}>Privacy Policy</a> | 
                <a style={{ color: '#d4af37', marginLeft: '0.5rem', marginRight: '0.5rem' }}>Terms of Service</a> | 
                <a style={{ color: '#d4af37', marginLeft: '0.5rem' }}>Cancellation Policy</a>
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem' }}>
                We Accept:
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {['💳', '💰', '🏦'].map((icon, index) => (
                  <span key={index} style={{ fontSize: '1.5rem' }}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



export default Footer;