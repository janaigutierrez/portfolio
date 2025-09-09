export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-black py-12 border-t border-gray-800">

            {/* Abyssal background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(32, 178, 170, 0.3) 2px, transparent 2px),
                           radial-gradient(circle at 80% 50%, rgba(32, 178, 170, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '100px 60px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white font-bold">
                                JG
                            </div>
                            <h3 className="text-xl font-bold text-white">
                                Janai Gutierrez
                            </h3>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Full Stack Developer exploring the depths of digital innovation.
                            From surface ideas to deep implementations.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Navigation</h4>
                        <div className="flex flex-col space-y-2">
                            <a href="#home" className="text-gray-400 hover:text-sea-green transition-colors text-sm">
                                🏔️ Surface
                            </a>
                            <a href="#about" className="text-gray-400 hover:text-sea-green transition-colors text-sm">
                                🌊 Dive Deep
                            </a>
                            <a href="#projects" className="text-gray-400 hover:text-sea-green transition-colors text-sm">
                                ⚔️ Quest Log
                            </a>
                            <a href="#contact" className="text-gray-400 hover:text-sea-green transition-colors text-sm">
                                ⚓ Deep Connection
                            </a>
                        </div>
                    </div>

                    {/* Tech & Year */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Built With</h4>
                        <div className="text-gray-400 text-sm space-y-1">
                            <p>⚛️ React + Vite</p>
                            <p>🎨 Tailwind CSS</p>
                            <p>🌊 Mediterranean Inspiration</p>
                            <p>💖 Passion for Code</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        {/* Copyright */}
                        <div className="text-gray-500 text-sm">
                            &copy; {currentYear} Janai Gutierrez. Crafted in the depths of creativity.
                        </div>

                        {/* Back to Surface */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium flex items-center space-x-2"
                        >
                            <span>🚀</span>
                            <span>Surface</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}