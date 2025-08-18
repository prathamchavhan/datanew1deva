import React, { useState, useEffect, useRef } from 'react';
import Service_main from '../../assets/videos/Service_main.mp4';


const AnimatedInput = ({ label, type = 'text', value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  


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
  
  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Form submitted successfully!');
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '+1',
      jobTitle: ''
    });
  };

  const mainStyle = {
    // minHeight: '42vh',
    padding: '2rem ',
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
    margin: '0 auto',
    padding: window.innerWidth <= 480 ? '24px 16px' : window.innerWidth <= 768 ? '32px 20px' : '50px 40px'
  };

  const testimonialCardStyle = {
    background: 'rgba(57, 59, 62, 0.3)',
    backdropFilter: 'blur(16px)',
    borderRadius: '16px',
    border: '0.5px solid rgba(255, 255, 255, 1)',
    padding: window.innerWidth <= 480 ? '20px' : window.innerWidth <= 768 ? '24px' : '32px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    marginBottom: window.innerWidth <= 768 ? '24px' : '32px',
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
    fontSize: window.innerWidth <= 480 ? '14px' : '20px',
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
        <div ref={testimonialsRef} style={testimonialCardStyle}>
          <div style={testimonialContentStyle}>
            {/* Center dividing line */}
            <div style={centerLineStyle}></div>
            
            <div style={textSectionStyle}>
              <h2 style={titleStyle}>Our Services</h2>
              <p style={descriptionStyle}>
                Dataventics offers a range of services aimed at helping organizations to make better decisions based on data. These services may include data warehousing, data mining, reporting and analytics, dashboard development, and consulting services.
              </p>
            </div>
            <div style={videoContainerStyle}>
              <div
                style={{
                  src : {Service_main},
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
                  src={Service_main}
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
        </div>
      </div>
  );
}