import React, { useState, useEffect } from 'react';
import { 
  Ship, Anchor, Users, Zap, Fuel, Gauge, Bed, Bath,
  ChefHat, Crown, Star, ArrowRight, Camera, Heart,
  Award, Shield, Compass, Navigation, Eye, Sparkles,
  Clock, MapPin, CheckCircle, Info, Play, X, ChevronLeft, ChevronRight
} from 'lucide-react';

const FleetPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [activeYacht, setActiveYacht] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

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
    containerInner: {
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
    yachtCard: {
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '32px',
      overflow: 'hidden',
      boxShadow: '0 25px 70px rgba(0, 61, 122, 0.15)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      marginBottom: '4rem',
      position: 'relative',
    },
    yachtHeader: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
      padding: '3rem 3rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    yachtTitle: {
      fontSize: '2.8rem',
      fontWeight: '700',
      marginBottom: '1rem',
      textShadow: '0 2px 20px rgba(0,0,0,0.3)',
    },
    yachtSubtitle: {
      fontSize: '1.2rem',
      opacity: 0.9,
      marginBottom: '2rem',
    },
    yachtSpecs: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      padding: '3rem',
    },
    specCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: '1.5rem',
      boxShadow: '0 10px 30px rgba(0, 61, 122, 0.08)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.4s ease',
      textAlign: 'center',
    },
    specIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1rem',
      boxShadow: '0 8px 20px rgba(0, 102, 204, 0.3)',
    },
    specValue: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#003d7a',
      marginBottom: '0.5rem',
    },
    specLabel: {
      fontSize: '0.9rem',
      color: '#6b7280',
      fontWeight: '500',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '4rem',
    },
    galleryItem: {
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
      height: '300px',
      cursor: 'pointer',
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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
      padding: '2rem',
    },
    comparisonTable: {
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      marginTop: '4rem',
    },
    tableHeader: {
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      color: '#ffffff',
      padding: '2rem',
      textAlign: 'center',
    },
    tableContent: {
      padding: '0',
    },
    tableRow: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      borderBottom: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.3s ease',
    },
    tableCell: {
      padding: '1.5rem',
      textAlign: 'center',
      fontSize: '1rem',
      fontWeight: '500',
    },
    tableCellHeader: {
      background: 'rgba(0, 102, 204, 0.05)',
      fontWeight: '600',
      color: '#003d7a',
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
                <Crown size={40} color="#001e3c" />
              </div>
            </div>
            
            <h1 style={styles.heroTitle}>Our Luxury Yacht Fleet</h1>
            <p style={styles.heroSubtitle}>
              Discover our award-winning vessels, Angelique and Martika - two magnificent motor yachts 
              designed to provide the ultimate cruising experience in the stunning Saronic Gulf.
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
                <Award size={20} />
                <span>Award Winning</span>
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
                <Shield size={20} />
                <span>Fully Licensed</span>
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
                <Users size={20} />
                <span>Professional Crew</span>
              </div>
            </div>
          </div>
        </section>

        {/* Yachts Section */}
        <section style={styles.section}>
          <div style={styles.containerInner}>
            {yachts.map((yacht, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`yacht-${index}`}
                style={{
                  ...styles.yachtCard,
                  opacity: isVisible[`yacht-${index}`] ? 1 : 0,
                  transform: isVisible[`yacht-${index}`] 
                    ? 'translateY(0) rotateX(0deg)' 
                    : 'translateY(50px) rotateX(5deg)',
                  transition: `all 1s ease ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-15px) rotateX(-3deg) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 35px 90px rgba(0, 61, 122, 0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                  e.currentTarget.style.boxShadow = '0 25px 70px rgba(0, 61, 122, 0.15)';
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
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
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
                          <div style={{ fontSize: '0.9rem', fontWeight: '400', color: '#6b7280' }}>
                            {spec.detail}
                          </div>
                        )}
                      </div>
                      <div style={styles.specLabel}>{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.containerInner}>
            <h2 style={styles.sectionTitle}>Fleet Comparison</h2>
            <p style={{
              fontSize: '1.3rem',
              textAlign: 'center',
              color: '#6b7280',
              marginBottom: '4rem',
              maxWidth: '800px',
              margin: '0 auto 4rem',
              lineHeight: '1.7',
            }}>
              Compare our luxury yachts to find the perfect vessel for your cruise experience
            </p>

            <div 
              className="fade-in"
              id="comparison-table"
              style={{
                ...styles.comparisonTable,
                opacity: isVisible['comparison-table'] ? 1 : 0,
                transform: isVisible['comparison-table'] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s ease',
              }}
            >
              <div style={styles.tableHeader}>
                <h3 style={{ fontSize: '1.8rem', margin: 0, marginBottom: '0.5rem' }}>
                  Yacht Specifications
                </h3>
                <p style={{ margin: 0, opacity: 0.9 }}>
                  Detailed comparison of our luxury motor yachts
                </p>
              </div>
              
              <div style={styles.tableContent}>
                <div style={styles.tableRow}>
                  <div style={{...styles.tableCell, ...styles.tableCellHeader}}>Feature</div>
                  <div style={{...styles.tableCell, ...styles.tableCellHeader}}>Angelique</div>
                  <div style={{...styles.tableCell, ...styles.tableCellHeader}}>Martika</div>
                </div>
                
                {comparisonData.map((row, index) => (
                  <div 
                    key={index} 
                    style={{
                      ...styles.tableRow,
                      background: index % 2 === 0 ? 'transparent' : 'rgba(0, 102, 204, 0.02)'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(0, 102, 204, 0.08)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = index % 2 === 0 ? 'transparent' : 'rgba(0, 102, 204, 0.02)';
                    }}
                  >
                    <div style={{...styles.tableCell, fontWeight: '600', color: '#003d7a'}}>
                      {row.feature}
                    </div>
                    <div style={styles.tableCell}>{row.angelique}</div>
                    <div style={styles.tableCell}>{row.martika}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section style={styles.section}>
          <div style={styles.containerInner}>
            <h2 style={styles.sectionTitle}>Yacht Gallery</h2>
            <p style={{
              fontSize: '1.3rem',
              textAlign: 'center',
              color: '#6b7280',
              marginBottom: '4rem',
              maxWidth: '700px',
              margin: '0 auto 4rem',
              lineHeight: '1.7',
            }}>
              Explore our luxury yachts through stunning photography
            </p>

            <div style={styles.galleryGrid}>
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="fade-in"
                  id={`gallery-${image.id}`}
                  style={{
                    ...styles.galleryItem,
                    opacity: isVisible[`gallery-${image.id}`] ? 1 : 0,
                    transform: isVisible[`gallery-${image.id}`] 
                      ? 'translateY(0) rotateX(0deg)' 
                      : 'translateY(40px) rotateX(10deg)',
                    transition: `all 1s ease ${index * 0.1}s`,
                  }}
                  onClick={() => openLightbox(index)}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.overlay').style.opacity = '1';
                    e.currentTarget.querySelector('img').style.transform = 'scale(1.1) rotateZ(2deg)';
                    e.currentTarget.style.transform = 'translateY(-10px) rotateX(-5deg) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.25)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.overlay').style.opacity = '0';
                    e.currentTarget.querySelector('img').style.transform = 'scale(1) rotateZ(0deg)';
                    e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
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
                      fontSize: '1.5rem', 
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>
                      {image.title}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                      {image.yacht}
                    </p>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#d4af37',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                    }}>
                      <Eye size={16} />
                      <span>View Full Size</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.ctaSection}>
          <div style={styles.containerInner}>
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
                Ready to Experience Luxury?
              </h2>
              <p style={{ 
                fontSize: '1.3rem', 
                marginBottom: '3rem', 
                opacity: 0.9,
                lineHeight: '1.7'
              }}>
                Book your cruise aboard one of our magnificent yachts and discover the beauty 
                of the Saronic Gulf in ultimate comfort and style.
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
                  Book Your Cruise <ArrowRight size={24} />
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
            </div>
          </div>
        </section>

        {/* Lightbox */}
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