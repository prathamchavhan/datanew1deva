import React, { useState, useEffect, useRef } from 'react';
import Client_T from '../../assets/videos/Client_T.mp4';
import { supabase } from '../../supabaseClient';

const getResponsiveStyles = (
  width,
  isFocused,
  value,
  isSubmitting,
  isHovering,
  isOpen,
  testimonialsVisible,
  formVisible
) => {
  let styles = {};

  // Default styles (for large desktops, > 1200px)
  styles.containerStyle = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1268px',
    margin: '0 auto',
    padding: '48px 24px',
  };

  styles.testimonialCardStyle = {
    background: 'rgba(57, 59, 62, 0.3)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    border: '0.5px solid rgba(255, 255, 255, 1)',
    padding: '32px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    marginBottom: '64px',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    opacity: testimonialsVisible ? 1 : 0,
    transform: testimonialsVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)',
  };

  styles.testimonialContentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '0',
    alignItems: 'center',
    position: 'relative',
    fontFamily: 'Poppins, sans-serif',
  };

  styles.textSectionStyle = {
    padding: '0 32px 0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: testimonialsVisible ? '0.2s' : '0s',
    opacity: testimonialsVisible ? 1 : 0,
    transform: testimonialsVisible ? 'translateX(0)' : 'translateX(-40px)',
  };

  styles.titleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#22d3ee',
    marginBottom: '24px',
    fontFamily: 'Poppins, sans-serif',
  };

  styles.descriptionStyle = {
    color: '#d1d5db',
    lineHeight: '1.6',
    fontSize: '20px',
    fontFamily: 'Poppins, sans-serif',
  };

  styles.videoContainerStyle = {
    width: '102%',
    height: '110%',
    minHeight: '300px',
    position: 'relative',
    padding: '0 0 0 21px',
    transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: testimonialsVisible ? '0.4s' : '0s',
    opacity: testimonialsVisible ? 1 : 0,
    transform: testimonialsVisible ? 'translateX(0) rotateY(0deg)' : 'translateX(40px) rotateY(10deg)',
  };

  styles.centerLineStyle = {
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
    display: 'block',
  };

  // Form Section Styles
  styles.formSection = {
    header: {
      marginBottom: '32px',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      opacity: formVisible ? 1 : 0,
      transform: formVisible ? 'translateY(0)' : 'translateY(40px)',
    },
    title: {
      fontSize: '35px',
      fontWeight: 'bold',
      color: '#22d3ee',
      marginBottom: '16px',
      fontFamily: 'Poppins, sans-serif',
    },
    subtitle: {
      fontSize: '30px',
      color: 'white',
      fontWeight: 'semibold',
      marginBottom: '8px',
      fontFamily: 'Poppins, sans-serif',
    },
    infoText: {
      color: '#ffffff',
      fontSize: '20px',
      fontWeight: '300',
      fontFamily: 'Poppins, sans-serif',
    },
    card: {
      background: 'rgba(57, 59, 62, 0.3)',
      backdropFilter: 'blur(16px)',
      borderRadius: '16px',
      padding: '24px 40px',
      border: '1px #ffffff solid',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      transitionDelay: formVisible ? '0.2s' : '0s',
      opacity: formVisible ? 1 : 0,
      transform: formVisible ? 'translateY(0) scale(1)' : 'translateY(60px) scale(0.95)',
      maxWidth: '900px',
      alignItems: 'center',
      margin: '0 auto',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      fontFamily: 'Poppins, sans-serif',
      position: 'relative',
      paddingTop: '32px',
      paddingLeft: '50px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
    },
    submitButton: {
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
      backgroundColor: isHovering ? '#f64c4cff' : 'transparent',
    }
  };


  // Styles for individual components
  styles.animatedInput = {
    container: { position: 'relative', marginBottom: '1rem' },
    label: {
      position: 'absolute',
      left: '12px',
      transition: 'all 0.3s',
      pointerEvents: 'none',
      color: isFocused || value ? '#22d3ee' : '#9ca3af',
      fontSize: isFocused || value ? '12px' : '16px',
      top: isFocused || value ? '4px' : '16px',
      zIndex: 1,
      fontFamily: 'Poppins, sans-serif',
    },
    input: {
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
      boxShadow: isFocused ? '0 0 20px rgba(34, 211, 238, 0.2)' : 'none',
    },
    glow: {
      position: 'absolute',
      inset: '0',
      borderRadius: '8px',
      background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1), rgba(168, 85, 247, 0.1))',
      opacity: isFocused ? 1 : 0,
      transition: 'opacity 0.3s',
      pointerEvents: 'none',
    },
  };

  styles.countrySelect = {
    container: { position: 'relative', marginBottom: '1rem', width: '100%' },
    label: {
      position: 'absolute',
      left: '12px',
      transition: 'all 0.3s',
      pointerEvents: 'none',
      color: isFocused || value ? '#22d3ee' : '#9ca3af',
      fontSize: isFocused || value ? '12px' : '16px',
      top: isFocused || value ? '4px' : '16px',
      zIndex: 20,
    },
    flex: { display: 'flex' },
    button: {
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
      cursor: 'pointer',
    },
    input: {
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
      boxShadow: isFocused || isOpen ? '0 0 20px rgba(34, 211, 238, 0.2)' : 'none',
    },
    dropdown: {
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
      animation: isOpen ? 'slideDown 0.2s ease-out' : 'none',
    },
    option: {
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
      gap: '8px',
    },
  };

  // Media queries
  if (width <= 1200) {
    styles.formSection.card.padding = '24px';
    styles.formSection.form.paddingTop = '24px';
    styles.formSection.form.paddingLeft = '24px';
  }

  if (width <= 768) {
    styles.containerStyle.padding = '32px 20px';
    styles.testimonialCardStyle.marginBottom = '48px';
    styles.testimonialContentStyle.gridTemplateColumns = '1fr';
    styles.textSectionStyle.padding = '0';
    styles.videoContainerStyle.width = '100%';
    styles.videoContainerStyle.height = '250px';
    styles.videoContainerStyle.minHeight = '250px';
    styles.videoContainerStyle.padding = '0';
    styles.centerLineStyle.display = 'none';
    
    // Responsive Form Section
    styles.formSection.title.fontSize = '28px';
    styles.formSection.subtitle.fontSize = '24px';
    styles.formSection.infoText.fontSize = '18px';
    styles.formSection.card.padding = '20px';
    styles.formSection.form.padding = '0'; // Remove padding on mobile
    styles.formSection.grid.gridTemplateColumns = '1fr';
    styles.formSection.grid.gap = '20px';
    styles.formSection.form.gap = '20px'; 
    styles.formSection.submitButton.width = '100%';

  }

  if (width <= 480) {
    styles.containerStyle.padding = '24px 16px';
    styles.testimonialCardStyle.padding = '20px';
    styles.titleStyle.fontSize = '24px';
    styles.descriptionStyle.fontSize = '20px';
    styles.videoContainerStyle.minHeight = '200px';

    // Responsive Form Section
    styles.formSection.title.fontSize = '24px';
    styles.formSection.subtitle.fontSize = '20px';
    styles.formSection.infoText.fontSize = '16px';
    styles.formSection.card.padding = '16px';
    styles.formSection.form.gap = '16px';
    styles.animatedInput.container.marginBottom = '1rem';
    styles.countrySelect.container.marginBottom = '1rem';

  }

  if (width <= 360) {
    styles.containerStyle.padding = '20px 10px';
  }

  return styles;
};

