import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaGithub, FaFacebook, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  margin-top: 6rem;
  position: relative;
  overflow: hidden;
`;

const FooterWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 120px;
  }
  
  .shape-fill {
    fill: rgba(21, 205, 252, 0.2);
  }
`;

const FooterContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 4rem 2rem 2rem;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  font-weight: 600;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #15cdfc, #1d78e2);
    border-radius: 3px;
    
    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #666;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactIcon = styled.div`
  margin-right: 1rem;
  color: #15cdfc;
  font-size: 1.2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: white;
  color: #333;
  border-radius: 50%;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateY(-3px);
  }
`;

const TwitterIcon = styled(SocialIcon)`
  &:hover {
    background: #1DA1F2;
  }
`;

const GithubIcon = styled(SocialIcon)`
  &:hover {
    background: #333;
  }
`;

const FacebookIcon = styled(SocialIcon)`
  &:hover {
    background: #4267B2;
  }
`;

const FooterBottom = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const Copyright = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const QuickLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const QuickLink = styled.li`
  margin-bottom: 0.8rem;
`;

const QuickLinkAnchor = styled.a`
  color: #666;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
  
  &:hover {
    color: #15cdfc;
    transform: translateX(5px);
  }
  
  &:before {
    content: '→';
    margin-right: 0.5rem;
    opacity: 0;
    transform: translateX(-10px);
    display: inline-block;
    transition: all 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialVariants = {
    hover: { scale: 1.1, rotate: 5 }
  };

  return (
    <FooterContainer>
      <FooterWave>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </FooterWave>
      
      <FooterContent>
        <FooterInner>
          <FooterColumn>
            <FooterTitle>Hakkımızda</FooterTitle>
            <FooterText>
              Profesyonel web tasarım ve geliştirme hizmetleri sunuyoruz. Modern ve kullanıcı dostu web siteleri ile işinizi büyütmenize yardımcı oluyoruz.
            </FooterText>
            <SocialLinks>
              <TwitterIcon 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </TwitterIcon>
              <GithubIcon 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </GithubIcon>
              <FacebookIcon 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </FacebookIcon>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Hızlı Bağlantılar</FooterTitle>
            <QuickLinks>
              <QuickLink>
                <QuickLinkAnchor href="/">Ana Sayfa</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="/about">Hakkımızda</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="/skills">Hizmetler</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="/portfolio">Portfolyo</QuickLinkAnchor>
              </QuickLink>
              <QuickLink>
                <QuickLinkAnchor href="/contact/form">İletişim</QuickLinkAnchor>
              </QuickLink>
            </QuickLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>İletişim Bilgileri</FooterTitle>
            <ContactItem>
              <ContactIcon>
                <FaMapMarkerAlt />
              </ContactIcon>
              <span>İstanbul, Türkiye</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
              <span>+90 555 123 4567</span>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FaEnvelope />
              </ContactIcon>
              <span>info@example.com</span>
            </ContactItem>
          </FooterColumn>
        </FooterInner>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>&copy; {currentYear} Portfolyo. Tüm hakları saklıdır.</Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
