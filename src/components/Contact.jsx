import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Message sent:', formData)
        alert('Missatge enviat des del fons del mar! 🌊')
        setFormData({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="relative min-h-screen py-20 bg-gradient-to-b from-indigo-900 via-blue-950 to-gray-900">

            {/* Sea Bottom Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Sea floor */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>

                {/* Anchor decoration */}
                <div className="absolute bottom-10 left-10 text-6xl text-gray-600 opacity-30 transform rotate-12">
                    ⚓
                </div>

                {/* Treasure chest */}
                <div className="absolute bottom-8 right-16 text-4xl text-yellow-600 opacity-40">
                    📦
                </div>

                {/* Subtle seaweed */}
                <div className="absolute bottom-0 left-1/4 text-2xl text-green-800 opacity-30">
                    🌿
                </div>
                <div className="absolute bottom-0 right-1/3 text-3xl text-green-700 opacity-25">
                    🌿
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                        <span className="mr-4">⚓</span>Deep Connection
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Has arribat al fons del mar del meu portfolio. Aquí és on les idees més profundes prenen forma.
                        Connectem i creem quelcom extraordinari junts.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Form */}
                    <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sea-green rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="mr-3">📧</span> Send Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent transition-colors"
                                    placeholder="El teu nom"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent transition-colors"
                                    placeholder="el.teu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Missatge
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent resize-none transition-colors"
                                    placeholder="Explica'm la teva idea o projecte... Fins i tot al fons del mar, les millors idees surten a la superfície!"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-sea-green to-sky-blue text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium hover:scale-105"
                            >
                                <span className="mr-2">🚀</span> Launch Message to Surface
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Stats */}
                    <div className="space-y-8">

                        {/* Contact Methods */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sky-blue rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="mr-3">🗺️</span> Navigation Coordinates
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white text-xl">
                                        📧
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Email</h4>
                                        <p className="text-gray-300">janai@example.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white text-xl">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Base Location</h4>
                                        <p className="text-gray-300">Tarragona, Catalunya</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white text-xl">
                                        🕐
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Timezone</h4>
                                        <p className="text-gray-300">CET (UTC+1)</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-gradient-to-r from-sea-green to-sky-blue rounded-full flex items-center justify-center text-white text-xl">
                                        💼
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Status</h4>
                                        <p className="text-green-400 font-medium">Available for Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deep Stats */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-yellow-400 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="mr-3">📊</span> Deep Sea Stats
                            </h3>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400">4+</div>
                                    <div className="text-sm text-gray-300">Projects Completed</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-400">100%</div>
                                    <div className="text-sm text-gray-300">Client Satisfaction</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-400">24h</div>
                                    <div className="text-sm text-gray-300">Avg Response Time</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400">∞</div>
                                    <div className="text-sm text-gray-300">Creative Ideas</div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-purple-400 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <span className="mr-3">🌐</span> Surface Links
                            </h3>

                            <div className="flex justify-center space-x-6">
                                <button className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-sea-green transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </button>
                                <button className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-sea-green transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>
                                <button className="w-12 h-12 bg-gray-800 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-sea-green transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}