// AnimatedInput component (simplified to use passed styles)
const AnimatedInput = ({ label, type = 'text', value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const { animatedInput } = getResponsiveStyles(window.innerWidth, isFocused, value);

  return (
    <div style={animatedInput.container}>
      <label style={animatedInput.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={isFocused ? placeholder : ''}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={animatedInput.input}
      />
      <div style={animatedInput.glow}></div>
    </div>
  );
};

// CountrySelect component (simplified to use passed styles)
const CountrySelect = ({ value, onChange, phoneNumber, onPhoneNumberChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const { countrySelect } = getResponsiveStyles(window.innerWidth, isFocused, value, null, null, isOpen);

  const countries = [
    { code: '+91', name: 'India', flag: '🇮🇳' },
    { code: '+1', name: 'United States', flag: '🇺🇸' },
    { code: '+44', name: 'United Kingdom', flag: '🇬🇧' },
    { code: '+81', name: 'Japan', flag: '🇯🇵' },
    { code: '+49', name: 'Germany', flag: '🇩🇪' },
  ];

  const selected = countries.find((c) => c.code === value) || countries[0];

  return (
    <div style={countrySelect.container}>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <label style={countrySelect.label}>Phone*</label>
      <div style={countrySelect.flex}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={countrySelect.button}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {selected.flag} {selected.code}
          </span>
        </button>
        <input
          type="tel"
          style={countrySelect.input}
          value={phoneNumber}
          onChange={onPhoneNumberChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>

      {isOpen && (
        <div style={countrySelect.dropdown}>
          {countries.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
              style={countrySelect.option}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#374151')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
            >
              {country.flag} {country.code} {country.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Component
export default function AdvancedLandingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '+1',
    jobTitle: '',
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const testimonialsRef = useRef(null);
  const formRef = useRef(null);

  // Effect to track window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Intersection Observer
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
        rootMargin: '0px 0px -50px 0px',
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
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
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
        job_title: formData.jobTitle,
      };

      const { data, error } = await supabase.from('contacts').insert([snakeCaseData]);

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
        jobTitle: '',
      });
      setPhoneNumber('');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get all styles based on current window width and state
  const styles = getResponsiveStyles(
    windowWidth,
    false, // isFocused, not needed here
    null, // value, not needed here
    isSubmitting,
    isHovering,
    false, // isOpen, not needed here
    testimonialsVisible,
    formVisible
  );

  const mainStyle = {
    minHeight: '100vh',
    color: 'white',
    overflow: 'hidden',
    position: 'relative',
  };

  const backgroundStyle = {
    position: 'absolute',
    inset: '0',
    backgroundImage: 'url("./assets/images/Background image for whole page.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };

  const gradientOverlayStyle = {
    position: 'absolute',
    inset: '0',
    animation: 'pulse 4s infinite',
  };

  const gridBackgroundStyle = {
    position: 'absolute',
    inset: '0',
    opacity: 0.1,
    backgroundSize: '50px 50px',
  };

  const submitButtonBackgroundStyle = {
    position: 'absolute',
    inset: '0',
    background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
    opacity: 0.3,
  };

  const loadingStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
  };

  const spinnerStyle = {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  };

  return (
    <div style={mainStyle}>
      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.7; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }
        @keyframes bounce { 0%, 100% { transform: translateY(-25%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); } 50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); } }
      `}</style>

      {/* Animated background */}
      <div style={backgroundStyle}>
        <div style={gridBackgroundStyle}></div>
        <div style={gradientOverlayStyle}></div>
      </div>

      {/* Main content */}
      <div style={styles.containerStyle}>
        {/* Client Testimonials Section */}
        <div id="client-testimonials-section" ref={testimonialsRef} style={styles.testimonialCardStyle}>
          <div style={styles.testimonialContentStyle}>
            {/* Center dividing line */}
            <div style={styles.centerLineStyle}></div>

            <div style={styles.textSectionStyle}>
              <h2 style={styles.titleStyle}>Client Testimonials</h2>
              <p style={styles.descriptionStyle}>
                Dataventics offers a range of services aimed at helping organizations to make better decisions based on
                data. These services may include data warehousing, data mining, reporting and analytics, dashboard
                development, and consulting services.
              </p>
            </div>
            <div style={styles.videoContainerStyle}>
              <div
                style={{
                  src: { Client_T },
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
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'linear-gradient(45deg, rgba(34, 211, 238, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                    animation: 'pulse 3s infinite',
                  }}
                ></div>
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
                    zIndex: 1,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section with Ref */}
        <div ref={formRef}>
          {/* Get Started Header - Outside the form */}
          <div style={styles.formSection.header}>
            <h2 style={styles.formSection.title}>Get Started</h2>
            <p style={styles.formSection.subtitle}>
              Ready to unlock the full potential of your business<br></br> with our{' '}
              <span style={styles.servicesLinkStyle}>Services</span>?
            </p>
            <p style={styles.formSection.infoText}>
              To request more information about our products and services, please complete the form below.
            </p>
          </div>

          {/* Contact Form Card */}
          <div style={styles.formSection.card}>
            <div style={styles.formSection.form}>
              <div style={styles.formSection.grid}>
                <AnimatedInput
                  label="First Name*"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange('firstName')}
                  placeholder="Enter your first name"
                />

                <AnimatedInput
                  label="Last Name*"
                  value={formData.lastName}
                  onChange={handleInputChange('lastName')}
                  placeholder="Enter your last name"
                />
              </div>

              <div style={styles.formSection.grid}>
                <AnimatedInput
                  label="Email*"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  placeholder="Enter your email"
                />
                <AnimatedInput
                  label="Company*"
                  value={formData.company}
                  onChange={handleInputChange('company')}
                  placeholder="Enter your company"
                />
              </div>

              <div style={styles.formSection.grid}>
                <CountrySelect
                  value={formData.phone}
                  onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}
                  phoneNumber={phoneNumber}
                  onPhoneNumberChange={handlePhoneNumberChange}
                />
                <AnimatedInput
                  label="Job Title*"
                  value={formData.jobTitle}
                  onChange={handleInputChange('jobTitle')}
                  placeholder="Enter your job title"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={styles.formSection.submitButton}
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
