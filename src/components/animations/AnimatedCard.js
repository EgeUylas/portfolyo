import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  color: #1a1a1a;
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

const CardTag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #15cdfc 0%, #1d78e2 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 0.5rem;
`;

const CardButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.primary ? 'linear-gradient(135deg, #15cdfc 0%, #1d78e2 100%)' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#15cdfc'};
  border: ${props => props.primary ? 'none' : '1px solid #15cdfc'};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-left: ${props => props.primary ? '0' : '0.5rem'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.primary ? '0 4px 12px rgba(21, 205, 252, 0.3)' : 'none'};
  }
`;

const AnimatedCard = ({ 
  image, 
  title, 
  description, 
  tags = [], 
  demoLink, 
  codeLink,
  delay = 0
}) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)'
      }}
    >
      <CardImage>
        <motion.img 
          src={image} 
          alt={title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <div style={{ marginBottom: '1rem' }}>
          {tags.map((tag, index) => (
            <CardTag key={index}>{tag}</CardTag>
          ))}
        </div>
        <CardFooter>
          <CardButton 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            primary
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Demo
          </CardButton>
          <CardButton 
            href={codeLink} 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kod
          </CardButton>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
};

export default AnimatedCard;
