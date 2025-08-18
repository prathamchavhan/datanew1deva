import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';
import landingPageVideo from '../../assets/videos/landing page .mp4';

import dashboard from '../../assets/images/dashboard.png';
import dashboard2 from '../../assets/images/dashboard2.png';
import dashboard3 from '../../assets/images/dashboard3.png';
import dashboard4 from '../../assets/images/dashboard4.png';
import dashboard5 from '../../assets/images/dashboard5.png';
import dashboard6 from '../../assets/images/dashboard6.png';
import dashboard7 from '../../assets/images/dashboard7.png';
import mission from '../../assets/images/mission.png';
import vision from '../../assets/images/vision.png';
import ethic from '../../assets/images/ethic.png';
import DarkRectangle from '../../components/DarkRectangle';
import { useState, useEffect } from 'react';

const { div: MotionDiv, span: MotionSpan, button: MotionButton } = motion;

// All publishers with their corresponding links from PR Links in the PDF
const featuredItems = [
  { name: 'Google', url: '#' },
  { name: 'Yahoo', url: '#' },
  { name: 'The Hindustan Express', url: '#' },
  { name: '123 men Life', url: '#' },
  { name: 'Daily gossip online', url: '#' },
  { name: 'News Eagle India', url: '#' },
  { name: 'Rabale', url: '#' },
  { name: 'India Times News', url: '#' },
  { name: 'Punjab News Update', url: '#' },
  { name: 'India State News', url: '#' },
  { name: 'Indian Press Wire', url: '#' },
  { name: 'Manipur News World', url: '#' },
  { name: 'Indian Pulse Media', url: '#' },
  { name: 'News Wave India', url: '#' },
  { name: 'India Story Line', url: '#' },
  { name: 'Latest News Karnataka', url: '#' },
  { name: 'Nagaland News 24x7', url: '#' },
  { name: 'News Pulse India', url: '#' },
  { name: 'Mizoram News Buzz', url: '#' },
  { name: 'Mizoram News Voice', url: '#' },
  { name: 'Bihar News Watch', url: '#' },
  { name: 'Rajasthan News Time', url: '#' },
  { name: 'Rajasthan Headlines', url: '#' },
  { name: 'Indian press Connect', url: '#' },
  { name: 'Indian News Views', url: '#' },
  { name: 'Odisha News Voice', url: '#' },
  { name: 'Indian Press Coverage', url: '#' },
  { name: 'Latest News Himachal', url: '#' },
  { name: 'Jharkhand News Hub', url: '#' },
  { name: 'Telangana News Spot', url: '#' },
  { name: 'Tamilnadu News Update', url: '#' },
  { name: 'Sikkim News Update', url: '#' },
  { name: 'Maharashtra Portal', url: '#' },
  { name: 'Punjab News Network', url: '#' },
  { name: 'Jammu and Kashmir News Report', url: '#' },
  { name: 'Meghalaya News Daily', url: '#' },
  { name: 'Jharkhand India News Agency', url: '#' },
  { name: 'Karnataka News Network', url: '#' },
  { name: 'Nagaland News Watch', url: '#' },
  { name: 'Odisha News Hour', url: '#' },
  { name: 'Kerala News Journal', url: '#' },
  { name: 'Karnataka News Room', url: '#' },
  { name: 'Sandwich', url: '#' },
  { name: 'Mizoram News Pulse', url: '#' },
  { name: 'Maharashtra NewsFlash', url: '#' },
  { name: 'Madhya Pradesh News Tribune', url: '#' },
  { name: 'New India 24x7', url: '#' },
  { name: 'India Press Buzz', url: '#' },
  { name: 'India press Coverage', url: '#' },
  { name: 'India Bulletin Live', url: '#' },
  { name: 'India Today Daily', url: '#' },
  { name: 'India Buzz News', url: '#' },
  { name: 'Times Of India Daily', url: '#' },
  { name: 'The India Watch', url: '#' },
  { name: 'The News India Now', url: '#' },
  { name: 'India Times Online', url: '#' },
  { name: 'News India Live', url: '#' },
  { name: 'India Wire Channel', url: '#' },
  { name: 'Himachal Pradesh News Flash', url: '#' },
  { name: 'India Today Newsflash', url: '#' },
  { name: 'India Brief Update', url: '#' },
  { name: 'India Global Live', url: '#' },
  { name: 'Indian For Media', url: '#' },
  { name: 'News Indian Link', url: '#' },
  { name: 'Topics oknow', url: '#' },
  { name: 'Buzz Center', url: '#' },
  { name: 'Indian Daily Press', url: '#' },
  { name: 'News India Network', url: '#' },
  { name: 'India Today Times', url: '#' },
  { name: 'India Watch Live', url: '#' },
  { name: 'The experfinds', url: '#' },
  { name: 'Indian Focus News', url: '#' },
  { name: 'Indian Former', url: '#' },
  { name: 'Daily Indiane', url: '#' },
  { name: 'The India Talks', url: '#' },
  { name: 'India 24x7 News', url: '#' },
  { name: 'India News Connect', url: '#' },
  { name: 'The Daily Discover', url: '#' },
  { name: 'India Post Daily', url: '#' },
  { name: 'Haryana News Time', url: '#' },
  { name: 'Discover Weekly', url: '#' },
  { name: 'India Live New Update', url: '#' },
  { name: 'Topics Daily', url: '#' },
  { name: 'India Vibes Media', url: '#' },
  { name: 'India News Wire', url: '#' },
  { name: 'Indian Headline News', url: '#' },
  { name: 'India Buzz Feednews', url: '#' },
  { name: 'District Daily News', url: '#' },
  { name: 'Indian Headline Buzz', url: '#' },
  { name: 'The Indian Post', url: '#' },
  { name: 'Himachal News Report', url: '#' },
  { name: 'State Newz', url: '#' },
  { name: 'India Latest News Feed', url: '#' },
  { name: 'Delhi News Daily', url: '#' },
  { name: 'Daily India Updates', url: '#' },
  { name: 'Indian News Channel', url: '#' },
  { name: 'India Buzz Channel', url: '#' },
  { name: 'News Indian Bulletin', url: '#' },
  { name: 'News Indian Update', url: '#' },
  { name: 'India Breaking News Line', url: '#' },
  { name: 'Buzzing info', url: '#' },
  { name: 'Media Minds', url: '#' },
  { name: 'India News Junction', url: '#' },
  { name: 'Finance Goa Head', url: '#' },
  { name: 'News India Connect', url: '#' },
  { name: 'India latest News Update', url: '#' },
  { name: 'The readers digest', url: '#' },
  { name: 'India Viral Newsnow', url: '#' },
  { name: 'India Mirror News', url: '#' },
  { name: 'Hoist', url: '#' },
  { name: 'Indian Express Newsfeed', url: '#' },
  { name: 'India News Portal', url: '#' },
  { name: 'Patrolling Wire News', url: '#' },
  { name: 'The India Brief', url: '#' },
  { name: 'India Globe Today', url: '#' },
  { name: 'India Live News Today', url: '#' },
  { name: 'India Briefings', url: '#' },
  { name: 'Goa New Time', url: '#' },
  { name: 'India Pulse Update', url: '#' },
  { name: 'News India Web', url: '#' },
  { name: 'News Wires', url: '#' },
  { name: 'Indian Express Update', url: '#' },
  { name: 'Standard News Wire', url: '#' },
  { name: 'My News Today', url: '#' },
  { name: 'Gossip Today', url: '#' },
  { name: 'Expert Arenas', url: '#' },
  { name: 'Indian News Daily Update', url: '#' },
  { name: 'News India Times', url: '#' },
  { name: 'India Buzz Times', url: '#' },
  { name: 'India News Nation', url: '#' },
  { name: 'News Mirror', url: '#' },
  { name: 'India Wire News', url: '#' },
  { name: 'News India Talks', url: '#' },
  { name: 'Indian Express Daily', url: '#' },
  { name: 'Goa News Online', url: '#' },
  { name: 'Indian Express News', url: '#' },
  { name: 'India Breaking Buzz', url: '#' },
  { name: 'Chhattisgarh NewsLine', url: '#' },
  { name: 'News Today99', url: '#' },
  { name: 'Tech Times News', url: '#' },
  { name: 'India Bulletin News', url: '#' },
  { name: 'India Today Live Update', url: '#' },
  { name: 'India Current Affairs', url: '#' },
  { name: 'India Flash Bulletin', url: '#' },
  { name: 'News Indian Line', url: '#' },
  { name: 'Indian News Beat', url: '#' },
  { name: 'News India Point', url: '#' },
  { name: 'India Today Updates', url: '#' },
  { name: 'The Indian Post Online', url: '#' },
  { name: 'India Press Dispatch', url: '#' },
  { name: 'India Flash News', url: '#' },
  { name: 'India Today Headline', url: '#' },
  { name: 'News Indian Pulse', url: '#' },
  { name: 'Top Icsarena', url: '#' },
  { name: 'India Global News', url: '#' },
  { name: 'News India Connectivity', url: '#' },
  { name: 'The India Times Online', url: '#' },
  { name: 'India Flashnewsfeed', url: '#' },
  { name: 'India Watch Daily', url: '#' },
  { name: 'India News Break', url: '#' },
  { name: 'Village Voice News', url: '#' },
  { name: 'India Live News', url: '#' },
  { name: 'daily Street Journal', url: '#' },
  { name: 'Gujarat Watch', url: '#' },
  { name: 'India Tribune Times', url: '#' },
  { name: 'Daily News India Online', url: '#' },
  { name: 'India Wire Media', url: '#' },
  { name: 'India Current Update', url: '#' },
  { name: 'India Press Journal', url: '#' },
  { name: 'Indian News Update', url: '#' },
  { name: 'News India Headline', url: '#' },
  { name: 'India Live News Feed', url: '#' },
  { name: 'India Latest News', url: '#' },
  { name: 'India Reporter Live', url: '#' },
  { name: 'Haryana News Line', url: '#' },
  { name: 'Topics EveryDay', url: '#' },
  { name: 'India World News', url: '#' },
  { name: 'Insider India Times', url: '#' },
  { name: 'Report Today', url: '#' },
  { name: 'Report India', url: '#' },
  { name: 'The Report World', url: '#' },
  { name: 'Nagpur Project News', url: '#' },
  { name: 'The Quick Update', url: '#' },
  { name: 'Weekly News Report', url: '#' },
  { name: 'Business Line Print', url: '#' },
  { name: 'Traveller News India', url: '#' },
  { name: 'Now Report', url: '#' },
  { name: 'Quick News Now', url: '#' },
  { name: 'Latest News Today', url: '#' },
  { name: 'India Globalnews', url: '#' },
  { name: 'Chronicle Today News', url: '#' },
  { name: 'News India', url: '#' },
  { name: 'Report World', url: '#' },
  { name: 'India Forbes News', url: '#' },
  { name: 'Brief Buzz', url: '#' },
  { name: 'The Report Net', url: '#' },
  { name: 'News Today Pro', url: '#' },
  { name: 'Report News', url: '#' },
  { name: 'Andhra News Digest', url: '#' },
  { name: 'Indian World News', url: '#' },
  { name: 'The News Net', url: '#' },
  { name: 'The Daily Glimpse', url: '#' },
  { name: 'Rapid Report', url: '#' },
  { name: 'Story India', url: '#' },
  { name: 'Reach News', url: '#' },
  { name: 'Newz Today 24', url: '#' },
  { name: 'Scroll India News', url: '#' },
  { name: 'Standard Today News', url: '#' },
  { name: 'Insightful News', url: '#' },
  { name: 'Top reads', url: '#' },
  { name: 'Express Times News', url: '#' },
  { name: 'State News Today', url: '#' },
  { name: 'Tripura News Point', url: '#' },
  { name: 'Enrich Daily', url: '#' },
  { name: 'India Career Week', url: '#' },
  { name: 'Post Times News', url: '#' },
  { name: 'Trend sellers', url: '#' },
  { name: 'News Economic India', url: '#' },
  { name: 'Tripura News Central', url: '#' },
  { name: 'ConsumeTrue', url: '#' },
  { name: 'Uttrakhand News Wire', url: '#' }
];

const DashboardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const dashboardImages = [
    { src: dashboard, alt: "Dashboard 1" },
    { src: dashboard2, alt: "Dashboard 2" },
    { src: dashboard3, alt: "Dashboard 3" },
    { src: dashboard4, alt: "Dashboard 4" },
    { src: dashboard5, alt: "Dashboard 5" },
    { src: dashboard6, alt: "Dashboard 6" },
    { src: dashboard7, alt: "Dashboard 7" }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % dashboardImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [dashboardImages.length, isAutoPlaying]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 5 seconds of user interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (  
    <div 
      className={styles.carouselContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {dashboardImages.map((image, index) => (
        <MotionDiv
          key={index}
          className={styles.carouselSlide}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0,
            scale: currentSlide === index ? 1 : 0.8
          }}
          transition={{ duration: 0.5 }}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: currentSlide === index ? 'auto' : 'none'
          }}
        >
          <img 
            src={image.src} 
            alt={image.alt} 
            className={styles.dashboardImage}
            loading="lazy"
          />
        </MotionDiv>
      ))}
      <div className={styles.carouselDots}>
        {dashboardImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const infoCardStyle = {
  
  color: 'white'
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Changed from 768 to 1024
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <MotionDiv 
      id="hero-section"
      className={styles.heroContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      
    >
      <div className={styles.videoOverlay}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src={landingPageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className={styles.heroContent}>
        <div className={styles.topSection}>
          <MotionDiv 
            className={styles.textContent}
            initial={{ y: isMobile ? -20 : -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1>
              Unlock Business Growth with <br />
              Smart Data Analytics & Powerful <br />
              Business Intelligence
            </h1>
            <div style={{ height: "2rem" }}></div>
            <p className={styles.tagline}>
              Data . <MotionSpan className={styles.innovationHighlight}>Innovation</MotionSpan> . Analytics.
            </p>
            <div style={{ height: "1.5rem" }}></div>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <MotionButton 
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </MotionButton>
            </div>
          </MotionDiv>    
        </div>

        <div className={styles.overlapSection}>
          {!isMobile && (
            <MotionDiv 
              className={styles.rectangle80Container}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <DarkRectangle />
            </MotionDiv>
          )}

          <MotionDiv 
            className={styles.dashboard}
            initial={{ 
              scale: 0.9, 
              opacity: 0, 
              x: isMobile ? 0 : -50 
            }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className={styles.dashboardContent}>
              <DashboardCarousel />
            </div>
          </MotionDiv>

          {!isMobile && <div className={styles.verticalSeparator} />}
          
          <MotionDiv 
            className={styles.infoCards}
            initial={{ 
              opacity: 0, 
              x: isMobile ? 0 : 50 
            }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MotionDiv 
              className={styles.infoCard1}
              initial={{ 
                x: isMobile ? 0 : 100, 
                opacity: 0 
              }}
              whileInView={{ 
                x: isMobile ? 0 : -10, 
                opacity: 1 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div 
                className={styles.infoCard}
                style={infoCardStyle}
              >
                <div className={styles.infoCardIcon}>
                  <img src={mission} alt="Mission Icon" className={styles.infoCardIconImage} 
                  style={{ width: "50px", height: "50px"}}/>
                </div>
                <h3>Our Mission</h3>
                <p>To empower businesses with innovative data-driven insights and analytical solutions that drive growth, innovation, and success.</p>
              </div>
            </MotionDiv>
            
            <MotionDiv 
              className={styles.infoCard2}
              initial={{ 
                x: isMobile ? 0 : 100, 
                opacity: 0 
              }}
              whileInView={{ 
                x: isMobile ? 0 : 170, 
                opacity: 1 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div 
                className={styles.infoCard}
                style={infoCardStyle}
              >
                <div className={styles.infoCardIcon}>
                  <img src={vision} alt="vision Icon" className={styles.infoCardIconImage} 
                  style={{ width: "50px", height: "50px" }}/>
                </div>
                <h3>Our Vision</h3>
                <p>To be the leading provider of innovative and comprehensive data analytics solutions that empower our clients to achieve their full potential.</p>
              </div>
            </MotionDiv>
            
            <MotionDiv 
              className={styles.infoCard3}
              initial={{ 
                x: isMobile ? 0 : 100, 
                opacity: 0 
              }}
              whileInView={{ 
                x: isMobile ? 0 : -10, 
                opacity: 1 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div 
                className={styles.infoCard}
                style={infoCardStyle}
              >
                <div className={styles.infoCardIcon}>
                  <img src={ethic} alt="Ethics Icon" className={styles.infoCardIconImage} 
                  style={{ width: "50px", height: "50px" }}/>
                </div>
                <h3>Our Ethics</h3>
                <p>Integrity and accountability guide everything we do. We prioritize data privacy and security while delivering exceptional and ethical data analytics solutions.</p>
              </div>
            </MotionDiv>
          </MotionDiv>
        </div>

        <MotionDiv 
          className={styles.featured}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className={styles.featuredGlassContainer}>
            <div className={styles.featuredContent}>
              <h3>Featured In</h3>
              <div className={styles.featuredVerticalSeparator} />

              <div className={styles.logosContainer}>
                <div className={styles.logosScrollWrapper}>
                  <div className={styles.logos}>
                    {featuredItems.slice(0, featuredItems.length / 2).concat(featuredItems.slice(0, featuredItems.length / 2)).map((item, index) => (
                      <MotionDiv
                        key={`${item.name}-${index}`}
                        className={styles.logo}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            textDecoration: 'none', 
                            color: 'inherit',
                            display: 'block',
                            width: '100%',
                            height: '100%'
                          }}
                        >
                          {item.name}
                        </a>
                      </MotionDiv>
                    ))}
                  </div>
                  <div className={styles.logos2}>
                    {featuredItems.slice(featuredItems.length / 2).concat(featuredItems.slice(featuredItems.length / 2)).map((item, index) => (
                      <MotionDiv
                        key={`${item.name}-${index}`}
                        className={styles.logo}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ 
                            textDecoration: 'none', 
                            color: 'inherit',
                            display: 'block',
                            width: '100%',
                            height: '100%'
                          }}
                        >
                          {item.name}
                        </a>
                      </MotionDiv>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};

export default Hero;
