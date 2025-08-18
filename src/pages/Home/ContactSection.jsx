import React, { useState, useEffect, useRef } from 'react';
import Client_T from '../../assets/videos/Client_T.mp4';

import { supabase } from '../../supabaseClient';

const AnimatedInput = ({ label, type = 'text', value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = {
    position: 'relative',
    marginBottom: '1rem',

  };

  const labelStyle = {
    position: 'absolute',
    left: '12px',
    transition: 'all 0.3s',
    pointerEvents: 'none',
    color: isFocused || value ? '#22d3ee' : '#9ca3af',
    fontSize: isFocused || value ? '12px' : '16px',
    top: isFocused || value ? '4px' : '16px',
    zIndex: 1,
    fontFamily: 'Poppins, sans-serif'
  };

  const inputStyle = {
    width: '100%',
    paddingTop: '24px',
    paddingBottom: '8px',
    background: 'rgba(31, 41, 55, 0.5)',
    border: `2px solid ${isFocused ? '#22d3ee' : '#4b5563'}`,
    borderRadius: '8px',
    color: 'white',
    transition: 'all 0.3s',
    outline: 'none',
    backdropFilter: 'blur(4px)',
    boxShadow: isFocused ? '0 0 20px rgba(34, 211, 238, 0.2)' : 'none'
  };

  const glowStyle = {
    position: 'absolute',
    inset: '0',
    borderRadius: '8px',
    background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))',
    opacity: isFocused ? 1 : 0,
    transition: 'opacity 0.3s',
    pointerEvents: 'none'
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

const CountrySelect = ({ value, onChange, phoneNumber, onPhoneNumberChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const countries = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' }
  ];

  const selected = countries.find(c => c.code === value) || countries[0];

  const containerStyle = {
    position: 'relative',
    marginBottom: '1rem',
    width: '100%',
  };

  const labelStyle = {
    position: 'absolute',
    left: '12px',
    transition: 'all 0.3s',
    pointerEvents: 'none',
    color: isFocused || value ? '#22d3ee' : '#9ca3af',
    fontSize: isFocused || value ? '12px' : '16px',
    top: isFocused || value ? '4px' : '16px',
    zIndex: 20
  };

  const flexStyle = {
    display: 'flex'
  };

  const buttonStyle = {
    paddingTop: '24px',
    width: '25%',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '12px',
    background: 'rgba(31, 41, 55, 0.5)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: isFocused || isOpen ? '#22d3ee' : '#4b5563',
    borderRightWidth: 0,
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    color: 'white',
    transition: 'all 0.3s',
    outline: 'none',
    backdropFilter: 'blur(4px)',
    cursor: 'pointer'
  };

  const inputStyle = {
    flex: 1,
    width: '45%',
    paddingTop: '24px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '12px',
    background: 'rgba(31, 41, 55, 0.5)',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: isFocused || isOpen ? '#22d3ee' : '#4b5563',
    borderLeftWidth: 0,
    borderTopRightRadius: '8px',
    borderBottomRightRadius: '8px',
    color: 'white',
    transition: 'all 0.3s',
    outline: 'none',
    backdropFilter: 'blur(4px)',
    boxShadow: isFocused || isOpen ? '0 0 20px rgba(34, 211, 238, 0.2)' : 'none'
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '4px',
    background: '#1f2937',
    border: '1px solid #4b5563',
    borderRadius: '8px',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    zIndex: 20,
    animation: isOpen ? 'slideDown 0.2s ease-out' : 'none'
  };

  const optionStyle = {
    width: '80%',
    padding: '8px 12px',
    textAlign: 'left',
    color: 'white',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  };

  return (
    <div style={containerStyle}>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
          value={phoneNumber}
          onChange={onPhoneNumberChange}
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
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  
  const testimonialsRef = useRef(null);
  const formRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === testimonialsRef.current) {
            setTestimonialsVisible(entry.isIntersecting);
          }
          if (entry.target === formRef.current) {
            setFormVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);
  
  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const snakeCaseData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company: formData.company,
        phone: `${formData.phone}${phoneNumber}`,
        job_title: formData.jobTitle
      };

      const { data, error } = await supabase
        .from('contacts')
        .insert([snakeCaseData]);

      if (error) {
        throw error;
      }

      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '+1',
        jobTitle: ''
      });
      setPhoneNumber('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const mainStyle = {
    minHeight: '100vh',
    color: 'white',
    overflow: 'hidden',
    position: 'relative'
  };

  const backgroundStyle = {
    position: 'absolute',
    inset: '0',
    backgroundImage: 'url("./assets/images/Background image for whole page.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  const gradientOverlayStyle = {
    position: 'absolute',
    inset: '0',
    animation: 'pulse 4s infinite'
  };

  // Grid background pattern
  const gridBackgroundStyle = {
    position: 'absolute',
    inset: '0',
    opacity: 0.1,
    backgroundSize: '50px 50px'
  };

  const containerStyle = {
      position: 'relative',
  zIndex: 10,
  width: '1268px',
  height: 'auto',
  margin: '0 auto',
  padding: window.innerWidth <= 480 ? '24px 16px' : window.innerWidth <= 768 ? '32px 20px' : '48px 24px'
  };

  const testimonialCardStyle = {
    background: 'rgba(57, 59, 62, 0.3)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    border: '0.5px solid rgba(255, 255, 255, 1)',
    padding: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '24px' : '32px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    marginBottom: window.innerWidth <= 768 ? '48px' : '64px',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: testimonialsVisible ? 1 : 0,
    transform: testimonialsVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)'
  };

  const testimonialContentStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: window.innerWidth <= 768 ? '32px' : '0',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'Poppins, sans-serif'
  };

  const textSectionStyle = {
    padding: window.innerWidth <= 768 ? '0' : '0 32px 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: testimonialsVisible ? '0.2s' : '0s',
    opacity: testimonialsVisible ? 1 : 0,
    transform: testimonialsVisible ? 'translateX(0)' : 'translateX(-40px)'
  };

  const titleStyle = {
   fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '28px' : '32px',
    fontWeight: 'bold',
    color: '#22d3ee',
    marginBottom: window.innerWidth <= 768 ? '16px' : '24px',
    fontFamily: 'Poppins, sans-serif'
  };

  const descriptionStyle = {
   color: '#d1d5db',
    lineHeight: '1.6',
    fontSize: window.innerWidth <= 480 ? '20px' : '20px',
    fontFamily: 'Poppins, sans-serif',
  };

  const videoContainerStyle = {
    width: window.innerWidth <= 768 ? '100%' : '102%',
    height: window.innerWidth <= 768 ? '250px' : '110%',
    minHeight: window.innerWidth <= 768 ? '250px' : '300px',
    position: 'relative',
    padding: window.innerWidth <= 768 ? '0' : '0 0 0 21px',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: testimonialsVisible ? '0.4s' : '0s',
    opacity: testimonialsVisible ? 1 : 0,
    transform: testimonialsVisible ? 'translateX(0) rotateY(0deg)' : 'translateX(40px) rotateY(10deg)'
  };

  const centerLineStyle = {
    position: 'absolute',
    left: '50%',
    top: '-10%',
    bottom: '-10%',
    width: '1px',
    background: 'rgba(255, 255, 255, 1)',
    transform: 'translateX(-70%)',
    zIndex: 1,
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: testimonialsVisible ? '0.6s' : '0s',
    opacity: testimonialsVisible ? 1 : 0,
    scaleY: testimonialsVisible ? 1 : 0,
    display: window.innerWidth <= 768 ? 'none' : 'block'
  };

  // Header section outside the form
  const headerSectionStyle = {
    marginBottom: '32px',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: formVisible ? 1 : 0,
    transform: formVisible ? 'translateY(0)' : 'translateY(40px)'
  };

  const getStartedTitleStyle = {
    fontSize: window.innerWidth <= 480 ? '24px' : window.innerWidth <= 768 ? '28px' : '35px',
    fontWeight: 'bold',
    color: '#22d3ee',
    marginBottom: '16px',
    fontFamily: 'Poppins, sans-serif'
  };

  const subtitleStyle = {
    fontSize: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '24px' : '30px',
    color: 'white',
    fontWeight: 'semibold',
    marginBottom: '8px',
    fontFamily: 'Poppins, sans-serif'
  };

  const servicesLinkStyle = {
    color: '#22d3ee',
    textDecoration: 'underline',
    fontWeight: '600',
    fontFamily: 'Poppins, sans-serif'
  };

  const infoTextStyle = {
    color: '#ffffff',
    fontSize: window.innerWidth <= 480 ? '16px' : window.innerWidth <= 768 ? '18px' : '20px',
    fontWeight: '300',
    fontFamily: 'Poppins, sans-serif',
  };

  const formCardStyle = {
    background: 'rgba(57, 59, 62, 0.3)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '5px',
    paddingRight: '40px',
    // padding: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '50px' : '20px',
    border: '1px #ffffff solid',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: formVisible ? '0.2s' : '0s',
    opacity: formVisible ? 1 : 0,
    transform: formVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)',
    maxWidth: '900px',
    alignItems: 'center',
    margin: '0 auto',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    fontFamily: 'Poppins, sans-serif',
    position: 'relative',
    paddingTop: window.innerWidth <= 768 ? '0' : '32px',
    paddingLeft: window.innerWidth <= 768 ? '0' : '50px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
    gap: window.innerWidth <= 768 ? '50px' : '50px'
  };

  const submitButtonStyle = {
    width: '80%',
    padding: '16px 24px',
    background: 'transparent',
    color: isHovering ? 'white' : '#22d3ee',
    fontWeight: '600',
    borderRadius: '8px',
    border: `2px solid ${isHovering ? '#fb4747ff' : '#22d3ee'}`,
    cursor: isSubmitting ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    justifySelf: 'center',
    alignSelf: 'center',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: isHovering ? '#f64c4cff' : 'transparent'
  };

  const submitButtonBackgroundStyle = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
    opacity: 0.3
  };

  const loadingStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px'
  };

  const spinnerStyle = {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  const floatingElements = [
    { top: '80px', left: '40px', size: '8px', color: '#22d3ee', animation: 'ping 2s infinite', delay: '1s', mobile: true },
    { top: '160px', right: '80px', size: '12px', color: '#a855f7', animation: 'bounce 2s infinite', delay: '2s', mobile: false },
    { bottom: '160px', left: '80px', size: '4px', color: '#3b82f6', animation: 'pulse 2s infinite', delay: '3s', mobile: false },
    { bottom: '80px', right: '160px', size: '8px', color: '#06d6a0', animation: 'ping 2s infinite', delay: '4s', mobile: true }
  ];

  return (
    <div style={mainStyle}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
      
      {/* Animated background */}
      <div style={{
        ...backgroundStyle,
        
      }}>
        <div style={gridBackgroundStyle}></div>
        <div style={gradientOverlayStyle}></div>
      </div>
      
      {/* Main content */}
      <div style={containerStyle}>
        {/* Client Testimonials Section */}
        <div id="client-testimonials-section" ref={testimonialsRef} style={testimonialCardStyle}>
          <div style={testimonialContentStyle}>
            {/* Center dividing line */}
            <div style={centerLineStyle}></div>
            
            <div style={textSectionStyle}>
              <h2 style={titleStyle}>Client Testimonials</h2>
              <p style={descriptionStyle}>
                Dataventics offers a range of services aimed at helping organizations to make 
                better decisions based on data. These services may include data warehousing, 
                data mining, reporting and analytics, dashboard development, and consulting 
                services.
              </p>
            </div>
            <div style={videoContainerStyle}>
              <div
                style={{
                  src : {Client_T},
                  width: '100%',
                  height: '100%',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b',
                  fontSize: '18px',
                  fontWeight: '500',
                  border: 'rgba(100, 116, 139, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                  animation: 'pulse 3s infinite'
                }}></div>
                <video
                  src={Client_T}
                  autoPlay
                  loop
                  muted
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    zIndex: 1
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Form Section with Ref */}
        <div ref={formRef}>
          {/* Get Started Header - Outside the form */}
          <div style={headerSectionStyle}>
            <h2 style={getStartedTitleStyle}>Get Started</h2>
            <p style={subtitleStyle}>
              Ready to unlock the full potential of your business<br></br> with our{' '}
              <span style={servicesLinkStyle}>Services</span>?
            </p>
            <p style={infoTextStyle}>
              To request more information about our products and services, please complete the form below.
            </p>
          </div>
          
          {/* Contact Form Card */}
          <div style={formCardStyle}>
            <div style={formStyle}>
              <div style={gridStyle}>
                <label style={{ fontSize: '16px', color: '#ffffff'}}>First Name*</label>
                <label style={{ fontSize: '16px', color: '#ffffff'}}>Last Name*</label>
                <AnimatedInput
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  placeholder="Enter your first name"
                />

                <AnimatedInput
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  placeholder="Enter your last name"
                />
              </div>
              
              <div style={gridStyle}>
                <label style={{ fontSize: '16px', color: '#ffffff'}}>Email*</label>
                <label style={{ fontSize: '16px', color: '#ffffff'}}>Company*</label>

                <AnimatedInput
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  placeholder="Enter your email"
                />
                <AnimatedInput
                  value={formData.company}
                  onChange={handleInputChange('company')}
                  placeholder="Enter your company"
                />
              </div>
              
              <div style={gridStyle}>
                <label style={{ fontSize: '16px', color: '#ffffff'}}>Phone*</label>
                <label style={{ fontSize: '16px', color: '#ffffff'}}>Job Title*</label>
                <CountrySelect
                  value={formData.phone}
                  onChange={(value) => setFormData(prev => ({ ...prev, phone: value }))}
                  phoneNumber={phoneNumber}
                  onPhoneNumberChange={handlePhoneNumberChange}
                />
                <AnimatedInput
                  value={formData.jobTitle}
                  onChange={handleInputChange('jobTitle')}
                  placeholder="Enter your job title"
                />
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={submitButtonStyle}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div style={submitButtonBackgroundStyle}></div>
                <span style={{ position: 'relative', zIndex: 1 }}>
                  {isSubmitting ? (
                    <div style={loadingStyle}>
                      <div style={spinnerStyle}></div>
                      Submitting...
                    </div>
                  ) : (
                    'Submit'
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}