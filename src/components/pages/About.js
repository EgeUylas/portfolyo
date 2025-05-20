import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    object-fit: cover;
  }
`;

const AboutText = styled.div`
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    color: #1a1a1a;
  }
  p {
    margin-bottom: 1.2rem;
    line-height: 1.6;
    color: #444;
  }
`;

const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
`;

const StatItem = styled.div`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);

  h4 {
    font-size: 1.3rem;
    color: #15cdfc;
    margin-bottom: 0.5rem;
  }
  p {
    color: #666;
    font-size: 1rem;
    margin: 0;
    line-height: 1.5;
  }
`;

const About = () => (
  <AboutContainer>
    <AboutHeader>
      <AboutTitle>Ben Kimim?</AboutTitle>
      <AboutSubtitle>
        Tutkulu bir web geliştiricisi olarak, yaratıcı ve kullanıcı dostu dijital deneyimler oluşturmaya odaklanıyorum.
      </AboutSubtitle>
    </AboutHeader>
    <AboutContent>
      <AboutImage>
        <img
          src="/profil.jpg"
          alt="Ege Uylaş Profil Fotoğrafı"
          loading="lazy"
        />
      </AboutImage>
      <AboutText>
        <h2>Merhaba, Ben Ege Uylaş</h2>
        <p>
          Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Web geliştirme ve yazılım mimarisi alanlarına ilgi duyuyorum. React ve JavaScript ile projeler geliştirdim, C# ve Python dillerinde nesne yönelimli programlama konularında deneyim sahibiyim. Firebase gibi teknolojilerle backend tarafına ilgi duyuyorum. Takım çalışmasına yatkın, öğrenmeye açık bir yazılımcı olarak teknik becerilerimi yenilikçi projelerle geliştirmeyi hedefliyorum.
        </p>
        <p>
          <strong>Eğitim:</strong><br />
          Balıkesir Üniversitesi (2021 - 2025)<br />
          Cemil Meriç Anadolu Lisesi (2017 - 2021)
        </p>
        <p>
          <strong>İlgi Alanları:</strong> Yapay Zeka, Web Arayüz Tasarımı, Veri Güvenliği, Yeni teknolojiler keşfetmek
        </p>
        <p>
          <strong>Bağlantılar:</strong><br />
          <a href="https://github.com/EgeUylas" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/ege-uylas-682030273" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </AboutText>
    </AboutContent>
    <AboutStats>
      <StatItem>
        <h4>Staj</h4>
        <p>
          <strong>Ege Linyitleri İşletmesi Müdürlüğü (ELİ), MANİSA—2024</strong><br />
          - React.js ile modern web uygulaması geliştirme<br />
          - Firebase ile kimlik doğrulama ve veritabanı yönetimi<br />
          - Responsive ve kullanıcı dostu arayüz tasarımı<br />
          - UI/UX prensiplerine uygun işlevsel arayüz<br />
          - Sürüm kontrolü için Git ve GitHub kullanımı
        </p>
      </StatItem>
      <StatItem>
        <h4>Teknik Beceriler</h4>
        <p>
          <strong>Diller:</strong> Python, C#, JavaScript, Java, TypeScript, SQL<br />
          <strong>Frameworkler & Teknolojiler:</strong> React.js, Firebase, OpenCV<br />
          <strong>Yöntemler:</strong> Nesne Yönelimli Programlama, Temel UI/UX
        </p>
      </StatItem>
      <StatItem>
        <h4>Diller</h4>
        <p>İngilizce</p>
      </StatItem>
    </AboutStats>
  </AboutContainer>
);

export default About;
