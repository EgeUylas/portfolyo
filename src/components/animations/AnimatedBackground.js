import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.color || 'rgba(21, 205, 252, 0.1)'};
  filter: blur(${props => props.blur || '20px'});
`;

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const circlesRef = useRef([]);

  useEffect(() => {
    // Create circles
    const numCircles = 8;
    const container = containerRef.current;
    circlesRef.current = [];

    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.style.position = 'absolute';
      circle.style.borderRadius = '50%';
      circle.style.opacity = Math.random() * 0.5 + 0.1;
      
      // Assign random colors with a blue/teal theme
      const colors = [
        'rgba(21, 205, 252, 0.2)',
        'rgba(16, 168, 210, 0.2)',
        'rgba(10, 147, 190, 0.2)',
        'rgba(8, 126, 164, 0.2)',
        'rgba(5, 105, 138, 0.2)'
      ];
      
      circle.style.background = colors[Math.floor(Math.random() * colors.length)];
      circle.style.filter = `blur(${Math.random() * 30 + 10}px)`;
      
      // Random size
      const size = Math.random() * 300 + 100;
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      
      // Random position
      circle.style.left = `${Math.random() * 100}%`;
      circle.style.top = `${Math.random() * 100}%`;
      
      container.appendChild(circle);
      circlesRef.current.push(circle);
    }

    // Animate circles
    circlesRef.current.forEach(circle => {
      animateCircle(circle);
    });

    return () => {
      // Cleanup
      circlesRef.current.forEach(circle => {
        if (circle.parentNode === container) {
          container.removeChild(circle);
        }
      });
    };
  }, []);

  const animateCircle = (circle) => {
    const duration = Math.random() * 20 + 10;
    
    gsap.to(circle, {
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      duration: duration,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
    
    gsap.to(circle, {
      opacity: Math.random() * 0.3 + 0.1,
      duration: duration / 2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  };

  return <BackgroundContainer ref={containerRef} />;
};

export default AnimatedBackground;
