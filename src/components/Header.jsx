import { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm border-b border-gray-200">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gris-carbo">
                        JG
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                            Inici
                        </a>
                        <a href="#about" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                            Sobre mi
                        </a>
                        <a href="#projects" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                            Projectes
                        </a>
                        <a href="#contact" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                            Contacte
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden"
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
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                        <div className="flex flex-col space-y-4">
                            <a href="#home" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                                Inici
                            </a>
                            <a href="#about" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                                Sobre mi
                            </a>
                            <a href="#projects" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                                Projectes
                            </a>
                            <a href="#contact" className="text-gris-carbo hover:text-sea-green transition-colors duration-300">
                                Contacte
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}