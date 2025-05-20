import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: #15cdfc;
`;

const ContactText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #1a1a1a;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const ContactForm = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #15cdfc;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #15cdfc;
  }
`;

const SubmitButton = styled.button`
  background: #15cdfc;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #10a8d2;
  }
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Lütfen tüm zorunlu alanları doldurun.'
      });
      return;
    }
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <ContactContainer>
      <ContactHeader>
        <ContactTitle>İletişim</ContactTitle>
        <ContactSubtitle>
          Herhangi bir soru veya proje fikriniz mi var? Benimle iletişime geçmekten çekinmeyin.
        </ContactSubtitle>
      </ContactHeader>
      
      <ContactContent>
        <ContactInfo>
          <ContactInfoTitle>İletişim Bilgileri</ContactInfoTitle>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>
              <h4>Email</h4>
              <p>egeuylas19013@gmail.com</p>
            </ContactText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaPhone />
            </ContactIcon>
            <ContactText>
              <h4>Telefon</h4>
              <p>+90 555 555 5555</p>
            </ContactText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <ContactText>
              <h4>Adres</h4>
              <p>Balıkesir, Türkiye</p>
            </ContactText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <ContactText>
              <h4>Sosyal</h4>
              <p>
                <a href="https://github.com/EgeUylas" target="_blank" rel="noopener noreferrer">GitHub</a> <br/>
                <a href="https://www.linkedin.com/in/ege-uylas-682030273" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
            </ContactText>
          </ContactInfoItem>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          {formStatus.submitted && formStatus.success && (
            <SuccessMessage>{formStatus.message}</SuccessMessage>
          )}
          
          {formStatus.submitted && !formStatus.success && (
            <ErrorMessage>{formStatus.message}</ErrorMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name">Ad Soyad *</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email *</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Konu</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">İçerik *</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <SubmitButton type="submit">Gönder</SubmitButton>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
