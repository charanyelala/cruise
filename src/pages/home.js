import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, ArrowRight, Shield, Award, Compass, DollarSign,
  Star, Users, Clock, Calendar, Anchor, Ship, Waves, MapPin,
  Play, X, ChevronLeft, ChevronRight, 
  Camera, Heart, Globe, Sparkles, Check
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const CruiseHomepage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const navigate = useNavigate();

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

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
    videoBackground: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      minWidth: '100%',
      minHeight: '100%',
      width: 'auto',
      height: 'auto',
      transform: 'translateX(-50%) translateY(-50%)',
      zIndex: 1,
      objectFit: 'cover',
    },
    videoOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(0, 30, 60, 0.4) 0%, rgba(0, 61, 122, 0.5) 50%, rgba(0, 30, 60, 0.7) 100%)',
      zIndex: 2,
    },
    heroContent: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      color: '#ffffff',
      padding: '0 2rem',
      maxWidth: '1100px',
      animation: 'fadeInUp 1.5s ease-out',
      transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg)`,
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      letterSpacing: '4px',
      textTransform: 'uppercase',
      marginBottom: '1rem',
      color: '#d4af37',
      fontWeight: '300',
      animation: 'fadeIn 2s ease-out 0.3s both',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
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
      transform: 'perspective(1000px) rotateX(10deg)',
    },
    heroDescription: {
      fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      color: 'rgba(255,255,255,0.95)',
      maxWidth: '750px',
      margin: '0 auto 2.5rem',
      animation: 'fadeInUp 1.5s ease-out 0.7s both',
      fontWeight: '300',
    },
    heroCTA: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      animation: 'fadeInUp 1.5s ease-out 0.9s both',
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#1a1a1a',
      padding: '1.1rem 2.8rem',
      borderRadius: '50px',
      border: 'none',
      fontSize: '1.15rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
      transform: `translateZ(${scrollY * 0.05}px)`,
    },
    secondaryButton: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      color: '#ffffff',
      padding: '1.1rem 2.8rem',
      borderRadius: '50px',
      border: '2px solid rgba(255,255,255,0.3)',
      fontSize: '1.15rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transform: `translateZ(${scrollY * 0.03}px)`,
    },
    scrollIndicator: {
      position: 'absolute',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 3,
      animation: 'bounce 2s infinite',
      cursor: 'pointer',
    },
    waveAnimation: {
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: '100%',
      height: '120px',
      background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23f8fafb\' fill-opacity=\'1\' d=\'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
      backgroundSize: 'cover',
      animation: 'wave 20s linear infinite',
      zIndex: 2,
    },
    gallerySection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    galleryHeader: {
      textAlign: 'center',
      marginBottom: '4rem',
      transform: `perspective(1000px) rotateX(${Math.min(scrollY * 0.02, 15)}deg)`,
    },
    sectionTitle: {
      fontSize: 'clamp(2.5rem, 4vw, 4rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#003d7a',
      letterSpacing: '-1px',
      position: 'relative',
      display: 'inline-block',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 5px 15px rgba(0, 61, 122, 0.3)',
    },
    sectionSubtitle: {
      fontSize: '1.3rem',
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '3rem',
      maxWidth: '700px',
      margin: '0 auto 3rem',
      lineHeight: '1.7',
    },
    galleryTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '4rem',
      flexWrap: 'wrap',
      perspective: '1000px',
    },
    galleryTab: {
      padding: '1rem 2rem',
      borderRadius: '50px',
      border: '2px solid rgba(0, 102, 204, 0.2)',
      background: 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(10px)',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: '1rem',
      fontWeight: '600',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 5px 20px rgba(0, 102, 204, 0.1)',
    },
    activeTab: {
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      color: 'white',
      border: '2px solid transparent',
      transform: 'translateY(-5px) scale(1.05)',
      boxShadow: '0 15px 30px rgba(0, 102, 204, 0.3)',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      perspective: '2000px',
    },
    galleryItem: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      height: '400px',
      cursor: 'pointer',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.15)',
      background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(248,250,251,0.9))',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transformStyle: 'preserve-3d',
    },
    galleryImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
      borderRadius: '20px',
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
      padding: '2rem',
      borderRadius: '20px',
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
    featuresSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      perspective: '1500px',
    },
    featureCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: '3rem',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
      transformStyle: 'preserve-3d',
    },
    featureIcon: {
      width: '80px',
      height: '80px',
      borderRadius: '24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '2rem',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      boxShadow: '0 15px 35px rgba(0, 102, 204, 0.3)',
      position: 'relative',
      transform: 'translateZ(30px)',
    },
    experienceSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    statsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '2rem',
      perspective: '1500px',
    },
    statsCard: {
      textAlign: 'center',
      color: '#ffffff',
      padding: '3rem',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      transformStyle: 'preserve-3d',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    },
    statNumber: {
      fontSize: '4rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      marginBottom: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      textShadow: '0 5px 15px rgba(212, 175, 55, 0.3)',
    },
    cruiseTypesSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    cruiseCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.15)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transformStyle: 'preserve-3d',
    },
    cruiseImage: {
      width: '100%',
      height: '280px',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
    },
    cruiseContent: {
      padding: '2.5rem',
    },
    priceTag: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#1a1a1a',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      display: 'inline-block',
      fontWeight: '600',
      fontSize: '1.1rem',
      marginTop: '1.5rem',
      boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
    },
    testimonialSection: {
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    testimonialCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: '3rem',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transformStyle: 'preserve-3d',
    },
    quoteIcon: {
      fontSize: '5rem',
      color: '#d4af37',
      opacity: 0.2,
      position: 'absolute',
      top: '1rem',
      left: '2rem',
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
      animation: 'fadeIn 0.3s ease',
    },
    lightboxImage: {
      maxWidth: '90%',
      maxHeight: '90vh',
      objectFit: 'contain',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
      border: '2px solid rgba(212, 175, 55, 0.3)',
    },
    lightboxClose: {
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
    },
    lightboxNav: {
      position: 'absolute',
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
    }
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px) rotateX(10deg);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotateX(0);
      }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateX(-50%) translateY(0) rotateZ(0deg); }
      50% { transform: translateX(-50%) translateY(-10px) rotateZ(5deg); }
    }
    @keyframes wave {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes float3D {
      0%, 100% { 
        transform: translateY(0px) rotateX(0deg) rotateY(0deg); 
      }
      33% { 
        transform: translateY(-10px) rotateX(5deg) rotateY(2deg); 
      }
      66% { 
        transform: translateY(-5px) rotateX(-2deg) rotateY(-3deg); 
      }
    }
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes glow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(0, 102, 204, 0.3);
      }
      50% { 
        box-shadow: 0 0 40px rgba(0, 102, 204, 0.6), 0 0 60px rgba(212, 175, 55, 0.2);
      }
    }
    @keyframes floatingParticle {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) rotate(0deg);
        opacity: 0.3;
      }
      50% { 
        transform: translateY(-20px) translateX(10px) rotate(180deg);
        opacity: 0.8;
      }
    }
  `;

  const galleryImages = [
    { id: 1, src: '/images/ship.jpeg', category: 'yacht', title: 'Luxury Yacht Experience', description: 'Premium comfort on the Aegean' },
    { id: 2, src: '/images/ship1.jpeg', category: 'yacht', title: 'Modern Fleet', description: 'State-of-the-art vessels' },
    { id: 3, src: '/images/ship2.jpeg', category: 'yacht', title: 'Elegant Design', description: 'Sophisticated interiors' },
    { id: 4, src: 'https://images.unsplash.com/photo-1544550581-5ac5462be3e3?w=600', category: 'destination', title: 'Santorini Sunset', description: 'Breathtaking views' },
    { id: 5, src: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600', category: 'destination', title: 'Mykonos Paradise', description: 'Crystal clear waters' },
    { id: 6, src: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600', category: 'destination', title: 'Hidden Coves', description: 'Secret swimming spots' },
    { id: 7, src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', category: 'experience', title: 'Gourmet Dining', description: 'Fine cuisine at sea' },
    { id: 8, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600', category: 'experience', title: 'Sunset Views', description: 'Magical golden hours' },
    { id: 9, src: 'https://images.unsplash.com/photo-1571406753518-9a3ba1c4bb0d?w=600', category: 'experience', title: 'Water Activities', description: 'Adventure awaits' },
  ];

  const filteredImages = activeGalleryTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeGalleryTab);

  const features = [
    {
      icon: <Shield size={36} color="#ffffff" />,
      title: "Safety First",
      description: "Highly trained crew with maritime safety certification and state-of-the-art equipment",
      highlight: "100% Safety Record"
    },
    {
      icon: <Award size={36} color="#ffffff" />,
      title: "Expertise",
      description: "Years of experience crafting unforgettable cruise experiences in the Aegean Sea",
      highlight: "10+ Years Experience"
    },
    {
      icon: <Compass size={36} color="#ffffff" />,
      title: "Comfort",
      description: "Luxurious design and premium amenities for ultimate relaxation",
      highlight: "5-Star Comfort"
    },
    {
      icon: <DollarSign size={36} color="#ffffff" />,
      title: "Value",
      description: "Competitive prices without compromising on quality or experience",
      highlight: "Best Price Guarantee"
    }
  ];

  const cruiseTypes = [
    {
      title: "Day Cruises",
      description: "Explore multiple islands in a single day with stops for swimming and dining",
      price: "From €150/person",
      duration: "8 hours",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600"
    },
    {
      title: "Sunset Cruises",
      description: "Romantic evening cruises with champagne and gourmet dinner",
      price: "From €120/person",
      duration: "4 hours",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600"
    },
    {
      title: "Private Charters",
      description: "Exclusive yacht rental for your group with customized itinerary",
      price: "From €1,200/day",
      duration: "Flexible",
      image: "https://images.unsplash.com/photo-1540946485063-a40da27545f8?w=600"
    }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  // Floating Elements Component
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
            animation: `floatingParticle ${3 + Math.random() * 4}s ease-in-out infinite`,
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
        <FloatingElements count={30} color="rgba(0, 102, 204, 0.08)" />
        
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <video 
            style={styles.videoBackground}
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/hero.mp4" type="video/mp4" />
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #003d7a, #0066cc)',
            }}></div>
          </video>
          
          <div style={styles.videoOverlay}></div>
          
          <div style={styles.heroContent}>
            <p style={styles.heroSubtitle}>
              <Sparkles size={20} />
              Yachting Adventures
              <Sparkles size={20} />
            </p>
            <h1 style={styles.heroTitle}>One Day Cruise<br />A Lifetime Experience</h1>
            <p style={styles.heroDescription}>
              An experience no traveler should ever miss. Cruise in Athens offers a truly exceptional way to 
              experience the timeless beauty of the Saronic Gulf and its serene waters.
            </p>
            <div style={styles.heroCTA}>
          <button
      style={styles.primaryButton}
      onClick={() => navigate("/cruises")}
      onMouseEnter={e => {
        e.currentTarget.style.transform =
          "translateY(-8px) scale(1.08) rotateZ(2deg)";
        e.currentTarget.style.boxShadow =
          "0 20px 50px rgba(212, 175, 55, 0.6)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform =
          "translateY(0) scale(1) rotateZ(0deg)";
        e.currentTarget.style.boxShadow =
          "0 10px 30px rgba(212, 175, 55, 0.4)";
      }}
    >
      Explore Cruises <ArrowRight size={20} />
    </button>
              <button 
                style={styles.secondaryButton}
                onClick={() => setVideoModalOpen(true)}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Play size={20} /> Watch Video
              </button>
            </div>
          </div>
          
          <div style={styles.scrollIndicator}>
            <ChevronDown size={32} color="#ffffff" />
          </div>
          
          <div style={styles.waveAnimation}></div>
        </section>

        {/* Enhanced Gallery Section */}
        <section style={styles.gallerySection}>
          <FloatingElements count={15} color="rgba(212, 175, 55, 0.1)" />
          
          <div style={styles.galleryHeader}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              marginBottom: '2rem',
              position: 'relative',
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
                animation: 'float3D 6s ease-in-out infinite',
                transform: `rotateY(${scrollY * 0.1}deg)`,
              }}>
                <Camera size={40} color="#ffffff" />
              </div>
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                width: '30px',
                height: '30px',
                background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'glow 2s ease-in-out infinite',
              }}>
                <Sparkles size={16} color="#1a1a1a" />
              </div>
            </div>
            
            <h2 style={styles.sectionTitle}>
              Capture The Moments
            </h2>
            
          </div>

          <div style={styles.galleryTabs}>
            {['all', 'yacht', 'destination', 'experience'].map((tab, index) => (
              <button
                key={tab}
                style={{
                  ...styles.galleryTab,
                  ...(activeGalleryTab === tab ? styles.activeTab : {}),
                  transform: activeGalleryTab === tab 
                    ? `translateY(-5px) scale(1.05) rotateX(${scrollY * 0.01}deg)` 
                    : `translateY(0) scale(1) rotateX(${scrollY * 0.005}deg)`,
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => setActiveGalleryTab(tab)}
                onMouseEnter={e => {
                  if (activeGalleryTab !== tab) {
                    e.currentTarget.style.background = 'rgba(0, 102, 204, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.08) rotateX(5deg)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 102, 204, 0.2)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeGalleryTab !== tab) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 102, 204, 0.1)';
                  }
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'all' && ` (${galleryImages.length})`}
              </button>
            ))}
          </div>

          <div style={styles.galleryGrid}>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="fade-in"
                id={`gallery-${image.id}`}
                style={{
                  ...styles.galleryItem,
                  opacity: isVisible[`gallery-${image.id}`] ? 1 : 0,
                  transform: isVisible[`gallery-${image.id}`] 
                    ? `translateY(0) rotateX(0deg) rotateY(0deg)` 
                    : `translateY(60px) rotateX(15deg) rotateY(10deg)`,
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
                }}
                onClick={() => openLightbox(index)}
                onMouseEnter={e => {
                  e.currentTarget.querySelector('.overlay').style.opacity = '1';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.15) rotateZ(2deg)';
                  e.currentTarget.style.transform = 'translateY(-15px) rotateX(-5deg) rotateY(5deg) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector('.overlay').style.opacity = '0';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1) rotateZ(0deg)';
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
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
                    fontSize: '1.8rem', 
                    marginBottom: '0.8rem',
                    fontWeight: '600',
                    background: 'linear-gradient(135deg, #ffffff, #d4af37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {image.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                    {image.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#d4af37',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                  }}>
                    <Camera size={16} />
                    <span>View in Gallery</span>
                  </div>
                </div>
                
                {/* Floating corner elements */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '8px',
                  height: '8px',
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.6)',
                  animation: 'glow 3s ease-in-out infinite',
                }}></div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Cruise Types Section */}
        <section style={styles.cruiseTypesSection}>
          <FloatingElements count={12} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>Choose Your Adventure</h2>
          <p style={styles.sectionSubtitle}>
            Select from our carefully curated cruise experiences, each designed to create unforgettable memories
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '2.5rem',
            maxWidth: '1300px',
            margin: '0 auto',
            perspective: '1500px',
          }}>
            {cruiseTypes.map((cruise, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`cruise-${index}`}
                style={{
                  ...styles.cruiseCard,
                  opacity: isVisible[`cruise-${index}`] ? 1 : 0,
                  transform: isVisible[`cruise-${index}`] 
                    ? `translateY(0) rotateX(0deg)` 
                    : `translateY(50px) rotateX(10deg)`,
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-20px) rotateX(-8deg) rotateY(5deg) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 40px 100px rgba(0, 61, 122, 0.25)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1.1) rotateZ(2deg)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.15)';
                  e.currentTarget.querySelector('img').style.transform = 'scale(1) rotateZ(0deg)';
                }}
              >
                <img src={cruise.image} alt={cruise.title} style={styles.cruiseImage} />
                <div style={styles.cruiseContent}>
                  <h3 style={{ 
                    fontSize: '2rem', 
                    marginBottom: '1.2rem', 
                    color: '#003d7a',
                    background: 'linear-gradient(135deg, #003d7a, #0066cc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {cruise.title}
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                    {cruise.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.5rem', 
                    marginBottom: '1.5rem',
                    color: '#0066cc',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={20} /> {cruise.duration}
                    </span>
                  </div>
                  <div style={styles.priceTag}>{cruise.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section style={styles.featuresSection}>
          <FloatingElements count={18} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>
          <p style={styles.sectionSubtitle}>
            We craft memories that last a lifetime. Cruise in Athens will reintroduce you to 
            the poetic magic of the Aegean Sea.
          </p>
          
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`feature-${index}`}
                style={{
                  ...styles.featureCard,
                  opacity: isVisible[`feature-${index}`] ? 1 : 0,
                  transform: isVisible[`feature-${index}`] 
                    ? `translateY(0) rotateX(0deg)` 
                    : `translateY(40px) rotateX(12deg)`,
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-20px) rotateX(-10deg) rotateY(8deg) scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 40px 100px rgba(0, 61, 122, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
                }}
              >
                <div style={styles.featureIcon}>
                  {feature.icon}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                    borderRadius: '24px',
                    opacity: 0.8,
                    animation: 'glow 4s ease-in-out infinite',
                    zIndex: -1,
                  }}></div>
                </div>
                <span style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  right: '1.5rem',
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
                }}>
                  {feature.highlight}
                </span>
                <h3 style={{ 
                  fontSize: '1.8rem', 
                  marginBottom: '1.2rem', 
                  color: '#003d7a',
                  fontWeight: '600',
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.7', fontSize: '1.1rem' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Experience Stats Section */}
        <section style={styles.experienceSection}>
          <FloatingElements count={25} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ 
            ...styles.sectionTitle, 
            color: '#ffffff', 
            marginBottom: '4rem',
            textShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
          }}>
            Our Success in Numbers
          </h2>
          <div style={styles.statsGrid}>
            <div 
              style={{
                ...styles.statsCard,
                transform: `rotateX(${Math.sin(scrollY * 0.01) * 5}deg) rotateY(${Math.cos(scrollY * 0.01) * 3}deg)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-15px) rotateX(-10deg) rotateY(10deg) scale(1.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={styles.statNumber}>
                <Anchor size={44} /> 10+
              </div>
              <p style={{ fontSize: '1.4rem', fontWeight: '600' }}>Years of Excellence</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Serving since 2014</p>
            </div>
            <div 
              style={{
                ...styles.statsCard,
                transform: `rotateX(${Math.sin(scrollY * 0.01 + 1) * 5}deg) rotateY(${Math.cos(scrollY * 0.01 + 1) * 3}deg)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-15px) rotateX(-10deg) rotateY(-10deg) scale(1.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={styles.statNumber}>
                <Users size={44} /> 5000+
              </div>
              <p style={{ fontSize: '1.4rem', fontWeight: '600' }}>Happy Guests</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>From 50+ countries</p>
            </div>
            <div 
              style={{
                ...styles.statsCard,
                transform: `rotateX(${Math.sin(scrollY * 0.01 + 2) * 5}deg) rotateY(${Math.cos(scrollY * 0.01 + 2) * 3}deg)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-15px) rotateX(-10deg) rotateY(10deg) scale(1.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={styles.statNumber}>
                <Shield size={44} /> 100%
              </div>
              <p style={{ fontSize: '1.4rem', fontWeight: '600' }}>Safety Record</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Zero incidents</p>
            </div>
            <div 
              style={{
                ...styles.statsCard,
                transform: `rotateX(${Math.sin(scrollY * 0.01 + 3) * 5}deg) rotateY(${Math.cos(scrollY * 0.01 + 3) * 3}deg)`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-15px) rotateX(-10deg) rotateY(-10deg) scale(1.08)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div style={styles.statNumber}>
                <MapPin size={44} /> 50+
              </div>
              <p style={{ fontSize: '1.4rem', fontWeight: '600' }}>Unique Destinations</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Hidden gems await</p>
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section style={styles.testimonialSection}>
          <FloatingElements count={10} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>What Our Guests Say</h2>
          <div 
            style={{
              ...styles.testimonialCard,
              transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg)`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-10px) rotateX(-5deg) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
            }}
          >
            <span style={styles.quoteIcon}>"</span>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={28} 
                  fill="#d4af37" 
                  color="#d4af37"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))',
                    animation: `glow 2s ease-in-out infinite ${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            <p style={{ 
              fontSize: '1.4rem', 
              lineHeight: '1.8', 
              color: '#4b5563',
              marginBottom: '2.5rem',
              fontStyle: 'italic',
              textAlign: 'center',
            }}>
              "An absolutely magical experience! The crew was professional and friendly, the yacht was luxurious, 
              and the destinations were breathtaking. This was the highlight of our Greek vacation. 
              Can't wait to cruise with them again!"
            </p>
            <div style={{ textAlign: 'center' }}>
              <p style={{ 
                fontWeight: '600', 
                color: '#003d7a', 
                fontSize: '1.2rem',
                background: 'linear-gradient(135deg, #003d7a, #0066cc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Sarah Johnson
              </p>
              <p style={{ color: '#6b7280', fontSize: '1rem' }}>California, USA</p>
            </div>
          </div>
        </section>

        {/* Enhanced Lightbox */}
        {lightboxOpen && (
          <div style={styles.lightbox} onClick={() => setLightboxOpen(false)}>
            <button 
              style={styles.lightboxClose}
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
              style={{ ...styles.lightboxNav, left: '2rem' }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1) rotateZ(-5deg)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 102, 204, 0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1) rotateZ(0deg)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.4)';
              }}
            >
              <ChevronLeft size={24} />
            </button>
            <img 
              src={filteredImages[currentImage].src} 
              alt={filteredImages[currentImage].title}
              style={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              style={{ ...styles.lightboxNav, right: '2rem' }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1) rotateZ(5deg)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 102, 204, 0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1) rotateZ(0deg)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.4)';
              }}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Enhanced Image Info */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'rgba(0, 30, 60, 0.9)',
              backdropFilter: 'blur(20px)',
              padding: '1.5rem 3rem',
              borderRadius: '20px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
            }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #ffffff, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {filteredImages[currentImage].title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                {filteredImages[currentImage].description}
              </p>
              <span style={{ 
                color: '#d4af37', 
                fontSize: '0.9rem', 
                fontWeight: '500',
              }}>
                {currentImage + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        )}

        {/* Enhanced Video Modal */}
        {videoModalOpen && (
          <div 
            style={{
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
            }}
            onClick={() => setVideoModalOpen(false)}
          >
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
                transition: 'all 0.4s ease',
              }}
              onClick={() => setVideoModalOpen(false)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.1) rotateZ(5deg)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.6)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) rotateZ(0deg)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
              }}
            >
              <X size={24} />
            </button>
            <video 
              style={{
                width: '85%',
                maxWidth: '1200px',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
              }}
              controls
              autoPlay
            >
              <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </>
  );
};

export default CruiseHomepage;