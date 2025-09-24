import { useState } from 'react'
import { Globe } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [showLanguages, setShowLanguages] = useState(false)
    const { currentLanguage, changeLanguage, t, availableLanguages } = useTranslation()

    const languageNames = {
        ca: 'CAT',
        es: 'ESP',
        en: 'ENG'
    }

    const handleLanguageChange = (lang) => {
        changeLanguage(lang)
        setShowLanguages(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-white drop-shadow-lg">
                        JG
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-sea-green transition-colors duration-300 font-medium drop-shadow">
                            {t('nav.surface')}
                        </a>
                        <a href="#about" className="text-white hover:text-blue-500 transition-colors duration-300 font-medium drop-shadow">
                            {t('nav.dive')}
                        </a>
                        <a href="#projects" className="text-white hover:text-blue-600 transition-colors duration-300 font-medium drop-shadow">
                            {t('nav.projects')}
                        </a>
                        <a href="#contact" className="text-white hover:text-blue-950 transition-colors duration-300 font-medium drop-shadow">
                            {t('nav.deep')}
                        </a>

                        {/* Language Selector - Desktop */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLanguages(!showLanguages)}
                                className="flex items-center space-x-1 text-white hover:text-sea-green transition-colors duration-300 font-medium drop-shadow"
                            >
                                <Globe size={16} />
                                <span className="text-sm">{languageNames[currentLanguage]}</span>
                            </button>

                            {showLanguages && (
                                <div className="absolute top-full right-0 mt-2 bg-gray-900 bg-opacity-95 backdrop-blur-md border border-gray-600 rounded-lg overflow-hidden shadow-xl">
                                    {availableLanguages.map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => handleLanguageChange(lang)}
                                            className={`block w-full px-4 py-2 text-left hover:bg-gray-800 transition-colors text-sm ${currentLanguage === lang
                                                ? 'bg-sea-green bg-opacity-20 text-sea-green'
                                                : 'text-white'
                                                }`}
                                        >
                                            {languageNames[lang]}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-white border-opacity-20 pt-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#home" className="text-white hover:text-sea-green transition-colors duration-300 font-medium">
                                {t('nav.surface')}
                            </a>
                            <a href="#about" className="text-white hover:text-sea-green transition-colors duration-300 font-medium">
                                {t('nav.dive')}
                            </a>
                            <a href="#projects" className="text-white hover:text-sea-green transition-colors duration-300 font-medium">
                                {t('nav.projects')}
                            </a>
                            <a href="#contact" className="text-white hover:text-sea-green transition-colors duration-300 font-medium">
                                {t('nav.deep')}
                            </a>

                            {/* Language Selector - Mobile */}
                            <div className="pt-4 border-t border-white border-opacity-20">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Globe size={16} className="text-white" />
                                    <span className="text-white text-sm font-medium">{t('nav.language')}:</span>
                                </div>
                                <div className="flex space-x-2">
                                    {availableLanguages.map((lang) => (
                                        <button
                                            key={lang}
                                            onClick={() => handleLanguageChange(lang)}
                                            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${currentLanguage === lang
                                                ? 'bg-sea-green text-white'
                                                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                                }`}
                                        >
                                            {languageNames[lang]}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}