import React from 'react';
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';

const LanguageSelector: React.FC = () => {
    const { t, i18n } = useTranslation()

    const handleLanguageChange = () => {
        const newLanguage = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR'
        i18n.changeLanguage(newLanguage)
        window.location.reload()
    }

    return (
        <Switch
            checked={i18n.language === 'en-US'}
            onChange={handleLanguageChange}
            color="primary"
            name="languageSwitch"
            inputProps={{ 'aria-label': 'change language' }}
        />
    )
}

export default LanguageSelector
