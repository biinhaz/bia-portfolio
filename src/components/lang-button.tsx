import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        window.location.reload();
    };

    return (
        <select className="bg-pink-500" onChange={handleLanguageChange} value={i18n.language}>
            <option value="pt-BR">{t('app.portuguese')}</option>
            <option value="en-US">{t('app.english')}</option>
        </select>
    );
};

export default LanguageSelector;
