import React, { useState, useEffect } from 'react';
import { 
  Anchor, Award, Shield, Users, Heart, Globe, Compass, Ship,
  Star, Clock, MapPin, Phone, Mail, ChevronRight, ArrowRight,
  Camera, Waves, Calendar, Trophy, CheckCircle, Play, X,
  Sparkles, Target, Eye, Flag, Zap, ThumbsUp, Coffee
} from 'lucide-react';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8;
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [el.id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafb',
      fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
      position: 'relative',
      overflow: 'hidden',
    },
    heroSection: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'url("/images/ship2.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      transform: `translateY(${scrollY * 0.5}px)`,
      transition: 'transform 0.1s ease-out',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(0, 30, 60, 0.4) 0%, rgba(0, 61, 122, 0.6) 50%, rgba(0, 30, 60, 0.8) 100%)',
      zIndex: 2,
    },
    heroContent: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      color: '#ffffff',
      padding: '0 1rem',
      maxWidth: '1000px',
      animation: 'fadeInUp 1.5s ease-out',
    },
    heroSubtitle: {
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
      letterSpacing: '3px',
      textTransform: 'uppercase',
      marginBottom: '1rem',
      color: '#d4af37',
      fontWeight: '300',
      animation: 'fadeIn 2s ease-out 0.3s both',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      flexWrap: 'wrap',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: '700',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      letterSpacing: '-2px',
      background: 'linear-gradient(135deg, #ffffff 0%, #e6f3ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'fadeInUp 1.5s ease-out 0.5s both',
      textShadow: '0 2px 20px rgba(0,0,0,0.1)',
    },
    heroDescription: {
      fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      color: 'rgba(255,255,255,0.95)',
      maxWidth: '800px',
      margin: '0 auto 2.5rem',
      animation: 'fadeInUp 1.5s ease-out 0.7s both',
      fontWeight: '300',
    },
    section: {
      padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
      position: 'relative',
      overflow: 'hidden',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#003d7a',
      letterSpacing: '-1px',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    sectionSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: 'clamp(2rem, 4vw, 3rem)',
      maxWidth: '700px',
      margin: '0 auto clamp(2rem, 4vw, 3rem)',
      lineHeight: '1.7',
    },
    storySection: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
    },
    storyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(2rem, 4vw, 3rem)',
      maxWidth: '1400px',
      margin: '0 auto',
      alignItems: 'center',
    },
    storyContent: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: 'clamp(2rem, 4vw, 3rem)',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s ease',
    },
    storyImage: {
      width: '100%',
      height: 'clamp(300px, 40vw, 500px)',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.15)',
      transition: 'transform 0.6s ease',
    },
    valuesSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    valueCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: 'clamp(2rem, 4vw, 2.5rem)',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.6s ease',
      textAlign: 'center',
      cursor: 'pointer',
    },
    valueIcon: {
      width: 'clamp(60px, 8vw, 80px)',
      height: 'clamp(60px, 8vw, 80px)',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      boxShadow: '0 15px 35px rgba(212, 175, 55, 0.3)',
    },
    teamSection: {
      background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(2rem, 4vw, 2.5rem)',
      maxWidth: '1300px',
      margin: '0 auto',
    },
    teamCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      transition: 'all 0.6s ease',
      cursor: 'pointer',
      border: '1px solid rgba(0, 102, 204, 0.1)',
    },
    teamImage: {
      width: '100%',
      height: 'clamp(250px, 30vw, 320px)',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
    },
    teamContent: {
      padding: 'clamp(1.5rem, 3vw, 2rem)',
    },
    timelineSection: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
    },
    timeline: {
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
    },
    timelineItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: 'clamp(2rem, 4vw, 3rem)',
      position: 'relative',
    },
    timelineYear: {
      minWidth: 'clamp(80px, 12vw, 120px)',
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: '700',
      color: '#d4af37',
      textAlign: 'center',
    },
    timelineContent: {
      flex: 1,
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '16px',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      marginLeft: 'clamp(1rem, 2vw, 2rem)',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
    },
    awardsSection: {
      background: 'linear-gradient(135deg, #f8fafb 0%, #ffffff 100%)',
    },
    awardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    awardCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      textAlign: 'center',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s ease',
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
      textAlign: 'center',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#1a1a1a',
      padding: 'clamp(0.8rem, 2vw, 1.1rem) clamp(2rem, 4vw, 2.8rem)',
      borderRadius: '50px',
      border: 'none',
      fontSize: 'clamp(1rem, 2vw, 1.15rem)',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0 0.5rem 0.5rem',
    },
    playButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(212, 175, 55, 0.9)',
      borderRadius: '50%',
      padding: '1.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 15px 40px rgba(212, 175, 55, 0.4)',
      opacity: 0,
      zIndex: 5,
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 30, 60, 0.95)',
      backdropFilter: 'blur(20px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
    },
    modalContent: {
      background: 'rgba(255,255,255,0.95)',
      borderRadius: '24px',
      padding: 'clamp(2rem, 4vw, 3rem)',
      maxWidth: '600px',
      width: '100%',
      maxHeight: '80vh',
      overflow: 'auto',
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      border: 'none',
      borderRadius: '50%',
      padding: '0.5rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    floatingElements: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 1,
    },

    // Mobile-specific responsive adjustments
    '@media (max-width: 768px)': {
      heroContent: {
        padding: '0 1rem',
      },
      storyGrid: {
        gridTemplateColumns: '1fr',
      },
      valuesGrid: {
        gridTemplateColumns: '1fr',
        gap: '1.5rem',
      },
      teamGrid: {
        gridTemplateColumns: '1fr',
      },
      timelineItem: {
        flexDirection: 'column',
        textAlign: 'center',
      },
      timelineContent: {
        marginLeft: 0,
        marginTop: '1rem',
      },
    },

    // Tablet adjustments
    '@media (min-width: 769px) and (max-width: 1024px)': {
      storyGrid: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      },
      valuesGrid: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      teamGrid: {
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      },
    },
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
  `;

  const values = [
    {
      icon: <Shield size={36} />,
      title: "Safety First",
      description: "Your safety is our top priority. We maintain the highest safety standards with certified crew and modern equipment."
    },
    {
      icon: <Heart size={36} />,
      title: "Passion",
      description: "We love what we do and it shows. Our passion for the sea drives us to create exceptional experiences."
    },
    {
      icon: <Award size={36} />,
      title: "Excellence",
      description: "We strive for excellence in every detail, from our vessels to our service, ensuring unforgettable moments."
    },
    {
      icon: <Users size={36} />,
      title: "Community",
      description: "Building lasting relationships with our guests and supporting local maritime communities in Greece."
    }
  ];

  

  const timeline = [
    {
      year: "2014",
      title: "Founded",
      description: "Cruise in Athens was established with a vision to share the beauty of the Saronic Gulf with travelers from around the world."
    },
    {
      year: "2016",
      title: "Fleet Expansion",
      description: "Added luxury catamarans to our fleet, expanding our capacity and comfort offerings for larger groups."
    },
    {
      year: "2019",
      title: "Award Recognition",
      description: "Received the 'Best Maritime Experience' award from the Greek Tourism Organization."
    },
    {
      year: "2021",
      title: "Sustainability Initiative",
      description: "Launched our eco-friendly program, implementing sustainable practices across all operations."
    },
    {
      year: "2024",
      title: "10 Years Strong",
      description: "Celebrating a decade of excellence with over 5,000 satisfied guests and 50+ unique destinations."
    }
  ];

  const awards = [
    {
      icon: <Trophy size={32} />,
      title: "Best Maritime Experience",
      year: "2023",
      organization: "Greek Tourism Awards"
    },
    {
      icon: <Star size={32} />,
      title: "Excellence in Service",
      year: "2022",
      organization: "Travel & Leisure"
    },
    {
      icon: <Shield size={32} />,
      title: "Safety Excellence",
      year: "2023",
      organization: "Maritime Safety Authority"
    },
    {
      icon: <Globe size={32} />,
      title: "Eco-Friendly Operator",
      year: "2023",
      organization: "Green Tourism Board"
    }
  ];

  const FloatingElements = ({ count = 20, color = "rgba(0, 102, 204, 0.1)" }) => (
    <div style={styles.floatingElements}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            background: color,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroBackground}></div>
          <div style={styles.heroOverlay}></div>
          
          <div style={styles.heroContent}>
            <p style={styles.heroSubtitle}>
              <Anchor size={20} />
              <span>Our Story</span>
              <Sparkles size={20} />
            </p>
            <h1 style={styles.heroTitle}>Cruise in Athens</h1>
            <p style={styles.heroDescription}>
              Born from a passion for the sea and a love for Greek hospitality, we've been creating 
              unforgettable maritime adventures in the Saronic Gulf since 2014.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                style={styles.ctaButton}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
                }}
              >
                <Users size={20} />
                Meet Our Team
              </button>
              <button 
                style={{
                  ...styles.ctaButton,
                  background: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  border: '2px solid rgba(255,255,255,0.3)',
                }}
                onClick={() => setVideoModalOpen(true)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <Play size={20} />
                Watch Our Story
              </button>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section style={{ ...styles.section, ...styles.storySection }}>
          <FloatingElements count={15} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Our Story</h2>
          <p style={styles.sectionSubtitle}>
            From humble beginnings to becoming Greece's premier cruise experience
          </p>
          
          <div style={styles.storyGrid}>
            <div 
              className="fade-in"
              id="story-content"
              style={{
                ...styles.storyContent,
                opacity: isVisible['story-content'] ? 1 : 0,
                transform: isVisible['story-content'] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
              }}
            >
              <h3 style={{ 
                fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
                color: '#003d7a', 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <Ship size={28} />
                The Beginning
              </h3>
              <p style={{ 
                lineHeight: '1.8', 
                color: '#4b5563', 
                marginBottom: '1.5rem',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              }}>
                Founded in 2014 by Captain Dimitrios Kostas, Cruise in Athens began as a dream 
                to share the hidden treasures of the Saronic Gulf with visitors from around the world. 
                With over two decades of maritime experience, Captain Kostas recognized the need for 
                authentic, high-quality cruise experiences that showcase the natural beauty and 
                cultural richness of the Greek islands.
              </p>
              <p style={{ 
                lineHeight: '1.8', 
                color: '#4b5563',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              }}>
                What started with a single yacht has grown into a fleet of luxury vessels, 
                each carefully selected and maintained to provide the ultimate in comfort, 
                safety, and style. Today, we're proud to be one of Athens' most trusted 
                cruise operators, serving thousands of guests annually.
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                marginTop: '2rem',
                flexWrap: 'wrap',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: 'clamp(2rem, 4vw, 3rem)', 
                    fontWeight: '700', 
                    color: '#d4af37' 
                  }}>10+</div>
                  <div style={{ color: '#6b7280', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Years</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: 'clamp(2rem, 4vw, 3rem)', 
                    fontWeight: '700', 
                    color: '#d4af37' 
                  }}>5000+</div>
                  <div style={{ color: '#6b7280', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Guests</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ 
                    fontSize: 'clamp(2rem, 4vw, 3rem)', 
                    fontWeight: '700', 
                    color: '#d4af37' 
                  }}>50+</div>
                  <div style={{ color: '#6b7280', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>Destinations</div>
                </div>
              </div>
            </div>
            
            <div 
              className="fade-in"
              id="story-image"
              style={{
                opacity: isVisible['story-image'] ? 1 : 0,
                transform: isVisible['story-image'] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s ease 0.2s',
                position: 'relative',
              }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1.05) rotate(2deg)';
                e.currentTarget.querySelector('.play-overlay').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1) rotate(0deg)';
                e.currentTarget.querySelector('.play-overlay').style.opacity = '0';
              }}
            >
              <img 
                src="/images/ship1.jpeg" 
                alt="Our beautiful fleet"
                style={styles.storyImage}
              />
              <div 
                className="play-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 30, 60, 0.7)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  cursor: 'pointer',
                }}
                onClick={() => setVideoModalOpen(true)}
              >
                <button style={{
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 15px 40px rgba(212, 175, 55, 0.4)',
                  animation: 'pulse 2s infinite',
                }}>
                  <Play size={32} color="#1a1a1a" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section style={{ ...styles.section, ...styles.valuesSection }}>
          <FloatingElements count={20} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>Our Values</h2>
          <p style={{ ...styles.sectionSubtitle, color: 'rgba(255,255,255,0.8)' }}>
            The principles that guide everything we do
          </p>
          
          <div style={styles.valuesGrid}>
            {values.map((value, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`value-${index}`}
                style={{
                  ...styles.valueCard,
                  opacity: isVisible[`value-${index}`] ? 1 : 0,
                  transform: isVisible[`value-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease ${index * 0.1}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={styles.valueIcon}>
                  {React.cloneElement(value.icon, { color: '#1a1a1a' })}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}>
                  {value.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section 
        <section style={{ ...styles.section, ...styles.teamSection }}>
          <FloatingElements count={12} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>Meet Our Team</h2>
          <p style={styles.sectionSubtitle}>
            Experienced professionals dedicated to your perfect cruise experience
          </p>
          
          <div style={styles.teamGrid}>
            {team.map((member, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`team-${index}`}
                style={{
                  ...styles.teamCard,
                  opacity: isVisible[`team-${index}`] ? 1 : 0,
                  transform: isVisible[`team-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease ${index * 0.15}s`,
                }}
                onClick={() => setActiveTeamMember(member)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.15)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  style={styles.teamImage}
                />
                <div style={styles.teamContent}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', 
                    color: '#003d7a', 
                    marginBottom: '0.5rem',
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ 
                    color: '#d4af37', 
                    fontWeight: '600', 
                    marginBottom: '1rem',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  }}>
                    {member.role}
                  </p>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6', 
                    marginBottom: '1rem',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  }}>
                    {member.bio}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {member.specialties.map((specialty, i) => (
                      <span 
                        key={i}
                        style={{
                          background: 'rgba(0, 102, 204, 0.1)',
                          color: '#0066cc',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                          fontWeight: '500',
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Timeline Section */}
        <section style={{ ...styles.section, ...styles.timelineSection }}>
          <h2 style={styles.sectionTitle}>Our Journey</h2>
          <p style={styles.sectionSubtitle}>
            Milestones that have shaped our story
          </p>
          
          <div style={styles.timeline}>
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`timeline-${index}`}
                style={{
                  ...styles.timelineItem,
                  opacity: isVisible[`timeline-${index}`] ? 1 : 0,
                  transform: isVisible[`timeline-${index}`] ? 'translateX(0)' : 'translateX(-50px)',
                  transition: `all 1s ease ${index * 0.2}s`,
                }}
              >
                <div style={styles.timelineYear}>
                  {item.year}
                </div>
                <div 
                  style={styles.timelineContent}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 61, 122, 0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                  }}
                >
                  <h3 style={{ 
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.4rem)', 
                    color: '#003d7a', 
                    marginBottom: '0.75rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.6',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section style={{ ...styles.section, ...styles.awardsSection }}>
          <FloatingElements count={8} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Recognition & Awards</h2>
          <p style={styles.sectionSubtitle}>
            Industry recognition for our commitment to excellence
          </p>
          
          <div style={styles.awardsGrid}>
            {awards.map((award, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`award-${index}`}
                style={{
                  ...styles.awardCard,
                  opacity: isVisible[`award-${index}`] ? 1 : 0,
                  transform: isVisible[`award-${index}`] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 1s ease ${index * 0.1}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                }}
              >
                <div style={{
                  ...styles.valueIcon,
                  width: '60px',
                  height: '60px',
                  margin: '0 auto 1rem',
                }}>
                  {React.cloneElement(award.icon, { color: '#1a1a1a' })}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)', 
                  color: '#003d7a', 
                  marginBottom: '0.5rem',
                }}>
                  {award.title}
                </h3>
                <p style={{ 
                  color: '#d4af37', 
                  fontWeight: '600', 
                  marginBottom: '0.5rem',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                }}>
                  {award.year}
                </p>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                }}>
                  {award.organization}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ ...styles.section, ...styles.ctaSection }}>
          <FloatingElements count={15} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
            Ready to Experience the Magic?
          </h2>
          <p style={{ 
            ...styles.sectionSubtitle, 
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          }}>
            Join thousands of satisfied guests who have discovered the beauty of the Saronic Gulf with us
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
            <button 
              style={styles.ctaButton}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
              }}
            >
              <Ship size={20} />
              Explore Our Fleet
            </button>
            <button 
              style={{
                ...styles.ctaButton,
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: '2px solid rgba(255,255,255,0.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              <Calendar size={20} />
              Book Your Cruise
            </button>
          </div>
        </section>

        {/* Team Member Modal */}
        {activeTeamMember && (
          <div style={styles.modal} onClick={() => setActiveTeamMember(null)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                style={styles.closeButton}
                onClick={() => setActiveTeamMember(null)}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <X size={20} color="#1a1a1a" />
              </button>
              
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={activeTeamMember.image} 
                  alt={activeTeamMember.name}
                  style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginBottom: '1.5rem',
                    boxShadow: '0 15px 40px rgba(0, 61, 122, 0.2)',
                  }}
                />
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  color: '#003d7a', 
                  marginBottom: '0.5rem',
                }}>
                  {activeTeamMember.name}
                </h3>
                <p style={{ 
                  color: '#d4af37', 
                  fontWeight: '600', 
                  marginBottom: '1.5rem',
                  fontSize: '1.2rem',
                }}>
                  {activeTeamMember.role}
                </p>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.7', 
                  marginBottom: '2rem',
                  fontSize: '1.1rem',
                }}>
                  {activeTeamMember.bio}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: '#003d7a', marginBottom: '1rem' }}>Specialties</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                    {activeTeamMember.specialties.map((specialty, i) => (
                      <span 
                        key={i}
                        style={{
                          background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                          color: '#ffffff',
                          padding: '0.5rem 1rem',
                          borderRadius: '50px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                        }}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  style={{
                    background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                    color: '#1a1a1a',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setActiveTeamMember(null)}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Coffee size={18} style={{ marginRight: '0.5rem' }} />
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video Modal */}
        {videoModalOpen && (
          <div style={styles.modal} onClick={() => setVideoModalOpen(false)}>
            <button 
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                border: 'none',
                color: '#1a1a1a',
                padding: '1rem',
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setVideoModalOpen(false)}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <X size={24} />
            </button>
            <video 
              style={{
                width: '85%',
                maxWidth: '1000px',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
              }}
              controls
              autoPlay
              src="/hero.mp4"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default AboutPage;