import React, { useState, useEffect } from 'react';
import { 
  Clock, Users, Calendar, Star, MapPin, Ship, Waves,
  CheckCircle, X, Info, Camera, Heart, Anchor, 
  ArrowRight, Coffee, Utensils, Fish, Car,
  AlertCircle, Phone, Mail, CreditCard, Globe,
  Mountain, TreePine, Sun, Wind, Navigation,
  Timer, Eye, Bike, ShoppingBag, Sparkles, Shirt,
  Play, ChevronDown, Award, Shield, Target, Flag,
  Zap, ThumbsUp, Euro, Compass
} from 'lucide-react';

const CruiseDetailsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('itinerary');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

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
      backgroundImage: 'url("/images/ship.jpeg")',
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
      paddingTop: 'clamp(120px, 20vw, 160px)',
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
    itinerarySection: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
    },
    tabNavigation: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: 'clamp(2rem, 4vw, 3rem)',
      flexWrap: 'wrap',
    },
    tab: {
      padding: 'clamp(0.8rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
      borderRadius: '50px',
      border: '2px solid rgba(0, 102, 204, 0.2)',
      background: 'rgba(255,255,255,0.8)',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backdropFilter: 'blur(20px)',
    },
    activeTab: {
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      color: 'white',
      border: '2px solid transparent',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 30px rgba(0, 102, 204, 0.3)',
    },
    timelineContainer: {
      maxWidth: '1000px',
      margin: '0 auto',
      position: 'relative',
    },
    timelineItem: {
      position: 'relative',
      paddingBottom: 'clamp(2rem, 4vw, 3rem)',
      paddingLeft: 'clamp(2rem, 4vw, 3rem)',
    },
    timelineDot: {
      position: 'absolute',
      left: '-1rem',
      top: '0.5rem',
      width: '2rem',
      height: '2rem',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #d4af37, #f4d03f)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
      zIndex: 2,
    },
    timelineLine: {
      position: 'absolute',
      left: '-0.5rem',
      top: '2.5rem',
      bottom: '-1rem',
      width: '1px',
      background: 'linear-gradient(180deg, #0066cc, rgba(0, 102, 204, 0.3))',
    },
    timelineCard: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s ease',
    },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(1.5rem, 3vw, 2rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    card: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: 'clamp(2rem, 4vw, 2.5rem)',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.6s ease',
    },
    iconWrapper: {
      width: 'clamp(60px, 8vw, 80px)',
      height: 'clamp(60px, 8vw, 80px)',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      boxShadow: '0 15px 35px rgba(0, 102, 204, 0.3)',
    },
    faqItem: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: 'clamp(1.5rem, 3vw, 2rem)',
      marginBottom: '1rem',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.6s ease',
      boxShadow: '0 10px 30px rgba(0, 61, 122, 0.1)',
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
    importantInfoSection: {
      background: 'linear-gradient(135deg, #f8fafb 0%, #ffffff 100%)',
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

    @media (max-width: 768px) {
      .hero-stats {
        gap: 1rem !important;
        flex-direction: column !important;
        align-items: center !important;
      }
      .tab-nav {
        flex-direction: column !important;
        align-items: center !important;
      }
      .timeline-item {
        padding-left: 2rem !important;
      }
      .hero-section {
        background-attachment: scroll !important;
      }
      .hero-content {
        padding-top: 160px !important;
      }
    }

    @media (max-width: 480px) {
      .booking-button {
        width: 100% !important;
        padding: 1rem 2rem !important;
        font-size: 1rem !important;
      }
      .hero-content {
        padding-top: 140px !important;
      }
    }

    @media (max-width: 375px) {
      .hero-content {
        padding-top: 120px !important;
      }
    }
  `;

  // Updated itinerary with exact content
  const itineraryItems = [
    {
      time: "8:45 AM",
      title: "Meeting Time",
      location: "Marina Zeas",
      description: "yacht's location: 10min safety briefing",
      icon: <MapPin size={16} color="#1a1a1a" />,
      activities: ["Safety briefing", "Welcome aboard"]
    },
    {
      time: "9:00AM-11:15AM",
      title: "Saronic Gulf",
      location: "Open Waters",
      description: "Sightseeing, Sailing, Boat cruise, Breakfast, Coffee, Welcome refreshments",
      duration: "2h",
      icon: <Ship size={16} color="#1a1a1a" />,
      activities: ["Sightseeing", "Sailing", "Boat cruise", "Breakfast", "Coffee", "Welcome refreshments"]
    },
    {
      time: "11:15am-12:45pm",
      title: "Agistri Island",
      location: "First Island Stop",
      description: "Shopping, Free time, Bike tour, Walk, Sightseeing, Photo stop, Break time",
      duration: "1h30min",
      icon: <TreePine size={16} color="#1a1a1a" />,
      activities: ["Shopping", "Free time", "Bike tour", "Walk", "Sightseeing", "Photo stop", "Break time"]
    },
    {
      time: "13:00PM-13:40PM",
      title: "Moni or Metopi",
      location: "Swimming Stop",
      description: "Swimming stop, Snorkeling (depending on the weather conditions)",
      duration: "45min",
      icon: <Waves size={16} color="#1a1a1a" />,
      activities: ["Swimming stop", "Snorkeling", "Lunch & drinks"]
    },
    {
      time: "14:15PM-16:00PM",
      title: "Aegina",
      location: "Historic Island",
      description: "Horse riding, Photo stop, Break time, Shopping, Pistachio market, Free-time, Walk Sightseeing, Temple of Apollo",
      duration: "1h30min",
      icon: <Mountain size={16} color="#1a1a1a" />,
      activities: ["Horse riding", "Photo stop", "Break time", "Shopping", "Pistachio market", "Free-time", "Walk", "Sightseeing", "Temple of Apollo"]
    },
    {
      time: "16:00pm- 18:30PM",
      title: "Return Journey",
      location: "Saronic Gulf",
      description: "Sailing in the Saronic gulf - returning journey",
      duration: "2h 30min",
      icon: <Sun size={16} color="#1a1a1a" />,
      activities: ["Sailing", "Returning journey"]
    },
    {
      time: "18:30PM",
      title: "Arrival",
      location: "Marina Zeas",
      description: "Arrival back at the meeting point",
      icon: <Anchor size={16} color="#1a1a1a" />,
      activities: ["Arrival back at meeting point"]
    }
  ];

  // Updated inclusions exactly as specified
  const ticketIncludes = [
    { icon: <Coffee size={24} />, text: "Breakfast & refreshments (coffee, tea, orange juice)" },
    { icon: <Utensils size={24} />, text: "Lunch onboard (vegan/vegetarian options lactose & gluten-free options) & unlimited white wine, beers & refreshments" }
  ];

  const whatElseIncluded = [
    { icon: <Fish size={24} />, text: "Use of Snorkeling equipment" },
    { icon: <Waves size={24} />, text: "Pool noodles" },
    { icon: <Users size={24} />, text: "Certified high experienced crew" },
    { icon: <Sun size={24} />, text: "Shaded spots on the yachts" },
    { icon: <Globe size={24} />, text: "Free Wi-Fi" }
  ];

  // Updated exclusions exactly as specified
  const exclusions = [
    { icon: <X size={20} />, text: "Towels" },
    { icon: <X size={20} />, text: "Extra cost for island activities (horse riding, bike tour, island shopping)" }
  ];

  // Updated what to bring exactly as specified
  const whatToBring = [
    { icon: <Shirt size={24} />, item: "Towels", important: true },
    { icon: <Sun size={24} />, item: "Hats" },
    { icon: <Waves size={24} />, item: "Swimwear" },
    { icon: <Navigation size={24} />, item: "Comfortable shoes" },
    { icon: <Sun size={24} />, item: "Sunscreen" },
    { icon: <CreditCard size={24} />, item: "Photo of IDs or Passports (in case they are needed)" }
  ];

  const faqItems = [
    {
      question: "What are the available payment methods?",
      answer: "All payments should be made by credit/debit card for your security and convenience."
    },
    {
      question: "I don't know how to swim. Can I join the cruise?",
      answer: "Yes, absolutely! We have safety equipment and life jackets available. Swimming stops are optional, and you can enjoy the beautiful views from the yacht."
    },
    {
      question: "Do you provide towels?",
      answer: "No, towels are not provided. Please bring your own towels for the swimming stops."
    },
    {
      question: "Are there shaded spots on the yachts?",
      answer: "Yes, our yachts have dedicated shaded areas where you can relax comfortably away from direct sunlight."
    },
    {
      question: "I am allergic to some ingredients. Will I have alternative options for lunch?",
      answer: "Yes, we offer vegan/vegetarian options and can accommodate lactose & gluten-free requirements. Please inform us of your dietary needs when booking."
    },
    {
      question: "What happens if the weather is bad?",
      answer: "Safety is our priority. In case of severe weather, we'll reschedule your cruise or provide a full refund."
    }
  ];

  // Updated important info exactly as specified
  const importantInfo = [
    {
      icon: <Shield size={28} />,
      title: "Accessibility",
      points: [
        "The tour is not accessible for wheelchairs users",
        "Stroller accessible"
      ],
      notAllowed: ["Pets"]
    },
    {
      icon: <CreditCard size={28} />,
      title: "Pre-onboard Process",
      points: [
        "Name/Surname required",
        "Birth Date required", 
        "Passport/ID number required",
        "Nationality required"
      ],
      note: "These details are needed for the passenger lists we are preparing for the port authority and it is part of the law of chartering a yacht. The process is according to identification & safety reasons."
    },
    {
      icon: <Car size={28} />,
      title: "Transfer Option Information",
      points: [
        "Transfer option has an extra cost of 15€/person",
        "Including pick-up in the morning & drop-off in the afternoon",
        "We have specific pick-up points in the centre of Athens",
        "Pick-up details are sent to you 1 day prior to every cruise around 20:00pm",
        "Pick-up times start from 7:30am, depending on the whole schedule",
        "Please, be at the pick-up point 5min earlier than the indicated time",
        "Type of vehicle: car, minivan, bus, taxi"
      ],
      note: "We suggest you having WhatsApp on your phones, so as to be able to contact you directly in case something happens with the pick-ups. You might be given a short (maximum 10min) walking distance pick-up point (from their initial selection)."
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

  const renderTabContent = () => {
    switch(activeTab) {
      case 'itinerary':
        return (
          <div style={styles.timelineContainer}>
            {itineraryItems.map((item, index) => (
              <div 
                key={index} 
                className="fade-in"
                id={`itinerary-${index}`}
                style={{
                  ...styles.timelineItem,
                  opacity: isVisible[`itinerary-${index}`] ? 1 : 0,
                  transform: isVisible[`itinerary-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease ${index * 0.1}s`,
                }}
              >
                <div style={styles.timelineDot}>
                  {item.icon}
                </div>
                {index < itineraryItems.length - 1 && <div style={styles.timelineLine}></div>}
                <div 
                  style={styles.timelineCard}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#003d7a', marginBottom: '0.5rem', fontWeight: '600' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#d4af37', fontWeight: '500', marginBottom: '0.5rem' }}>{item.location}</p>
                      {item.duration && (
                        <span style={{ 
                          background: 'rgba(0, 102, 204, 0.1)', 
                          color: '#0066cc', 
                          padding: '0.25rem 0.75rem', 
                          borderRadius: '20px', 
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}>
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <span style={{ 
                      background: 'linear-gradient(135deg, #d4af37, #f4d03f)', 
                      color: '#1a1a1a', 
                      padding: '0.5rem 1rem', 
                      borderRadius: '20px', 
                      fontWeight: '600',
                      fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)',
                      whiteSpace: 'nowrap'
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.activities.map((activity, i) => (
                      <span key={i} style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        color: '#d4af37',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)',
                        fontWeight: '500'
                      }}>
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'inclusions':
        return (
          <div style={styles.gridLayout}>
            <div 
              className="fade-in"
              id="ticket-includes-card"
              style={{
                ...styles.card,
                opacity: isVisible['ticket-includes-card'] ? 1 : 0,
                transform: isVisible['ticket-includes-card'] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s ease',
              }}
            >
              <div style={styles.iconWrapper}>
                <CheckCircle size={32} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#003d7a', marginBottom: '1.5rem' }}>Ticket Includes</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {ticketIncludes.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: '#0066cc' }}>{item.icon}</div>
                    <span style={{ color: '#4b5563', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="fade-in"
              id="what-else-included-card"
              style={{
                ...styles.card,
                opacity: isVisible['what-else-included-card'] ? 1 : 0,
                transform: isVisible['what-else-included-card'] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s ease 0.2s',
              }}
            >
              <div style={styles.iconWrapper}>
                <Sparkles size={32} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#003d7a', marginBottom: '1.5rem' }}>What Else is Included</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {whatElseIncluded.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: '#0066cc' }}>{item.icon}</div>
                    <span style={{ color: '#4b5563', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="fade-in"
              id="exclusions-card"
              style={{
                ...styles.card,
                opacity: isVisible['exclusions-card'] ? 1 : 0,
                transform: isVisible['exclusions-card'] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s ease 0.4s',
              }}
            >
              <div style={styles.iconWrapper}>
                <X size={32} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#003d7a', marginBottom: '1.5rem' }}>What's Not Included</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {exclusions.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: '#ef4444' }}>{item.icon}</div>
                    <span style={{ color: '#4b5563', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'prepare':
        return (
          <div style={styles.gridLayout}>
            <div 
              className="fade-in"
              id="bring-card"
              style={{
                ...styles.card,
                opacity: isVisible['bring-card'] ? 1 : 0,
                transform: isVisible['bring-card'] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 1s ease',
              }}
            >
              <div style={styles.iconWrapper}>
                <ShoppingBag size={32} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#003d7a', marginBottom: '1.5rem' }}>What You Should Bring With</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {whatToBring.map((item, index) => (
                  <div key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    padding: '0.75rem',
                    background: item.important ? 'rgba(212, 175, 55, 0.1)' : 'rgba(0, 102, 204, 0.05)',
                    borderRadius: '12px',
                    border: item.important ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(0, 102, 204, 0.1)'
                  }}>
                    <div style={{ color: item.important ? '#d4af37' : '#0066cc' }}>{item.icon}</div>
                    <span style={{ color: '#4b5563', fontWeight: item.important ? '600' : '400', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>{item.item}</span>
                    {item.important && <span style={{ color: '#d4af37', fontSize: '0.8rem' }}>Essential</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`faq-${index}`}
                style={{
                  ...styles.faqItem,
                  opacity: isVisible[`faq-${index}`] ? 1 : 0,
                  transform: isVisible[`faq-${index}`] ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 1s ease ${index * 0.1}s`,
                }}
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0, 61, 122, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 61, 122, 0.1)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ color: '#003d7a', marginBottom: '0', fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: '600' }}>
                    {item.question}
                  </h4>
                  <ChevronDown 
                    size={20} 
                    color="#0066cc"
                    style={{
                      transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                {activeFaq === index && (
                  <p style={{ 
                    color: '#6b7280', 
                    margin: '1rem 0 0 0', 
                    lineHeight: '1.6',
                    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                    animation: 'fadeIn 0.3s ease'
                  }}>
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.container}>
        {/* Hero Section */}
        <section style={styles.heroSection} className="hero-section">
          <div style={styles.heroBackground}></div>
          <div style={styles.heroOverlay}></div>
          
          <div style={styles.heroContent} className="hero-content">
           
            <h1 style={styles.heroTitle}>Daily 3 Islands Cruise</h1>
            <p style={styles.heroDescription}>
              Escape from Athens and visit the islands of Agistri and Aegina on this boat tour. 
              Feel the wind in your hair as you sail and stop to swim off the Coast of Moni Island. 
             
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
                <Clock size={24} />
                <span>10 Hours</span>
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
                <span>Max 49 People</span>
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
                <Calendar size={24} />
                <span>All Ages</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} fill="#d4af37" color="#d4af37" />
                ))}
              </div>
              <span style={{ fontSize: 'clamp(1rem, 2vw, 1.1rem)', fontWeight: '600' }}>4.9/5</span>
              <span style={{ opacity: 0.8 }}>(500+ reviews)</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <div style={{
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(30px)',
                borderRadius: '28px',
                padding: '2rem',
                boxShadow: '0 25px 80px rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255,255,255,0.3)',
                textAlign: 'center',
                minWidth: '280px',
              }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', color: '#003d7a', marginBottom: '0.5rem' }}>
                  From €150
                </div>
                <div style={{ color: '#6b7280', marginBottom: '1.5rem' }}>per person</div>
                
                <button 
                  style={{
                    ...styles.ctaButton,
                    width: '100%',
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    padding: 'clamp(1rem, 2vw, 1.2rem) clamp(2rem, 4vw, 3rem)',
                  }}
                  className="booking-button"
                  onClick={() => setShowBookingModal(true)}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 60px rgba(212, 175, 55, 0.6)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
                  }}
                >
                  <Sparkles size={24} />
                  Book Your Adventure
                  <ArrowRight size={24} />
                </button>
                
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(0, 102, 204, 0.1)', borderRadius: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', justifyContent: 'center' }}>
                    <CheckCircle size={18} color="#0066cc" />
                    <span style={{ color: '#0066cc', fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', fontWeight: '600' }}>Free cancellation up to 24h</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                    <CheckCircle size={18} color="#0066cc" />
                    <span style={{ color: '#0066cc', fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', fontWeight: '600' }}>Instant confirmation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Description Section */}
        <section style={{ ...styles.section, background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)' }}>
          <FloatingElements count={15} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Your Greek Island Adventure</h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: '1.8', color: '#4b5563' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Step aboard a wooden sailing yacht and be greeted with welcome coffee, juice, water, tea, salty and sweet bites. 
              Set sail to the island of Agistri where you can explore the island's beaches and lush greenery with an hour of free time. 
              Have the option to rent a bike to see more in less time.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Anchor in Moni or Metopi where you can go refreshing swim in turquoise waters or make use of the provided snorkeling gear. 
              Work up an appetite and dig into a full Greek buffet with fresh ingredients, and local delicacies prepared by our professional chef. 
              Eat while soaking in the island atmosphere.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Continue your journey to the island of Aegina which is famous for its pistachio nuts and ancient ruins. 
              Spend some free time exploring the picturesque town of Aegina or take a horse-drawn carriage ride around the island.
            </p>
            <p>
              As the sun begins to set, embark on the return journey back to the port. 
              Relax on deck, enjoy the sea breeze, and take in the beautiful views of the Saronic Gulf.
            </p>
          </div>
        </section>

        {/* Itinerary Section */}
        <section style={{ ...styles.section, ...styles.itinerarySection }}>
          <FloatingElements count={15} color="rgba(212, 175, 55, 0.1)" />
          
          <h2 style={styles.sectionTitle}>Itinerary & Schedule</h2>
          <p style={styles.sectionSubtitle}>
            Your complete journey through the beautiful Saronic Gulf
          </p>
          
          <div style={styles.tabNavigation} className="tab-nav">
            {[
              { id: 'itinerary', label: 'Itinerary', icon: <Clock size={18} /> },
              { id: 'inclusions', label: 'Inclusions', icon: <CheckCircle size={18} /> },
              { id: 'prepare', label: 'Prepare', icon: <ShoppingBag size={18} /> },
              { id: 'faq', label: 'FAQ', icon: <Info size={18} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                style={{
                  ...styles.tab,
                  ...(activeTab === tab.id ? styles.activeTab : {}),
                }}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={e => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = 'rgba(0, 102, 204, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseLeave={e => {
                  if (activeTab !== tab.id) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {renderTabContent()}
        </section>

        {/* Important Information Section */}
        <section style={{ ...styles.section, ...styles.importantInfoSection }}>
          <FloatingElements count={12} color="rgba(0, 102, 204, 0.08)" />
          
          <h2 style={styles.sectionTitle}>Important Information</h2>
          <p style={styles.sectionSubtitle}>
            Everything you need to know before your cruise
          </p>
          
          <div style={styles.gridLayout}>
            {importantInfo.map((info, index) => (
              <div 
                key={index}
                className="fade-in"
                id={`info-${index}`}
                style={{
                  ...styles.card,
                  opacity: isVisible[`info-${index}`] ? 1 : 0,
                  transform: isVisible[`info-${index}`] ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 1s ease ${index * 0.2}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                }}
              >
                <div style={styles.iconWrapper}>
                  {React.cloneElement(info.icon, { color: '#ffffff' })}
                </div>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: '#003d7a', marginBottom: '1.5rem' }}>
                  {info.title}
                </h3>
                
                {info.title === "Accessibility" ? (
                  <>
                    <div style={{ marginBottom: '1rem' }}>
                      <h4 style={{ color: '#0066cc', marginBottom: '0.5rem', fontSize: '1rem' }}>Accessibility:</h4>
                      <ul style={{ color: '#4b5563', lineHeight: '1.7', paddingLeft: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                        {info.points.map((point, i) => (
                          <li key={i} style={{ marginBottom: '0.5rem' }}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 style={{ color: '#ef4444', marginBottom: '0.5rem', fontSize: '1rem' }}>Not allowed:</h4>
                      <ul style={{ color: '#4b5563', lineHeight: '1.7', paddingLeft: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)' }}>
                        {info.notAllowed.map((item, i) => (
                          <li key={i} style={{ marginBottom: '0.5rem' }}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <ul style={{ color: '#4b5563', lineHeight: '1.7', paddingLeft: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1rem)', marginBottom: '1rem' }}>
                    {info.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: '0.5rem' }}>• {point}</li>
                    ))}
                  </ul>
                )}
                
                {info.note && (
                  <div style={{ 
                    background: 'rgba(212, 175, 55, 0.1)', 
                    padding: '1rem', 
                    borderRadius: '12px',
                    border: '1px solid rgba(212, 175, 55, 0.2)',
                    marginTop: '1rem'
                  }}>
                    <p style={{ color: '#d4af37', fontSize: 'clamp(0.8rem, 1.8vw, 0.9rem)', margin: 0, fontWeight: '500' }}>
                      {info.note}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ ...styles.section, ...styles.ctaSection }}>
          <FloatingElements count={15} color="rgba(255, 255, 255, 0.1)" />
          
          <h2 style={{ ...styles.sectionTitle, color: '#ffffff' }}>
            Ready for an Unforgettable Adventure?
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
              onClick={() => setShowBookingModal(true)}
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
              Book Your Cruise Today
            </button>
            <a 
              href="tel:+306984922197"
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
              <Phone size={20} />
              Call Now
            </a>
          </div>
          
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={20} />
              <span>+30 6984922197</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} />
              <span>info@saronicdreamcruise.com</span>
            </div>
          </div>
        </section>

        {/* Booking Modal */}
        {showBookingModal && (
          <div style={styles.modal} onClick={() => setShowBookingModal(false)}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button 
                style={styles.closeButton}
                onClick={() => setShowBookingModal(false)}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <X size={20} color="#1a1a1a" />
              </button>
              
              <div style={{ textAlign: 'center' }}>
                <Ship size={48} color="#0066cc" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.8rem', color: '#003d7a', marginBottom: '1rem' }}>
                  Book Your Cruise
                </h3>
                <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
                  Contact us to reserve your spot on our Daily 3 Islands Cruise
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a 
                    href="tel:+306984922197"
                    style={{
                      ...styles.ctaButton,
                      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
                      color: '#ffffff',
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    <Phone size={20} /> Call +30 6984922197
                  </a>
                  <a 
                    href="mailto:info@saronicdreamcruise.com"
                    style={{
                      ...styles.ctaButton,
                      width: '100%',
                      justifyContent: 'center'
                    }}
                  >
                    <Mail size={20} /> Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CruiseDetailsPage;