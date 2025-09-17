import { ArrowUp } from 'lucide-react'

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
                {/* Single Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                    {/* Copyright & Legal */}
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                        <div className="text-gray-500 text-sm">
                            &copy; {currentYear} Janai Gutierrez
                        </div>
                        <div className="flex space-x-4">
                            <a href="/privacy" className="text-gray-400 hover:text-sea-green transition-colors text-sm">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-sea-green transition-colors text-sm">
                                Terms of Use
                            </a>
                        </div>
                    </div>

                    {/* Back to Surface */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium flex items-center space-x-2"
                    >
                        <ArrowUp className="w-4 h-4" />
                        <span>Surface</span>
                    </button>
                </div>
            </div>
        </footer>
    )
}