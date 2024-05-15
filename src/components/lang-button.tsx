import React from 'react';
import { useTranslation } from 'react-i18next';
import BrazilFlag from '../assets/brazil-flag.png';
import UsFlag from '../assets/us-flag.png';

const LanguageSwitch: React.FC = () => {
    const { i18n } = useTranslation()

    const handleLanguageChange = (language: string) => {
        i18n.changeLanguage(language);
        window.location.reload();
    }

    return (
        <div className="flex items-center justify-center space-x-4">
            {i18n.language === 'en-US' ? (
                <>
                    <img
                        src={BrazilFlag}
                        alt="Brazil Flag"
                        className="w-8 h-8 cursor-pointer"
                        onClick={() => handleLanguageChange('pt-BR')}
                    />
                    <img
                        src={UsFlag}
                        alt="US Flag"
                        className="w-8 h-8 cursor-pointer opacity-50"
                        onClick={() => handleLanguageChange('en-US')}
                    />
                </>
            ) : (
                <>
                    <img
                        src={BrazilFlag}
                        alt="Brazil Flag"
                        className="w-8 h-8 cursor-pointer opacity-50"
                        onClick={() => handleLanguageChange('pt-BR')}
                    />
                    <img
                        src={UsFlag}
                        alt="US Flag"
                        className="w-8 h-8 cursor-pointer"
                        onClick={() => handleLanguageChange('en-US')}
                    />
                </>
            )}
        </div>
    )
}

export default LanguageSwitch;
