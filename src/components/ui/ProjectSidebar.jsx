import {
    X, Github, ExternalLink, Image, ArrowRight, Mail,
    CheckCircle, Clock, PlayCircle
} from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'

export default function ProjectSidebar({ selectedProject, onClose, onOpenGallery }) {
    const { t } = useTranslation()

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

    // Component CTA per quan no hi ha projecte seleccionat
    const CTASection = () => (
        <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sea-green rounded-lg p-8 text-center h-full flex flex-col justify-center">
            <div className="mb-6">
                <Mail size={48} className="mx-auto text-sea-green mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{t('projects.cta.title')}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                    {t('projects.cta.text')}
                </p>
            </div>

            <div>
                <button className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold w-full mb-4">
                    {t('projects.cta.button')}
                </button>

                <div className="text-sm text-gray-400">
                    <p>{t('projects.cta.responseTime')}</p>
                </div>
            </div>
        </div>
    )

    const ProjectDetails = ({ project }) => {
        const projectData = getProjectData(project)

        return (
            <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sea-green rounded-lg p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">{projectData.name}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Status & Category */}
                <div className="flex items-center gap-3 mb-4">
                    {getStatusIcon(project.status)}
                    <span className="text-sm text-gray-300">{project.category}</span>
                </div>

                {/* Full Description */}
                <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                    {projectData.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-1">
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

                {/* Full Tech Stack */}
                <div className="mb-6">
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

                {/* Links & Media */}
                <div className="space-y-2 mt-auto">
                    {/* GitHub Repository */}
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <div className="flex items-center">
                            <Github size={18} className="mr-3 text-gray-400" />
                            <span className="text-sm text-gray-300">{t('projects.ui.repository')}</span>
                        </div>
                        {project.githubUrl ? (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-sea-green hover:text-sky-blue transition-colors font-medium flex items-center"
                            >
                                <span>View Code</span>
                                <ExternalLink size={14} className="ml-1" />
                            </a>
                        ) : (
                            <span className="text-xs text-yellow-400">Private</span>
                        )}
                    </div>

                    {/* Live Demo */}
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <div className="flex items-center">
                            <ExternalLink size={18} className="mr-3 text-gray-400" />
                            <span className="text-sm text-gray-300">{t('projects.ui.liveDemo')}</span>
                        </div>
                        {project.liveUrl ? (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-sea-green hover:text-sky-blue transition-colors font-medium flex items-center"
                            >
                                <span>Visit Site</span>
                                <ExternalLink size={14} className="ml-1" />
                            </a>
                        ) : (
                            <span className="text-xs text-yellow-400">{t('projects.ui.comingSoon')}</span>
                        )}
                    </div>

                    {/* Screenshots Gallery */}
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                        <div className="flex items-center">
                            <Image size={18} className="mr-3 text-gray-400" />
                            <span className="text-sm text-gray-300">{t('projects.ui.screenshots')}</span>
                        </div>
                        {project.images && project.images.length > 0 ? (
                            <button
                                onClick={() => onOpenGallery(project)}
                                className="text-sm text-sea-green hover:text-sky-blue transition-colors font-medium flex items-center"
                            >
                                <span>View Gallery ({project.images.length})</span>
                                <ExternalLink size={14} className="ml-1" />
                            </button>
                        ) : (
                            <span className="text-xs text-yellow-400">{t('projects.ui.comingSoon')}</span>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="h-full">
            {selectedProject ? (
                <ProjectDetails project={selectedProject} />
            ) : (
                <CTASection />
            )}
        </div>
    )
}