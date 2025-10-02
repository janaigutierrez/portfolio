import { createContext, useContext, useState } from 'react'
import caTranslations from '../data/translations/ca'
import esTranslations from '../data/translations/es'
import enTranslations from '../data/translations/en'

const TranslationContext = createContext()

const translations = {
    ca: caTranslations,
    es: esTranslations,
    en: enTranslations
}

export function TranslationProvider({ children }) {
    // Default: català
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        return localStorage.getItem('preferred-language') || 'ca'
    })

    // Funció per traduir
    const t = (key) => {
        const keys = key.split('.')
        let value = translations[currentLanguage]

        // Navega per l'objecte seguint les claus
        for (const k of keys) {
            value = value?.[k]
        }

        // Si no troba la traducció, intenta en català com a fallback
        if (value === undefined && currentLanguage !== 'ca') {
            let fallback = translations.ca
            for (const k of keys) {
                fallback = fallback?.[k]
            }
            return fallback || key
        }

        return value || key // Retorna la clau si no troba res
    }

    // Funció per canviar idioma
    const changeLanguage = (lang) => {
        if (translations[lang]) {
            setCurrentLanguage(lang)
            localStorage.setItem('preferred-language', lang)
        }
    }

    return (
        <TranslationContext.Provider value={{
            currentLanguage,
            changeLanguage,
            t,
            availableLanguages: ['ca', 'es', 'en']
        }}>
            {children}
        </TranslationContext.Provider>
    )
}

// Hook principal
export function useTranslation() {
    const context = useContext(TranslationContext)
    if (!context) {
        throw new Error('useTranslation must be used within a TranslationProvider')
    }
    return context
}