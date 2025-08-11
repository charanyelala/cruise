import React, { useState, useEffect } from 'react';
import { 
  MapPin, Camera, Heart, Star, Clock, Users, Ship, Waves,
  TreePine, Mountain, Fish, Sun, Wind, Compass, Eye,
  ArrowRight, Sparkles, Bike, Utensils, Anchor, Globe,
  Award, Shield, Navigation, Timer, Calendar, Check
} from 'lucide-react';

const DestinationsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [activeIsland, setActiveIsland] = useState(0);

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
      textShadow: '0 2px 20px rgba(0,0,0,0.1)',
    },
    heroSubtitle: {
      fontSize: '1.4rem',
      lineHeight: '1.8',
      marginBottom: '3rem',
      color: 'rgba(255,255,255,0.9)',
      maxWidth: '800px',
      margin: '0 auto 3rem',
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
    islandCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.15)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      marginBottom: '4rem',
      transformStyle: 'preserve-3d',
    },
    islandGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0',
      alignItems: 'center',
    },
    islandGridReverse: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0',
      alignItems: 'center',
      direction: 'rtl',
    },
    islandContent: {
      padding: '3rem',
      direction: 'ltr',
    },
    islandImage: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
    },
    islandTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#003d7a',
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    islandDescription: {
      fontSize: '1.1rem',
      lineHeight: '1.8',
      color: '#4b5563',
      marginBottom: '2rem',
    },
    highlightBox: {
      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '16px',
      padding: '1.5rem',
      marginBottom: '2rem',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginTop: '2rem',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem',
      background: 'rgba(0, 102, 204, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(0, 102, 204, 0.1)',
    },
    quickFactsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
    },
    factCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '2rem',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.4s ease',
      textAlign: 'center',
    },
    iconWrapper: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      boxShadow: '0 15px 35px rgba(0, 102, 204, 0.3)',
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
      padding: '6rem 2rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    ctaButton: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#1a1a1a',
      padding: '1.25rem 3rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.2rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      textDecoration: 'none',
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
    @keyframes wave {
      0%, 100% { transform: translateX(0) rotate(0deg); }
      50% { transform: translateX(10px) rotate(5deg); }
    }
  `;

  const islands = [
    {
      name: "Agistri Island",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
      description: "Agistri is a peaceful and picturesque island in the Saronic Gulf, known for its crystal-clear waters, lush pine forests, and charming villages. Just a short boat ride from the mainland, it's the perfect destination for those seeking a serene escape, away from the hustle and bustle.",
      fullDescription: "With beautiful beaches, hiking trails, and a relaxed atmosphere, Agistri offers visitors a perfect blend of natural beauty and authentic Greek charm. Whether you're looking to swim in turquoise waters, explore quiet coves, or enjoy delicious local cuisine, Agistri promises an unforgettable, laid-back experience.",
      highlight: "A great way to explore the island is by renting a bicycle. Remote beaches and small coves are more accessible by bike, and you'll enjoy the ride through nature.",
      features: [
        { icon: <Waves size={20} />, text: "Crystal-clear waters" },
        { icon: <TreePine size={20} />, text: "Lush pine forests" },
        { icon: <Bike size={20} />, text: "Bicycle rentals available" },
        { icon: <Mountain size={20} />, text: "Hidden coves & beaches" }
      ],
      color: "#0066cc"
    },
    {
      name: "Moni & Metopi Islands",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
      description: "Moni and Metopi are small, uninhabited islands located just off the coast of Aegina, offering an idyllic retreat for nature lovers and those seeking tranquility. Known for their pristine beaches, crystal-clear waters, and lush vegetation, they are the perfect destinations for swimming, snorkeling, or simply relaxing.",
      fullDescription: "Moni island is home to a variety of wildlife, including deer and peacocks, adding to its charm. Whether you're enjoying a day of leisure or exploring the island's natural beauty, both islands offer a serene escape into nature, just a short boat ride away from the mainland.",
      highlight: "Swimming spot is chosen based on weather conditions for optimal safety and enjoyment.",
      features: [
        { icon: <Fish size={20} />, text: "Perfect for snorkeling" },
        { icon: <Eye size={20} />, text: "Wildlife spotting (deer & peacocks)" },
        { icon: <Waves size={20} />, text: "Pristine swimming waters" },
        { icon: <TreePine size={20} />, text: "Untouched nature" }
      ],
      color: "#003d7a"
    },
    {
      name: "Aegina Island",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800",
      description: "Aegina, one of the most popular islands in the Saronic Gulf, is a vibrant blend of history, culture, and natural beauty. Famous for its ancient Temple of Apollo & Aphaia, this island is steeped in rich history and mythology.",
      fullDescription: "With its charming harbor, sandy beaches, and picturesque villages, Aegina offers both relaxation and exploration. Known for its delicious pistachios, the island also boasts fantastic local cuisine and a lively atmosphere. Whether you're visiting historic sites, enjoying seaside dining, or strolling through traditional streets, Aegina offers something for every traveler.",
      highlight: "Pistachio ice cream is a MUST try when visiting Aegina!",
      features: [
        { icon: <Mountain size={20} />, text: "Temple of Apollo & Aphaia" },
        { icon: <Utensils size={20} />, text: "Famous pistachios & local cuisine" },
        { icon: <Anchor size={20} />, text: "Charming harbor town" },
        { icon: <Clock size={20} />, text: "Rich history & mythology" }
      ],
      color: "#d4af37"
    }
  ];

  const quickFacts = [
    {
      icon: <Clock size={32} />,
      title: "Duration",
      description: "Full day experience visiting all 3 islands with time to explore each destination"
    },
    {
      icon: <Ship size={32} />,
      title: "Transportation",
      description: "Comfortable yacht cruise with professional crew and safety equipment"
    },
    {
      icon: <Waves size={32} />,
      title: "Activities",
      description: "Swimming, snorkeling, sightseeing, dining, and cultural exploration"
    },
    {
      icon: <Camera size={32} />,
      title: "Photo Opportunities",
      description: "Stunning landscapes, wildlife, historic sites, and crystal-clear waters"
    }
  ];

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Floating background elements */}
        <div style={{...styles.floatingIcon, top: '10%', left: '5%'}}>
          <Ship size={100} color="#0066cc" />
        </div>
        <div style={{...styles.floatingIcon, top: '30%', right: '10%', animationDelay: '2s'}}>
          <Anchor size={80} color="#d4af37" />
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
                animation: 'wave 4s ease-in-out infinite'
              }}>
                <MapPin size={40} color="#001e3c" />
              </div>
            </div>
            
            <h1 style={styles.heroTitle}>The 3 Saronic Islands</h1>
            <p style={styles.heroSubtitle}>
              Let's explore Agistri, Moni & Aegina - three unique destinations offering the perfect 
              blend of natural beauty, rich history, and authentic Greek island experiences.
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
              marginTop: '2rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.1)',
                padding: '1rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <TreePine size={20} />
                <span>Nature & Wildlife</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.1)',
                padding: '1rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Mountain size={20} />
                <span>Ancient History</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.1)',
                padding: '1rem 1.5rem',
                borderRadius: '50px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <Waves size={20} />
                <span>Crystal Waters</span>
              </div>
            </div>
          </div>
        </section>

        {/* Islands Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            {islands.map((island, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`island-${index}`}
                style={{
                  ...styles.islandCard,
                  opacity: isVisible[`island-${index}`] ? 1 : 0,
                  transform: isVisible[`island-${index}`] 
                    ? 'translateY(0) rotateX(0deg)' 
                    : 'translateY(50px) rotateX(5deg)',
                  transition: `all 1s ease ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) rotateX(-2deg) rotateY(2deg) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.2)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1) rotateZ(2deg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.15)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1) rotateZ(0deg)';
                }}
              >
                <div style={index % 2 === 0 ? styles.islandGrid : styles.islandGridReverse}>
                  <div style={styles.islandContent}>
                    <h2 style={{
                      ...styles.islandTitle,
                      background: `linear-gradient(135deg, ${island.color}, #0066cc)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {island.name}
                    </h2>
                    
                    <p style={styles.islandDescription}>
                      {island.description}
                    </p>
                    
                    <p style={{
                      ...styles.islandDescription,
                      marginBottom: '2rem'
                    }}>
                      {island.fullDescription}
                    </p>

                    <div style={{
                      ...styles.highlightBox,
                      borderColor: `${island.color}30`,
                      background: `linear-gradient(135deg, ${island.color}10, ${island.color}05)`
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.75rem'
                      }}>
                        <div style={{
                          background: island.color,
                          padding: '0.5rem',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Sparkles size={16} color="#ffffff" />
                        </div>
                        <span style={{ 
                          color: island.color, 
                          fontWeight: '600',
                          fontSize: '1rem'
                        }}>
                          Special Highlight
                        </span>
                      </div>
                      <p style={{ 
                        color: '#4b5563', 
                        margin: 0, 
                        fontStyle: 'italic',
                        lineHeight: '1.6'
                      }}>
                        {island.highlight}
                      </p>
                    </div>

                    <div style={styles.featureGrid}>
                      {island.features.map((feature, featureIndex) => (
                        <div key={featureIndex} style={{
                          ...styles.featureItem,
                          borderColor: `${island.color}20`,
                          background: `${island.color}08`
                        }}>
                          <div style={{ color: island.color }}>{feature.icon}</div>
                          <span style={{ color: '#4b5563', fontWeight: '500' }}>{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={island.image} 
                      alt={island.name}
                      style={styles.islandImage}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(0, 30, 60, 0.9)',
                      color: '#ffffff',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '20px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Eye size={16} />
                      <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                        Island {index + 1} of 3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Facts Section */}
        <section style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Why Visit The Saronic Islands?</h2>
            <p style={{
              fontSize: '1.3rem',
              textAlign: 'center',
              color: '#6b7280',
              marginBottom: '4rem',
              maxWidth: '800px',
              margin: '0 auto 4rem',
              lineHeight: '1.7',
            }}>
              Three unique destinations in one unforgettable journey, each offering distinct experiences 
              and authentic Greek island charm.
            </p>

            <div style={styles.quickFactsGrid}>
              {quickFacts.map((fact, index) => (
                <div 
                  key={index}
                  className="fade-in"
                  id={`fact-${index}`}
                  style={{
                    ...styles.factCard,
                    opacity: isVisible[`fact-${index}`] ? 1 : 0,
                    transform: isVisible[`fact-${index}`] 
                      ? 'translateY(0) rotateX(0deg)' 
                      : 'translateY(30px) rotateX(10deg)',
                    transition: `all 1s ease ${index * 0.1}s`,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-15px) rotateX(-5deg) rotateY(3deg) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                  }}
                >
                  <div style={styles.iconWrapper}>
                    {React.cloneElement(fact.icon, { color: '#ffffff' })}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    color: '#003d7a', 
                    marginBottom: '1rem',
                    fontWeight: '600'
                  }}>
                    {fact.title}
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7',
                    fontSize: '1.1rem'
                  }}>
                    {fact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Overview */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Your Island-Hopping Journey</h2>
            
            <div style={{
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(20px)',
              borderRadius: '32px',
              padding: '3rem',
              boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
              border: '1px solid rgba(0, 102, 204, 0.1)',
              marginTop: '3rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '200px',
                height: '200px',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                borderRadius: '50%',
                opacity: 0.1,
                animation: 'float 8s ease-in-out infinite'
              }}></div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
                alignItems: 'center'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '2rem',
                    color: '#003d7a',
                    marginBottom: '1.5rem',
                    fontWeight: '600'
                  }}>
                    Experience All Three Islands
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8',
                    color: '#4b5563',
                    marginBottom: '2rem'
                  }}>
                    Our carefully crafted itinerary takes you on a journey through three distinct destinations, 
                    each offering unique experiences from peaceful nature retreats to historic cultural sites.
                  </p>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { icon: <Check size={20} />, text: "Professional guided tour with local insights" },
                      { icon: <Check size={20} />, text: "Optimal timing for each island's highlights" },
                      { icon: <Check size={20} />, text: "Comfortable yacht transportation between islands" },
                      { icon: <Check size={20} />, text: "Free time to explore at your own pace" }
                    ].map((item, index) => (
                      <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '0.75rem',
                        background: 'rgba(0, 102, 204, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 102, 204, 0.1)'
                      }}>
                        <div style={{ color: '#0066cc' }}>{item.icon}</div>
                        <span style={{ color: '#4b5563', fontWeight: '500' }}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
                  borderRadius: '24px',
                  padding: '2rem',
                  color: '#ffffff',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cdefs%3E%3Cpattern id=\'grain\' patternUnits=\'userSpaceOnUse\' width=\'100\' height=\'100\'%3E%3Ccircle cx=\'10\' cy=\'10\' r=\'1\' fill=\'%23ffffff\' opacity=\'0.1\'/%3E%3Ccircle cx=\'90\' cy=\'90\' r=\'1\' fill=\'%23ffffff\' opacity=\'0.1\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100\' height=\'100\' fill=\'url(%23grain)\'/%3E%3C/svg%3E")',
                  }}></div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <Ship size={48} style={{ marginBottom: '1rem', opacity: 0.9 }} />
                    <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
                      10-Hour Adventure
                    </h4>
                    <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      Full day cruise including breakfast, lunch, swimming, sightseeing, and cultural exploration
                    </p>
                    <div style={{
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      padding: '1rem',
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}>
                      <span style={{ fontSize: '2rem', fontWeight: '700' }}>From €150</span>
                      <br />
                      <span style={{ opacity: 0.8 }}>per person</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <div style={styles.container}>
            <div style={{
              maxWidth: '800px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2
            }}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                marginBottom: '1rem',
                textShadow: '0 2px 20px rgba(0,0,0,0.3)'
              }}>
                Ready to Explore the Saronic Islands?
              </h2>
              <p style={{ 
                fontSize: '1.3rem', 
                marginBottom: '3rem', 
                opacity: 0.9,
                lineHeight: '1.7'
              }}>
                Join us on an unforgettable journey through three unique Greek islands, 
                each offering distinct experiences and breathtaking natural beauty.
              </p>
              
              <div style={{
                display: 'flex',
                gap: '1.5rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginBottom: '3rem'
              }}>
                <a 
                  href="/cruises"
                  style={styles.ctaButton}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.5)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
                  }}
                >
                  Book Your Island Adventure <ArrowRight size={24} />
                </a>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '3rem',
                flexWrap: 'wrap',
                opacity: 0.9
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Star size={20} fill="#d4af37" color="#d4af37" />
                  <span>4.9/5 Rating</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Users size={20} />
                  <span>500+ Happy Guests</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Shield size={20} />
                  <span>100% Safe & Licensed</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              animation: 'float 6s ease-in-out infinite',
              opacity: 0.3
            }}>
              <Waves size={60} />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '20%',
              right: '10%',
              animation: 'float 8s ease-in-out infinite 2s',
              opacity: 0.3
            }}>
              <Anchor size={80} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DestinationsPage;