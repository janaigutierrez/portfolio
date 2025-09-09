import { useState, useEffect } from 'react'

export default function HeroDive() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Calcular profunditat del dive
    const diveDepth = Math.min(scrollY / 600, 1)

    const getWaterOverlay = () => {
        if (diveDepth < 0.2) return 'rgba(72, 202, 228, 0)'
        if (diveDepth < 0.5) return 'rgba(32, 178, 170, 0.2)'
        if (diveDepth < 0.8) return 'rgba(25, 118, 146, 0.4)'
        return 'rgba(15, 76, 129, 0.6)'
    }

    return (
        <section id="home" className="relative h-screen overflow-hidden">

            {/* Background Image amb parallax */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
                style={{
                    backgroundImage: `url('/background-portfolio.jpg')`,
                    transform: `translateY(${scrollY * 0.5}px) scale(${1 + diveDepth * 0.1})`,
                    filter: `blur(${diveDepth * 2}px) brightness(${1 - diveDepth * 0.4})`,
                }}
            />

            {/* Water overlay que apareix al scrollejar */}
            <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                    backgroundColor: getWaterOverlay(),
                    opacity: diveDepth > 0.1 ? 1 : 0
                }}
            />

            {/* Bombolles subtils quan comencem a submergir-nos */}
            {diveDepth > 0.4 && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white bg-opacity-20 rounded-full animate-bubble-rise"
                            style={{
                                left: `${25 + i * 25}%`,
                                width: '4px',
                                height: '4px',
                                animationDelay: `${i * 1.5}s`,
                                animationDuration: '4s'
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Contingut principal */}
            <div className="relative z-20 h-full flex items-center justify-center">
                <div className="text-center text-white px-6 max-w-4xl">

                    <h1
                        className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl"
                        style={{
                            opacity: Math.max(0.3, 1 - diveDepth * 1.2),
                            transform: `translateY(${scrollY * -0.1}px)`
                        }}
                    >
                        Janai Gutierrez
                    </h1>

                    <p
                        className="text-xl md:text-2xl mb-8 drop-shadow-lg font-medium"
                        style={{
                            opacity: Math.max(0.2, 1 - diveDepth * 1.3),
                            transform: `translateY(${scrollY * -0.05}px)`
                        }}
                    >
                        Full Stack Developer & Digital Explorer
                    </p>

                    <div
                        className="space-y-4"
                        style={{
                            opacity: Math.max(0, 1 - diveDepth * 1.5),
                            transform: `translateY(${scrollY * -0.02}px)`
                        }}
                    >
                        <p className="text-lg drop-shadow">
                            Explora el meu món digital
                        </p>

                        {/* Dive instruction */}
                        <div className="flex flex-col items-center space-y-3 animate-bounce">
                            <span className="text-lg font-medium">🌊 Dive into my portfolio</span>
                            <div className="text-2xl">⬇️</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gradient per transició suau */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
        </section>
    )
}