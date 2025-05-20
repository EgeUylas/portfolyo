import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import AnimatedText from '../animations/AnimatedText';
import { FaCode, FaPalette, FaMobileAlt, FaRocket, FaUserAstronaut, FaLaptopCode } from 'react-icons/fa';

const HomeContainer = styled.div`
  overflow: hidden;
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding-top: 4rem;
  }
`;

const HeroContent = styled(motion.div)`
  flex: 1;
  max-width: 600px;
  z-index: 1;
  
  @media (max-width: 768px) {
    order: 2;
    margin-top: 2rem;
  }
`;

const HeroImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled(motion.div)`
  width: 450px;
  height: 450px;
  background: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80');
  background-size: cover;
  background-position: center;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(21, 205, 252, 0.3) 0%, rgba(29, 120, 226, 0.3) 100%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  margin: 1.5rem 0 2.5rem;
  line-height: 1.6;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion(Link))`
  background: linear-gradient(135deg, #15cdfc 0%, #1d78e2 100%);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(21, 205, 252, 0.3);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover:before {
    left: 100%;
  }
`;

const SecondaryButton = styled(motion(Link))`
  background: transparent;
  color: #333;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #15cdfc;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #15cdfc 0%, #1d78e2 100%);
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.5s ease-out;
  }
  
  &:hover {
    color: white;
  }
  
  &:hover:before {
    transform: scaleX(1);
  }
`;

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  position: relative;
`;

const FeaturesSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const FeaturesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #15cdfc, #1d78e2);
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIconContainer = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(21, 205, 252, 0.1) 0%, rgba(29, 120, 226, 0.1) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #15cdfc;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    border: 2px dashed rgba(21, 205, 252, 0.3);
    animation: rotate 20s linear infinite;
  }
  
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Home = () => {
  const heroImageRef = useRef(null);
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const featuresControls = useAnimation();
  const statsControls = useAnimation();
  
  useEffect(() => {
    if (featuresInView) {
      featuresControls.start('visible');
    }
    if (statsInView) {
      statsControls.start('visible');
    }
  }, [featuresControls, featuresInView, statsControls, statsInView]);
  
  useEffect(() => {
    // Animate the hero image blob shape
    const heroImage = heroImageRef.current;
    if (heroImage) {
      const timeline = gsap.timeline({ repeat: -1, yoyo: true });
      timeline.to(heroImage, {
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        duration: 8,
        ease: 'sine.inOut'
      });
      timeline.to(heroImage, {
        borderRadius: '40% 60% 70% 30% / 50% 60% 30% 60%',
        duration: 8,
        ease: 'sine.inOut'
      });
      timeline.to(heroImage, {
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        duration: 8,
        ease: 'sine.inOut'
      });
    }
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };
  
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };
  
  const countingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <AnimatedText 
            text="Modern Web Çözümleri" 
            fontSize="3.5rem"
            mobileFontSize="2.5rem"
            fontWeight="700"
            color="#333"
          />
          <AnimatedText 
            text="Yaratıcı & Profesyonel" 
            fontSize="2.5rem"
            mobileFontSize="1.8rem"
            fontWeight="600"
            color="#15cdfc"
            delay={0.3}
          />
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Kişisel portfolyo sayfama hoş geldiniz. Modern web teknolojileri kullanarak yaratıcı ve kullanıcı dostu dijital deneyimler tasarlıyorum.
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <PrimaryButton 
              to="/portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket /> Portfolyomu Görüntüle
            </PrimaryButton>
            <SecondaryButton 
              to="/contact/form"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUserAstronaut /> İletişime Geç
            </SecondaryButton>
          </HeroButtons>
        </HeroContent>
        
        <HeroImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <HeroImage ref={heroImageRef} />
        </HeroImageContainer>
      </HeroSection>
      
      <FeaturesSection ref={featuresRef}>
        <FeaturesSectionHeader>
          <AnimatedText 
            text="Neler Sunuyorum" 
            fontSize="2.5rem"
            mobileFontSize="2rem"
            fontWeight="700"
            color="#333"
          />
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ maxWidth: '700px', margin: '1rem auto' }}
          >
            Modern teknolojiler kullanarak müşterilerimin ihtiyaçlarına özel çözümler üretiyorum.
          </HeroSubtitle>
        </FeaturesSectionHeader>
        
        <FeaturesContainer
          variants={containerVariants}
          initial="hidden"
          animate={featuresControls}
        >
          <FeatureCard custom={0} variants={cardVariants}>
            <FeatureIconContainer>
              <FaPalette />
            </FeatureIconContainer>
            <FeatureTitle>UI/UX Tasarımı</FeatureTitle>
            <FeatureDescription>
              Kullanıcı odaklı, modern ve estetik arayüzler tasarlıyorum. Her detayı düşünerek en iyi kullanıcı deneyimini sunuyorum.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard custom={1} variants={cardVariants}>
            <FeatureIconContainer>
              <FaCode />
            </FeatureIconContainer>
            <FeatureTitle>Web Geliştirme</FeatureTitle>
            <FeatureDescription>
              Modern frontend teknolojileri (React, Vue) ve backend çözümleri ile tam kapsamlı web uygulamaları geliştiriyorum.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard custom={2} variants={cardVariants}>
            <FeatureIconContainer>
              <FaMobileAlt />
            </FeatureIconContainer>
            <FeatureTitle>Mobil Uygulamalar</FeatureTitle>
            <FeatureDescription>
              React Native ile iOS ve Android platformları için native hissiyatlı, performanslı mobil uygulamalar geliştiriyorum.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard custom={3} variants={cardVariants}>
            <FeatureIconContainer>
              <FaLaptopCode />
            </FeatureIconContainer>
            <FeatureTitle>Responsive Tasarım</FeatureTitle>
            <FeatureDescription>
              Tüm cihazlarda mükemmel görünen, mobil uyumlu web siteleri ve uygulamalar tasarlıyorum.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesContainer>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home;
