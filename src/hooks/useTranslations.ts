"use client";

import { useState, useEffect } from 'react';

export function useTranslations() {
  const [messages, setMessages] = useState<any>(null);
  const [locale, setLocale] = useState<string>('tr');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentLocale = document.cookie
      .split('; ')
      .find(row => row.startsWith('NEXT_LOCALE='))
      ?.split('=')[1] || 'tr';

    setLocale(currentLocale);

    // Load translations
    import(`../../messages/${currentLocale}.json`)
      .then(module => setMessages(module.default))
      .catch(() => import(`../../messages/tr.json`).then(module => setMessages(module.default)));
  }, []);

  const t = (key: string) => {
    if (!messages) return '';

    const keys = key.split('.');
    let value = messages;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return '';
      }
    }

    return value || '';
  };

  return { t, locale, mounted };
}
