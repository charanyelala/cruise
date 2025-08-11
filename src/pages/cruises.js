import React, { useState, useEffect } from 'react';
import { 
  Clock, Users, Calendar, Star, MapPin, Ship, Waves,
  CheckCircle, X, Info, Camera, Heart, Anchor, 
  ArrowRight, Coffee, Utensils, Fish, Car,
  AlertCircle, Phone, Mail, CreditCard, Globe,
  Mountain, TreePine, Sun, Wind, Navigation,
  Timer, Eye, Bike, ShoppingBag, Sparkles, Shirt
} from 'lucide-react';

const CruiseDetailsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('itinerary');
  const [showBookingModal, setShowBookingModal] = useState(false);

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
      padding: '4rem 2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    heroContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: '3rem',
      alignItems: 'center',
    },
    heroInfo: {
      zIndex: 2,
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: '700',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #ffffff 0%, #e6f3ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 2px 20px rgba(0,0,0,0.1)',
    },
    heroDescription: {
      fontSize: '1.2rem',
      lineHeight: '1.8',
      marginBottom: '2rem',
      color: 'rgba(255,255,255,0.9)',
    },
    heroStats: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '2rem',
      flexWrap: 'wrap',
    },
    statItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: 'rgba(255,255,255,0.1)',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      border: '1px solid rgba(255,255,255,0.2)',
    },
    heroBookingCard: {
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '2rem',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255,255,255,0.3)',
      zIndex: 2,
    },
    section: {
      padding: '4rem 2rem',
      position: 'relative',
    },
    sectionAlt: {
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafb 100%)',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '1rem',
      color: '#003d7a',
      background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    tabNavigation: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap',
    },
    tab: {
      padding: '1rem 2rem',
      borderRadius: '50px',
      border: '2px solid rgba(0, 102, 204, 0.2)',
      background: 'rgba(255,255,255,0.8)',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      fontSize: '1rem',
      fontWeight: '600',
    },
    activeTab: {
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      color: 'white',
      border: '2px solid transparent',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 30px rgba(0, 102, 204, 0.3)',
    },
    itineraryTimeline: {
      position: 'relative',
      paddingLeft: '2rem',
    },
    timelineItem: {
      position: 'relative',
      paddingBottom: '3rem',
      paddingLeft: '3rem',
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
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.4s ease',
    },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    card: {
      background: 'rgba(255,255,255,0.9)',
      backdropFilter: 'blur(20px)',
      borderRadius: '24px',
      padding: '2rem',
      boxShadow: '0 15px 40px rgba(0, 61, 122, 0.1)',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      transition: 'all 0.4s ease',
    },
    iconWrapper: {
      width: '60px',
      height: '60px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, #0066cc, #003d7a)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
      boxShadow: '0 10px 25px rgba(0, 102, 204, 0.3)',
    },
    faqItem: {
      background: 'rgba(255,255,255,0.9)',
      borderRadius: '16px',
      padding: '1.5rem',
      marginBottom: '1rem',
      border: '1px solid rgba(0, 102, 204, 0.1)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    bookingButton: {
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
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      width: '100%',
      justifyContent: 'center',
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

  const itineraryItems = [
    {
      time: "8:45 AM",
      title: "Meeting Time",
      location: "Marina Zeas",
      description: "Yacht's location with 10min safety briefing",
      icon: <MapPin size={16} color="#1a1a1a" />,
      activities: ["Safety briefing", "Welcome aboard"]
    },
    {
      time: "9:00 AM - 11:15 AM",
      title: "Saronic Gulf",
      location: "Open Waters",
      description: "Sightseeing, Sailing, Breakfast & Welcome refreshments",
      duration: "2 hours",
      icon: <Ship size={16} color="#1a1a1a" />,
      activities: ["Sightseeing", "Sailing", "Breakfast", "Coffee", "Welcome refreshments"]
    },
    {
      time: "11:15 AM - 12:45 PM",
      title: "Agistri Island",
      location: "First Island Stop",
      description: "Free time to explore beaches and lush greenery",
      duration: "1h 30min",
      icon: <TreePine size={16} color="#1a1a1a" />,
      activities: ["Shopping", "Free time", "Bike tour", "Walk", "Sightseeing", "Photo stop"]
    },
    {
      time: "1:00 PM - 1:40 PM",
      title: "Moni or Metopi",
      location: "Swimming Stop",
      description: "Swimming in turquoise waters & lunch onboard",
      duration: "45min",
      icon: <Waves size={16} color="#1a1a1a" />,
      activities: ["Swimming stop", "Snorkeling", "Lunch & drinks"]
    },
    {
      time: "2:15 PM - 4:00 PM",
      title: "Aegina Island",
      location: "Historic Island",
      description: "Famous for pistachio nuts and ancient ruins",
      duration: "1h 30min",
      icon: <Mountain size={16} color="#1a1a1a" />,
      activities: ["Horse riding", "Photo stop", "Shopping", "Pistachio market", "Temple of Apollo"]
    },
    {
      time: "4:00 PM - 6:30 PM",
      title: "Return Journey",
      location: "Saronic Gulf",
      description: "Relaxing sail back with beautiful sunset views",
      duration: "2h 30min",
      icon: <Sun size={16} color="#1a1a1a" />,
      activities: ["Sailing", "Sunset views", "Relaxation"]
    },
    {
      time: "6:30 PM",
      title: "Arrival",
      location: "Marina Zeas",
      description: "Safe return to meeting point",
      icon: <Anchor size={16} color="#1a1a1a" />,
      activities: ["Disembarkation"]
    }
  ];

  const inclusions = [
    { icon: <Coffee size={20} />, text: "Breakfast & refreshments (coffee, tea, orange juice)" },
    { icon: <Utensils size={20} />, text: "Full Greek buffet lunch with vegan/vegetarian options" },
    { icon: <Waves size={20} />, text: "Unlimited white wine, beers & refreshments" },
    { icon: <Fish size={20} />, text: "Use of snorkeling equipment & pool noodles" },
    { icon: <Users size={20} />, text: "Certified high experienced crew" },
    { icon: <Sun size={20} />, text: "Shaded spots on the yachts" },
    { icon: <Globe size={20} />, text: "Free Wi-Fi onboard" }
  ];

  const exclusions = [
    "Towels (please bring your own)",
    "Extra cost for island activities (horse riding, bike tour)",
    "Island shopping expenses",
    "Personal expenses"
  ];

  const whatToBring = [
    { icon: <Shirt size={20} />, item: "Towels", important: true },
    { icon: <Sun size={20} />, item: "Hats & Sunscreen" },
    { icon: <Waves size={20} />, item: "Swimwear" },
    { icon: <Navigation size={20} />, item: "Comfortable shoes" },
    { icon: <CreditCard size={20} />, item: "Photo of IDs or Passports" }
  ];

  const faqItems = [
    {
      question: "What are the available payment methods?",
      answer: "All payments should be made by credit/debit card."
    },
    {
      question: "I don't know how to swim. Can I join the cruise?",
      answer: "Yes, you can join! We have safety equipment and life jackets available. Swimming stops are optional."
    },
    {
      question: "Do you provide towels?",
      answer: "No, towels are not provided. Please bring your own towels."
    },
    {
      question: "Are there shaded spots on the yachts?",
      answer: "Yes, our yachts have dedicated shaded areas where you can relax comfortably."
    },
    {
      question: "I am allergic to some ingredients. Will I have alternative options for lunch?",
      answer: "Yes, we offer vegan/vegetarian options and can accommodate lactose & gluten-free requirements."
    }
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'itinerary':
        return (
          <div style={styles.itineraryTimeline}>
            {itineraryItems.map((item, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.timelineDot}>
                  {item.icon}
                </div>
                {index < itineraryItems.length - 1 && <div style={styles.timelineLine}></div>}
                <div 
                  style={styles.timelineCard}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 25px 60px rgba(0, 61, 122, 0.15)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 61, 122, 0.1)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.5rem', color: '#003d7a', marginBottom: '0.5rem', fontWeight: '600' }}>
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
                      fontSize: '0.9rem'
                    }}>
                      {item.time}
                    </span>
                  </div>
                  <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {item.activities.map((activity, i) => (
                      <span key={i} style={{
                        background: 'rgba(212, 175, 55, 0.1)',
                        color: '#d4af37',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '15px',
                        fontSize: '0.8rem',
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
            <div style={styles.card}>
              <div style={styles.iconWrapper}>
                <CheckCircle size={28} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#003d7a', marginBottom: '1.5rem' }}>What's Included</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {inclusions.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: '#0066cc' }}>{item.icon}</div>
                    <span style={{ color: '#4b5563' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.iconWrapper}>
                <X size={28} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#003d7a', marginBottom: '1.5rem' }}>Not Included</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {exclusions.map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: '#ef4444' }}><X size={20} /></div>
                    <span style={{ color: '#4b5563' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'prepare':
        return (
          <div style={styles.gridLayout}>
            <div style={styles.card}>
              <div style={styles.iconWrapper}>
                <ShoppingBag size={28} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#003d7a', marginBottom: '1.5rem' }}>What to Bring</h3>
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
                    <span style={{ color: '#4b5563', fontWeight: item.important ? '600' : '400' }}>{item.item}</span>
                    {item.important && <span style={{ color: '#d4af37', fontSize: '0.8rem' }}>Essential</span>}
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.card}>
              <div style={styles.iconWrapper}>
                <Car size={28} color="#ffffff" />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#003d7a', marginBottom: '1.5rem' }}>Transfer Option</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
                  padding: '1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(212, 175, 55, 0.2)',
                  marginBottom: '1rem'
                }}>
                  <span style={{ color: '#d4af37', fontSize: '1.2rem', fontWeight: '600' }}>+15€/person</span>
                </div>
                <ul style={{ color: '#4b5563', lineHeight: '1.7', paddingLeft: '1rem' }}>
                  <li>Pick-up in the morning & drop-off in the afternoon</li>
                  <li>Specific pick-up points in central Athens</li>
                  <li>Pick-up details sent 1 day prior around 8:00 PM</li>
                  <li>Pick-up times start from 7:30 AM</li>
                  <li>Be at pick-up point 5 minutes early</li>
                </ul>
              </div>
              <div style={{ 
                background: 'rgba(0, 102, 204, 0.1)', 
                padding: '1rem', 
                borderRadius: '12px',
                border: '1px solid rgba(0, 102, 204, 0.2)'
              }}>
                <p style={{ color: '#0066cc', fontSize: '0.9rem', margin: 0 }}>
                  💡 We suggest having WhatsApp for direct communication about pick-ups
                </p>
              </div>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqItems.map((item, index) => (
              <div key={index} style={styles.faqItem}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 61, 122, 0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h4 style={{ color: '#003d7a', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                  {item.question}
                </h4>
                <p style={{ color: '#6b7280', margin: 0, lineHeight: '1.6' }}>
                  {item.answer}
                </p>
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
        {/* Floating background elements */}
        <div style={{...styles.floatingIcon, top: '10%', left: '5%'}}>
          <Ship size={100} color="#0066cc" />
        </div>
        <div style={{...styles.floatingIcon, top: '30%', right: '10%', animationDelay: '2s'}}>
          <Waves size={80} color="#d4af37" />
        </div>

        {/* Hero Section */}
        <section style={styles.heroSection}>
          <div style={styles.heroContent}>
            <div style={styles.heroInfo}>
              <h1 style={styles.heroTitle}>Daily 3 Islands Cruise</h1>
              <p style={styles.heroDescription}>
                All inclusive 3 islands cruise (Agistri-Moni/Metopi-Aegina) with breakfast, 
                lunch, drinks and optional transfer included. Escape from Athens and discover 
                the beauty of the Saronic Gulf.
              </p>
              <div style={styles.heroStats}>
                <div style={styles.statItem}>
                  <Clock size={20} />
                  <span>10 Hours</span>
                </div>
                <div style={styles.statItem}>
                  <Users size={20} />
                  <span>Max 49 People</span>
                </div>
                <div style={styles.statItem}>
                  <Calendar size={20} />
                  <span>Age 0+</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#d4af37" color="#d4af37" />
                  ))}
                  <span style={{ marginLeft: '0.5rem' }}>4.9/5 (500+ reviews)</span>
                </div>
              </div>
            </div>
            
            <div style={styles.heroBookingCard}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '700', color: '#003d7a', marginBottom: '0.5rem' }}>
                  From €150
                </div>
                <div style={{ color: '#6b7280' }}>per person</div>
              </div>
              
              <button 
                style={styles.bookingButton}
                onClick={() => setShowBookingModal(true)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
                }}
              >
                Book Now <ArrowRight size={20} />
              </button>
              
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(0, 102, 204, 0.1)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={16} color="#0066cc" />
                  <span style={{ color: '#0066cc', fontSize: '0.9rem', fontWeight: '500' }}>Free cancellation up to 24h</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={16} color="#0066cc" />
                  <span style={{ color: '#0066cc', fontSize: '0.9rem', fontWeight: '500' }}>Instant confirmation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Cruise Details</h2>
            
            <div style={styles.tabNavigation}>
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

            <div className="fade-in" id="tab-content">
              {renderTabContent()}
            </div>
          </div>
        </section>

        {/* Important Information Section */}
        <section style={{...styles.section, ...styles.sectionAlt}}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Important Information</h2>
            
            <div style={styles.gridLayout}>
              <div style={styles.card}>
                <div style={styles.iconWrapper}>
                  <AlertCircle size={28} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#003d7a', marginBottom: '1.5rem' }}>Accessibility</h3>
                <ul style={{ color: '#4b5563', lineHeight: '1.7', paddingLeft: '1rem' }}>
                  <li>❌ Not accessible for wheelchair users</li>
                  <li>✅ Stroller accessible</li>
                  <li>❌ Pets not allowed</li>
                </ul>
              </div>

              <div style={styles.card}>
                <div style={styles.iconWrapper}>
                  <CreditCard size={28} color="#ffffff" />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: '#003d7a', marginBottom: '1.5rem' }}>Pre-boarding Requirements</h3>
                <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '1rem' }}>
                  Please provide: Name/Surname, Birth Date, Passport/ID number, Nationality
                </p>
                <div style={{ 
                  background: 'rgba(212, 175, 55, 0.1)', 
                  padding: '1rem', 
                  borderRadius: '12px',
                  border: '1px solid rgba(212, 175, 55, 0.2)'
                }}>
                  <p style={{ color: '#d4af37', fontSize: '0.9rem', margin: 0, fontWeight: '500' }}>
                    Required for port authority passenger lists and safety regulations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={styles.section}>
          <div style={styles.container}>
            <div style={{
              background: 'linear-gradient(135deg, #003d7a 0%, #0066cc 100%)',
              borderRadius: '32px',
              padding: '4rem 2rem',
              textAlign: 'center',
              color: '#ffffff',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem' }}>
                Ready for an Unforgettable Adventure?
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
                Join us for the ultimate 3-island cruise experience in the beautiful Saronic Gulf
              </p>
              <button 
                style={{
                  ...styles.bookingButton,
                  fontSize: '1.2rem',
                  padding: '1.25rem 3rem',
                  maxWidth: '400px'
                }}
                onClick={() => setShowBookingModal(true)}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(212, 175, 55, 0.5)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(212, 175, 55, 0.4)';
                }}
              >
                Book Your Cruise Today <Sparkles size={24} />
              </button>
              
              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={20} />
                  <span>+30 6984922197</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={20} />
                  <span>info@CruiseInAthens.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Modal */}
        {showBookingModal && (
          <div style={{
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
            padding: '2rem'
          }}>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '3rem',
              maxWidth: '500px',
              width: '100%',
              textAlign: 'center',
              position: 'relative'
            }}>
              <button 
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0, 102, 204, 0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  cursor: 'pointer'
                }}
                onClick={() => setShowBookingModal(false)}
              >
                <X size={20} color="#0066cc" />
              </button>
              
              <div style={{ marginBottom: '2rem' }}>
                <Ship size={48} color="#0066cc" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.8rem', color: '#003d7a', marginBottom: '1rem' }}>
                  Book Your Cruise
                </h3>
                <p style={{ color: '#6b7280' }}>
                  Contact us to reserve your spot on our Daily 3 Islands Cruise
                </p>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a 
                  href="tel:+306984922197"
                  style={{
                    ...styles.bookingButton,
                    textDecoration: 'none',
                    backgroundColor: '#0066cc',
                    background: 'linear-gradient(135deg, #0066cc, #003d7a)'
                  }}
                >
                  <Phone size={20} /> Call +30 6984922197
                </a>
                <a 
                  href="mailto:info@CruiseInAthens.com"
                  style={{
                    ...styles.bookingButton,
                    textDecoration: 'none'
                  }}
                >
                  <Mail size={20} /> Email Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CruiseDetailsPage;