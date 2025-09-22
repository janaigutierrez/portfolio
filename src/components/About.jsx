import { Code, Server, Globe, User, Award, Clock } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import { personalInfo, stats, skillCategories } from '../data/static'

export default function About() {
    const { t } = useTranslation()

    // Mapa d'icones
    const iconMap = {
        'Award': Award,
        'User': User,
        'Clock': Clock,
        'Code': Code,
        'Server': Server,
        'Globe': Globe
    }

    return (
        <section id="about" className="relative min-h-screen py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-800">
            <div className="container mx-auto px-6 max-w-6xl">

                {/* Stats Header */}
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sea-green rounded-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-sea-green to-sky-blue rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                {personalInfo.initials}
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold text-white">{personalInfo.name}</h2>
                                <p className="text-sea-green text-lg">Full Stack Developer</p>
                            </div>
                        </div>

                        <div className="flex space-x-8">
                            {stats.map((stat) => {
                                const IconComponent = iconMap[stat.icon]
                                return (
                                    <div key={stat.id} className="text-center">
                                        <div className="flex items-center justify-center mb-1">
                                            <IconComponent className={`${stat.color} mr-1`} size={16} />
                                            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                                        </div>
                                        <div className="text-xs text-gray-300">
                                            {t(`about.stats.${stat.id}`)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                {/* About Me Text */}
                <div className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sky-blue rounded-lg p-8 mb-8">
                    <h3 className="text-3xl font-bold text-white mb-6">{t('about.title')}</h3>
                    <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
                        <p>{t('about.intro')}</p>
                        <p>{t('about.approach')}</p>
                    </div>
                </div>

                {/* Tech Skills */}
                <div className="grid md:grid-cols-3 gap-6">
                    {skillCategories.map((category) => {
                        const IconComponent = iconMap[category.icon]
                        return (
                            <div key={category.id} className={`bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 ${category.borderColor} rounded-lg p-6`}>
                                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                                    <IconComponent className={`mr-2 ${category.borderColor.replace('border-', 'text-')}`} size={20} />
                                    {t(`about.skills.${category.id}`)}
                                </h4>
                                <div className="space-y-2">
                                    {category.skills.map((skill) => (
                                        <div key={skill} className={`bg-${category.color}-900 bg-opacity-30 border ${category.borderColor} rounded-lg p-2 text-center hover:bg-${category.color}-800 hover:bg-opacity-40 transition-all duration-200`}>
                                            <div className="text-white text-sm font-medium">{skill}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}