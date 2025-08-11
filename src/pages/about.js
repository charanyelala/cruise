import React, { useState, useEffect } from 'react';
import { 
  Anchor, Users, Award, Shield, Globe, Heart, Star,
  Ship, Waves, Compass, MapPin, Phone, Mail, 
  ChefHat, Languages, ArrowRight, CheckCircle,
  Camera, Calendar, Clock, Sparkles, Trophy,
  Navigation, Sunset, Mountain, Fish, Utensils
} from 'lucide-react';

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      paddingTop: '120px',
    },
    heroSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 2,
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: '700',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #e6f3ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'fadeInUp 1s ease-out',
      textShadow: '0 2px 20px rgba(0,0,0,0.1)',
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      lineHeight: '1.8',
      marginBottom: '2rem',
      color: 'rgba(255,255,255,0.9)',
      animation: 'fadeInUp 1s ease-out 0.2s both',
    },
    heroStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
      animation: 'fadeInUp 1s ease-out 0.4s both',
    },
    statItem: {
      textAlign: 'center',
      padding: '1rem',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.3s ease',
    },
    section: {
      padding: '6rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    sectionAlt: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#003d7a',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '4rem',
      maxWidth: '800px',
      margin: '0 auto 4rem',
      lineHeight: '1.7',
    },
    twoColumnGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
      gap: '4rem',
      alignItems: 'center',
      marginBottom: '4rem',
    },
    contentCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: '3rem',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      transformStyle: 'preserve-3d',
    },
    imageCard: {
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.15)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg)`,
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2.5rem',
      marginTop: '4rem',
    },
    teamCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: '3rem',
      textAlign: 'center',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      transformStyle: 'preserve-3d',
    },
    iconWrapper: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 2rem',
      boxShadow: '0 15px 35px rgba(0, 102, 204, 0.3)',
      position: 'relative',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
    },
    serviceCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '2.5rem',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.4s ease',
    },
    destinationGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
    },
    destinationCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.4s ease',
    },
    featureList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1.5rem',
      marginTop: '2rem',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem',
      background: 'rgba(0, 102, 204, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(0, 102, 204, 0.1)',
    },
    contactSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
      textAlign: 'center',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
    },
    contactCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: '2rem',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.4s ease',
    },
    testimonialSlider: {
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: '3rem',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
    },
    floatingIcon: {
      position: 'absolute',
      animation: 'float 6s ease-in-out infinite',
      opacity: 0.1,
      zIndex: 1,
    }
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 102, 204, 0.3); }
      50% { box-shadow: 0 0 40px rgba(0, 102, 204, 0.6), 0 0 60px rgba(212, 175, 55, 0.2); }
    }
  `;

  const teamMembers = [
    {
      icon: <Users size={40} color="#ffffff" />,
      title: "Multilingual Crew",
      description: "Our dedicated team speaks English, Greek, Turkish, Spanish, Russian and more, ensuring every guest feels welcomed and well taken care of.",
      languages: ["English", "Greek", "Turkish", "Spanish", "Russian"]
    },
    {
      icon: <ChefHat size={40} color="#ffffff" />,
      title: "Expert Chefs",
      description: "Two talented chefs onboard, crafting exquisite meals using the finest, locally sourced ingredients and traditional Greek flavors.",
      specialties: ["Mediterranean Cuisine", "Traditional Greek", "Fresh Seafood", "Local Ingredients"]
    },
    {
      icon: <Shield size={40} color="#ffffff" />,
      title: "Operations Team",
      description: "Our efficient operational experts ensure every detail of your booking and transfer process is seamless and stress-free.",
      services: ["Booking Management", "Transfer Coordination", "Guest Services", "Safety Protocols"]
    }
  ];

  const services = [
    {
      icon: <Calendar size={24} color="#0066cc" />,
      title: "Daily Cruises",
      description: "Wide range of daily cruises departing from Athens, allowing you to discover the beauty and charm of nearby islands.",
      features: ["Multiple departure times", "Professional guides", "All-inclusive packages", "Small group sizes"]
    },
    {
      icon: <Heart size={24} color="#0066cc" />,
      title: "Customized Packages",
      description: "Tailor your cruise experience to your preferences with our customizable packages for a personalized journey.",
      features: ["Flexible itineraries", "Private charters", "Special occasions", "Corporate events"]
    }
  ];

  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600",
      title: "Saronic Islands",
      subtitle: "Agistri, Moni & Aegina",
      description: "Each offering unique charm, history, and natural beauty in crystal-clear waters."
    },
    {
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=600",
      title: "Athens Riviera",
      subtitle: "Cape Sounio",
      description: "Experience the beauty of Athens Riviera and famous Poseidon's Temple at Cape Sounio."
    }
  ];

  const onboardFeatures = [
    { icon: <Trophy size={20} />, text: "Award Winning Vessels - Angelique and Martika" },
    { icon: <Ship size={20} />, text: "Newest, most luxurious and biggest boats in Athens" },
    { icon: <Waves size={20} />, text: "SUP and snorkeling equipment included" },
    { icon: <Sunset size={20} />, text: "Comfortable sun-loungers for relaxation" },
    { icon: <Utensils size={20} />, text: "Gourmet Greek cuisine in buffet style" },
    { icon: <Fish size={20} />, text: "Fresh ingredients and exquisite flavors" }
  ];

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Floating background elements */}
        <div style={{...styles.floatingIcon, top: '10%', left: '5%'}}>
          <Anchor size={100} color="#0066cc" />
        </div>
        <div style={{...styles.floatingIcon, top: '30%', right: '10%', animationDelay: '2s'}}>
          <Ship size={80} color="#d4af37" />
        </div>
        <div style={{...styles.floatingIcon, bottom: '20%', left: '8%', animationDelay: '4s'}}>
          <Compass size={90} color="#0066cc" />
        </div>

        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroContent}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                padding: '1rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
              }}>
                <Anchor size={40} color="#001e3c" />
              </div>
              <div>
                <h1 style={styles.heroTitle}>About Cruise in Athens</h1>
              </div>
            </div>
            
            <p style={styles.heroSubtitle}>
              Your premier travel agency for sea adventures in Athens. With our expertise and dedication, 
              we aim to provide unforgettable experiences exploring the stunning Greek islands and coastline.
            </p>

            <div style={styles.heroStats}>
              <div style={styles.statItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#d4af37', marginBottom: '0.5rem' }}>10+</div>
                <div>Years Experience</div>
              </div>
              <div style={styles.statItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#d4af37', marginBottom: '0.5rem' }}>2</div>
                <div>Luxury Yachts</div>
              </div>
              <div style={styles.statItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#d4af37', marginBottom: '0.5rem' }}>5000+</div>
                <div>Happy Guests</div>
              </div>
              <div style={styles.statItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: '#d4af37', marginBottom: '0.5rem' }}>100%</div>
                <div>Safety Record</div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Vision & Mission</h2>
            <p style={styles.sectionSubtitle}>
              We create authentic cruises and lifetime experiences
            </p>

            <div style={styles.twoColumnGrid}>
              <div 
                className="fade-in"
                id="vision-content"
                style={{
                  ...styles.contentCard,
                  opacity: isVisible['vision-content'] ? 1 : 0,
                  transform: isVisible['vision-content'] ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'all 1s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(-5deg) rotateY(10deg)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                    padding: '1rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <Heart size={32} color="#ffffff" />
                  </div>
                  <h3 style={{ fontSize: '2rem', color: '#003d7a', margin: 0 }}>Our Mission</h3>
                </div>
                
                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#4b5563',
                  marginBottom: '2rem'
                }}>
                  Welcome to Cruise in Athens, your gateway to unforgettable cruising experiences in the stunning Saronic Islands. 
                  Our mission is to provide you with an exceptional and personalized journey through these beautiful islands, 
                  combining relaxation, adventure, and cultural discovery.
                </p>

                <p style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  color: '#4b5563'
                }}>
                  With a fleet of two luxurious, well-maintained yachts and a team of experienced, friendly crew members, 
                  we promise to deliver a seamless, safe, and unforgettable cruise experience. Our passion for the Saronic Islands 
                  and commitment to exceptional service make us the perfect choice for your next adventure on the water.
                </p>
              </div>

              <div 
                className="fade-in"
                id="vision-image"
                style={{
                  ...styles.imageCard,
                  opacity: isVisible['vision-image'] ? 1 : 0,
                  transform: isVisible['vision-image'] ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'all 1s ease 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateY(-10deg) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateY(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.15)';
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800" 
                  alt="Luxury yacht cruise" 
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Expert Team</h2>
            <p style={styles.sectionSubtitle}>
              Dedicated professionals committed to providing exceptional service and unforgettable experiences
            </p>

            <div style={styles.teamGrid}>
              {teamMembers.map((member, index) => (
                <div 
                  key={index}
                  className="fade-in"
                  id={`team-${index}`}
                  style={{
                    ...styles.teamCard,
                    opacity: isVisible[`team-${index}`] ? 1 : 0,
                    transform: isVisible[`team-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                    transition: `all 1s ease ${index * 0.2}s`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-15px) rotateX(-8deg) rotateY(5deg) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
                  }}
                >
                  <div style={styles.iconWrapper}>
                    {member.icon}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                      opacity: 0.8,
                      animation: 'glow 4s ease-in-out infinite',
                      zIndex: -1,
                    }}></div>
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '1.8rem', 
                    marginBottom: '1rem', 
                    color: '#003d7a',
                    fontWeight: '600'
                  }}>
                    {member.title}
                  </h3>
                  
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7', 
                    marginBottom: '2rem',
                    fontSize: '1.1rem'
                  }}>
                    {member.description}
                  </p>

                  {member.languages && (
                    <div>
                      <h4 style={{ color: '#003d7a', marginBottom: '1rem' }}>Languages Spoken:</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {member.languages.map((lang, i) => (
                          <span key={i} style={{
                            background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                            color: '#1a1a1a',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}>
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {member.specialties && (
                    <div>
                      <h4 style={{ color: '#003d7a', marginBottom: '1rem' }}>Specialties:</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {member.specialties.map((specialty, i) => (
                          <span key={i} style={{
                            background: 'rgba(0, 102, 204, 0.1)',
                            color: '#0066cc',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            border: '1px solid rgba(0, 102, 204, 0.2)'
                          }}>
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {member.services && (
                    <div>
                      <h4 style={{ color: '#003d7a', marginBottom: '1rem' }}>Services:</h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {member.services.map((service, i) => (
                          <span key={i} style={{
                            background: 'rgba(0, 102, 204, 0.1)',
                            color: '#0066cc',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            border: '1px solid rgba(0, 102, 204, 0.2)'
                          }}>
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Services</h2>
            <p style={styles.sectionSubtitle}>
              Comprehensive cruise experiences tailored to your preferences
            </p>

            <div style={styles.servicesGrid}>
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="fade-in"
                  id={`service-${index}`}
                  style={{
                    ...styles.serviceCard,
                    opacity: isVisible[`service-${index}`] ? 1 : 0,
                    transform: isVisible[`service-${index}`] ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 1s ease ${index * 0.2}s`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{
                      background: 'rgba(0, 102, 204, 0.1)',
                      padding: '1rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(0, 102, 204, 0.2)'
                    }}>
                      {service.icon}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', color: '#003d7a', margin: 0 }}>{service.title}</h3>
                  </div>
                  
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7', 
                    marginBottom: '1.5rem',
                    fontSize: '1.1rem'
                  }}>
                    {service.description}
                  </p>

                  <div style={styles.featureList}>
                    {service.features.map((feature, i) => (
                      <div key={i} style={styles.featureItem}>
                        <CheckCircle size={20} color="#0066cc" />
                        <span style={{ color: '#4b5563' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Our Destinations</h2>
            <p style={styles.sectionSubtitle}>
              Explore breathtaking locations in the Saronic Gulf and Athens Riviera
            </p>

            <div style={styles.destinationGrid}>
              {destinations.map((destination, index) => (
                <div 
                  key={index}
                  className="fade-in"
                  id={`destination-${index}`}
                  style={{
                    ...styles.destinationCard,
                    opacity: isVisible[`destination-${index}`] ? 1 : 0,
                    transform: isVisible[`destination-${index}`] ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 1s ease ${index * 0.2}s`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.2)';
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                    e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  }}
                >
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    style={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease'
                    }}
                  />
                  <div style={{ padding: '2rem' }}>
                    <h3 style={{ 
                      fontSize: '1.8rem', 
                      color: '#003d7a', 
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      {destination.title}
                    </h3>
                    <p style={{ 
                      color: '#d4af37', 
                      fontSize: '1.1rem', 
                      fontWeight: '500',
                      marginBottom: '1rem'
                    }}>
                      {destination.subtitle}
                    </p>
                    <p style={{ 
                      color: '#6b7280', 
                      lineHeight: '1.7',
                      fontSize: '1.1rem'
                    }}>
                      {destination.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboard Experience Section */}
        <section style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Onboard Experience</h2>
            <p style={styles.sectionSubtitle}>
              Award-winning vessels with premium amenities for the ultimate comfort
            </p>

            <div style={styles.twoColumnGrid}>
              <div 
                className="fade-in"
                id="onboard-image"
                style={{
                  ...styles.imageCard,
                  opacity: isVisible['onboard-image'] ? 1 : 0,
                  transform: isVisible['onboard-image'] ? 'translateX(0)' : 'translateX(-50px)',
                  transition: 'all 1s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateY(10deg) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateY(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.15)';
                }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800" 
                  alt="Luxury yacht interior" 
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                />
              </div>

              <div 
                className="fade-in"
                id="onboard-content"
                style={{
                  ...styles.contentCard,
                  opacity: isVisible['onboard-content'] ? 1 : 0,
                  transform: isVisible['onboard-content'] ? 'translateX(0)' : 'translateX(50px)',
                  transition: 'all 1s ease 0.2s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(-5deg) rotateY(-10deg)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                    padding: '1rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                    <Award size={32} color="#1a1a1a" />
                  </div>
                  <h3 style={{ fontSize: '2rem', color: '#003d7a', margin: 0 }}>Premium Comfort</h3>
                </div>

                <div style={styles.featureList}>
                  {onboardFeatures.map((feature, i) => (
                    <div key={i} style={{
                      ...styles.featureItem,
                      background: 'linear-gradient(135deg, rgba(0, 102, 204, 0.05), rgba(212, 175, 55, 0.05))',
                      border: '1px solid rgba(0, 102, 204, 0.1)',
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                        padding: '0.5rem',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#ffffff'
                      }}>
                        {feature.icon}
                      </div>
                      <span style={{ color: '#4b5563', fontWeight: '500' }}>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{...styles.section, ...styles.contactSection}}>
          <div style={styles.container}>
            <h2 style={{...styles.sectionTitle, color: '#ffffff'}}>Get in Touch</h2>
            <p style={{...styles.sectionSubtitle, color: 'rgba(255,255,255,0.8)'}}>
              Ready to embark on your next adventure? Contact us today!
            </p>

            <div style={styles.contactGrid}>
              <div style={styles.contactCard}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MapPin size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Address</h3>
                <p>Marina Zeas 18536</p>
                <p>Piraeus, Greece</p>
              </div>

              <div style={styles.contactCard}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Phone size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Phone</h3>
                <p>+30 6984922197</p>
              </div>

              <div style={styles.contactCard}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Email</h3>
                <p>info@CruiseInAthens.com</p>
              </div>

              <div style={styles.contactCard}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.transform = 'translateY(-10px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Shield size={32} color="#d4af37" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>License</h3>
                <p>0207Ε70000991201</p>
              </div>
            </div>

            <div style={{
              marginTop: '4rem',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                Ready to create unforgettable memories?
              </p>
              <button style={{
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                color: '#1a1a1a',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
              }}
              >
                Book Your Cruise Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsPage;