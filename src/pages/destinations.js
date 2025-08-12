import React, { useState, useEffect } from 'react';
import { 
  MapPin, Camera, Heart, Star, Clock, Users, Ship, Waves,
  TreePine, Mountain, Fish, Sun, Wind, Compass, Eye,
  ArrowRight, Sparkles, Bike, Utensils, Anchor, Globe,
  Award, Shield, Navigation, Timer, Calendar, Check,
  Play, X, ChevronDown, Target, Zap, ThumbsUp, ChevronLeft,
  ChevronRight, ExternalLink, Info
} from 'lucide-react';

const DestinationsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeDestination, setActiveDestination] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [activeImageIndices, setActiveImageIndices] = useState({ 0: 0, 1: 0, 2: 0 });

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
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      marginTop: '-120px',
      paddingTop: '120px',
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '120%',
      backgroundImage: 'url("/images/agistri-1.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
      transition: 'transform 0.1s ease-out',
      filter: 'brightness(0.8)',
    },
    heroOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0, 30, 60, 0.7) 0%, rgba(0, 61, 122, 0.8) 50%, rgba(212, 175, 55, 0.4) 100%)',
      zIndex: 2,
    },
    heroContent: {
      position: 'relative',
      zIndex: 3,
      textAlign: 'center',
      color: '#ffffff',
      padding: '0 2rem',
      maxWidth: '1000px',
      animation: 'fadeInUp 1.5s ease-out',
      transform: `perspective(1000px) rotateX(${Math.min(scrollY * 0.02, 15)}deg)`,
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
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: '700',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      letterSpacing: '-2px',
      background: 'linear-gradient(135deg, #ffffff 0%, #e6f3ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'fadeInUp 1.5s ease-out 0.5s both',
      textShadow: '0 2px 20px rgba(0,0,0,0.3)',
    },
    heroDescription: {
      fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
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
      fontSize: 'clamp(2rem, 5vw, 4rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#003d7a',
      letterSpacing: '-1px',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      position: 'relative',
    },
    sectionSubtitle: {
      fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: 'clamp(3rem, 6vw, 4rem)',
      maxWidth: '700px',
      margin: '0 auto clamp(3rem, 6vw, 4rem)',
      lineHeight: '1.7',
    },
    destinationsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: 'clamp(2rem, 4vw, 3rem)',
      maxWidth: '1400px',
      margin: '0 auto',
      perspective: '2000px',
    },
    destinationCard: {
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 25px 80px rgba(0, 61, 122, 0.15)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      transformStyle: 'preserve-3d',
      position: 'relative',
    },
    imageCarousel: {
      position: 'relative',
      height: '300px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    carouselImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'all 0.6s ease',
      position: 'absolute',
      top: 0,
      left: 0,
    },
    carouselDots: {
      position: 'absolute',
      bottom: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '0.5rem',
      zIndex: 3,
    },
    carouselDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.5)',
      border: '2px solid rgba(255,255,255,0.8)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
    },
    carouselNav: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0, 30, 60, 0.8)',
      border: 'none',
      color: 'white',
      padding: '0.75rem',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      opacity: 0,
      zIndex: 4,
    },
    cardContent: {
      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
      position: 'relative',
    },
    cardOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0, 30, 60, 0.9) 100%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      zIndex: 2,
      borderRadius: '32px 32px 0 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '2rem',
    },
    destinationTitle: {
      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
      fontWeight: '700',
      color: '#003d7a',
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
    },
    destinationMeta: {
      display: 'flex',
      gap: '1rem',
      marginBottom: '1rem',
      flexWrap: 'wrap',
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#6b7280',
      fontSize: '0.9rem',
      fontWeight: '500',
    },
    quickInfoGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '0.75rem',
      marginTop: '1.5rem',
    },
    quickInfoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '0.75rem',
      background: 'rgba(0, 102, 204, 0.08)',
      borderRadius: '12px',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.3s ease',
    },
    priceTag: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#1a1a1a',
      padding: '0.75rem 1.25rem',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '0.9rem',
      boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
      zIndex: 3,
      backdropFilter: 'blur(10px)',
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
    experienceSection: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
    },
    experienceGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(2rem, 4vw, 3rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    experienceCard: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: 'clamp(2rem, 4vw, 2.5rem)',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.6s ease',
      textAlign: 'center',
      cursor: 'pointer',
      transformStyle: 'preserve-3d',
    },
    iconWrapper: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      boxShadow: '0 15px 35px rgba(212, 175, 55, 0.3)',
      transform: 'translateZ(30px)',
    },
  };

  const keyframes = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(50px) rotateX(10deg);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotateX(0deg);
      }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
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
    @keyframes glow {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(0, 102, 204, 0.3);
      }
      50% { 
        box-shadow: 0 0 40px rgba(0, 102, 204, 0.6), 0 0 60px rgba(212, 175, 55, 0.2);
      }
    }

    @media (max-width: 768px) {
      .destinations-grid {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
      }
      .experience-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `;

  const destinations = [
    {
      id: 'agistri',
      name: 'Agistri Island',
      subtitle: 'Pine Forest Paradise',
      description: 'A peaceful sanctuary with crystal-clear waters, lush pine forests, and charming villages. Perfect for cycling adventures and discovering hidden coves.',
      images: [
        '/images/agistri-1.jpg',
        '/images/agistri-2.jpg',
        '/images/agistri-4.jpg',
        '/images/agistri-louloudia.jpg',
      ],
      duration: '3-4 hours',
      highlights: ['Bicycle rentals', 'Pine forests', 'Hidden beaches', 'Crystal waters'],
      price: 'Included',
      color: '#0066cc',
      coordinates: '37.7500° N, 23.1167° E'
    },
    {
      id: 'moni',
      name: 'Moni & Metopi',
      subtitle: 'Wildlife Haven',
      description: 'Uninhabited islands offering pristine nature, wildlife encounters with deer and peacocks, and perfect snorkeling conditions in untouched waters.',
      images: [
        '/images/moni-1.jpg',
        '/images/moni-2.jpg',
       
      ],
      duration: '2-3 hours',
      highlights: ['Wildlife spotting', 'Snorkeling', 'Pristine nature', 'Photography'],
      price: 'Included',
      color: '#003d7a',
      coordinates: '37.7333° N, 23.4333° E'
    },
    {
      id: 'aegina',
      name: 'Aegina Island',
      subtitle: 'Historic & Culinary',
      description: 'Rich in history with ancient temples, famous for delicious pistachios, vibrant harbor life, and authentic Greek island culture and cuisine.',
      images: [
        '/images/aegina-1.jpg',
        '/images/aegina-2.jpg',
        '/images/aegina-4.jpg',
        '/images/exp2.jpeg',
      ],
      duration: '4-5 hours',
      highlights: ['Ancient temples', 'Pistachio tasting', 'Harbor town', 'Local cuisine'],
      price: 'Included',
      color: '#d4af37',
      coordinates: '37.7500° N, 23.4333° E'
    }
  ];

  const experiences = [
    {
      icon: <Mountain size={36} />,
      title: 'Historic Exploration',
      description: 'Visit ancient temples, archaeological sites, and learn about Greek mythology from expert guides',
      highlight: '3000+ Years of History'
    },
    {
      icon: <Waves size={36} />,
      title: 'Water Adventures',
      description: 'Swimming, snorkeling, and water sports in crystal-clear Mediterranean waters',
      highlight: 'Perfect Visibility'
    },
    {
      icon: <Camera size={36} />,
      title: 'Photography Paradise',
      description: 'Capture stunning landscapes, wildlife, architecture, and unforgettable moments',
      highlight: 'Instagram-Worthy Spots'
    },
    {
      icon: <Utensils size={36} />,
      title: 'Culinary Journey',
      description: 'Taste authentic Greek cuisine, fresh seafood, and famous Aegina pistachios',
      highlight: 'Local Delicacies'
    }
  ];

  const FloatingElements = ({ count = 20, color = "rgba(0, 102, 204, 0.1)" }) => (
    <div style={styles.floatingElements}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: `${4 + Math.random() * 4}px`,
            height: `${4 + Math.random() * 4}px`,
            background: color,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float3D ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.8 + 0.2,
          }}
        />
      ))}
    </div>
  );

  const ImageCarousel = ({ images, activeIndex, onIndexChange, onImageClick }) => (
    <div 
      style={styles.imageCarousel}
      onClick={() => onImageClick(activeIndex)}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Destination ${index + 1}`}
          style={{
            ...styles.carouselImage,
            opacity: index === activeIndex ? 1 : 0,
            transform: `scale(${index === activeIndex ? 1 : 1.1})`,
            pointerEvents: 'none'
          }}
        />
      ))}
      
      <button
        className="carousel-nav"
        style={{
          ...styles.carouselNav,
          left: '1rem',
        }}
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((activeIndex - 1 + images.length) % images.length);
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0'}
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        className="carousel-nav"
        style={{
          ...styles.carouselNav,
          right: '1rem',
        }}
        onClick={(e) => {
          e.stopPropagation();
          onIndexChange((activeIndex + 1) % images.length);
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0'}
      >
        <ChevronRight size={20} />
      </button>

      <div style={styles.carouselDots}>
        {images.map((_, index) => (
          <div
            key={index}
            className="carousel-dot"
            style={{
              ...styles.carouselDot,
              background: index === activeIndex ? '#d4af37' : 'rgba(255,255,255,0.5)',
              transform: index === activeIndex ? 'scale(1.2)' : 'scale(1)',
            }}
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange(index);
            }}
          />
        ))}
      </div>
    </div>
  );

  const openLightbox = (destinationIndex, imageIndex) => {
    setActiveDestination(destinationIndex);
    setCurrentImage(imageIndex);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    if (activeDestination !== null) {
      const maxImages = destinations[activeDestination].images.length;
      setCurrentImage((prev) => (prev + 1) % maxImages);
    }
  };

  const prevImage = () => {
    if (activeDestination !== null) {
      const maxImages = destinations[activeDestination].images.length;
      setCurrentImage((prev) => (prev - 1 + maxImages) % maxImages);
    }
  };

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        <FloatingElements count={30} color="rgba(0, 102, 204, 0.05)" />
        
        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroBackground}></div>
          <div style={styles.heroOverlay}></div>
          
          <div style={styles.heroContent}>
            <p style={styles.heroSubtitle}>
              <MapPin size={20} />
              <span>Discover Paradise</span>
              <Sparkles size={20} />
            </p>
            <h1 style={styles.heroTitle}>
              Three Magical<br />
              Greek Islands
            </h1>
            <p style={styles.heroDescription}>
              Embark on an extraordinary journey through Agistri, Moni & Aegina - three unique destinations 
              offering the perfect blend of natural beauty, rich history, and authentic Greek island experiences 
              in the pristine waters of the Saronic Gulf.
            </p>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '2rem',
              flexWrap: 'wrap'
            }}>
              <div style={{
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
              }}>
                <TreePine size={24} />
                <span>Nature & Wildlife</span>
              </div>
              <div style={{
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
              }}>
                <Mountain size={24} />
                <span>Ancient History</span>
              </div>
              <div style={{
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
              }}>
                <Waves size={24} />
                <span>Crystal Waters</span>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section style={styles.section}>
          <FloatingElements count={15} color="rgba(212, 175, 55, 0.08)" />
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
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
                <Ship size={40} color="#ffffff" />
              </div>
            </div>
            
            <h2 style={styles.sectionTitle}>
              Explore Each Destination
            </h2>
            <p style={styles.sectionSubtitle}>
              Three distinct islands, each offering unique experiences and unforgettable memories. 
              Discover pristine nature, ancient history, and authentic Greek culture.
            </p>
          </div>

          <div style={styles.destinationsGrid} className="destinations-grid">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className="fade-in"
                id={`destination-${index}`}
                style={{
                  ...styles.destinationCard,
                  opacity: isVisible[`destination-${index}`] ? 1 : 0,
                  transform: isVisible[`destination-${index}`] 
                    ? 'translateY(0) rotateX(0deg) rotateY(0deg)' 
                    : 'translateY(60px) rotateX(15deg) rotateY(5deg)',
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-20px) rotateX(-8deg) rotateY(5deg) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 40px 120px rgba(0, 61, 122, 0.25)';
                  const overlay = e.currentTarget.querySelector('.card-overlay');
                  if (overlay) overlay.style.opacity = '1';
                  const navs = e.currentTarget.querySelectorAll('.carousel-nav');
                  navs.forEach(nav => nav.style.opacity = '1');
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 80px rgba(0, 61, 122, 0.15)';
                  const overlay = e.currentTarget.querySelector('.card-overlay');
                  if (overlay) overlay.style.opacity = '0';
                  const navs = e.currentTarget.querySelectorAll('.carousel-nav');
                  navs.forEach(nav => nav.style.opacity = '0');
                }}
              >
                <div style={styles.priceTag}>
                  {destination.price}
                </div>

                <ImageCarousel
                  images={destination.images}
                  activeIndex={activeImageIndices[index]}
                  onIndexChange={(newIndex) => 
                    setActiveImageIndices(prev => ({ ...prev, [index]: newIndex }))
                  }
                  onImageClick={() => openLightbox(index, activeImageIndices[index])}
                />

                <div className="card-overlay" style={styles.cardOverlay}>
                  <h3 style={{
                    color: 'white',
                    fontSize: '1.8rem',
                    marginBottom: '0.5rem',
                    fontWeight: '600',
                  }}>
                    {destination.name}
                  </h3>
                  <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '1rem',
                    marginBottom: '1rem'
                  }}>
                    Click to view gallery
                  </p>
                </div>

                <div style={styles.cardContent}>
                  <h3 style={{
                    ...styles.destinationTitle,
                    background: `linear-gradient(135deg, ${destination.color}, #0066cc)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      background: destination.color,
                      borderRadius: '50%',
                      boxShadow: `0 0 20px ${destination.color}60`,
                    }}></div>
                    {destination.name}
                  </h3>
                  
                  <div style={{
                    fontSize: '1rem',
                    color: destination.color,
                    fontWeight: '600',
                    marginBottom: '1rem',
                    letterSpacing: '0.5px'
                  }}>
                    {destination.subtitle}
                  </div>

                  <div style={styles.destinationMeta}>
                    <div style={styles.metaItem}>
                      <Clock size={16} />
                      <span>{destination.duration}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <MapPin size={16} />
                      <span>Saronic Gulf</span>
                    </div>
                    <div style={styles.metaItem}>
                      <Users size={16} />
                      <span>All ages</span>
                    </div>
                  </div>

                  <p style={{
                    color: '#4b5563',
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                    fontSize: '1rem'
                  }}>
                    {destination.description}
                  </p>

                  <div style={styles.quickInfoGrid}>
                    {destination.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        style={{
                          ...styles.quickInfoItem,
                          borderColor: `${destination.color}20`,
                          background: `${destination.color}08`
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = `${destination.color}15`;
                          e.currentTarget.style.transform = 'translateX(3px)';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = `${destination.color}08`;
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <Check size={16} color={destination.color} />
                        <span style={{ 
                          color: '#4b5563', 
                          fontWeight: '500',
                          fontSize: '0.9rem'
                        }}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: `linear-gradient(135deg, ${destination.color}10, ${destination.color}05)`,
                    borderRadius: '12px',
                    border: `1px solid ${destination.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <Info size={16} color={destination.color} />
                    <span style={{ 
                      fontSize: '0.85rem',
                      color: '#6b7280',
                      fontWeight: '500'
                    }}>
                      {destination.coordinates}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Types Section */}
        <section style={{ ...styles.section, ...styles.experienceSection }}>
          <FloatingElements count={20} color="rgba(255, 255, 255, 0.08)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
            What Awaits You
          </h2>
          <p style={{ 
            ...styles.sectionSubtitle, 
            color: 'rgba(255,255,255,0.8)',
            marginBottom: '4rem'
          }}>
            Four unique experiences across three magical islands, creating memories that will last a lifetime
          </p>

          <div style={styles.experienceGrid} className="experience-grid">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="fade-in"
                id={`experience-${index}`}
                style={{
                  ...styles.experienceCard,
                  opacity: isVisible[`experience-${index}`] ? 1 : 0,
                  transform: isVisible[`experience-${index}`] 
                    ? 'translateY(0) rotateX(0deg)' 
                    : 'translateY(50px) rotateX(10deg)',
                  transition: `all 1s ease ${index * 0.15}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) rotateX(-8deg) rotateY(5deg) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={styles.iconWrapper}>
                  {React.cloneElement(experience.icon, { color: '#1a1a1a' })}
                </div>
                
                <span style={{
                  position: 'absolute',
                  top: '1.5rem',
                  right: '1.5rem',
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
                }}>
                  {experience.highlight}
                </span>
                
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#ffffff',
                  fontWeight: '600',
                }}>
                  {experience.title}
                </h3>
                
                <p style={{
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: '1.6',
                  fontSize: '1rem',
                }}>
                  {experience.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ ...styles.section, background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)', textAlign: 'center' }}>
          <FloatingElements count={10} color="rgba(0, 102, 204, 0.05)" />
          
          <div style={{
            background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
            borderRadius: '32px',
            padding: 'clamp(3rem, 6vw, 4rem)',
            color: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <div style={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
              borderRadius: '50%',
              opacity: 0.1,
            }}></div>
            
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              marginBottom: '1rem',
              fontWeight: '700',
              position: 'relative',
              zIndex: 2,
            }}>
              Ready for Your Island Adventure?
            </h2>
            
            <p style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              marginBottom: '2.5rem',
              opacity: 0.9,
              lineHeight: '1.6',
              position: 'relative',
              zIndex: 2,
            }}>
              Join us on an unforgettable journey through three magical Greek islands. 
              Experience nature, history, and authentic island life all in one perfect day.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 2,
            }}>
              <button
                style={{
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  color: '#1a1a1a',
                  padding: '1.1rem 2.8rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '1.15rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
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
                <Ship size={20} />
                Book Your Island Tour
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
              opacity: 0.8,
              position: 'relative',
              zIndex: 2,
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
                <span>100% Safe</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Lightbox */}
        {lightboxOpen && activeDestination !== null && (
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
                zIndex: 2001,
              }}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
            >
              <X size={24} />
            </button>
            
            <button
              style={{
                position: 'absolute',
                top: '50%',
                left: '2rem',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                border: 'none',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 30px rgba(0, 102, 204, 0.4)',
                zIndex: 2001,
              }}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={24} />
            </button>
            
            <img
              src={destinations[activeDestination].images[currentImage]}
              alt={destinations[activeDestination].name}
              style={styles.lightboxImage}
              onClick={(e) => e.stopPropagation()}
            />
            
            <button
              style={{
                position: 'absolute',
                top: '50%',
                right: '2rem',
                transform: 'translateY(-50%)',
                background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                border: 'none',
                color: 'white',
                padding: '1rem',
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 30px rgba(0, 102, 204, 0.4)',
                zIndex: 2001,
              }}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Image Info */}
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
              color: '#ffffff',
              zIndex: 2001,
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #ffffff, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {destinations[activeDestination].name}
              </h3>
              <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>
                {destinations[activeDestination].subtitle}
              </p>
              <span style={{ color: '#d4af37', fontSize: '0.9rem', fontWeight: '500' }}>
                Image {currentImage + 1} of {destinations[activeDestination].images.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DestinationsPage;