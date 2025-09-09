export default function About() {
    const techStack = [
        { name: 'JavaScript', level: 95, icon: '⚡' },
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Node.js', level: 80, icon: '🍃' },
        { name: 'MongoDB', level: 75, icon: '🍀' },
        { name: 'Tailwind', level: 88, icon: '🎨' }
    ]

    const achievements = [
        { name: 'Full Stack Master', icon: '🎯', unlocked: true },
        { name: 'SaaS Builder', icon: '🚀', unlocked: true },
        { name: 'UI/UX Expert', icon: '🎨', unlocked: true },
        { name: 'App Creator', icon: '📱', unlocked: true },
        { name: 'Code Wizard', icon: '🧙‍♂️', unlocked: false }
    ]

    return (
        <section id="about" className="relative min-h-screen py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">

            {/* Player Info Header */}
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sea-green rounded-lg p-6 mb-8 text-white">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-sea-green to-sky-blue rounded-full flex items-center justify-center text-3xl font-bold text-white">
                                JG
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold">Janai Gutierrez</h2>
                                <p className="text-sea-green text-lg">Level 25 Full Stack Developer</p>
                                <p className="text-gray-300">Especialista en convertir idees en realitat digital</p>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-sm text-gray-300">Experience Points</div>
                            <div className="text-2xl font-bold text-yellow-400">15,847 XP</div>
                            <div className="text-xs text-gray-400">Next Level: 2,153 XP</div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* Tech Inventory */}
                    <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sea-green rounded-lg p-6">
                        <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                            <span className="mr-3">🎒</span> Tech Inventory
                        </h3>
                        <div className="space-y-4">
                            {techStack.map((tech, index) => (
                                <div key={tech.name} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-all duration-300">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-white flex items-center space-x-3">
                                            <span className="text-xl">{tech.icon}</span>
                                            <span className="font-semibold text-lg">{tech.name}</span>
                                        </span>
                                        <span className="text-sea-green font-bold text-lg">{tech.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                        <div
                                            className="bg-gradient-to-r from-sea-green to-sky-blue h-3 rounded-full transition-all duration-1000 progress-glow"
                                            style={{
                                                width: `${tech.level}%`,
                                                animationDelay: `${index * 0.2}s`
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* About Content + Achievements */}
                    <div className="space-y-6">

                        {/* Personal Description */}
                        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sky-blue rounded-lg p-6">
                            <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
                            <div className="text-gray-300 space-y-4">
                                <p className="leading-relaxed">
                                    Com explorador del món digital, navego entre les profunditats del backend
                                    i la superficie brillant del frontend. Cada projecte és una nova aventura
                                    on combino creativitat mediterrània amb sòlida enginyeria.
                                </p>
                                <p className="leading-relaxed">
                                    M'especialitzo en transformar idees complexes en solucions elegants,
                                    sempre amb l'usuari al centre de l'experiència.
                                </p>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-yellow-400 rounded-lg p-6">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                                <span className="mr-3">🏆</span> Achievements
                            </h3>
                            <div className="space-y-3">
                                {achievements.map((achievement) => (
                                    <div
                                        key={achievement.name}
                                        className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-300 ${achievement.unlocked
                                                ? 'bg-yellow-900 bg-opacity-50 border border-yellow-400'
                                                : 'bg-gray-800 opacity-60 border border-gray-600'
                                            }`}
                                    >
                                        <span className="text-3xl">{achievement.icon}</span>
                                        <span className={`font-semibold text-lg ${achievement.unlocked ? 'text-yellow-300' : 'text-gray-500'
                                            }`}>
                                            {achievement.name}
                                        </span>
                                        {achievement.unlocked && <span className="text-green-400 text-xl">✓</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}