import { useEffect, useState } from 'react'

export default function Hero() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* Hero Section - Costa Brava */}
            <section className="relative h-screen overflow-hidden">

                {/* Background Image - La teva Costa Brava */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/background-portfolio.jpg')`,
                        transform: `translateY(${scrollY * 0.5}px)`
                    }}
                />

                {/* Overlay per readabilitat */}
                <div className="absolute inset-0 bg-black bg-opacity-20" />

                {/* Contingut principal */}
                <div className="relative z-20 h-full flex items-center justify-center">
                    <div className="text-center text-white px-4">

                        <h1
                            className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-2xl"
                            style={{
                                transform: `translateY(${scrollY * -0.1}px)`,
                                opacity: Math.max(0, 1 - scrollY / 400)
                            }}
                        >
                            Janai Gutierrez
                        </h1>

                        <p
                            className="text-xl md:text-2xl mb-8 drop-shadow-lg font-medium"
                            style={{
                                transform: `translateY(${scrollY * -0.05}px)`,
                                opacity: Math.max(0, 1 - scrollY / 500)
                            }}
                        >
                            Desenvolupador que converteix idees en realitat
                        </p>

                        <div
                            style={{
                                transform: `translateY(${scrollY * -0.02}px)`,
                                opacity: Math.max(0, 1 - scrollY / 600)
                            }}
                        >
                            <button
                                className="bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 text-white px-8 py-4 rounded-full hover:bg-opacity-30 transition-all duration-500 hover:scale-105 font-medium text-lg shadow-2xl"
                                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Descobreix el meu món
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator amb tema aquàtic */}
                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-30"
                    style={{
                        opacity: Math.max(0, 1 - scrollY / 200)
                    }}
                >
                    <div className="flex flex-col items-center space-y-2 animate-bounce">
                        <span className="text-sm font-medium drop-shadow">Enfonsa't</span>
                        <div className="text-2xl">🌊</div>
                    </div>
                </div>
            </section>

            {/* Water Transition Section */}
            <section className="relative h-screen overflow-hidden">

                {/* Gradient transició - De superficie a profunditat */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to bottom, 
              rgba(72, 202, 228, 0.8) 0%,
              rgba(32, 178, 170, 0.9) 30%, 
              rgba(25, 118, 146, 0.95) 70%,
              rgba(15, 76, 129, 1) 100%)`
                    }}
                />

                {/* Water texture/pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                    <div className="water-pattern"></div>
                </div>

                {/* Bubble animations */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="bubble"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                animationDuration: `${4 + Math.random() * 3}s`
                            }}
                        />
                    ))}
                </div>

                {/* Floating elements aquàtics */}
                <div className="absolute inset-0">

                    {/* Peix 1 */}
                    <div
                        className="absolute text-4xl"
                        style={{
                            left: '10%',
                            top: '20%',
                            transform: `translateX(${scrollY * 0.1}px) translateY(${Math.sin(scrollY * 0.01) * 20}px)`,
                            color: 'rgba(255, 255, 255, 0.7)'
                        }}
                    >
                        🐠
                    </div>

                    {/* Peix 2 */}
                    <div
                        className="absolute text-3xl"
                        style={{
                            left: '70%',
                            top: '40%',
                            transform: `translateX(${scrollY * -0.08}px) translateY(${Math.sin(scrollY * 0.008 + 1) * 15}px)`,
                            color: 'rgba(255, 255, 255, 0.6)'
                        }}
                    >
                        🐟
                    </div>

                    {/* Peix 3 */}
                    <div
                        className="absolute text-2xl"
                        style={{
                            left: '40%',
                            top: '60%',
                            transform: `translateX(${scrollY * 0.06}px) translateY(${Math.sin(scrollY * 0.012 + 2) * 10}px)`,
                            color: 'rgba(255, 255, 255, 0.5)'
                        }}
                    >
                        🐡
                    </div>

                    {/* Algues */}
                    <div
                        className="absolute bottom-0 left-0 w-full"
                        style={{
                            transform: `translateY(${scrollY * -0.05}px)`
                        }}
                    >
                        <svg className="w-full h-32" viewBox="0 0 1000 150" preserveAspectRatio="none">
                            <path
                                d="M0,150 Q100,100 200,120 T400,110 Q500,90 600,115 T800,105 Q900,85 1000,100 L1000,150 Z"
                                fill="rgba(34, 139, 34, 0.3)"
                            />
                            <path
                                d="M0,150 Q150,80 300,100 T600,95 Q700,75 800,90 T1000,85 L1000,150 Z"
                                fill="rgba(34, 139, 34, 0.4)"
                            />
                        </svg>
                    </div>
                </div>
            </section>

            {/* Underwater About Section */}
            <section
                id="about"
                className="relative min-h-screen py-20 overflow-hidden"
                style={{
                    backgroundImage: `url('/path-to-your-underwater-image.jpg')`, // La teva imatge submarina aquí
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed' // Parallax effect
                }}
            >

                {/* Underwater overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-800 opacity-70" />

                {/* Content */}
                <div className="relative z-20 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                            Sobre mi
                        </h2>

                        <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl p-8 text-white">
                            <p className="text-lg md:text-xl leading-relaxed mb-6">
                                Com el mar mediterrani que ens envolta, la programació té capes de profunditat.
                                Des de la superficie brillant de la interfície fins als fonaments més profunds del backend.
                            </p>

                            <p className="text-lg md:text-xl leading-relaxed">
                                M'encanta explorar cada nivell, descobrir nous ecosistemes digitals i crear
                                experiències que flueixin naturalment, com les corrents marines.
                            </p>
                        </div>
                    </div>
                </div>

                {/* More floating fish */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="fish-school">
                        <span>🐠</span><span>🐟</span><span>🐡</span>
                    </div>
                </div>
            </section>
        </>
    )
}