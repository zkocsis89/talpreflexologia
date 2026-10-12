import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { translations, type Language, type TranslationSet } from '../data/translations';

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationSet;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem('site-language');
    return savedLanguage === 'de' ? 'de' : 'hu';
  });

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem('site-language', nextLanguage);
    setLanguageState(nextLanguage);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage csak LanguageProvideren belül használható.');
  }
  return context;
}
