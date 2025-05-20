import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const SkillBarContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: #1a1a1a;
`;

const SkillPercentage = styled.span`
  color: #666;
`;

const ProgressBarContainer = styled.div`
  height: 10px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

const ProgressBarFill = styled(motion.div)`
  height: 100%;
  background: ${props => props.gradient || 'linear-gradient(90deg, #15cdfc 0%, #1d78e2 100%)'};
  border-radius: 10px;
  width: ${props => props.percentage}%;
`;

const AnimatedSkillBar = ({ name, percentage = 100, delay = 0, gradient }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      controls.start({
        width: `${percentage}%`,
        transition: { 
          duration: 1.5, 
          delay, 
          ease: [0.6, 0.05, -0.01, 0.9] 
        }
      });
    }
  }, [controls, inView, percentage, delay]);

  return (
    <SkillBarContainer ref={ref}>
      <SkillInfo>
        <SkillName>{name}</SkillName>
        {percentage && (
          <SkillPercentage>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: delay + 0.5 }}
            >
              {percentage}%
            </motion.span>
          </SkillPercentage>
        )}
      </SkillInfo>
      <ProgressBarContainer>
        <ProgressBarFill
          initial={{ width: 0 }}
          animate={controls}
          gradient={gradient}
        />
      </ProgressBarContainer>
    </SkillBarContainer>
  );
};

export default AnimatedSkillBar;
