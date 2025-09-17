import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-white drop-shadow-lg">
                        JG
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-white hover:text-sea-green transition-colors duration-300 font-medium drop-shadow">
                            Surface
                        </a>
                        <a href="#about" className="text-white hover:text-blue-500 transition-colors duration-300 font-medium drop-shadow">
                            Dive
                        </a>
                        <a href="#projects" className="text-white hover:text-blue-600 transition-colors duration-300 font-medium drop-shadow">
                            Projects
                        </a>
                        <a href="#contact" className="text-white hover:text-blue-950 transition-colors duration-300 font-medium drop-shadow">
                            Deep
                        </a>
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
                                Surface
                            </a>
                            <a href="#about" className="text-white hover:text-sea-green transition-colors duration-300 font-medium">
                                Dive
                            </a>
                            <a href="#projects" className="text-white hover:text-sea-green transition-colors duration-300 font-medium">
                                Projects
                            </a>
                            <a href="#contact" className="text-white hover:text-sea-green transition-colors duration-300 font-medium">
                                Deep
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}