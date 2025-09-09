export default function Projects() {
    const quests = [
        {
            id: 1,
            name: 'NEST',
            subtitle: 'Productivity Quest',
            description: 'Aplicació completa per gestionar tasques i projectes. Sistema de sincronització en temps real amb interfície intuïtiva.',
            progress: 100,
            status: 'complete',
            tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
            difficulty: 'Expert',
            rewards: ['Full Stack XP', 'Mobile Dev Badge', 'Real-time Systems']
        },
        {
            id: 2,
            name: 'Terracota',
            subtitle: 'SaaS Empire Quest',
            description: 'Plataforma SaaS modular i escalable per gestió empresarial. Arquitectura microserveis amb dashboard customizable.',
            progress: 65,
            status: 'active',
            tech: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
            difficulty: 'Legendary',
            rewards: ['SaaS Master', 'Architecture XP', 'Business Logic']
        },
        {
            id: 3,
            name: 'Web Casament',
            subtitle: 'Creative Design Quest',
            description: 'Web personalitzada amb galeria interactiva, sistema RSVP i timeline animat. Focus en experiència visual.',
            progress: 100,
            status: 'complete',
            tech: ['React', 'Tailwind CSS', 'Firebase', 'Framer Motion'],
            difficulty: 'Advanced',
            rewards: ['Design XP', 'Animation Skills', 'Client Satisfaction']
        },
        {
            id: 4,
            name: 'FitTracker',
            subtitle: 'Wellness Journey Quest',
            description: 'App de tracking d\'entrenaments amb gamificació, progressos personalitzats i integració amb wearables.',
            progress: 30,
            status: 'planning',
            tech: ['React Native', 'FastAPI', 'PostgreSQL', 'ML Models'],
            difficulty: 'Expert',
            rewards: ['Health Tech XP', 'ML Integration', 'Gamification']
        }
    ]

    const getStatusColor = (status) => {
        switch (status) {
            case 'complete': return 'border-green-400 bg-green-900'
            case 'active': return 'border-yellow-400 bg-yellow-900'
            case 'planning': return 'border-blue-400 bg-blue-900'
            default: return 'border-gray-400 bg-gray-900'
        }
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'complete': return '✅'
            case 'active': return '⚡'
            case 'planning': return '📋'
            default: return '❓'
        }
    }

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Legendary': return 'text-purple-400'
            case 'Expert': return 'text-red-400'
            case 'Advanced': return 'text-orange-400'
            default: return 'text-green-400'
        }
    }

    return (
        <section id="projects" className="relative min-h-screen py-20 bg-gradient-to-b from-blue-800 via-blue-900 to-indigo-900">

            <div className="container mx-auto px-6 max-w-6xl">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                        <span className="mr-4">⚔️</span>Quest Progress
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Cada projecte és una aventura única amb els seus propis reptes, recompenses i aprenentatges.
                        Explora el meu viatge pel desenvolupament digital.
                    </p>
                </div>

                {/* Quest Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {quests.map((quest, index) => (
                        <div
                            key={quest.id}
                            className={`bg-opacity-80 backdrop-blur-md border-2 rounded-xl p-6 text-white hover:scale-105 transition-all duration-300 cursor-pointer ${getStatusColor(quest.status)}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >

                            {/* Quest Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-1">{quest.name}</h3>
                                    <p className="text-sm opacity-90">{quest.subtitle}</p>
                                </div>
                                <div className="flex flex-col items-end space-y-1">
                                    <span className="text-2xl">{getStatusIcon(quest.status)}</span>
                                    <span className={`text-xs font-bold ${getDifficultyColor(quest.difficulty)}`}>
                                        {quest.difficulty}
                                    </span>
                                </div>
                            </div>

                            {/* Quest Description */}
                            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                                {quest.description}
                            </p>

                            {/* Progress Bar */}
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium">Progress</span>
                                    <span className="text-sm font-bold">{quest.progress}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-3">
                                    <div
                                        className={`h-3 rounded-full transition-all duration-1000 ${quest.status === 'complete'
                                                ? 'bg-gradient-to-r from-green-500 to-green-400'
                                                : quest.status === 'active'
                                                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                                                    : 'bg-gradient-to-r from-blue-500 to-blue-400'
                                            }`}
                                        style={{
                                            width: `${quest.progress}%`,
                                            animationDelay: `${index * 0.3}s`
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-4">
                                <p className="text-xs text-gray-400 mb-2">Tech Stack:</p>
                                <div className="flex flex-wrap gap-2">
                                    {quest.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-black bg-opacity-30 px-2 py-1 rounded text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Rewards */}
                            <div>
                                <p className="text-xs text-gray-400 mb-2">Rewards Earned:</p>
                                <div className="flex flex-wrap gap-1">
                                    {quest.rewards.map((reward) => (
                                        <span
                                            key={reward}
                                            className="bg-yellow-600 bg-opacity-20 text-yellow-300 px-2 py-1 rounded text-xs"
                                        >
                                            🏆 {reward}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-6 pt-4 border-t border-white border-opacity-20">
                                {quest.status === 'complete' ? (
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                                        View Details
                                    </button>
                                ) : quest.status === 'active' ? (
                                    <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                                        Check Progress
                                    </button>
                                ) : (
                                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                                        Preview Quest
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12">
                    <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sea-green rounded-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready for a New Quest?</h3>
                        <p className="text-gray-300 mb-6">
                            Tints una idea interessant o un projecte desafiador? Let's embark on this adventure together!
                        </p>
                        <button className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold">
                            <span className="mr-2">🎮</span> Start New Quest
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}