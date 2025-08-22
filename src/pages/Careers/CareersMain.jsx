import React, { useState, useEffect, useRef } from 'react';
import landingPageVideo from '../../assets/videos/career video.mp4';

import styles from "./Careers.module.css";
import { supabase } from '../../supabaseClient';

const AnimatedInput = ({ label, type = 'text', value, onChange, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const containerStyle = {
    position: 'relative',
    marginBottom: '1rem',
    width: '100%'
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
    paddingLeft: '12px',
    paddingRight: '12px',
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

const AnimatedSelect = ({ label, value, onChange, options, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const selectStyle = {
    width: '100%',
    paddingTop: '24px',
    paddingBottom: '8px',
    paddingLeft: '12px',
    paddingRight: '40px',
    background: 'rgba(31, 41, 55, 0.5)',
    border: `2px solid ${isFocused || isOpen ? '#22d3ee' : '#4b5563'}`,
    borderRadius: '8px',
    color: 'white',
    transition: 'all 0.3s',
    outline: 'none',
    backdropFilter: 'blur(4px)',
    cursor: 'pointer',
    appearance: 'none',
    fontFamily: 'Poppins, sans-serif'
  };

  const arrowStyle = {
    position: 'absolute',
    right: '12px',
    top: '50%',
    transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : ''}`,
    transition: 'transform 0.3s',
    pointerEvents: 'none',
    color: 'white'
  };

  const optionStyle = {
    background: '#1f2937',
    color: 'white',
    padding: '8px',
  };

  return (
    <div style={containerStyle}>
      <label style={labelStyle}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        onFocus={() => {
          setIsFocused(true);
          setIsOpen(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          setIsOpen(false);
        }}
        style={selectStyle}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} style={optionStyle}>
            {option.label}
          </option>
        ))}
      </select>
      <div style={arrowStyle}>▼</div>
    </div>
  );
};

const FileUpload = ({ label, onChange, fileName }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const containerStyle = {
    position: 'relative',
    marginBottom: '1rem',
    width: '100%',
  };

  const uploadAreaStyle = {
    width: '100%',
    padding: '20px',
    background: 'rgba(31, 41, 55, 0.5)',
    border: '2px solid #00BCEB',
    borderRadius: '15px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s',
    backdropFilter: 'blur(4px)',
    fontFamily: 'Poppins, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100px'
  };

  const uploadTextStyle = {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    fontFamily: 'Poppins, sans-serif',
  };

  const fileNameStyle = {
    color: '#22d3ee',
    fontSize: '14px',
    marginTop: '8px',
    fontStyle: 'italic',
  };

  const hiddenFileInputStyle = {
    display: 'none',
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      onChange(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div style={containerStyle}>
      <div
        style={{ ...uploadAreaStyle, background: isDragging ? 'rgba(34, 211, 238, 0.1)' : uploadAreaStyle.background }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div style={uploadTextStyle}>
          📄 {label}
        </div>
        {fileName && (
          <div style={fileNameStyle}>
            Selected: {fileName}
          </div>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        onChange={handleFileSelect}
        style={hiddenFileInputStyle}
        accept=".pdf,.doc,.docx"
      />
    </div>
  );
};

export default function Careers() {
  console.log(styles);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    jobInterested: '',
    experienceYears: '',
    experienceMonths: '',
    preferredLocation: '',
    resume: null
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  
  const formRef = useRef(null);
  
  // Debugging: List Supabase Buckets on component mount
  useEffect(() => {
    const checkBuckets = async () => {
      const { data, error } = await supabase.storage.listBuckets();
      if (error) {
        console.error("Error listing buckets:", error);
      } else {
        console.log("Supabase Buckets:", data);
      }
    };
    checkBuckets();
  }, []); // Empty dependency array means it runs once on mount

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === formRef.current) {
            setFormVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentFormRef = formRef.current;

    if (currentFormRef) {
      observer.observe(currentFormRef);
    }

    // Trigger animation after component mounts
    setTimeout(() => setFormVisible(true), 100);

    return () => {
      if (currentFormRef) {
        observer.unobserve(currentFormRef);
      }
    };
  }, []);
  
  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleFileChange = (file) => {
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };
  const handleSubmit = async () => {
  setIsSubmitting(true);
  try {
    let resumeUrl = null;

    if (formData.resume) {
      const filePath = `resumes/${Date.now()}_${formData.resume.name}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('resumes')
        .upload(filePath, formData.resume, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath);

      resumeUrl = urlData.publicUrl;
    }

    const snakeCaseData = {
      full_name: formData.fullName,
      email: formData.email,
      phone_no: formData.phoneNo,
      job_interested: formData.jobInterested,
      experience_years: formData.experienceYears,
      experience_months: formData.experienceMonths,
      preferred_location: formData.preferredLocation,
      resume_url: resumeUrl
    };

    const { data, error } = await supabase
      .from('careers')
      .insert([snakeCaseData]);

    if (error) throw error;

    alert('Application submitted successfully!');
    setFormData({
      fullName: '',
      email: '',
      phoneNo: '',
      jobInterested: '',
      experienceYears: '',
      experienceMonths: '',
      preferredLocation: '',
      resume: null
    });
  } catch (error) {
    console.error('Error submitting application:', error.message || error);
    alert('Error submitting application. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};


  const jobOptions = [
    { value: 'PowerBI-developer', label: 'Power BI Developer' },
    { value: 'tableau-developer', label: 'Tableau Developer' },
    { value: 'microstrategy-developer', label: 'MicroStrategy Developer & Admin' },
    { value: 'sql-developer', label: 'SQL Developer' },
    { value: 'marketing-associate', label: 'Marketing Associate' },
    { value: 'hr-representative', label: 'HR Representative' },
  ];

  const yearOptions = Array.from({ length: 21 }, (_, i) => ({
    value: i.toString(),
    label: i === 0 ? 'Fresher' : `${i} Year${i > 1 ? 's' : ''}`
  }));

  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    value: i.toString(),
    label: `${i} Month${i > 1 ? 's' : ''}`
  }));

  const floatingElements = [];

  return (
    <div 
      className={styles.main}
      style={{
        backgroundImage: 'url("./assets/images/Background image for whole page.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Hero Video Section */}
      <div className={styles.heroSection}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        >
          <source src={landingPageVideo} type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}> 
          <h1 className={styles.heroTitle}>
            Your Talent, Our Technology
          </h1>
          <p className={styles.heroSubtitle}>
            Let's Transform Together
          </p>
          <p className={styles.heroDescription}>
            Find your fit and supercharge progress with our exciting career opportunities
          </p>
           <p style={{ fontSize: "36px", fontWeight: "bold" }}>Apply Now</p>
        </div>
      </div>

      
      <div >
       
        <div 
          ref={formRef} 
          className={`${styles.formContainer} ${formVisible ? styles.formCardVisible : styles.formCardHidden}`}
        >
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            fontFamily: 'Poppins, sans-serif',
            // position: 'relative',
            // paddingTop: window.innerWidth <= 768 ? '0' : '32px',
            // paddingLeft: window.innerWidth <= 768 ? '0' : '50px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
              gap: window.innerWidth <= 768 ? '50px' : '50px'
            }}>
              <label style={{ fontSize: '16px', color: '#ffffff'}}></label>
              <label style={{ fontSize: '16px', color: '#ffffff'}}></label>
              <AnimatedInput
                label="Full Name *"
                value={formData.fullName}
                onChange={handleInputChange('fullName')}
                placeholder="Enter your full name"
              />
              
              <AnimatedInput
                label="Email *"
                type="email"
                value={formData.email}
                onChange={handleInputChange('email')}
                placeholder="Enter your email"
              />
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr',
              gap: window.innerWidth <= 768 ? '50px' : '50px'
            }}>
              <label style={{ fontSize: '16px', color: '#ffffff'}}></label>
              <label style={{ fontSize: '16px', color: '#ffffff'}}></label>
              <AnimatedInput
                label="Phone No *"
                type="tel"
                value={formData.phoneNo}
                onChange={handleInputChange('phoneNo')}
                placeholder="Enter your phone number"
              />
              
              <AnimatedSelect
                label="Job Interested *"
                value={formData.jobInterested}
                onChange={handleInputChange('jobInterested')}
                options={jobOptions}
              />
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '16px', color: '#ffffff'}}>Experience Level *</label>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '50px',
                gridColumn: '1 / -1'
              }}>
                <AnimatedSelect
                  label="Years"
                  value={formData.experienceYears}
                  onChange={handleInputChange('experienceYears')}
                  options={yearOptions}
                />
                
                <AnimatedSelect
                  label="Months"
                  value={formData.experienceMonths}
                  onChange={handleInputChange('experienceMonths')}
                  options={monthOptions}
                />
              </div>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth <= 768 ? '2fr' : 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: window.innerWidth <= 768 ? '50px' : '50px'
            }}>
              <div style={{ width: '100%' }}>
                <AnimatedInput
                  label="Preferred Location *"
                  value={formData.preferredLocation}
                  onChange={handleInputChange('preferredLocation')}
                  placeholder="Enter preferred work location"
                />
              </div>
            </div>
            
            <div style={{ width: '100%' }}>
              <FileUpload
                label="Upload Resume"
                onChange={handleFileChange}
                fileName={formData.resume?.name}
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={styles.submitButton}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div style={{
                position: 'absolute',
                inset: '0',
                background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))',
                opacity: 0.3
              }}></div>
              <span style={{ position: 'relative', zIndex: 1 }}>
                {isSubmitting ? (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      borderTop: '2px solid white',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }}></div>
                    Submitting...
                  </div>
                ) : (
                  'Submit Application'
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      {floatingElements.map((element, i) => (
        <div
          key={i}
          className={styles.floatingElement}
          style={{
            [element.top ? 'top' : 'bottom']: element.top || element.bottom,
            [element.left ? 'left' : 'right']: element.left || element.right,
            width: element.size,
            height: element.size,
            background: element.color,
            animation: element.animation,
            animationDelay: element.delay,
          }}
        />
      ))}
    </div>
  );
}
