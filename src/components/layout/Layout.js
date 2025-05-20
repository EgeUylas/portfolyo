import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styled from 'styled-components';
import AnimatedBackground from '../animations/AnimatedBackground';

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
`;

const Main = styled.main`
  min-height: calc(100vh - 160px);
  padding: 8rem 2rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <BackgroundWrapper>
        <AnimatedBackground />
      </BackgroundWrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
