import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { personalInfo } from '../../data/static'

export default function HeroDive() {
    const [scrollY, setScrollY] = useState(0)
    const { t } = useTranslation()

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const diveDepth = Math.min(scrollY / 300, 1)

    const getWaterOverlay = () => {
        if (diveDepth < 0.2) return 'rgba(72, 202, 228, 0.1)'
        if (diveDepth < 0.5) return 'rgba(32, 178, 170, 0.3)'
        if (diveDepth < 0.8) return 'rgba(25, 118, 146, 0.5)'
        return 'rgba(15, 76, 129, 0.7)'
    }

    return (
        <section id="home" className="relative h-screen overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
                style={{
                    backgroundImage: `url('/background-portfolio.jpg')`,
                    transform: `translateY(${scrollY * 0.5}px) scale(${1 + diveDepth * 0.1})`,
                    filter: `blur(${2 + diveDepth * 8}px) brightness(${1 - diveDepth * 0.4})`,
                }}
            />

            {/* Water overlay */}
            <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                    backgroundColor: getWaterOverlay(),
                    opacity: diveDepth > 0.05 ? 1 : 0
                }}
            />

            {/* Main Content */}
            <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center text-white px-6 max-w-4xl">
                    <h1
                        className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl text-white"
                        style={{
                            opacity: Math.max(0.3, 1 - diveDepth * 1.2),
                            transform: `translateY(${scrollY * -0.1}px)`
                        }}
                    >
                        {personalInfo.name}
                    </h1>

                    <p
                        className="text-xl md:text-2xl mb-8 drop-shadow-lg font-medium"
                        style={{
                            opacity: Math.max(0.2, 1 - diveDepth * 1.3),
                            transform: `translateY(${scrollY * -0.05}px)`
                        }}
                    >
                        {t('hero.subtitle')}
                    </p>

                    <div
                        className="space-y-4"
                        style={{
                            opacity: Math.max(0, 1 - diveDepth * 1.5),
                            transform: `translateY(${scrollY * -0.02}px)`
                        }}
                    >
                        <div className="flex flex-col items-center space-y-3 animate-bounce">
                            <span className="text-lg font-medium">{t('hero.cta')}</span>
                            <ChevronDown className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-900 via-blue-600 to-transparent opacity-90 pointer-events-none"></div>
            <div
                className="absolute left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent pointer-events-none"
                style={{
                    bottom: '-2rem',
                    opacity: 0.8
                }}
            ></div>
        </section>
    )
}