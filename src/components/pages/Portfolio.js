import React, { useState } from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const PortfolioHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PortfolioTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const PortfolioSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#15cdfc' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#333'};
  border: 1px solid ${props => props.active ? '#15cdfc' : '#ddd'};
  padding: 0.5rem 1.5rem;
  margin: 0.5rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#15cdfc' : '#f0f0f0'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  padding: 1.5rem;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;



const ProjectInfo = styled.div`
  width: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
`;

const ProjectCategory = styled.span`
  display: inline-block;
  background: #f0f0f0;
  color: #666;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background: #15cdfc;
  color: #fff;
  border: 1px solid #15cdfc;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #10a8d2;
  }
`;

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'SaatUzay',
      category: 'web',
      description: 'E-ticaret Saat Websitesi. Uzay temalı yenilikçi bir saat konsepti olarak Next.js ile geliştirildi.',
      codeLink: 'https://github.com/EgeUylas/SaatUzay'
    },
    {
      id: 2,
      title: 'Kripto Veri Çekme',
      category: 'veri',
      description: 'Python ile TradingView\'den coin yorumları, beğeni sayıları, görüşleri ve kullanıcı adlarını çekip veri tabanına kaydeden uygulama.',
      codeLink: 'https://github.com/EgeUylas/Kripto_Veri_Cekme'
    },
    {
      id: 3,
      title: 'Tıklama Oyunu',
      category: 'oyun',
      description: 'İki kişinin aynı servera bağlanarak oynayabildiği bir oyun. Belli bir sürede en çok butona tıklayan kazanır. Java\'nın eş zamanlılık özellikleri kullanılmıştır.',
      codeLink: 'https://github.com/EgeUylas/TiklamaOyunu'
    },
    {
      id: 4,
      title: 'Not Uygulaması',
      category: 'web',
      description: 'Kullanıcıların not tutabileceği web tabanlı bir not uygulaması.',
      codeLink: 'https://github.com/EgeUylas/Not-Uygulamas-'
    },
    {
      id: 5,
      title: 'OpenCV Fotoğraf İşleme',
      category: 'veri',
      description: 'Yüklenen fotoğrafları biçimlendiren ve işleyen OpenCV tabanlı uygulama.',
      codeLink: 'https://github.com/EgeUylas/OpenCV'
    },
    {
      id: 6,
      title: 'Kişisel Web Sitesi',
      category: 'web',
      description: 'Kişisel web sitem için geliştirdiğim modern ve responsive tasarım.',
      codeLink: 'https://github.com/EgeUylas/Euwebsite'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <PortfolioContainer>
      <PortfolioHeader>
        <PortfolioTitle>Portfolyo</PortfolioTitle>
        <PortfolioSubtitle>
          Geliştirdiğim bazı projeler. Her bir proje, farklı teknolojiler ve yaklaşımlar kullanılarak oluşturuldu.
        </PortfolioSubtitle>
      </PortfolioHeader>
      
      <FilterContainer>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          Tümü
        </FilterButton>
        <FilterButton 
          active={filter === 'web'} 
          onClick={() => setFilter('web')}
        >
          Web Projeleri
        </FilterButton>
        <FilterButton 
          active={filter === 'veri'} 
          onClick={() => setFilter('veri')}
        >
          Veri Projeleri
        </FilterButton>
        <FilterButton 
          active={filter === 'oyun'} 
          onClick={() => setFilter('oyun')}
        >
          Oyun Projeleri
        </FilterButton>
      </FilterContainer>
      
      <ProjectsGrid>
        {filteredProjects.map(project => (
          <ProjectCard key={project.id}>
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectCategory>
                {project.category === 'web' ? 'Web Projesi' : 
                 project.category === 'veri' ? 'Veri Projesi' : 
                 project.category === 'oyun' ? 'Oyun Projesi' : 'Diğer'}
              </ProjectCategory>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLinks>
                <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                  GitHub Kodu
                </ProjectLink>
              </ProjectLinks>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
