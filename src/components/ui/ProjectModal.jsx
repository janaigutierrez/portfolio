import {
    X, Github, ExternalLink, Image, ArrowRight,
    CheckCircle, Clock, PlayCircle
} from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function ProjectModal({ project, isOpen, onClose, onOpenGallery }) {
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
                description: project.description || 'Project Description',
                features: project.features || []
            }
        }

        return {
            name: t(`projects.${translationKey}.name`),
            subtitle: t(`projects.${translationKey}.subtitle`),
            description: t(`projects.${translationKey}.description`),
            features: t(`projects.${translationKey}.features`) || []
        }
    }

    if (!isOpen || !project) return null

    const projectData = getProjectData(project)

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={handleBackdropClick}
            >
                {/* Modal Content */}
                <div
                    className="bg-gray-900 border-2 border-sea-green rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-start">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-1">{projectData.name}</h3>
                            <p className="text-sm text-gray-400">{projectData.subtitle}</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-400 hover:text-white transition-colors ml-4"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-6">

                        {/* Status & Progress */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                {getStatusIcon(project.status)}
                                <span className="text-sm text-gray-300">{project.category}</span>
                            </div>

                            {/* Progress Bar */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-300">{t('projects.ui.progress')}</span>
                                    <span className="text-sm font-bold text-white">{project.progress}%</span>
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
                        </div>

                        {/* Description */}
                        <div>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {projectData.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">{t('projects.ui.keyFeatures')}</h4>
                            <ul className="space-y-2">
                                {projectData.features.slice(0, 6).map((feature, index) => (
                                    <li key={index} className="text-sm text-gray-300 flex items-start">
                                        <ArrowRight size={14} className="mr-2 mt-0.5 text-sea-green flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-3">{t('projects.ui.technologyStack')}</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-sea-green bg-opacity-20 border border-sea-green text-sea-green px-2 py-1 rounded text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        <div className="space-y-2">
                            {/* GITHUB REPOSITORY */}
                            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                <div className="flex items-center">
                                    <Github size={16} className="mr-3 text-gray-400" />
                                    <span className="text-sm text-gray-300">{t('projects.ui.repository')}</span>
                                </div>
                                {project.githubUrl ? (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-sea-green hover:text-sky-blue transition-colors font-medium flex items-center"
                                    >
                                        <span>View Code</span>
                                        <Github size={12} className="ml-1" />
                                    </a>
                                ) : (
                                    <span className="text-xs text-yellow-400">{t('projects.ui.comingSoon')}</span>
                                )}
                            </div>

                            {/* LIVE DEMO */}
                            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                <div className="flex items-center">
                                    <ExternalLink size={16} className="mr-3 text-gray-400" />
                                    <span className="text-sm text-gray-300">{t('projects.ui.liveDemo')}</span>
                                </div>
                                {project.liveUrl ? (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-sea-green hover:text-sky-blue transition-colors font-medium flex items-center"
                                    >
                                        <span>Visit Site</span>
                                        <ExternalLink size={12} className="ml-1" />
                                    </a>
                                ) : (
                                    <span className="text-xs text-yellow-400">{t('projects.ui.comingSoon')}</span>
                                )}
                            </div>

                            {/* SCREENSHOTS GALLERY */}
                            <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                <div className="flex items-center">
                                    <Image size={16} className="mr-3 text-gray-400" />
                                    <span className="text-sm text-gray-300">{t('projects.ui.screenshots')}</span>
                                </div>
                                {project.images && project.images.length > 0 ? (
                                    <button
                                        onClick={() => onOpenGallery && onOpenGallery(project)}
                                        className="text-xs text-sea-green hover:text-sky-blue transition-colors font-medium flex items-center"
                                    >
                                        <span>Gallery ({project.images.length})</span>
                                        <Image size={12} className="ml-1" />
                                    </button>
                                ) : (
                                    <span className="text-xs text-yellow-400">{t('projects.ui.comingSoon')}</span>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}