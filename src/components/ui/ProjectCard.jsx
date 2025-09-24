import { CheckCircle, Clock, PlayCircle, ChevronRight, Github, ExternalLink, Image } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function ProjectCard({ project, isSelected, onClick, onOpenGallery }) {
    const { t } = useTranslation()

    // Mapping de traduccions
    const projectTranslations = {
        1: 'nest',
        2: 'grove',
        3: 'terracota',
        4: 'wedding',
        5: 'canCarerac',
        6: 'iseo',
        7: 'geocat'
    }

    const getStatusIcon = (status) => {
        switch (status) {
            case 'complete': return <CheckCircle className="text-green-400" size={20} />
            case 'development': return <Clock className="text-yellow-400" size={20} />
            case 'planning': return <PlayCircle className="text-blue-400" size={20} />
            default: return <Clock className="text-gray-400" size={20} />
        }
    }

    // Obtenir dades traduïdes
    const getProjectData = (project) => {
        const translationKey = projectTranslations[project.id]

        if (!translationKey) {
            return {
                name: project.name || 'Project Name',
                subtitle: project.subtitle || 'Project Subtitle',
                description: project.description || 'Project Description'
            }
        }

        return {
            name: t(`projects.${translationKey}.name`),
            subtitle: t(`projects.${translationKey}.subtitle`),
            description: t(`projects.${translationKey}.description`)
        }
    }

    const projectData = getProjectData(project)

    return (
        <div className={`backdrop-blur-md rounded-lg p-6 cursor-pointer transition-all duration-300 mx-2
            ${isSelected
                ? 'bg-sea-green bg-opacity-20 border-2 border-sea-green shadow-lg shadow-sea-green/20'
                : `bg-gray-900 bg-opacity-60 border border-gray-600 hover:bg-opacity-80 hover:scale-105 hover:shadow-xl hover:border-gray-500`
            }`}
        >
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1" onClick={onClick}>
                    <div className="flex items-center mb-2">
                        <h4 className="text-xl font-bold text-white mr-3">{projectData.name}</h4>
                        {getStatusIcon(project.status)}
                    </div>
                    <p className="text-sm text-gray-400 mb-2">{projectData.subtitle}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {projectData.description.substring(0, 120)}...
                    </p>
                </div>

                <ChevronRight
                    className={`ml-4 transition-all duration-300 flex-shrink-0 cursor-pointer
                        ${isSelected ? 'rotate-90 text-sea-green' : 'text-gray-400'}`}
                    size={20}
                    onClick={onClick}
                />
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium text-gray-300">{t('projects.ui.progress')}</span>
                    <span className="text-xs font-bold text-white">{project.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                        className={`h-2 rounded-full transition-all duration-1000 ${project.status === 'complete'
                            ? 'bg-gradient-to-r from-green-500 to-green-400'
                            : project.status === 'development'
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                                : 'bg-gradient-to-r from-blue-500 to-blue-400'
                            }`}
                        style={{ width: `${project.progress}%` }}
                    />
                </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 4).map((tech) => (
                    <span
                        key={tech}
                        className="bg-black bg-opacity-40 px-2 py-1 rounded text-xs text-gray-300"
                    >
                        {tech}
                    </span>
                ))}
                {project.tech.length > 4 && (
                    <span className="text-xs text-gray-400">+{project.tech.length - 4} more</span>
                )}
            </div>

            {/* NOVA SECCIÓ: Quick Actions - només mòbil */}
            <div className="lg:hidden border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between space-x-2">
                    {/* GitHub Link */}
                    <div className="flex-1">
                        {project.githubUrl ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-xs text-gray-300 hover:text-white transition-all"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={14} />
                                <span>Code</span>
                            </a>
                        ) : (
                            <div className="flex items-center justify-center space-x-1 bg-gray-800 px-3 py-2 rounded text-xs text-gray-500">
                                <Github size={14} />
                                <span>Private</span>
                            </div>
                        )}
                    </div>

                    {/* Live Demo */}
                    <div className="flex-1">
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-xs text-gray-300 hover:text-white transition-all"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={14} />
                                <span>Demo</span>
                            </a>
                        ) : (
                            <div className="flex items-center justify-center space-x-1 bg-gray-800 px-3 py-2 rounded text-xs text-gray-500">
                                <ExternalLink size={14} />
                                <span>Soon</span>
                            </div>
                        )}
                    </div>

                    {/* Gallery */}
                    <div className="flex-1">
                        {project.images && project.images.length > 0 ? (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onOpenGallery(project)
                                }}
                                className="flex items-center justify-center space-x-1 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-xs text-gray-300 hover:text-white transition-all w-full"
                            >
                                <Image size={14} />
                                <span>Gallery</span>
                            </button>
                        ) : (
                            <div className="flex items-center justify-center space-x-1 bg-gray-800 px-3 py-2 rounded text-xs text-gray-500">
                                <Image size={14} />
                                <span>Soon</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}