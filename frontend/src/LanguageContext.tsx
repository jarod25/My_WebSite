import React, { createContext, useState, useEffect } from 'react';
import getTranslations, { Translations } from './i18n';

export const LanguageContext = createContext<{
    language: string;
    translate: Translations;
    changeLanguage: (code: string) => void;
}>({
    language: 'fr',
    translate: getTranslations('fr'),
    changeLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<string>('fr');
    const [translate, setTranslate] = useState<Translations>(getTranslations('fr'));

    useEffect(() => {
        const browserLanguage = navigator.language.slice(0, 2);
        const savedLanguage = localStorage.getItem('language') || browserLanguage;
        setLanguage(savedLanguage);
        setTranslate(getTranslations(savedLanguage));
    }, []);

    const changeLanguage = (code: string) => {
        setLanguage(code);
        setTranslate(getTranslations(code));
        localStorage.setItem('language', code);
    };

    return (
        <LanguageContext.Provider value={{ language, translate, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
