import React, { useState, useEffect, useRef } from 'react';
import Service_main from '../../assets/videos/Service_main.mp4';

const AnimatedInput = ({ label, type = 'text', value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = {
    position: 'relative',
    marginBottom: '16px',
    width: '100%',
  };
  const labelStyle = { color: 'white', marginBottom: '8px', display: 'block' };
  const inputStyle = { padding: '10px', borderRadius: '8px', width: '100%' };
  const glowStyle = {
    position: 'absolute',
    inset: 0,
    boxShadow: isFocused ? '0 0 10px #22d3ee' : 'none',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={isFocused ? placeholder : ''}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={inputStyle}
      />
      <div style={glowStyle}></div>
    </div>
  );
};

const CountrySelect = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const selected = countries.find(c => c.code === value) || countries[0];

  const containerStyle = { position: 'relative', marginBottom: '16px', width: '100%' };
  const labelStyle = { color: 'white', marginBottom: '8px', display: 'block' };
  const flexStyle = { display: 'flex', gap: '8px', width: '100%' };
  const buttonStyle = { padding: '10px', borderRadius: '8px', flexShrink: 0 };
  const inputStyle = { padding: '10px', borderRadius: '8px', flexGrow: 1 };
  const dropdownStyle = { position: 'absolute', top: '100%', left: 0, right: 0, background: '#111', borderRadius: '8px', zIndex: 20 };
  const optionStyle = { padding: '8px 12px', width: '100%', textAlign: 'left', color: 'white', background: 'transparent', border: 'none', cursor: 'pointer' };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <label style={labelStyle}>Phone*</label>
      <div style={flexStyle}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={buttonStyle}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {selected.flag} {selected.code}
          </span>
        </button>
        <input
          type="tel"
          style={inputStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
      {isOpen && (
        <div style={dropdownStyle}>
          {countries.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
              style={optionStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#374151'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              {country.flag} {country.code} {country.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function AdvancedLandingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '+1',
    jobTitle: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  const testimonialsRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === testimonialsRef.current) {
            setTestimonialsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (testimonialsRef.current) observer.observe(testimonialsRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (testimonialsRef.current) observer.unobserve(testimonialsRef.current);
    };
  }, []);

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Form submitted successfully!');
    setIsSubmitting(false);
    setFormData({ firstName: '', lastName: '', email: '', company: '', phone: '+1', jobTitle: '' });
  };

  // ---------- Responsive functions ----------
  const getContainerPadding = () => {
    if (windowWidth <= 360) return '16px 12px';
    if (windowWidth <= 460) return '20px 16px';
    if (windowWidth <= 760) return '32px 24px';
    if (windowWidth <= 1020) return '40px 32px';
    return '50px 40px';
  };
  const getTitleFontSize = () => {
    if (windowWidth <= 360) return '20px';
    if (windowWidth <= 460) return '22px';
    if (windowWidth <= 760) return '28px';
    if (windowWidth <= 1020) return '30px';
    return '32px';
  };
  const getDescriptionFontSize = () => {
    if (windowWidth <= 360) return '12px';
    if (windowWidth <= 460) return '14px';
    if (windowWidth <= 760) return '16px';
    if (windowWidth <= 1020) return '18px';
    return '20px';
  };
  const getVideoHeight = () => {
    if (windowWidth <= 360) return '180px';
    if (windowWidth <= 460) return '200px';
    if (windowWidth <= 760) return '250px';
    if (windowWidth <= 1020) return '300px';
    return '350px';
  };
  const getGridColumns = () => (windowWidth <= 768 ? '1fr' : '1fr 1fr');
  const getTextPadding = () => (windowWidth <= 768 ? '0' : '0 32px 0 0');
  const getCenterLineDisplay = () => (windowWidth <= 768 ? 'none' : 'block');

  // ---------- Original styles with responsive tweaks ----------
  const mainStyle = { padding: '2rem', color: 'white', overflow: 'hidden', position: 'relative' };
  const backgroundStyle = {
    position: 'absolute', inset: 0,
    backgroundImage: 'url("./assets/images/Background image for whole page.png")',
    backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'
  };
  const gradientOverlayStyle = { position: 'absolute', inset: 0, animation: 'pulse 4s infinite' };
  const gridBackgroundStyle = { position: 'absolute', inset: 0, opacity: 0.1, backgroundSize: '50px 50px' };

  const containerStyle = { position: 'relative', zIndex: 10, width: '100%', maxWidth: '1268px', margin: '0 auto', padding: getContainerPadding() };
  const testimonialCardStyle = {
    background: 'rgba(57, 59, 62, 0.3)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    border: '0.5px solid rgba(255, 255, 255, 1)',
    padding: '32px',
    marginBottom: '32px',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: testimonialsVisible ? 1 : 0,
    transform: testimonialsVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)'
  };
  const testimonialContentStyle = { display: 'grid', gridTemplateColumns: getGridColumns(), gap: windowWidth <= 768 ? '32px' : '0', alignItems: 'center', position: 'relative', fontFamily: 'Poppins, sans-serif' };
  const textSectionStyle = { padding: getTextPadding(), display: 'flex', flexDirection: 'column', justifyContent: 'center', fontFamily: 'Poppins, sans-serif', transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: testimonialsVisible ? '0.2s' : '0s', opacity: testimonialsVisible ? 1 : 0, transform: testimonialsVisible ? 'translateX(0)' : 'translateX(-40px)' };
  const titleStyle = { fontSize: getTitleFontSize(), fontWeight: 'bold', color: '#22d3ee', marginBottom: windowWidth <= 768 ? '16px' : '24px', fontFamily: 'Poppins, sans-serif' };
  const descriptionStyle = { color: '#d1d5db', lineHeight: 1.6, fontSize: getDescriptionFontSize(), fontFamily: 'Poppins, sans-serif' };
  const videoContainerStyle = { width: '100%', height: getVideoHeight(), position: 'relative', borderRadius: '16px', overflow: 'hidden', marginTop: '24px' };
  const centerLineStyle = { position: 'absolute', left: '50%', top: '-10%', bottom: '-10%', width: '1px', background: 'rgba(255, 255, 255, 1)', transform: 'translateX(-70%)', zIndex: 1, transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: testimonialsVisible ? '0.6s' : '0s', opacity: testimonialsVisible ? 1 : 0, scaleY: testimonialsVisible ? 1 : 0, display: getCenterLineDisplay() };

  return (
    <div style={mainStyle}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1;}50%{opacity:0.7;} }
      `}</style>

      <div style={backgroundStyle}>
        <div style={gridBackgroundStyle}></div>
        <div style={gradientOverlayStyle}></div>
      </div>

      <div style={containerStyle}>
        <div ref={testimonialsRef} style={testimonialCardStyle}>
          <div style={testimonialContentStyle}>
            <div style={centerLineStyle}></div>
            <div style={textSectionStyle}>
              <h2 style={titleStyle}>Our Services</h2>
              <p style={descriptionStyle}>
                Dataventics offers a range of services aimed at helping organizations to make better decisions based on data. These services may include data warehousing, data mining, reporting and analytics, dashboard development, and consulting services.
              </p>
            </div>
            <div style={videoContainerStyle}>
              <video
                src={Service_main}
                autoPlay
                loop
                muted
                style={{ width: '100%', height: '100%', borderRadius: '16px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
