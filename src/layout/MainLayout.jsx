import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Headers from '../components/Headers';
import Footers from '../components/Footers';

const MainLayout = ({ children }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Headers showHeader={showHeader} />
      <main>{children}</main>
      <Footers />
    </>
  );
};

export default MainLayout;
