import React, { useEffect, useState } from 'react';
import {
  Star, Shield, Clock, Users, Check, ChevronDown,
  Phone, Mail, MapPin, Anchor, Waves, Award, Calendar
} from 'lucide-react';

const BOKUN_WIDGET_ID = 'bokun_83425495_0f98_4346_9c9c_aa3f202c749a';
const BOKUN_DATA_SRC =
  'https://widgets.bokun.io/online-sales/ba24b927-5d92-47f0-a17f-000c0df7085d/experience/1225922?partialView=1';
const BOKUN_SCRIPT_SRC =
  'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=ba24b927-5d92-47f0-a17f-000c0df7085d';

const highlights = [
  { icon: <Clock size={22} />, label: 'Full Day Experience', sub: '9 AM – 7 PM' },
  { icon: <Users size={22} />, label: 'Small Groups', sub: 'Max 20 guests' },
  { icon: <Award size={22} />, label: 'Top Rated', sub: '5★ on TripAdvisor' },
  { icon: <Shield size={22} />, label: 'Free Cancellation', sub: 'Up to 24 hrs prior' },
];

const included = [
  'Professional licensed skipper & crew',
  'Stop at Aegina, Poros & Hydra islands',
  'Swimming & snorkelling stops',
  'Onboard sun deck & shade areas',
  'Complimentary welcome drink',
  'Fishing gear available on request',
  'Life jackets & safety equipment',
  'Hotel pick-up & drop-off (Athens area)',
];

const faqs = [
  {
    q: 'What time does the cruise depart?',
    a: 'The boat departs from Marina Zeas, Piraeus at 9:00 AM sharp. We recommend arriving 15 minutes early.',
  },
  {
    q: 'What should I bring?',
    a: 'Sunscreen, a hat, a towel, swimwear, and comfortable non-marking shoes. Light snacks and drinks are welcome aboard.',
  },
  {
    q: 'Is the cruise suitable for children?',
    a: 'Absolutely! The cruise is family-friendly. Children under 3 travel free; ages 3–12 receive a 50% discount.',
  },
  {
    q: 'What happens if the weather is bad?',
    a: 'Safety is our priority. If conditions make sailing unsafe we will contact you at least 12 hours in advance and offer a full refund or rescheduling.',
  },
  {
    q: 'Is food included?',
    a: 'The ticket includes a welcome drink. Each island has excellent tavernas for lunch – we allow ample time to explore and dine ashore.',
  },
];

const BookingPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [widgetReady, setWidgetReady] = useState(false);

  // Load Bokun script once, then trigger initialisation
  useEffect(() => {
    if (document.getElementById('bokun-script')) {
      setWidgetReady(true);
      return;
    }
    const script = document.createElement('script');
    script.id = 'bokun-script';
    script.src = BOKUN_SCRIPT_SRC;
    script.async = true;
    script.onload = () => setWidgetReady(true);
    document.head.appendChild(script);
  }, []);

  // Enable the button once the script is ready so Bokun picks it up
  useEffect(() => {
    if (!widgetReady) return;
    const btn = document.getElementById(BOKUN_WIDGET_ID);
    if (btn) btn.removeAttribute('disabled');
  }, [widgetReady]);

  return (
    <>
      <style>{`
        .booking-page { font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif; background: #f0f4f8; }

        /* ── Hero ── */
        .bk-hero {
          position: relative;
          min-height: 52vh;
          display: flex;
          align-items: flex-end;
          background:
            linear-gradient(180deg, rgba(0,14,30,0.55) 0%, rgba(0,30,60,0.82) 100%),
            url('https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1800&q=80') center/cover no-repeat;
          padding: 0 1.5rem 3.5rem;
          overflow: hidden;
        }
        .bk-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, #f0f4f8);
        }
        .bk-hero-inner {
          max-width: 900px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .bk-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212,175,55,0.15);
          border: 1px solid rgba(212,175,55,0.4);
          color: #f4d03f;
          padding: 0.35rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
        }
        .bk-hero h1 {
          font-size: clamp(1.9rem, 4vw, 3.2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 1rem;
          letter-spacing: -0.5px;
        }
        .bk-hero h1 span { color: #f4d03f; }
        .bk-hero-sub {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.82);
          max-width: 540px;
          margin: 0 auto 1.5rem;
          line-height: 1.6;
        }
        .bk-stars {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
        }

        /* ── Highlights strip ── */
        .bk-highlights {
          background: #001e3c;
          padding: 1.5rem 1.5rem;
        }
        .bk-highlights-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        @media(max-width: 768px) {
          .bk-highlights-inner { grid-template-columns: repeat(2, 1fr); }
        }
        @media(max-width: 420px) {
          .bk-highlights-inner { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        }
        .bk-hl-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(212,175,55,0.15);
          border-radius: 12px;
          padding: 0.9rem 1rem;
          transition: background 0.2s;
        }
        .bk-hl-item:hover { background: rgba(212,175,55,0.08); }
        .bk-hl-icon { color: #d4af37; flex-shrink: 0; }
        .bk-hl-label { color: #ffffff; font-size: 0.88rem; font-weight: 600; line-height: 1.2; }
        .bk-hl-sub { color: rgba(255,255,255,0.55); font-size: 0.78rem; margin-top: 0.15rem; }

        /* ── Main layout ── */
        .bk-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1.5rem 5rem;
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 2.5rem;
          align-items: start;
        }
        @media(max-width: 960px) {
          .bk-main { grid-template-columns: 1fr; }
        }

        /* ── Widget card ── */
        .bk-widget-card {
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(0,30,60,0.12);
          overflow: hidden;
          position: sticky;
          top: 100px;
        }
        .bk-widget-header {
          background: linear-gradient(135deg, #001e3c, #003d7a);
          padding: 1.5rem 1.75rem;
          text-align: center;
        }
        .bk-widget-title {
          color: #ffffff;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .bk-widget-price {
          color: #f4d03f;
          font-size: 0.85rem;
          opacity: 0.9;
        }
        .bk-widget-body {
          padding: 1.75rem;
        }

        /* Bokun button override – match site brand */
        #${BOKUN_WIDGET_ID} {
          display: block !important;
          width: 100%;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #d4af37, #f4d03f) !important;
          color: #001e3c !important;
          border: none;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(212,175,55,0.35);
          letter-spacing: 0.3px;
        }
        #${BOKUN_WIDGET_ID}:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(212,175,55,0.45);
        }
        #${BOKUN_WIDGET_ID}:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .bk-widget-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          color: #5a7a8a;
          font-size: 0.78rem;
          margin-top: 1rem;
          text-align: center;
        }
        .bk-widget-divider {
          border: none;
          border-top: 1px solid #e8eef4;
          margin: 1.25rem 0;
        }
        .bk-contact-links { display: flex; flex-direction: column; gap: 0.6rem; }
        .bk-contact-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          color: #004080;
          font-size: 0.85rem;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .bk-contact-link:hover { color: #d4af37; }
        .bk-contact-icon { color: #d4af37; flex-shrink: 0; }

        /* ── Left column ── */
        .bk-section { margin-bottom: 2.5rem; }
        .bk-section-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #001e3c;
          margin-bottom: 1.25rem;
          padding-bottom: 0.6rem;
          border-bottom: 2px solid #e8eef4;
          position: relative;
        }
        .bk-section-title::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 40px; height: 2px;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          border-radius: 2px;
        }

        /* Included list */
        .bk-included {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.7rem;
        }
        @media(max-width: 540px) { .bk-included { grid-template-columns: 1fr; } }
        .bk-inc-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.9rem;
          color: #2c4a5a;
          line-height: 1.4;
        }
        .bk-check-icon {
          color: #2e9e5a;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* FAQ */
        .bk-faq-item {
          border: 1px solid #dde7f0;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 0.75rem;
          transition: box-shadow 0.2s;
        }
        .bk-faq-item.open { box-shadow: 0 4px 16px rgba(0,30,60,0.08); }
        .bk-faq-q {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          cursor: pointer;
          background: #ffffff;
          font-size: 0.95rem;
          font-weight: 600;
          color: #001e3c;
          gap: 1rem;
          border: none;
          width: 100%;
          text-align: left;
          transition: background 0.2s;
        }
        .bk-faq-q:hover { background: #f5f8fb; }
        .bk-faq-icon { color: #d4af37; flex-shrink: 0; transition: transform 0.25s; }
        .bk-faq-icon.rotated { transform: rotate(180deg); }
        .bk-faq-a {
          padding: 0 1.25rem;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.2s ease;
          font-size: 0.9rem;
          color: #4a6a7a;
          line-height: 1.65;
          background: #fafcfe;
        }
        .bk-faq-a.open { max-height: 200px; padding: 0.75rem 1.25rem 1.1rem; }

        /* Bottom CTA banner */
        .bk-cta-banner {
          background: linear-gradient(135deg, #001e3c 0%, #003d7a 60%, #004f9e 100%);
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .bk-cta-banner::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: rgba(212,175,55,0.08);
        }
        .bk-cta-banner h3 {
          color: #ffffff;
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .bk-cta-banner p {
          color: rgba(255,255,255,0.72);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }
        .bk-cta-tel {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          color: #001e3c;
          padding: 0.85rem 2rem;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(212,175,55,0.35);
        }
        .bk-cta-tel:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(212,175,55,0.45);
        }
      `}</style>

      <div className="booking-page">
        {/* ── Hero ── */}
        <div className="bk-hero">
          <div className="bk-hero-inner">
            <div className="bk-eyebrow">
              <Anchor size={13} /> 3 Islands Cruise · Athens, Greece
            </div>
            <h1>Book Your <span>Saronic Dream</span> Cruise</h1>
            <p className="bk-hero-sub">
              Sail the Saronic Gulf — Aegina, Poros & Hydra in one unforgettable full-day voyage.
            </p>
            <div className="bk-stars">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} fill="#f4d03f" color="#f4d03f" />
              ))}
              <span style={{ marginLeft: '0.4rem' }}>5.0 · 200+ reviews</span>
            </div>
          </div>
        </div>

        {/* ── Highlights strip ── */}
        <div className="bk-highlights">
          <div className="bk-highlights-inner">
            {highlights.map((h, i) => (
              <div className="bk-hl-item" key={i}>
                <span className="bk-hl-icon">{h.icon}</span>
                <div>
                  <div className="bk-hl-label">{h.label}</div>
                  <div className="bk-hl-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main two-column layout ── */}
        <div className="bk-main">

          {/* Left – info column */}
          <div>
            {/* What's included */}
            <div className="bk-section">
              <h2 className="bk-section-title">What's Included</h2>
              <div className="bk-included">
                {included.map((item, i) => (
                  <div className="bk-inc-item" key={i}>
                    <Check className="bk-check-icon" size={16} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary overview */}
            <div className="bk-section">
              <h2 className="bk-section-title">Your Day at a Glance</h2>
              {[
                { time: '09:00', text: 'Departure from Marina Zeas, Piraeus' },
                { time: '10:30', text: 'Arrive Aegina — temple of Aphaia, pistachio markets' },
                { time: '12:30', text: 'Arrive Poros — clock tower, lemon forest walk' },
                { time: '14:30', text: 'Arrive Hydra — car-free village, swim stop' },
                { time: '19:00', text: 'Return to Piraeus' },
              ].map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #001e3c, #003d7a)',
                    color: '#f4d03f',
                    borderRadius: '8px',
                    padding: '0.3rem 0.6rem',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}>
                    {s.time}
                  </div>
                  <div style={{ fontSize: '0.93rem', color: '#2c4a5a', lineHeight: 1.5 }}>{s.text}</div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="bk-section">
              <h2 className="bk-section-title">Frequently Asked Questions</h2>
              {faqs.map((f, i) => (
                <div key={i} className={`bk-faq-item ${openFaq === i ? 'open' : ''}`}>
                  <button
                    className="bk-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <ChevronDown
                      size={18}
                      className={`bk-faq-icon ${openFaq === i ? 'rotated' : ''}`}
                    />
                  </button>
                  <div className={`bk-faq-a ${openFaq === i ? 'open' : ''}`}>{f.a}</div>
                </div>
              ))}
            </div>

            {/* Bottom CTA for mobile */}
            <div className="bk-cta-banner">
              <h3>Prefer to book by phone?</h3>
              <p>Our team is available daily 08:00 – 20:00 Athens time.</p>
              <a className="bk-cta-tel" href="tel:+306984922197">
                <Phone size={18} /> +30 698 492 2197
              </a>
            </div>
          </div>

          {/* Right – sticky booking widget */}
          <div>
            <div className="bk-widget-card">
              <div className="bk-widget-header">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.6rem' }}>
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={14} fill="#f4d03f" color="#f4d03f" />
                  ))}
                </div>
                <div className="bk-widget-title">3 Islands Full-Day Cruise</div>
                <div className="bk-widget-price">Aegina · Poros · Hydra</div>
              </div>

              <div className="bk-widget-body">
                {/* Bokun "Book now" button – the widget script activates this */}
                <button
                  id={BOKUN_WIDGET_ID}
                  className="bokunButton"
                  disabled
                  data-src={BOKUN_DATA_SRC}
                  data-testid="widget-book-button"
                >
                  {widgetReady ? 'Book Now — Check Availability' : 'Loading availability…'}
                </button>

                <div className="bk-widget-note">
                  <Shield size={13} /> Secure booking · Free cancellation
                </div>

                <hr className="bk-widget-divider" />

                <div style={{ marginBottom: '0.75rem' }}>
                  {[
                    { icon: <Calendar size={14} />, text: 'Instant confirmation' },
                    { icon: <Users size={14} />, text: 'Private & shared options' },
                    { icon: <Clock size={14} />, text: 'Full day — 9 AM to 7 PM' },
                    { icon: <MapPin size={14} />, text: 'Departs Marina Zeas, Piraeus' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '0.5rem',
                      color: '#4a6a7a', fontSize: '0.83rem', marginBottom: '0.5rem',
                    }}>
                      <span style={{ color: '#d4af37' }}>{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>

                <hr className="bk-widget-divider" />

                <div className="bk-contact-links">
                  <a className="bk-contact-link" href="tel:+306984922197">
                    <Phone className="bk-contact-icon" size={14} /> +30 698 492 2197
                  </a>
                  <a className="bk-contact-link" href="mailto:info@saronicdreamcruise.com">
                    <Mail className="bk-contact-icon" size={14} /> info@saronicdreamcruise.com
                  </a>
                  <div className="bk-contact-link" style={{ cursor: 'default', color: '#4a6a7a' }}>
                    <MapPin className="bk-contact-icon" size={14} /> Marina Zeas, Piraeus
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default BookingPage;
