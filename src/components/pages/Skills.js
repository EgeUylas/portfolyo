import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaServer, FaMobile, FaGitAlt, FaFigma, FaPython } from 'react-icons/fa';
import AnimatedText from '../animations/AnimatedText';
import AnimatedSkillBar from '../animations/AnimatedSkillBar';

const SkillsContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SkillsSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 1rem auto 3rem;
  line-height: 1.6;
`;

const SkillsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const SkillsSection = styled(motion.div)`
  margin-bottom: 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #15cdfc, #1d78e2);
    border-radius: 3px;
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  position: relative;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, #15cdfc, #1d78e2);
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #15cdfc;
  background: rgba(21, 205, 252, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
  color: #333;
  font-weight: 600;
`;



const SkillDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LanguageSkillsContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 4rem;
`;

const ToolsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
`;

const ToolItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-color: rgba(21, 205, 252, 0.3);
  }
`;

const ToolIcon = styled.div`
  font-size: 2rem;
  color: #15cdfc;
  margin-bottom: 1rem;
`;

const ToolName = styled.p`
  font-weight: 500;
  color: #333;
`;

const Skills = () => {
  const [technicalRef, technicalInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [languageRef, languageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [toolsRef, toolsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const technicalControls = useAnimation();
  const languageControls = useAnimation();
  const toolsControls = useAnimation();
  
  useEffect(() => {
    if (technicalInView) {
      technicalControls.start('visible');
    }
    if (languageInView) {
      languageControls.start('visible');
    }
    if (toolsInView) {
      toolsControls.start('visible');
    }
  }, [technicalControls, technicalInView, languageControls, languageInView, toolsControls, toolsInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
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
  
  const skills = [
    {
      icon: <FaReact />,
      name: 'React.js',
      description: 'React.js kullanarak tek sayfa uygulamaları (SPA) geliştiriyorum. Redux, Context API, Hooks gibi React ekosistemine hakimim.'
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
      description: 'JavaScript\'in modern özelliklerini kullanarak interaktif web uygulamaları geliştiriyorum. ES6+ özellikleri, asenkron programlama ve DOM manipülasyonu konularında deneyimliyim.'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js',
      description: 'Node.js ile backend uygulamaları geliştiriyorum. Express.js framework\'ü ile RESTful API\'lar oluşturma konusunda deneyimliyim.'
    },
    {
      icon: <FaHtml5 />,
      name: 'HTML5 & CSS3',
      description: 'Modern ve responsive web sayfaları oluşturma konusunda uzmanım. Semantik HTML ve CSS3 özelliklerini kullanarak kullanıcı dostu arayüzler tasarlıyorum.'
    },
    {
      icon: <FaPython />,
      name: 'Python',
      description: 'Python ile veri analizi, web uygulamaları ve otomasyon araçları geliştiriyorum. Django ve Flask gibi frameworkler ile çalışma deneyimim var.'
    },
    {
      icon: <FaMobile />,
      name: 'React Native',
      description: 'React Native kullanarak iOS ve Android için mobil uygulamalar geliştiriyorum. Cross-platform mobil uygulama geliştirme konusunda deneyimliyim.'
    }
  ];
  
  const languages = [
    { name: 'JavaScript', gradient: 'linear-gradient(90deg, #F0DB4F 0%, #F4E085 100%)' },
    { name: 'TypeScript', gradient: 'linear-gradient(90deg, #007ACC 0%, #66B3FF 100%)' },
    { name: 'Python', gradient: 'linear-gradient(90deg, #306998 0%, #FFD43B 100%)' },
    { name: 'PHP', gradient: 'linear-gradient(90deg, #777BB3 0%, #AEB2E0 100%)' },
    { name: 'SQL', gradient: 'linear-gradient(90deg, #F29111 0%, #F6BA62 100%)' },
    { name: 'HTML & CSS', gradient: 'linear-gradient(90deg, #E44D26 0%, #F16529 50%, #264DE4 50%, #2965F1 100%)' }
  ];
  
  const tools = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'VS Code', icon: <FaCode /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'MongoDB', icon: <FaDatabase /> },
    { name: 'AWS', icon: <FaServer /> },
    { name: 'NPM', icon: <FaNpm /> },
    { name: 'Webpack', icon: <FaBox /> }
  ];
  
  return (
    <SkillsContainer>
      <SkillsHeader>
        <AnimatedText 
          text="Neler Yapabilirim?" 
          fontSize="3rem"
          mobileFontSize="2.5rem"
          fontWeight="700"
          color="#333"
        />
        <SkillsSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Geniş bir teknoloji yelpazesinde deneyime sahibim. Modern web teknolojileri kullanarak yaratıcı ve kullanıcı dostu web projeleri ve mobil uygulamalar geliştiriyorum. React Native ile iOS ve Android platformları için cross-platform mobil uygulamalar tasarlıyorum.
        </SkillsSubtitle>
      </SkillsHeader>
      
      <SkillsContent>
        <SkillsSection ref={technicalRef}>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={technicalControls}
            variants={itemVariants}
          >
            Teknik Beceriler
          </SectionTitle>
          
          <SkillsGrid
            variants={containerVariants}
            initial="hidden"
            animate={technicalControls}
          >
            {skills.map((skill, index) => (
              <SkillCard 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
              >
                <SkillHeader>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillInfo>
                    <SkillName>{skill.name}</SkillName>
                  </SkillInfo>
                </SkillHeader>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>
        
        <SkillsSection ref={languageRef}>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={languageControls}
            variants={itemVariants}
          >
            Programlama Dilleri
          </SectionTitle>
          
          <LanguageSkillsContainer
            variants={containerVariants}
            initial="hidden"
            animate={languageControls}
          >
            {languages.map((language, index) => (
              <AnimatedSkillBar 
                key={index}
                name={language.name} 
                delay={index * 0.1}
                gradient={language.gradient}
              />
            ))}
          </LanguageSkillsContainer>
        </SkillsSection>
        
        <SkillsSection ref={toolsRef}>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={toolsControls}
            variants={itemVariants}
          >
            Araçlar & Teknolojiler
          </SectionTitle>
          
          <ToolsGrid
            variants={containerVariants}
            initial="hidden"
            animate={toolsControls}
          >
            {tools.map((tool, index) => (
              <ToolItem 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ToolIcon>{tool.icon}</ToolIcon>
                <ToolName>{tool.name}</ToolName>
              </ToolItem>
            ))}
          </ToolsGrid>
        </SkillsSection>
      </SkillsContent>
    </SkillsContainer>
  );
};

// Missing icons definition
const FaCode = () => <span>💻</span>;
const FaDocker = () => <span>🐳</span>;
const FaNpm = () => <span>📦</span>;
const FaBox = () => <span>📦</span>;

export default Skills;
