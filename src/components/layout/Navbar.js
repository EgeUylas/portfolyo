import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
`;

const Nav = styled(motion.nav)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 10;
  transition: all 0.3s ease;
  max-width: 1400px;
  margin: 0 auto;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(135deg, #15cdfc 0%, #1d78e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion(Link))`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgba(21, 205, 252, 0.1);
  }
  
  &.active {
    color: #15cdfc;
    font-weight: 600;
  }
`;

const NavLinkIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #15cdfc, #1d78e2);
  border-radius: 3px 3px 0 0;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileNavOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileNavMenu = styled(motion.div)`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MobileNavTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const MobileNavClose = styled.button`
  background: transparent;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileNavLink = styled(motion(Link))`
  color: #333;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(21, 205, 252, 0.1);
  }
  
  &.active {
    color: #15cdfc;
    background: rgba(21, 205, 252, 0.1);
    font-weight: 600;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };



  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };



  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };

  const mobileNavVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
  };

  const linkVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } }
  };

  return (
    <NavbarContainer>
      <Nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          padding: scrolled ? '0.5rem 2rem' : '1rem 2rem',
          background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <LogoContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Logo to="/">Portfolyo</Logo>
        </LogoContainer>
        
        <NavMenu>
          <NavLink 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
            variants={linkVariants}
            whileHover="hover"
          >
            Ana sayfa
            {location.pathname === '/' && <NavLinkIndicator layoutId="indicator" />}
          </NavLink>
          
          <NavLink 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
            variants={linkVariants}
            whileHover="hover"
          >
            Ben kimim?
            {location.pathname === '/about' && <NavLinkIndicator layoutId="indicator" />}
          </NavLink>
          
          <NavLink 
            to="/skills" 
            className={location.pathname === '/skills' ? 'active' : ''}
            variants={linkVariants}
            whileHover="hover"
          >
            Neler yapabilirim?
            {location.pathname === '/skills' && <NavLinkIndicator layoutId="indicator" />}
          </NavLink>
          
          <NavLink 
            to="/portfolio" 
            className={location.pathname === '/portfolio' ? 'active' : ''}
            variants={linkVariants}
            whileHover="hover"
          >
            Portfolyo
            {location.pathname === '/portfolio' && <NavLinkIndicator layoutId="indicator" />}
          </NavLink>
          
          <NavLink 
            to="/contact/form" 
            className={location.pathname === '/contact/form' ? 'active' : ''}
            variants={linkVariants}
            whileHover="hover"
          >
            İletişim
            {location.pathname === '/contact/form' && <NavLinkIndicator layoutId="indicator" />}
          </NavLink>
        </NavMenu>
        
        <MobileMenuButton onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </Nav>
      
      <AnimatePresence>
        {isOpen && (
          <MobileNavOverlay
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={toggleMenu}
          >
            <MobileNavMenu
              variants={mobileNavVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <MobileNavHeader>
                <MobileNavTitle>Menü</MobileNavTitle>
                <MobileNavClose onClick={toggleMenu}>
                  <FaTimes />
                </MobileNavClose>
              </MobileNavHeader>
              
              <MobileNavLink 
                to="/"
                className={location.pathname === '/' ? 'active' : ''}
                whileTap={{ scale: 0.95 }}
              >
                Ana sayfa
              </MobileNavLink>
              
              <MobileNavLink 
                to="/about"
                className={location.pathname === '/about' ? 'active' : ''}
                whileTap={{ scale: 0.95 }}
              >
                Ben kimim?
              </MobileNavLink>
              
              <MobileNavLink 
                to="/skills"
                className={location.pathname === '/skills' ? 'active' : ''}
                whileTap={{ scale: 0.95 }}
              >
                Neler yapabilirim?
              </MobileNavLink>
              
              <MobileNavLink 
                to="/portfolio"
                className={location.pathname === '/portfolio' ? 'active' : ''}
                whileTap={{ scale: 0.95 }}
              >
                Portfolyo
              </MobileNavLink>
              
              <MobileNavLink 
                to="/contact/form"
                className={location.pathname === '/contact/form' ? 'active' : ''}
                whileTap={{ scale: 0.95 }}
              >
                İletişim
              </MobileNavLink>
            </MobileNavMenu>
          </MobileNavOverlay>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;
