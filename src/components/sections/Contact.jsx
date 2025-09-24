import { useState } from 'react'
import {
    Mail,
    MapPin,
    CheckCircle,
    AlertCircle,
    Zap,
    Github,
    Linkedin,
    Send,
    User,
    MessageSquare,
    Calendar,
    Shield,
    Anchor,
    Share2,
    Quote
} from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import ReviewCard from '../ui/reviewCard.jsx'
import { reviewsData } from '../../data/static'
import emailjs from '@emailjs/browser'


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        projectType: ''
    })
    const { t } = useTranslation()
    const [status, setStatus] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus(null)

        try {
            await emailjs.send(
                'service_yc8urmn',
                'template_lp9qlyn',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'janaigs97@gmail.com'
                },
                'q4Av1ZDegSMZqfhSp'
            )

            setStatus('success')
            setFormData({ name: '', email: '', message: '', projectType: '' })

        } catch (error) {
            console.error('EmailJS Error:', error)
            setStatus('error')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact" className="relative py-20 bg-gradient-to-b from-indigo-900 via-blue-950 to-gray-900">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-800 to-transparent opacity-40"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
                        <Anchor className="mr-4 w-10 h-10" />
                        {t('contact.title')}
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        {t('contact.subtitle')}
                    </p>
                </div>
                {/* Reviews Section */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center">
                        <Quote className="mr-3 w-8 h-8" />
                        {t('reviews.title')}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {reviewsData.map((review) => (
                            <ReviewCard key={review.id} review={review} />
                        ))}
                    </div>
                </div>
                <div className="grid lg:grid-cols-5 gap-8 mb-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sea-green rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <Mail className="mr-3 w-6 h-6" />
                            {t('contact.form.sendMessage')}
                        </h3>
                        {status === 'success' && (
                            <div className="bg-green-900 bg-opacity-50 border border-green-400 rounded-lg p-4 flex items-center mb-6">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                                <span className="text-green-300">Missatge enviat correctament</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="bg-red-900 bg-opacity-50 border border-red-400 rounded-lg p-4 flex items-center mb-6">
                                <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                                <span className="text-red-300">Error enviant el missatge. Prova de nou.</span>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                                        <User className="mr-2 w-4 h-4" />
                                        {t('contact.form.name')}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent transition-colors"
                                        placeholder={t('contact.form.namePlaceholder')}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                                        <Mail className="mr-2 w-4 h-4" />
                                        {t('contact.form.email')}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent transition-colors"
                                        placeholder={t('contact.form.emailPlaceholder')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-300 mb-2">
                                    <MessageSquare className="mr-2 w-4 h-4" />
                                    {t('contact.form.message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent resize-none transition-colors"
                                    placeholder={t('contact.form.messagePlaceholder')}
                                />
                            </div>

                            {/* Timeline & Includes Info */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                                        <Calendar className="mr-2 w-4 h-4" />
                                        {t('contact.timeline.title')}
                                    </h4>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• {t('contact.timeline.landing')}</li>
                                        <li>• {t('contact.timeline.fullWebsite')}</li>
                                        <li>• {t('contact.timeline.ecommerce')}</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                                        <Shield className="mr-2 w-4 h-4" />
                                        {t('contact.includes.title')}
                                    </h4>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• {t('contact.includes.hosting')}</li>
                                        <li>• {t('contact.includes.ssl')}</li>
                                        <li>• {t('contact.includes.responsive')}</li>
                                        <li>• {t('contact.includes.support')}</li>
                                    </ul>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2
        ${isLoading
                                        ? 'bg-gray-600 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-sea-green to-sky-blue hover:opacity-90 hover:scale-105'
                                    } text-white`}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        <span>Enviant...</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="mr-2 w-5 h-5" />
                                        <span>{t('contact.form.sendButton')}</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sky-blue rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <MapPin className="mr-3 w-5 h-5" />
                                {t('contact.info.title')}
                            </h3>

                            <div className="space-y-4">
                                {/* Email */}
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">Email</h4>
                                        <a
                                            href="mailto:janaigs97@gmail.com"
                                            className="text-gray-300 hover:text-sea-green transition-colors text-sm break-all"
                                        >
                                            janaigs97@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* LinkedIn */}
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                                        <Linkedin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">LinkedIn</h4>
                                        <a
                                            href="https://www.linkedin.com/in/janai-gutiérrez-sañudo-8aa2622a0"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-300 hover:text-sea-green transition-colors text-sm"
                                        >
                                            Janai Gutiérrez Sañudo
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">{t('contact.info.location')}</h4>
                                        <p className="text-gray-300 text-sm">Barcelona, Catalunya</p>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">{t('contact.info.status')}</h4>
                                        <p className="text-green-400 font-medium text-sm">{t('contact.info.available')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Response & Work Info */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-purple-400 rounded-xl p-6">
                            <h4 className="font-semibold text-white text-sm mb-3 flex items-center">
                                <Zap className="mr-2 w-4 h-4" />
                                {t('contact.info.responseTitle')}
                            </h4>
                            <p className="text-gray-300 text-xs leading-relaxed mb-4">
                                {t('contact.info.responseText')}
                            </p>

                            <div className="border-t border-gray-700 pt-4">
                                <h4 className="font-semibold text-white text-sm mb-2">{t('contact.workProcess.title')}</h4>
                                <ul className="text-xs text-gray-300 space-y-1">
                                    <li>• {t('contact.workProcess.discovery')}</li>
                                    <li>• {t('contact.workProcess.design')}</li>
                                    <li>• {t('contact.workProcess.development')}</li>
                                    <li>• {t('contact.workProcess.launch')}</li>
                                </ul>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-gray-600 rounded-xl p-6">
                            <h4 className="font-semibold text-white text-sm mb-3 flex items-center">
                                <Share2 className="mr-2 w-4 h-4" />
                                {t('contact.social.title')}
                            </h4>
                            <a
                                href="https://github.com/janaigutierrez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-sea-green rounded-full px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 w-full justify-center"
                            >
                                <Github className="w-4 h-4" />
                                <span className="text-sm">{t('contact.social.github')}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}