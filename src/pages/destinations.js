import React, { useState, useEffect } from 'react';
import { 
  MapPin, Camera, Heart, Star, Clock, Users, Ship, Waves,
  TreePine, Mountain, Fish, Sun, Wind, Compass, Eye,
  ArrowRight, Sparkles, Bike, Utensils, Anchor, Globe,
  Award, Shield, Navigation, Timer, Calendar, Check,
  Play, X, ChevronDown, Target, Zap, ThumbsUp
} from 'lucide-react';

const DestinationsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeIsland, setActiveIsland] = useState(null);
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
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
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
      backgroundImage: 'url("https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
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
      background: 'linear-gradient(135deg, rgba(0, 30, 60, 0.4) 0%, rgba(0, 61, 122, 0.6) 50%, rgba(212, 175, 55, 0.3) 100%)',
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
    heroStats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.7rem',
      background: 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(20px)',
      padding: '1rem 1.8rem',
      borderRadius: '50px',
      border: '1px solid rgba(255,255,255,0.2)',
      fontSize: '1rem',
      fontWeight: '500',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
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
    islandsSection: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
    },
    islandCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.15)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s ease',
      marginBottom: 'clamp(2rem, 4vw, 4rem)',
    },
    islandGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0',
      alignItems: 'center',
    },
    islandContent: {
      padding: 'clamp(2rem, 4vw, 3rem)',
    },
    islandImage: {
      width: '100%',
      height: 'clamp(300px, 40vw, 500px)',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
    },
    islandTitle: {
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      fontWeight: '700',
      color: '#003d7a',
      marginBottom: '1rem',
    },
    islandDescription: {
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
      lineHeight: '1.8',
      color: '#4b5563',
      marginBottom: '1.5rem',
    },
    highlightBox: {
      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: '16px',
      padding: 'clamp(1rem, 2vw, 1.5rem)',
      marginBottom: '1.5rem',
    },
    featureGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1rem',
      marginTop: '1.5rem',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '1rem',
      background: 'rgba(0, 102, 204, 0.05)',
      borderRadius: '12px',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.3s ease',
    },
    quickFactsSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
    },
    quickFactsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    factCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: 'clamp(2rem, 4vw, 2.5rem)',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.6s ease',
      textAlign: 'center',
      cursor: 'pointer',
    },
    iconWrapper: {
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
    journeySection: {
      background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
    },
    journeyCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: 'clamp(2rem, 4vw, 3rem)',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      position: 'relative',
      overflow: 'hidden',
    },
    journeyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(2rem, 4vw, 3rem)',
      alignItems: 'center',
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
      textDecoration: 'none',
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
    @keyframes wave {
      0%, 100% { transform: translateX(0) rotate(0deg); }
      50% { transform: translateX(10px) rotate(5deg); }
    }

    @media (max-width: 768px) {
      .island-grid {
        grid-template-columns: 1fr !important;
      }
      .island-grid-reverse {
        grid-template-columns: 1fr !important;
      }
      .hero-stats {
        gap: 1rem !important;
        flex-direction: column !important;
        align-items: center !important;
      }
      .hero-section {
        background-attachment: scroll !important;
      }
    }

    @media (max-width: 480px) {
      .cta-button {
        width: 100% !important;
        padding: 1rem 2rem !important;
        font-size: 1rem !important;
      }
    }
  `;

  const islands = [
    {
      name: "Agistri Island",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
      description: "Agistri is a peaceful and picturesque island in the Saronic Gulf, known for its crystal-clear waters, lush pine forests, and charming villages. Just a short boat ride from the mainland, it's the perfect destination for those seeking a serene escape.",
      fullDescription: "With beautiful beaches, hiking trails, and a relaxed atmosphere, Agistri offers visitors a perfect blend of natural beauty and authentic Greek charm. Whether you're looking to swim in turquoise waters, explore quiet coves, or enjoy delicious local cuisine, Agistri promises an unforgettable experience.",
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
      description: "Moni and Metopi are small, uninhabited islands located just off the coast of Aegina, offering an idyllic retreat for nature lovers and those seeking tranquility. Known for their pristine beaches, crystal-clear waters, and lush vegetation.",
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
      icon: <TreePine size={32} />,
      title: "Nature & Wildlife",
      description: "Encounter deer, peacocks, and pristine natural environments across three unique island ecosystems"
    },
    {
      icon: <Mountain size={32} />,
      title: "Ancient History",
      description: "Explore historic temples, archaeological sites, and learn about Greek mythology and culture"
    },
    {
      icon: <Waves size={32} />,
      title: "Crystal Waters",
      description: "Swim and snorkel in some of the clearest waters in the Mediterranean Sea"
    },
    {
      icon: <Camera size={32} />,
      title: "Photo Opportunities",
      description: "Capture stunning landscapes, wildlife, historic sites, and unforgettable moments"
    }
  ];

  const journeyHighlights = [
    { icon: <Check size={20} />, text: "Professional guided tour with local insights" },
    { icon: <Check size={20} />, text: "Optimal timing for each island's highlights" },
    { icon: <Check size={20} />, text: "Comfortable yacht transportation between islands" },
    { icon: <Check size={20} />, text: "Free time to explore at your own pace" },
    { icon: <Check size={20} />, text: "All meals and refreshments included" },
    { icon: <Check size={20} />, text: "Swimming and snorkeling equipment provided" }
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
        <section style={styles.heroSection} className="hero-section">
          <div style={styles.heroBackground}></div>
          <div style={styles.heroOverlay}></div>
          
          <div style={styles.heroContent}>
            <p style={styles.heroSubtitle}>
              <MapPin size={20} />
              <span>Discover Paradise</span>
              <Sparkles size={20} />
            </p>
            <h1 style={styles.heroTitle}>The 3 Saronic Islands</h1>
            <p style={styles.heroDescription}>
              Embark on an extraordinary journey through Agistri, Moni & Aegina - three unique destinations 
              offering the perfect blend of natural beauty, rich history, and authentic Greek island experiences 
              in the pristine waters of the Saronic Gulf.
            </p>
            
            <div style={styles.heroStats} className="hero-stats">
              <div 
                style={styles.statItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
              >
                <TreePine size={24} />
                <span>Nature & Wildlife</span>
              </div>
              <div 
                style={styles.statItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
              >
                <Mountain size={24} />
                <span>Ancient History</span>
              </div>
              <div 
                style={styles.statItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                }}
              >
                <Waves size={24} />
                <span>Crystal Waters</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
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
                Watch Island Tour
              </button>
            </div>
          </div>
        </section>

        {/* Islands Section */}
        <section style={{ ...styles.section, ...styles.islandsSection }}>
          <FloatingElements count={15} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Explore Each Island</h2>
          <p style={styles.sectionSubtitle}>
            Three distinct destinations, each offering unique experiences and unforgettable memories
          </p>

          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {islands.map((island, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`island-${index}`}
                style={{
                  ...styles.islandCard,
                  opacity: isVisible[`island-${index}`] ? 1 : 0,
                  transform: isVisible[`island-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30th 80px rgba(0, 61, 122, 0.2)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.15)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                }}
              >
                <div 
                  style={index % 2 === 0 ? styles.islandGrid : { ...styles.islandGrid, direction: 'rtl' }}
                  className={index % 2 === 0 ? 'island-grid' : 'island-grid-reverse'}
                >
                  <div style={{ ...styles.islandContent, direction: 'ltr' }}>
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
                    
                    <p style={styles.islandDescription}>
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
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                        }}>
                          Special Highlight
                        </span>
                      </div>
                      <p style={{ 
                        color: '#4b5563', 
                        margin: 0, 
                        fontStyle: 'italic',
                        lineHeight: '1.6',
                        fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)'
                      }}>
                        {island.highlight}
                      </p>
                    </div>

                    <div style={styles.featureGrid}>
                      {island.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex} 
                          style={{
                            ...styles.featureItem,
                            borderColor: `${island.color}20`,
                            background: `${island.color}08`
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                            e.currentTarget.style.background = `${island.color}15`;
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.background = `${island.color}08`;
                          }}
                        >
                          <div style={{ color: island.color }}>{feature.icon}</div>
                          <span style={{ color: '#4b5563', fontWeight: '500', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)' }}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      style={{
                        background: `linear-gradient(135deg, ${island.color}, #0066cc)`,
                        color: '#ffffff',
                        padding: 'clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)',
                        borderRadius: '50px',
                        border: 'none',
                        fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        marginTop: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                      onClick={() => setActiveIsland(island)}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = `0 10px 25px ${island.color}40`;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Eye size={16} />
                      Learn More
                    </button>
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
                      <MapPin size={16} />
                      <span style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)', fontWeight: '500' }}>
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
        <section style={{ ...styles.section, ...styles.quickFactsSection }}>
          <FloatingElements count={20} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>Why Visit The Saronic Islands?</h2>
          <p style={{ ...styles.sectionSubtitle, color: 'rgba(255,255,255,0.8)' }}>
            Three unique destinations in one unforgettable journey, each offering distinct experiences and authentic Greek island charm
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
                  transform: isVisible[`fact-${index}`] ? 'translateY(0)' : 'translateY(50px)',
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
                <div style={styles.iconWrapper}>
                  {React.cloneElement(fact.icon, { color: '#1a1a1a' })}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                  marginBottom: '1rem',
                  color: '#ffffff',
                }}>
                  {fact.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  lineHeight: '1.6',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                }}>
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Journey Overview Section */}
        <section style={{ ...styles.section, ...styles.journeySection }}>
          <FloatingElements count={12} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>Your Island-Hopping Journey</h2>
          <p style={styles.sectionSubtitle}>
            Experience all three islands in one unforgettable day with expert guidance and premium comfort
          </p>
          
          <div 
            className="fade-in"
            id="journey-card"
            style={{
              ...styles.journeyCard,
              opacity: isVisible['journey-card'] ? 1 : 0,
              transform: isVisible['journey-card'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 1s ease',
            }}
          >
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
            
            <div style={styles.journeyGrid}>
              <div>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  color: '#003d7a',
                  marginBottom: '1.5rem',
                  fontWeight: '600'
                }}>
                  Experience All Three Islands
                </h3>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  lineHeight: '1.8',
                  color: '#4b5563',
                  marginBottom: '2rem'
                }}>
                  Our carefully crafted itinerary takes you on a journey through three distinct destinations, 
                  each offering unique experiences from peaceful nature retreats to historic cultural sites.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {journeyHighlights.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'rgba(0, 102, 204, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(0, 102, 204, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0, 102, 204, 0.1)';
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(0, 102, 204, 0.05)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                    >
                      <div style={{ color: '#0066cc' }}>{item.icon}</div>
                      <span style={{ color: '#4b5563', fontWeight: '500', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
                borderRadius: '24px',
                padding: 'clamp(2rem, 4vw, 2.5rem)',
                color: '#ffffff',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <Ship size={48} style={{ marginBottom: '1rem', opacity: 0.9 }} />
                  <h4 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '1rem', fontWeight: '600' }}>
                    10-Hour Adventure
                  </h4>
                  <p style={{ opacity: 0.9, lineHeight: '1.6', marginBottom: '1.5rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                    Full day cruise including breakfast, lunch, swimming, sightseeing, and cultural exploration
                  </p>
                  <div style={{
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    padding: '1rem',
                    border: '1px solid rgba(255,255,255,0.3)'
                  }}>
                    <span style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '700' }}>From €150</span>
                    <br />
                    <span style={{ opacity: 0.8 }}>per person</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ ...styles.section, ...styles.ctaSection }}>
          <FloatingElements count={15} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
            Ready to Explore the Saronic Islands?
          </h2>
          <p style={{ 
            ...styles.sectionSubtitle, 
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          }}>
            Join us on an unforgettable journey through three unique Greek islands, 
            each offering distinct experiences and breathtaking natural beauty
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2rem',
            marginBottom: '3rem'
          }}>
            <a 
              href="/cruises"
              style={styles.ctaButton}
              className="cta-button"
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
              Book Your Island Adventure
              <ArrowRight size={20} />
            </a>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 4vw, 3rem)',
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
        </section>

        {/* Island Detail Modal */}
        {activeIsland && (
          <div style={styles.modal} onClick={() => setActiveIsland(null)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                style={styles.closeButton}
                onClick={() => setActiveIsland(null)}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <X size={20} color="#1a1a1a" />
              </button>
              
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={activeIsland.image} 
                  alt={activeIsland.name}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '16px',
                    marginBottom: '1.5rem',
                  }}
                />
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  color: '#003d7a', 
                  marginBottom: '1rem',
                  background: `linear-gradient(135deg, ${activeIsland.color}, #0066cc)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {activeIsland.name}
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.7', 
                  marginBottom: '1.5rem',
                  fontSize: '1rem',
                }}>
                  {activeIsland.description}
                </p>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.7', 
                  marginBottom: '2rem',
                  fontSize: '1rem',
                }}>
                  {activeIsland.fullDescription}
                </p>
                
                <div style={{ 
                  background: `linear-gradient(135deg, ${activeIsland.color}10, ${activeIsland.color}05)`,
                  padding: '1rem',
                  borderRadius: '12px',
                  border: `1px solid ${activeIsland.color}30`,
                  marginBottom: '2rem'
                }}>
                  <p style={{ 
                    color: activeIsland.color, 
                    fontWeight: '600', 
                    marginBottom: '0.5rem' 
                  }}>
                    Special Highlight:
                  </p>
                  <p style={{ 
                    color: '#4b5563', 
                    margin: 0, 
                    fontStyle: 'italic' 
                  }}>
                    {activeIsland.highlight}
                  </p>
                </div>
                
                <button 
                  style={{
                    background: `linear-gradient(135deg, ${activeIsland.color}, #0066cc)`,
                    color: '#ffffff',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setActiveIsland(null)}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Camera size={18} style={{ marginRight: '0.5rem' }} />
                  Plan Your Visit
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
              src="/islands-tour.mp4"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DestinationsPage;