import { Code, Server, Globe, User, Award, Clock } from 'lucide-react'

export default function About() {
    const stats = [
        { label: 'Completed Projects', value: '4+', icon: Award, color: 'text-green-400' },
        { label: 'Satisfied Clients', value: '100%', icon: User, color: 'text-blue-400' },
        { label: 'Years of Experience', value: '1+', icon: Clock, color: 'text-purple-400' }
    ]

    return (
        <section id="about" className="relative min-h-screen py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-800">
            <div className="container mx-auto px-6 max-w-6xl">

                {/*  Stats */}
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sea-green rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-sea-green to-sky-blue rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                JG
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold text-white">Janai Gutiérrez</h2>
                                <p className="text-sea-green text-lg">Full Stack Developer</p>
                            </div>
                        </div>
                        <div className="flex space-x-8">
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div key={stat.label} className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <IconComponent className={`${stat.color} mr-1`} size={16} />
                                            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                                        </div>
                                        <div className="text-xs text-gray-300">{stat.label}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* About Me */}
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sky-blue rounded-lg p-8 mb-8">
                    <h3 className="text-3xl font-bold text-white mb-6">About Me</h3>
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>
                            I’m a developer passionate about solving real-world problems through technology.
                            What excites me the most is creating tools that simplify people’s lives,
                            breaking down technological barriers so they can invest their saved time in what truly matters.
                        </p>
                        <p>
                            As a full stack developer, I can take on any challenge — from web portals to automations,
                            SaaS platforms, or CRMs. My approach is always the same:
                            deeply understanding the client’s needs and designing the most tailored solution possible,
                            while prioritizing user experience to build intuitive and engaging services.
                        </p>
                    </div>
                </div>

                {/* Tech Skills */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Frontend */}
                    <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-blue-400 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Code className="mr-2 text-blue-400" size={20} />
                            Frontend
                        </h4>
                        <div className="space-y-2">
                            {['JavaScript', 'React', 'Tailwind CSS', 'CSS', 'HTML'].map((skill) => (
                                <div key={skill} className="bg-blue-900 bg-opacity-30 border border-blue-400 rounded-lg p-2 text-center hover:bg-blue-800 hover:bg-opacity-40 transition-all duration-200">
                                    <div className="text-white text-sm font-medium">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-green-400 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Server className="mr-2 text-green-400" size={20} />
                            Backend
                        </h4>
                        <div className="space-y-2">
                            {['Node.js', 'Express.js', 'REST APIs', 'JWT & Security'].map((skill) => (
                                <div key={skill} className="bg-green-900 bg-opacity-30 border border-green-400 rounded-lg p-2 text-center hover:bg-green-800 hover:bg-opacity-40 transition-all duration-200">
                                    <div className="text-white text-sm font-medium">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools & Deploy */}
                    <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-purple-400 rounded-lg p-6">
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                            <Globe className="mr-2 text-purple-400" size={20} />
                            Tools & Deploy
                        </h4>
                        <div className="space-y-2">
                            {['Git & GitHub', 'MongoDB', 'Vercel/Netlify', 'Postman', 'Vite'].map((skill) => (
                                <div key={skill} className="bg-purple-900 bg-opacity-30 border border-purple-400 rounded-lg p-2 text-center hover:bg-purple-800 hover:bg-purple-opacity-40 transition-all duration-200">
                                    <div className="text-white text-sm font-medium">{skill}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}