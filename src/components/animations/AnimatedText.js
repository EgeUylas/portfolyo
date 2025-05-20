import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TextContainer = styled(motion.div)`
  overflow: hidden;
  display: inline-block;
`;

const TextWrapper = styled.h1`
  font-size: ${props => props.fontSize || '3rem'};
  font-weight: ${props => props.fontWeight || '700'};
  margin: 0;
  padding: 0;
  color: ${props => props.color || '#1a1a1a'};
  
  @media (max-width: 768px) {
    font-size: ${props => props.mobileFontSize || '2rem'};
  }
`;

const AnimatedText = ({ 
  text, 
  fontSize, 
  mobileFontSize,
  fontWeight,
  color,
  delay = 0,
  duration = 0.05,
  ...props 
}) => {
  // Split text into an array of letters
  const letters = Array.from(text);

  // Variants for container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i }
    })
  };

  // Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <TextContainer
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      <TextWrapper 
        fontSize={fontSize} 
        mobileFontSize={mobileFontSize}
        fontWeight={fontWeight}
        color={color}
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </TextWrapper>
    </TextContainer>
  );
};

export default AnimatedText;
