import React, { useState, useEffect } from 'react';
import { 
  Ship, Anchor, Users, Zap, Fuel, Gauge, Bed, Bath,
  ChefHat, Crown, Star, ArrowRight, Camera, Heart,
  Award, Shield, Compass, Navigation, Eye, Sparkles,
  Clock, MapPin, CheckCircle, Info, Play, X, ChevronLeft, 
  ChevronRight, Target, Flag, ThumbsUp
} from 'lucide-react';

const FleetPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeYacht, setActiveYacht] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
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
      backgroundImage: 'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
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
    fleetSection: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
    },
    yachtCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.15)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s ease',
      marginBottom: 'clamp(2rem, 4vw, 4rem)',
    },
    yachtHeader: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
      padding: 'clamp(2rem, 4vw, 3rem)',
      position: 'relative',
      overflow: 'hidden',
    },
    yachtTitle: {
      fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
      fontWeight: '700',
      marginBottom: '1rem',
      textShadow: '0 2px 20px rgba(0,0,0,0.3)',
    },
    yachtSubtitle: {
      fontSize: 'clamp(1rem, 2vw, 1.2rem)',
      opacity: 0.9,
      marginBottom: '2rem',
    },
    yachtSpecs: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'clamp(1rem, 2vw, 1.5rem)',
      padding: 'clamp(2rem, 4vw, 3rem)',
    },
    specCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: 'clamp(1rem, 2vw, 1.5rem)',
      boxShadow: '0 10px 30px rgba(0, 61, 122, 0.08)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.4s ease',
      textAlign: 'center',
    },
    specIcon: {
      width: 'clamp(40px, 6vw, 50px)',
      height: 'clamp(40px, 6vw, 50px)',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      boxShadow: '0 8px 20px rgba(0, 102, 204, 0.3)',
    },
    specValue: {
      fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
      fontWeight: '700',
      color: '#003d7a',
      marginBottom: '0.5rem',
    },
    specLabel: {
      fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
      color: '#6b7280',
      fontWeight: '500',
    },
    comparisonSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
    },
    comparisonTable: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.2)',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      borderBottom: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s ease',
    },
    tableCell: {
      padding: 'clamp(1rem, 2vw, 1.5rem)',
      textAlign: 'center',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      fontWeight: '500',
    },
    tableCellHeader: {
      background: 'rgba(255,255,255,0.2)',
      fontWeight: '600',
      color: '#ffffff',
    },
    gallerySection: {
      background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    galleryItem: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      height: 'clamp(250px, 30vw, 300px)',
      cursor: 'pointer',
      transition: 'all 0.6s ease',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.15)',
    },
    galleryImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
    },
    galleryOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 30, 60, 0.9) 100%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
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
    lightbox: {
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
    },
    lightboxImage: {
      maxWidth: '90%',
      maxHeight: '90vh',
      objectFit: 'contain',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
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
      .hero-stats {
        gap: 1rem !important;
        flex-direction: column !important;
        align-items: center !important;
      }
      .hero-section {
        background-attachment: scroll !important;
      }
      .table-row {
        grid-template-columns: 1fr !important;
        text-align: left !important;
      }
      .gallery-grid {
        grid-template-columns: 1fr !important;
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

  const yachts = [
    {
      name: "Angelique",
      type: "Motor Yacht",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      specs: [
        { icon: <Navigation size={24} />, label: "Length", value: "70ft", detail: "(24m)" },
        { icon: <Users size={24} />, label: "Sailing Guests", value: "49", detail: "passengers" },
        { icon: <Zap size={24} />, label: "Engine", value: "2 x 480hp", detail: "Twin engines" },
        { icon: <Fuel size={24} />, label: "Fuel Type", value: "Diesel", detail: "Efficient" },
        { icon: <Gauge size={24} />, label: "Consumption", value: "40 L/hr", detail: "Optimal" },
        { icon: <Ship size={24} />, label: "Max Speed", value: "12 knots", detail: "Cruise speed" },
        { icon: <Bed size={24} />, label: "Cabins", value: "4", detail: "Private rooms" },
        { icon: <Bath size={24} />, label: "Bathrooms", value: "4", detail: "Full facilities" },
        { icon: <ChefHat size={24} />, label: "Kitchens", value: "1", detail: "Professional" },
        { icon: <Crown size={24} />, label: "Sleeps", value: "8", detail: "Overnight guests" },
        { icon: <Anchor size={24} />, label: "Crew", value: "4", detail: "Professional" }
      ],
      highlights: ["Largest yacht in our fleet", "Premium amenities", "Spacious deck areas", "Professional crew"],
      color: "#0066cc"
    },
    {
      name: "Martika",
      type: "Motor Yacht",
      image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=800",
      specs: [
        { icon: <Navigation size={24} />, label: "Length", value: "62ft", detail: "(21m)" },
        { icon: <Users size={24} />, label: "Sailing Guests", value: "49", detail: "passengers" },
        { icon: <Zap size={24} />, label: "Engine", value: "2 x 280hp", detail: "Twin engines" },
        { icon: <Fuel size={24} />, label: "Fuel Type", value: "Diesel", detail: "Efficient" },
        { icon: <Gauge size={24} />, label: "Consumption", value: "40 L/hr", detail: "Optimal" },
        { icon: <Ship size={24} />, label: "Max Speed", value: "12 knots", detail: "Cruise speed" },
        { icon: <Bed size={24} />, label: "Cabins", value: "4", detail: "Private rooms" },
        { icon: <Bath size={24} />, label: "Bathrooms", value: "4", detail: "Full facilities" },
        { icon: <ChefHat size={24} />, label: "Kitchens", value: "1", detail: "Professional" },
        { icon: <Crown size={24} />, label: "Sleeps", value: "8", detail: "Overnight guests" },
        { icon: <Anchor size={24} />, label: "Crew", value: "4", detail: "Professional" }
      ],
      highlights: ["Elegant and comfortable", "Perfect for day cruises", "Modern amenities", "Experienced crew"],
      color: "#003d7a"
    }
  ];

  const galleryImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600", title: "Angelique Exterior", yacht: "Angelique" },
    { id: 2, src: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600", title: "Martika Deck", yacht: "Martika" },
    { id: 3, src: "https://images.unsplash.com/photo-1571406753518-9a3ba1c4bb0d?w=600", title: "Luxury Interior", yacht: "Both" },
    { id: 4, src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600", title: "Sunset Cruise", yacht: "Both" },
    { id: 5, src: "https://images.unsplash.com/photo-1544550581-5ac5462be3e3?w=600", title: "Crystal Waters", yacht: "Both" },
    { id: 6, src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600", title: "Dining Area", yacht: "Both" }
  ];

  const comparisonData = [
    { feature: "Length", angelique: "70ft (24m)", martika: "62ft (21m)" },
    { feature: "Engine Power", angelique: "2 x 480hp", martika: "2 x 280hp" },
    { feature: "Guests", angelique: "49", martika: "49" },
    { feature: "Cabins", angelique: "4", martika: "4" },
    { feature: "Bathrooms", angelique: "4", martika: "4" },
    { feature: "Max Speed", angelique: "12 knots", martika: "12 knots" },
    { feature: "Fuel Consumption", angelique: "40 L/hr", martika: "40 L/hr" },
    { feature: "Crew", angelique: "4", martika: "4" },
    { feature: "Sleeps", angelique: "8", martika: "8" }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

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
              <Crown size={20} />
              <span>Luxury Fleet</span>
              <Sparkles size={20} />
            </p>
            <h1 style={styles.heroTitle}>Our Premium Yacht Collection</h1>
            <p style={styles.heroDescription}>
              Discover our award-winning vessels, Angelique and Martika - two magnificent motor yachts 
              designed to provide the ultimate cruising experience in the stunning Saronic Gulf. 
              Each yacht combines luxury, comfort, and safety for unforgettable maritime adventures.
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
                <Award size={24} />
                <span>Award Winning</span>
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
                <Shield size={24} />
                <span>Fully Licensed</span>
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
                <Users size={24} />
                <span>Professional Crew</span>
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
                Virtual Yacht Tour
              </button>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section style={{ ...styles.section, ...styles.fleetSection }}>
          <FloatingElements count={15} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Meet Our Luxury Fleet</h2>
          <p style={styles.sectionSubtitle}>
            Two magnificent motor yachts, each uniquely designed to deliver exceptional comfort and unforgettable experiences
          </p>

          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            {yachts.map((yacht, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`yacht-${index}`}
                style={{
                  ...styles.yachtCard,
                  opacity: isVisible[`yacht-${index}`] ? 1 : 0,
                  transform: isVisible[`yacht-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.15)';
                }}
              >
                {/* Yacht Header */}
                <div style={{
                  ...styles.yachtHeader,
                  background: `linear-gradient(135deg, ${yacht.color} 0%, #0066cc 100%)`
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-50px',
                    right: '-50px',
                    width: '200px',
                    height: '200px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '50%',
                    animation: 'float 8s ease-in-out infinite'
                  }}></div>
                  
                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <h2 style={styles.yachtTitle}>{yacht.name}</h2>
                    <p style={styles.yachtSubtitle}>{yacht.type}</p>
                    
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      flexWrap: 'wrap',
                      marginBottom: '1rem'
                    }}>
                      {yacht.highlights.map((highlight, i) => (
                        <span key={i} style={{
                          background: 'rgba(255,255,255,0.2)',
                          padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)',
                          borderRadius: '20px',
                          fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
                          border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginTop: '1rem'
                    }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} fill="#d4af37" color="#d4af37" />
                      ))}
                      <span style={{ marginLeft: '0.5rem', opacity: 0.9 }}>Premium Quality</span>
                    </div>
                  </div>
                </div>

                {/* Yacht Specifications */}
                <div style={styles.yachtSpecs}>
                  {yacht.specs.map((spec, specIndex) => (
                    <div 
                      key={specIndex}
                      style={styles.specCard}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.15)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 61, 122, 0.08)';
                      }}
                    >
                      <div style={styles.specIcon}>
                        {React.cloneElement(spec.icon, { color: '#ffffff', size: 20 })}
                      </div>
                      <div style={styles.specValue}>
                        {spec.value}
                        {spec.detail && (
                          <div style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.9rem)', fontWeight: '400', color: '#6b7280' }}>
                            {spec.detail}
                          </div>
                        )}
                      </div>
                      <div style={styles.specLabel}>{spec.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ padding: 'clamp(1rem, 2vw, 2rem) clamp(2rem, 4vw, 3rem)', textAlign: 'center' }}>
                  <button
                    style={{
                      background: `linear-gradient(135deg, ${yacht.color}, #0066cc)`,
                      color: '#ffffff',
                      padding: 'clamp(0.6rem, 1.5vw, 0.8rem) clamp(1.5rem, 3vw, 2rem)',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      margin: '0 auto'
                    }}
                    onClick={() => setActiveYacht(yacht)}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = `0 10px 25px ${yacht.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Eye size={16} />
                    Explore {yacht.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Section */}
        <section style={{ ...styles.section, ...styles.comparisonSection }}>
          <FloatingElements count={20} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>Fleet Comparison</h2>
          <p style={{ ...styles.sectionSubtitle, color: 'rgba(255,255,255,0.8)' }}>
            Compare our luxury yachts to find the perfect vessel for your cruise experience
          </p>

          <div 
            className="fade-in"
            id="comparison-table"
            style={{
              ...styles.comparisonTable,
              opacity: isVisible['comparison-table'] ? 1 : 0,
              transform: isVisible['comparison-table'] ? 'translateY(0)' : 'translateY(50px)',
              transition: 'all 1s ease',
            }}
          >
            <div style={styles.tableRow} className="table-row">
              <div style={{...styles.tableCell, ...styles.tableCellHeader}}>Feature</div>
              <div style={{...styles.tableCell, ...styles.tableCellHeader}}>Angelique</div>
              <div style={{...styles.tableCell, ...styles.tableCellHeader}}>Martika</div>
            </div>
            
            {comparisonData.map((row, index) => (
              <div 
                key={index} 
                style={{
                  ...styles.tableRow,
                  background: index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.05)'
                }}
                className="table-row"
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = index % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.05)';
                }}
              >
                <div style={{...styles.tableCell, fontWeight: '600', color: '#ffffff'}}>
                  {row.feature}
                </div>
                <div style={styles.tableCell}>{row.angelique}</div>
                <div style={styles.tableCell}>{row.martika}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section style={{ ...styles.section, ...styles.gallerySection }}>
          <FloatingElements count={12} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>Yacht Gallery</h2>
          <p style={styles.sectionSubtitle}>
            Explore our luxury yachts through stunning photography and virtual tours
          </p>

          <div style={styles.galleryGrid} className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="fade-in"
                id={`gallery-${image.id}`}
                style={{
                  ...styles.galleryItem,
                  opacity: isVisible[`gallery-${image.id}`] ? 1 : 0,
                  transform: isVisible[`gallery-${image.id}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease ${index * 0.1}s`,
                }}
                onClick={() => openLightbox(index)}
                onMouseEnter={e => {
                  e.currentTarget.querySelector('.overlay').style.opacity = '1';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1)';
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector('.overlay').style.opacity = '0';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.15)';
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  style={styles.galleryImage}
                />
                <div className="overlay" style={styles.galleryOverlay}>
                  <h3 style={{ 
                    color: 'white', 
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', 
                    marginBottom: '0.5rem',
                    fontWeight: '600'
                  }}>
                    {image.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                    {image.yacht}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#d4af37',
                    fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                    fontWeight: '500',
                  }}>
                    <Eye size={16} />
                    <span>View Full Size</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ ...styles.section, ...styles.ctaSection }}>
          <FloatingElements count={15} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
            Ready to Experience Luxury?
          </h2>
          <p style={{ 
            ...styles.sectionSubtitle, 
            color: 'rgba(255,255,255,0.8)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
          }}>
            Book your cruise aboard one of our magnificent yachts and discover the beauty 
            of the Saronic Gulf in ultimate comfort and style
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
              Book Your Luxury Cruise
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
              <Award size={20} />
              <span>Award Winning Fleet</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={20} />
              <span>Fully Licensed & Insured</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={20} />
              <span>Professional Crew</span>
            </div>
          </div>
        </section>

        {/* Yacht Detail Modal */}
        {activeYacht && (
          <div style={styles.modal} onClick={() => setActiveYacht(null)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                style={styles.closeButton}
                onClick={() => setActiveYacht(null)}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <X size={20} color="#1a1a1a" />
              </button>
              
              <div style={{ textAlign: 'center' }}>
                <img 
                  src={activeYacht.image} 
                  alt={activeYacht.name}
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
                  marginBottom: '0.5rem',
                  background: `linear-gradient(135deg, ${activeYacht.color}, #0066cc)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {activeYacht.name}
                </h3>
                <p style={{ 
                  color: '#d4af37', 
                  fontWeight: '600', 
                  marginBottom: '1.5rem',
                  fontSize: '1.2rem',
                }}>
                  {activeYacht.type}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ color: '#003d7a', marginBottom: '1rem' }}>Yacht Highlights</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
                    {activeYacht.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        style={{
                          background: `linear-gradient(135deg, ${activeYacht.color}20, ${activeYacht.color}10)`,
                          color: activeYacht.color,
                          padding: '0.5rem 1rem',
                          borderRadius: '50px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          border: `1px solid ${activeYacht.color}30`
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  style={{
                    background: `linear-gradient(135deg, ${activeYacht.color}, #0066cc)`,
                    color: '#ffffff',
                    padding: '0.75rem 2rem',
                    borderRadius: '50px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setActiveYacht(null)}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Camera size={18} style={{ marginRight: '0.5rem' }} />
                  Book This Yacht
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
              src="/yacht-tour.mp4"
            />
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
          <div style={styles.lightbox} onClick={() => setLightboxOpen(false)}>
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
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1) rotateZ(5deg)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
              }}
            >
              <X size={24} />
            </button>
            
            <button 
              style={{
                position: 'absolute',
                left: '2rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                border: 'none',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 30px rgba(0, 102, 204, 0.4)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <img 
              src={galleryImages[currentImage].src} 
              alt={galleryImages[currentImage].title}
              style={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />
            
            <button 
              style={{
                position: 'absolute',
                right: '2rem',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                border: 'none',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 30px rgba(0, 102, 204, 0.4)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={24} />
            </button>
            
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 30, 60, 0.9)',
              backdropFilter: 'blur(20px)',
              padding: '1rem 2rem',
              borderRadius: '20px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              textAlign: 'center',
              color: '#ffffff'
            }}>
              <h3 style={{ margin: '0 0 0.5rem 0', color: '#d4af37' }}>
                {galleryImages[currentImage].title}
              </h3>
              <p style={{ margin: 0, opacity: 0.8 }}>
                {currentImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default FleetPage;