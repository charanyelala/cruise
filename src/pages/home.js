import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, ChevronUp, ArrowRight, Shield, Award, Compass, DollarSign,
  Star, Users, Clock, Calendar, Anchor, Ship, Waves, MapPin,
  Play, X, ChevronLeft, ChevronRight, 
  Camera, Heart, Globe, Sparkles, Check
} from 'lucide-react';

const CruiseHomepage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeGalleryTab, setActiveGalleryTab] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlides, setCurrentSlides] = useState({ yacht: 0, destination: 0, experience: 0, all: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const handleNavigation = (link) => {
    // Close mobile menu when navigating
  
    // Navigate to the page
    window.location.href = link;
  };


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

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
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
      padding: '0 1rem',
      maxWidth: '1100px',
      animation: 'fadeInUp 1.5s ease-out',
    },
    heroSubtitle: {
      fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
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
      flexWrap: 'wrap',
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 8vw, 5.5rem)',
      fontWeight: '700',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      letterSpacing: '-2px',
      background: 'linear-gradient(135deg, #ffffff 0%, #e6f3ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'fadeInUp 1.5s ease-out 0.5s both',
    },
    heroDescription: {
      fontSize: 'clamp(1rem, 2vw, 1.4rem)',
      lineHeight: '1.8',
      marginBottom: '2.5rem',
      color: 'rgba(255,255,255,0.95)',
      maxWidth: '750px',
      margin: '0 auto 2.5rem',
      animation: 'fadeInUp 1.5s ease-out 0.7s both',
      fontWeight: '300',
      padding: '0 1rem',
    },
    heroCTA: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      animation: 'fadeInUp 1.5s ease-out 0.9s both',
      padding: '0 1rem',
    },
    primaryButton: {
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      color: '#1a1a1a',
      padding: 'clamp(0.8rem, 2vw, 1.1rem) clamp(1.5rem, 4vw, 2.8rem)',
      borderRadius: '50px',
      border: 'none',
      fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
    },
    secondaryButton: {
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      color: '#ffffff',
      padding: 'clamp(0.8rem, 2vw, 1.1rem) clamp(1.5rem, 4vw, 2.8rem)',
      borderRadius: '50px',
      border: '2px solid rgba(255,255,255,0.3)',
      fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
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
    gallerySection: {
      padding: 'clamp(3rem, 8vw, 6rem) 1rem',
      background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    galleryHeader: {
      textAlign: 'center',
      marginBottom: 'clamp(2rem, 6vw, 4rem)',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 6vw, 4rem)',
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
      fontSize: 'clamp(1rem, 3vw, 1.3rem)',
      textAlign: 'center',
      color: '#6b7280',
      marginBottom: '3rem',
      maxWidth: '700px',
      margin: '0 auto 3rem',
      lineHeight: '1.7',
      padding: '0 1rem',
    },
    galleryTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: 'clamp(0.5rem, 2vw, 1rem)',
      marginBottom: 'clamp(2rem, 5vw, 4rem)',
      flexWrap: 'wrap',
      padding: '0 1rem',
    },
    galleryTab: {
      padding: 'clamp(0.7rem, 2vw, 1rem) clamp(1rem, 3vw, 2rem)',
      borderRadius: '50px',
      border: '2px solid rgba(0, 102, 204, 0.2)',
      background: 'rgba(255,255,255,0.8)',
      backdropFilter: 'blur(10px)',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      fontSize: 'clamp(0.8rem, 2vw, 1rem)',
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
    carouselContainer: {
      maxWidth: '600px',
      margin: '0 auto',
      position: 'relative',
      padding: '0 1rem',
    },
    carouselWrapper: {
      overflow: 'hidden',
      borderRadius: '20px',
      height: 'clamp(800px, 80vh, 1200px)',
    },
    carouselTrack: {
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      gap: 'clamp(1rem, 2vw, 2rem)',
    },
    carouselSlide: {
      minHeight: 'calc(100% / 3)',
      flex: '0 0 auto',
    },
    galleryItem: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      height: 'clamp(250px, 40vw, 400px)',
      cursor: 'pointer',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.15)',
      background: 'linear-gradient(145deg, rgba(255,255,255,0.9), rgba(248,250,251,0.9))',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
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
      padding: 'clamp(1rem, 3vw, 2rem)',
      borderRadius: '20px',
    },
    carouselNav: {
      position: 'absolute',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      border: 'none',
      color: 'white',
      padding: 'clamp(0.8rem, 2vw, 1rem)',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 10px 30px rgba(0, 102, 204, 0.4)',
      zIndex: 10,
    },
    adventuresSection: {
      padding: 'clamp(3rem, 8vw, 6rem) 1rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    adventuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2.5rem)',
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    adventureCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.15)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      border: '1px solid rgba(0, 102, 204, 0.1)',
    },
    adventureImage: {
      width: '100%',
      height: 'clamp(200px, 30vw, 280px)',
      objectFit: 'cover',
      transition: 'transform 0.6s ease',
    },
    adventureContent: {
      padding: 'clamp(1.5rem, 3vw, 2.5rem)',
    },
    featuresSection: {
      padding: 'clamp(3rem, 8vw, 6rem) 1rem',
      background: 'linear-gradient(180deg, #f8fafb 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
    },
    featureCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: 'clamp(2rem, 4vw, 3rem)',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },
    experienceSection: {
      padding: 'clamp(3rem, 8vw, 6rem) 1rem',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    statsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      padding: '0 1rem',
    },
    statsCard: {
      textAlign: 'center',
      color: '#ffffff',
      padding: 'clamp(2rem, 4vw, 3rem)',
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      border: '1px solid rgba(255,255,255,0.2)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    },
    testimonialSection: {
      padding: 'clamp(3rem, 8vw, 6rem) 1rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
      position: 'relative',
      overflow: 'hidden',
    },
    testimonialContainer: {
      maxWidth: '900px',
      margin: '0 auto',
      position: 'relative',
    },
    testimonialCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      padding: 'clamp(2rem, 4vw, 3rem)',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      textAlign: 'center',
      transition: 'all 0.6s ease',
      animation: 'slideIn 0.8s ease-out',
    },
    testimonialDots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginTop: '2rem',
    },
    testimonialDot: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      background: 'rgba(0, 102, 204, 0.3)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    testimonialDotActive: {
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      transform: 'scale(1.2)',
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
    @keyframes bounce {
      0%, 100% { transform: translateX(-50%) translateY(0); }
      50% { transform: translateX(-50%) translateY(-10px); }
    }
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes pulse {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(0, 102, 204, 0.3);
      }
      50% { 
        box-shadow: 0 0 40px rgba(0, 102, 204, 0.6);
      }
    }
  `;

  // Updated gallery images with local images
  const galleryImages = [
    // Yacht category
    { id: 1, src: '/images/ship.jpeg', category: 'yacht', title: 'Luxury Yacht Experience', description: 'Premium comfort on the Aegean' },
    { id: 2, src: '/images/ship1.jpeg', category: 'yacht', title: 'Modern Fleet', description: 'State-of-the-art vessels' },
    { id: 3, src: '/images/ship2.jpeg', category: 'yacht', title: 'Elegant Design', description: 'Sophisticated interiors' },
    { id: 4, src: '/images/ship3.jpeg', category: 'yacht', title: 'Premium Vessels', description: 'World-class amenities' },
    { id: 5, src: '/images/ship11.jpeg', category: 'yacht', title: 'Spacious Decks', description: 'Room to relax and enjoy' },
    { id: 6, src: '/images/ship12.jpeg', category: 'yacht', title: 'Luxury Interiors', description: 'Comfort and style combined' },
    
    // Destination category (using generic cruise destination images)
    { id: 7, src: '/images/aegina-1.jpg', category: 'destination', title: 'Santorini Views', description: 'Breathtaking island scenery' },
    { id: 8, src: '/images/aegina-2.jpg', category: 'destination', title: 'Crystal Waters', description: 'Perfect swimming spots' },
    { id: 9, src: '/images/aegina-4.jpg', category: 'destination', title: 'Hidden Coves', description: 'Secret paradise locations' },
    { id: 10, src: '/images/agistri-1.jpg', category: 'destination', title: 'Coastal Beauty', description: 'Stunning Greek coastlines' },
    { id: 11, src: '/images/agistri-2.jpg', category: 'destination', title: 'Island Hopping', description: 'Multiple destinations' },
    { id: 12, src: '/images/agistri-4.jpg', category: 'destination', title: 'Sunset Views', description: 'Magical golden hours' },
    
    // Experience category
    { id: 13, src: '/images/exp1.jpeg', category: 'experience', title: 'Gourmet Dining', description: 'Exceptional cuisine at sea' },
    { id: 14, src: '/images/exp2.jpeg', category: 'experience', title: 'Water Activities', description: 'Swimming and snorkeling' },
    { id: 15, src: '/images/exp3.jpeg', category: 'experience', title: 'Relaxation', description: 'Peaceful moments on deck' },
    { id: 16, src: '/images/exp4.jpeg', category: 'experience', title: 'Entertainment', description: 'Music and celebration' },
    { id: 17, src: '/images/exp5.jpeg', category: 'experience', title: 'Photography', description: 'Capture perfect moments' },
    { id: 18, src: '/images/exp6.jpeg', category: 'experience', title: 'Sunset Cruising', description: 'Evening magic at sea' },
  ];

  const filteredImages = activeGalleryTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeGalleryTab);

  const slidesPerView = 3; // Always show 3 rows
  const maxSlide = Math.max(0, Math.ceil(filteredImages.length / 3) - 1);

  const nextSlide = () => {
    setCurrentSlides(prev => ({
      ...prev,
      [activeGalleryTab]: Math.min(prev[activeGalleryTab] + 1, maxSlide)
    }));
  };

  const prevSlide = () => {
    setCurrentSlides(prev => ({
      ...prev,
      [activeGalleryTab]: Math.max(prev[activeGalleryTab] - 1, 0)
    }));
  };

  // Get current 3 images to display
  const getCurrentImages = () => {
    const startIndex = currentSlides[activeGalleryTab] * 3;
    return filteredImages.slice(startIndex, startIndex + 3);
  };

  // Adventure content based on header navigation
  const adventures = [
    {
      title: "Destinations",
      description: "Explore breathtaking Greek Saronic Islands. Each destination offers unique beauty, culture, and unforgettable experiences.",
      image: "/images/aegina-1.jpg",
      highlights: ["Islands", "Cultural Experiences", "Photo Opportunities"]
    },
    {
      title: "Our Fleet",
      description: "Choose from our selection of luxury yachts, modern catamarans, comfortable motor boats, and elegant sailing yachts. All vessels feature premium amenities and safety equipment.",
      image: "/images/ship11.jpeg",
      highlights: ["Luxury Yachts", "Modern Catamarans", "Safety Certified"]
    },
    {
      title: "Cruise Types",
      description: "From relaxing day cruises to romantic sunset voyages and exclusive private charters. We offer various cruise experiences tailored to create your perfect maritime adventure.",
      image: "/images/ship12.jpeg",
      highlights: ["Day Cruises", "Sunset Cruises", "Private Charters"]
    }
  ];

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

  // Enhanced testimonials with better content
  const testimonials = [
    {
      text: "An absolutely magical experience! The crew was professional and friendly, the yacht was luxurious, and the destinations were breathtaking. This was the highlight of our Greek vacation. Can't wait to cruise with them again!",
      author: "Sarah Johnson",
      location: "California, USA",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      text: "The sunset cruise was beyond our expectations. The gourmet dinner, champagne service, and stunning views of Santorini made our anniversary unforgettable. The crew went above and beyond to make us feel special.",
      author: "Marco & Elena Rossi",
      location: "Milan, Italy",
      rating: 5,
      avatar: "👫"
    },
    {
      text: "As a solo traveler, I was welcomed warmly by both crew and fellow passengers. The day cruise to three islands was perfectly organized, with plenty of time for swimming, exploring, and photography. Highly recommended!",
      author: "James Mitchell",
      location: "London, UK",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      text: "Our corporate event on the private charter was a huge success. The yacht was perfect for our team building activities, the catering was exceptional, and the crew handled everything professionally. Will definitely book again!",
      author: "Lisa Chen",
      location: "Singapore",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      text: "The perfect family experience! Our kids loved swimming in the crystal clear waters while we relaxed on deck. The crew was great with children, and the safety standards were impressive. A wonderful day for the whole family.",
      author: "The Williams Family",
      location: "Toronto, Canada",
      rating: 5,
      avatar: "👨‍👩‍👧‍👦"
    }
  ];

  const openLightbox = (index) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const FloatingElements = ({ count = 20, color = "rgba(0, 102, 204, 0.1)" }) => (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      pointerEvents: 'none',
      zIndex: 1,
    }}>
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
            animation: `fadeIn ${3 + Math.random() * 4}s ease-in-out infinite`,
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
              An experience no traveler should ever miss. SARONIC DREAM CRUISE offers a truly exceptional way to 
              experience the timeless beauty of the Saronic Gulf and its serene waters.
            </p>
            <div style={styles.heroCTA}>
<button 
  style={styles.primaryButton}
  onClick={() => handleNavigation('/cruises')}
  onMouseEnter={e => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.08)';
    e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.6)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
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
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                }}
              >
                <Play size={20} /> Watch Video
              </button>
            </div>
          </div>
          
          <div style={styles.scrollIndicator}>
            <ChevronDown size={32} color="#ffffff" />
          </div>
        </section>

        {/* Enhanced Gallery Section with Carousel */}
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
                width: 'clamp(60px, 15vw, 100px)',
                height: 'clamp(60px, 15vw, 100px)',
                background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
                animation: 'pulse 3s ease-in-out infinite',
              }}>
                <Camera size={window.innerWidth <= 768 ? 24 : 40} color="#ffffff" />
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
                }}
                onClick={() => {
                  setActiveGalleryTab(tab);
                  setCurrentSlides(prev => ({ ...prev, [tab]: 0 }));
                }}
                onMouseEnter={e => {
                  if (activeGalleryTab !== tab) {
                    e.currentTarget.style.background = 'rgba(0, 102, 204, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeGalleryTab !== tab) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === 'all' && ` (${galleryImages.length})`}
              </button>
            ))}
          </div>

          <div style={styles.carouselContainer}>
            <div style={styles.carouselWrapper}>
              <div 
                style={{
                  ...styles.carouselTrack,
                  transform: `translateY(-${currentSlides[activeGalleryTab] * 100}%)`,
                }}
              >
                {Array.from({ length: Math.ceil(filteredImages.length / 3) }).map((_, setIndex) => (
                  <div key={setIndex} style={{ display: 'flex', flexDirection: 'column', gap: '2rem', height: '100%' }}>
                    {filteredImages.slice(setIndex * 3, setIndex * 3 + 3).map((image, index) => (
                      <div key={image.id} style={styles.carouselSlide}>
                        <div
                          style={{
                            ...styles.galleryItem,
                            transform: `perspective(1000px) rotateX(${scrollY * 0.02}deg) rotateY(${Math.sin(scrollY * 0.01) * 2}deg)`,
                          }}
                          onClick={() => openLightbox(setIndex * 3 + index)}
                          onMouseEnter={e => {
                            const overlay = e.currentTarget.querySelector('.overlay');
                            const img = e.currentTarget.querySelector('img');
                            if (overlay) overlay.style.opacity = '1';
                            if (img) img.style.transform = 'scale(1.1) rotateZ(2deg)';
                            e.currentTarget.style.transform = 'perspective(1000px) translateY(-15px) rotateX(-10deg) rotateY(8deg) scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 40px 100px rgba(0, 61, 122, 0.3)';
                          }}
                          onMouseLeave={e => {
                            const overlay = e.currentTarget.querySelector('.overlay');
                            const img = e.currentTarget.querySelector('img');
                            if (overlay) overlay.style.opacity = '0';
                            if (img) img.style.transform = 'scale(1) rotateZ(0deg)';
                            e.currentTarget.style.transform = `perspective(1000px) rotateX(${scrollY * 0.02}deg) rotateY(${Math.sin(scrollY * 0.01) * 2}deg)`;
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
                              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', 
                              marginBottom: '0.8rem',
                              fontWeight: '600',
                              background: 'linear-gradient(135deg, #ffffff, #d4af37)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text',
                            }}>
                              {image.title}
                            </h3>
                            <p style={{ 
                              color: 'rgba(255,255,255,0.9)', 
                              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
                              marginBottom: '1rem' 
                            }}>
                              {image.description}
                            </p>
                            <div style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              color: '#d4af37',
                              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                              fontWeight: '500',
                            }}>
                              <Camera size={16} />
                              <span>View in Gallery</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Fill empty slots if less than 3 images */}
                    {Array.from({ length: Math.max(0, 3 - filteredImages.slice(setIndex * 3, setIndex * 3 + 3).length) }).map((_, emptyIndex) => (
                      <div key={`empty-${emptyIndex}`} style={{...styles.carouselSlide, opacity: 0}} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            
            {currentSlides[activeGalleryTab] > 0 && (
              <button 
                style={{
                  ...styles.carouselNav,
                  top: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                onClick={prevSlide}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 102, 204, 0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.4)';
                }}
              >
                <ChevronUp size={window.innerWidth <= 768 ? 20 : 24} />
              </button>
            )}
            
            {/* Gallery indicators */}
            <div style={{
              position: 'absolute',
              bottom: '-3rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '0.5rem',
            }}>
              {Array.from({ length: Math.ceil(filteredImages.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlides[activeGalleryTab] === index 
                      ? 'linear-gradient(135deg, #0066cc, #003d7a)'
                      : 'rgba(0, 102, 204, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: currentSlides[activeGalleryTab] === index ? 'scale(1.2)' : 'scale(1)',
                  }}
                  onClick={() => setCurrentSlides(prev => ({ ...prev, [activeGalleryTab]: index }))}
                />
              ))}
            </div>
            
            {currentSlides[activeGalleryTab] < maxSlide && (
              <button 
                style={{
                  ...styles.carouselNav,
                  bottom: '10%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                onClick={nextSlide}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 102, 204, 0.6)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(-50%) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 102, 204, 0.4)';
                }}
              >
                <ChevronDown size={window.innerWidth <= 768 ? 20 : 24} />
              </button>
            )}
          </div>
        </section>

        {/* Updated Adventures Section */}
        <section style={styles.adventuresSection}>
          <FloatingElements count={12} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>Explore Our Offerings</h2>
          <p style={styles.sectionSubtitle}>
            Discover our destinations, modern fleet, and variety of cruise experiences designed to create unforgettable memories
          </p>
          
          <div style={styles.adventuresGrid}>
            {adventures.map((adventure, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`adventure-${index}`}
                style={{
                  ...styles.adventureCard,
                  opacity: isVisible[`adventure-${index}`] ? 1 : 0,
                  transform: isVisible[`adventure-${index}`] 
                    ? `translateY(0)` 
                    : `translateY(50px)`,
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.25)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.15)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <img src={adventure.image} alt={adventure.title} style={styles.adventureImage} />
                <div style={styles.adventureContent}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                    marginBottom: '1.2rem', 
                    color: '#003d7a',
                    background: 'linear-gradient(135deg, #003d7a, #0066cc)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {adventure.title}
                  </h3>
                  <p style={{ 
                    color: '#6b7280', 
                    lineHeight: '1.7', 
                    marginBottom: '1.5rem', 
                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' 
                  }}>
                    {adventure.description}
                  </p>
                  <div style={{ 
                    display: 'flex', 
                    gap: '0.5rem', 
                    flexWrap: 'wrap',
                    marginBottom: '1rem',
                  }}>
                    {adventure.highlights.map((highlight, hIndex) => (
                      <span 
                        key={hIndex}
                        style={{
                          background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                          color: '#1a1a1a',
                          padding: '0.4rem 0.8rem',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        <Check size={14} />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section style={styles.featuresSection}>
          <FloatingElements count={18} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Why Choose Us</h2>
          <p style={styles.sectionSubtitle}>
            We craft memories that last a lifetime. SARONIC DREAM CRUISE will reintroduce you to 
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
                    ? `translateY(0)` 
                    : `translateY(40px)`,
                  transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
                }}
              >
                <div style={{
                  width: 'clamp(60px, 12vw, 80px)',
                  height: 'clamp(60px, 12vw, 80px)',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2rem',
                  background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                  boxShadow: '0 15px 35px rgba(0, 102, 204, 0.3)',
                }}>
                  {React.cloneElement(feature.icon, { 
                    size: window.innerWidth <= 768 ? 24 : 36 
                  })}
                </div>
                <span style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  right: '1.5rem',
                  background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                  fontWeight: '600',
                  color: '#1a1a1a',
                  boxShadow: '0 8px 25px rgba(212, 175, 55, 0.3)',
                }}>
                  {feature.highlight}
                </span>
                <h3 style={{ 
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', 
                  marginBottom: '1.2rem', 
                  color: '#003d7a',
                  fontWeight: '600',
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: '#6b7280', 
                  lineHeight: '1.7', 
                  fontSize: 'clamp(0.9rem, 2vw, 1.1rem)' 
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Stats Section */}
        <section style={styles.experienceSection}>
          <FloatingElements count={25} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ 
            ...styles.sectionTitle, 
            color: '#ffffff', 
            marginBottom: '4rem',
          }}>
            Our Success in Numbers
          </h2>
          <div style={styles.statsGrid}>
            <div 
              style={styles.statsCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
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
              }}>
                <Anchor size={window.innerWidth <= 768 ? 32 : 44} /> 10+
              </div>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '600' }}>Years of Excellence</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Serving since 2014</p>
            </div>
            <div 
              style={styles.statsCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
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
              }}>
                <Users size={window.innerWidth <= 768 ? 32 : 44} /> 5000+
              </div>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '600' }}>Happy Guests</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>From 50+ countries</p>
            </div>
            <div 
              style={styles.statsCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
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
              }}>
                <Shield size={window.innerWidth <= 768 ? 32 : 44} /> 100%
              </div>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '600' }}>Safety Record</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Zero incidents</p>
            </div>
            <div 
              style={styles.statsCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 8vw, 4rem)',
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
              }}>
                <MapPin size={window.innerWidth <= 768 ? 32 : 44} /> 50+
              </div>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', fontWeight: '600' }}>Unique Destinations</p>
              <p style={{ opacity: 0.8, marginTop: '0.5rem' }}>Hidden gems await</p>
            </div>
          </div>
        </section>

        {/* Simplified Testimonials Section */}
        <section style={styles.testimonialSection}>
          <FloatingElements count={10} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>What Our Guests Say</h2>
          <p style={styles.sectionSubtitle}>
            Real experiences from our valued guests around the world
          </p>
          
          <div style={styles.testimonialContainer}>
            <div 
              key={currentTestimonial}
              style={styles.testimonialCard}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 80px rgba(0, 61, 122, 0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 61, 122, 0.1)';
              }}
            >
              <div style={{
                fontSize: '3rem',
                color: '#d4af37',
                opacity: 0.2,
                textAlign: 'center',
                lineHeight: '1',
                marginBottom: '1rem',
              }}>
                "
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                marginBottom: '1.5rem',
                gap: '0.5rem'
              }}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={window.innerWidth <= 768 ? 20 : 28} 
                    fill="#d4af37" 
                    color="#d4af37"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))',
                    }}
                  />
                ))}
              </div>
              <p style={{ 
                fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', 
                lineHeight: '1.8', 
                color: '#4b5563',
                marginBottom: '2rem',
                fontStyle: 'italic',
                textAlign: 'center',
              }}>
                {testimonials[currentTestimonial].text}
              </p>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '2rem', 
                  marginBottom: '0.5rem' 
                }}>
                  {testimonials[currentTestimonial].avatar}
                </div>
                <p style={{ 
                  fontWeight: '600', 
                  color: '#003d7a', 
                  fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                  background: 'linear-gradient(135deg, #003d7a, #0066cc)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.3rem',
                }}>
                  {testimonials[currentTestimonial].author}
                </p>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)' 
                }}>
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
            
            <div style={styles.testimonialDots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  style={{
                    ...styles.testimonialDot,
                    ...(currentTestimonial === index ? styles.testimonialDotActive : {}),
                  }}
                  onClick={() => setCurrentTestimonial(index)}
                  onMouseEnter={e => {
                    if (currentTestimonial !== index) {
                      e.currentTarget.style.background = 'rgba(0, 102, 204, 0.6)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }
                  }}
                  onMouseLeave={e => {
                    if (currentTestimonial !== index) {
                      e.currentTarget.style.background = 'rgba(0, 102, 204, 0.3)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Video Modal */}
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
              padding: '2rem',
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
              onClick={(e) => {
                e.stopPropagation();
                setVideoModalOpen(false);
              }}
            >
              <X size={24} />
            </button>
            <video 
              style={{
                width: '100%',
                maxWidth: '1200px',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
              }}
              controls
              autoPlay
              onClick={(e) => e.stopPropagation()}
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
        )}

        {/* Lightbox */}
        {lightboxOpen && (
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
              animation: 'fadeIn 0.3s ease',
              padding: '2rem',
            }}
            onClick={() => setLightboxOpen(false)}
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
                transition: 'all 0.4s ease',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                setLightboxOpen(false);
              }}
            >
              <X size={24} />
            </button>
            <img 
              src={filteredImages[currentImage]?.src} 
              alt={filteredImages[currentImage]?.title}
              style={{
                maxWidth: '90%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0, 102, 204, 0.3)',
                border: '2px solid rgba(212, 175, 55, 0.3)',
              }}
              onClick={(e) => e.stopPropagation()}
            />
            
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
              maxWidth: '90%',
            }}>
              <h3 style={{
                color: '#ffffff',
                fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #ffffff, #d4af37)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {filteredImages[currentImage]?.title}
              </h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.8)', 
                marginBottom: '1rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              }}>
                {filteredImages[currentImage]?.description}
              </p>
              <span style={{ 
                color: '#d4af37', 
                fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
                fontWeight: '500',
              }}>
                {currentImage + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CruiseHomepage;