import { Link } from 'react-router-dom'
import { Anchor, ArrowLeft } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'

export default function NotFound() {
    const { t } = useTranslation()

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-6">
            <div className="text-center max-w-md">
                <Anchor className="w-16 h-16 text-sea-green mx-auto mb-6 opacity-60" aria-hidden="true" />
                <h1 className="text-8xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-gray-300 mb-8">
                    {t('general.notFound') !== 'general.notFound'
                        ? t('general.notFound')
                        : "Aquesta pàgina s'ha perdut al fons de l'oceà."}
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center bg-gradient-to-r from-sea-green to-sky-blue text-white px-6 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 font-medium"
                >
                    <ArrowLeft className="mr-2 w-5 h-5" aria-hidden="true" />
                    {t('general.backHome') !== 'general.backHome'
                        ? t('general.backHome')
                        : 'Tornar a la superfície'}
                </Link>
            </div>
        </div>
    )
}
