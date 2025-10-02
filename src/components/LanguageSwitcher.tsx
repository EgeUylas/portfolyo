"use client";

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter, usePathname } from 'next/navigation';

export function LanguageSwitcher() {
  const [locale, setLocale] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Get current locale from cookie
    const currentLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1] || 'tr';
    setLocale(currentLocale);
  }, []);

  const changeLanguage = (newLocale: string) => {
    // Set loading state
    setIsChanging(true);

    // Set cookie
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    setLocale(newLocale);

    // Force full page reload to apply new language
    window.location.reload();
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <StyledWrapper>
        <div className="language-switcher">
          <button className="lang-btn" disabled>
            <img src="/images/tr.png" alt="Türkçe" className="flag-img" />
          </button>
          <button className="lang-btn" disabled>
            <img src="/images/uk.png" alt="English" className="flag-img" />
          </button>
        </div>
      </StyledWrapper>
    );
  }

  return (
    <>
      {isChanging && (
        <LoadingOverlay>
          <div className="loader-container">
            <div className="loader">
              <div className="rocket">🚀</div>
              <div className="speed-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </LoadingOverlay>
      )}
      <StyledWrapper>
        <div className="language-switcher">
          <button
            className={`lang-btn ${locale === 'tr' ? 'active' : ''}`}
            onClick={() => changeLanguage('tr')}
            title="Türkçe"
            disabled={isChanging}
          >
            <img src="/images/tr.png" alt="Türkçe" className="flag-img" />
          </button>
          <button
            className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
            title="English"
            disabled={isChanging}
          >
            <img src="/images/uk.png" alt="English" className="flag-img" />
          </button>
        </div>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  .language-switcher {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .lang-btn {
    background: transparent;
    border: 2px solid rgba(21, 205, 252, 0.2);
    border-radius: 8px;
    padding: 6px 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.6;

    &:hover {
      border-color: rgba(21, 205, 252, 0.5);
      opacity: 1;
      transform: scale(1.05);
    }

    &.active {
      border-color: #15cdfc;
      background: rgba(21, 205, 252, 0.1);
      opacity: 1;
    }
  }

  .flag {
    font-size: 20px;
    line-height: 1;
  }

  .flag-img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .loader-container {
    text-align: center;
  }

  .loader {
    position: relative;
    display: inline-block;
  }

  .rocket {
    font-size: 80px;
    animation: rocketFly 1.5s ease-in-out infinite;
    display: inline-block;
    transform-origin: center;
  }

  @keyframes rocketFly {
    0%, 100% {
      transform: translateY(0) rotate(-45deg);
    }
    50% {
      transform: translateY(-30px) rotate(-45deg);
    }
  }

  .speed-lines {
    position: absolute;
    top: 50%;
    left: -40px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .line {
    height: 3px;
    background: linear-gradient(to right, transparent, #15cdfc, transparent);
    border-radius: 2px;
    animation: speedLine 1s ease-in-out infinite;
  }

  .line:nth-child(1) {
    width: 40px;
    animation-delay: 0s;
  }

  .line:nth-child(2) {
    width: 50px;
    animation-delay: 0.1s;
  }

  .line:nth-child(3) {
    width: 35px;
    animation-delay: 0.2s;
  }

  @keyframes speedLine {
    0% {
      opacity: 0;
      transform: translateX(20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-20px);
    }
  }
`;
