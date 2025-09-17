import { useState } from 'react'
import {
    Mail,
    MapPin,
    Clock,
    CheckCircle,
    Zap,
    Github,
    Linkedin,
    Send,
    User,
    MessageSquare,
    Calendar,
    Shield,
    Anchor,
    Share2
} from 'lucide-react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        projectType: ''
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
        alert('Message sent from the depths of the sea!')
        setFormData({ name: '', email: '', message: '', projectType: '' })
    }

    return (
        <section id="contact" className="relative py-20 bg-gradient-to-b from-indigo-900 via-blue-950 to-gray-900">
            {/* Sea Bottom */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-800 to-transparent opacity-40"></div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center">
                        <Anchor className="mr-4 w-10 h-10" />
                        Deep Connection
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        The dive ends here. The next project starts now.
                    </p>

                </div>

                <div className="grid lg:grid-cols-5 gap-8 mb-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-3 bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sea-green rounded-xl p-8">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <Mail className="mr-3 w-6 h-6" />
                            Send Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                                        <User className="mr-2 w-4 h-4" />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                                        <Mail className="mr-2 w-4 h-4" />
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
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                                    <MessageSquare className="mr-2 w-4 h-4" />
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent resize-none transition-colors"
                                    placeholder="Tell me about your project or idea..."
                                />
                            </div>

                            {/* Timeline & Includes Info */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                                        <Calendar className="mr-2 w-4 h-4" />
                                        Typical Timeline
                                    </h4>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• Landing/Personal: 1-2 weeks</li>
                                        <li>• Full Website: 3-4 weeks</li>
                                        <li>• E-commerce/SaaS: 6-8 weeks</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 rounded-lg p-4">
                                    <h4 className="text-sm font-medium text-white mb-2 flex items-center">
                                        <Shield className="mr-2 w-4 h-4" />
                                        Always Included
                                    </h4>
                                    <ul className="text-xs text-gray-300 space-y-1">
                                        <li>• Free hosting</li>
                                        <li>• SSL certificate</li>
                                        <li>• Responsive design</li>
                                        <li>• Post-launch support</li>
                                    </ul>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-sea-green to-sky-blue text-white py-3 px-6 rounded-lg hover:opacity-90 transition-all duration-300 font-medium hover:scale-105 flex items-center justify-center"
                            >
                                <Send className="mr-2 w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Contact Info Principal */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sky-blue rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                <MapPin className="mr-3 w-5 h-5" />
                                Contact Info
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
                                        <h4 className="font-semibold text-white text-sm">Location</h4>
                                        <p className="text-gray-300 text-sm">Barcelona, Catalunya</p>
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="flex items-start space-x-3">
                                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white text-sm">Status</h4>
                                        <p className="text-green-400 font-medium text-sm">Available for Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Response & Work Info */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-purple-400 rounded-xl p-6">
                            <h4 className="font-semibold text-white text-sm mb-3 flex items-center">
                                <Zap className="mr-2 w-4 h-4" />
                                Response Time
                            </h4>
                            <p className="text-gray-300 text-xs leading-relaxed mb-4">
                                I'm very responsive to notifications — you can expect a reply within a few hours or by the next day, even if it's just to start discussing your project or needs.
                            </p>

                            <div className="border-t border-gray-700 pt-4">
                                <h4 className="font-semibold text-white text-sm mb-2">Work Process</h4>
                                <ul className="text-xs text-gray-300 space-y-1">
                                    <li>• Discovery & Requirements</li>
                                    <li>• Design & Prototyping</li>
                                    <li>• Development & Testing</li>
                                    <li>• Launch & Support</li>
                                </ul>
                            </div>
                        </div>

                        {/* GitHub */}
                        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-gray-600 rounded-xl p-6">
                            <h4 className="font-semibold text-white text-sm mb-3 flex items-center">
                                <Share2 className="mr-2 w-4 h-4" />
                                Find me online
                            </h4>
                            <a
                                href="https://github.com/janaigutierrez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-sea-green rounded-full px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 w-full justify-center"
                            >
                                <Github className="w-4 h-4" />
                                <span className="text-sm">GitHub Profile</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}