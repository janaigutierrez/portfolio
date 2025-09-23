import { ArrowUp } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const { t } = useTranslation()

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-black py-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                    <div className="text-gray-500 text-sm">
                        &copy; {currentYear} Janai Gutiérrez.
                    </div>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 text-sm font-medium flex items-center space-x-2 hover:scale-105"
                    >
                        <ArrowUp className="w-4 h-4" />
                        <span>{t('footer.surface')}</span>
                    </button>
                </div>
            </div>
        </footer>
    )
}