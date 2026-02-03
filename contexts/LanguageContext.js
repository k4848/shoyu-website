'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LanguageContext = createContext();

export const languages = ['ja', 'en', 'ko'];

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children, initialLang }) => {
  const [language, setLanguage] = useState(initialLang || 'ja');
  const pathname = usePathname();

  useEffect(() => {
    // Extract language from pathname
    const pathLang = pathname.split('/')[1];
    if (languages.includes(pathLang)) {
      setLanguage(pathLang);
    }
  }, [pathname]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
