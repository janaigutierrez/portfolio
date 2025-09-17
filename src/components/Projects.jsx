import { useState } from 'react'
import {
    Smartphone, Settings, Globe, Gamepad2,
    CheckCircle, Clock, PlayCircle, Github,
    ExternalLink, Image, ChevronRight, X,
    Mail, ArrowRight, Waves
} from 'lucide-react'
import { projectsData } from '../data/projects'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [activeCategory, setActiveCategory] = useState('all')

    const categories = [
        {
            key: 'all',
            name: 'All Projects',
            icon: null,
            color: 'sea-green',
            projects: []
        },
        {
            key: 'applications',
            name: 'Applications',
            icon: Smartphone,
            color: 'blue',
            projects: projectsData.applications
        },
        {
            key: 'saasAndSystems',
            name: 'SaaS & Systems',
            icon: Settings,
            color: 'green',
            projects: projectsData.saasAndSystems
        },
        {
            key: 'customWebsites',
            name: 'Custom Websites',
            icon: Globe,
            color: 'purple',
            projects: projectsData.customWebsites
        },
        {
            key: 'interactiveProjects',
            name: 'Interactive Projects',
            icon: Gamepad2,
            color: 'orange',
            projects: projectsData.interactiveProjects
        }
    ]

    const getStatusIcon = (status) => {
        switch (status) {
            case 'complete': return <CheckCircle className="text-green-400" size={20} />
            case 'development': return <Clock className="text-yellow-400" size={20} />
            case 'planning': return <PlayCircle className="text-blue-400" size={20} />
            default: return <Clock className="text-gray-400" size={20} />
        }
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'complete': return 'border-green-400'
            case 'development': return 'border-yellow-400'
            case 'planning': return 'border-blue-400'
            default: return 'border-gray-400'
        }
    }

    const getCategoryColor = (color) => {
        const colors = {
            blue: 'border-blue-400 text-blue-400',
            green: 'border-green-400 text-green-400',
            purple: 'border-purple-400 text-purple-400',
            orange: 'border-orange-400 text-orange-400'
        }
        return colors[color] || colors.blue
    }

    const getAllProjects = () => {
        return [
            ...projectsData.applications,
            ...projectsData.saasAndSystems,
            ...projectsData.customWebsites,
            ...projectsData.interactiveProjects
        ]
    }

    const handleProjectClick = (project) => {
        setSelectedProject(selectedProject?.id === project.id ? null : project)
    }

    const handleCategoryClick = (categoryKey) => {
        setActiveCategory(categoryKey)
        setSelectedProject(null)
    }

    const isProjectSelected = (projectId) => {
        return selectedProject?.id === projectId
    }

    const getDisplayCategories = () => {
        if (activeCategory === 'all') {
            return categories.slice(1)
        }
        return categories.filter(cat => cat.key === activeCategory)
    }

    return (
        <section id="projects" className="relative min-h-screen py-20 bg-gradient-to-b from-blue-800 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                        Projects
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Here you’ll discover projects that tackle real challenges and create unique experiences — built for clients as well as personal initiatives.                    </p>
                </div>

                {/* Category Filter Bar */}
                <div className="mb-8">
                    <div className="flex justify-center space-x-8">
                        {categories.map((category) => (
                            <button
                                key={category.key}
                                onClick={() => handleCategoryClick(category.key)}
                                className={`relative pb-4 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap
                  ${activeCategory === category.key
                                        ? 'text-white font-bold'
                                        : 'text-gray-400 hover:text-gray-200 font-medium'
                                    }`}
                            >
                                {category.icon && <category.icon size={18} />}
                                <span>{category.name}</span>
                                {category.key !== 'all' && (
                                    <span className="text-xs opacity-75">
                                        ({category.projects.length})
                                    </span>
                                )}
                                {category.key === 'all' && (
                                    <span className="text-xs opacity-75">
                                        ({getAllProjects().length})
                                    </span>
                                )}

                                {/* Individual underline for each category */}
                                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sea-green to-sky-blue transition-all duration-300
                  ${activeCategory === category.key ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-5 gap-8 min-h-[800px]">

                    {/* LEFT COLUMN - Projects List (3/5) */}
                    <div className="lg:col-span-3 h-[800px] overflow-y-auto scrollbar-custom-left">
                        <div className="pr-6 p-6">
                            {getDisplayCategories().map((category) => (
                                <div key={category.key} className="mb-8">

                                    {/* Category Header - Only show if "All" view */}
                                    {activeCategory === 'all' && (
                                        <div className={`flex items-center mb-6 pb-2 border-b-2 ${getCategoryColor(category.color)}`}>
                                            <category.icon className={`mr-3 ${getCategoryColor(category.color).split(' ')[1]}`} size={24} />
                                            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                                            <span className="ml-auto text-sm text-gray-400">
                                                {category.projects.length} project{category.projects.length !== 1 ? 's' : ''}
                                            </span>
                                        </div>
                                    )}

                                    {/* Projects in Category */}
                                    <div className="space-y-6">
                                        {category.projects.map((project) => (
                                            <div
                                                key={project.id}
                                                onClick={() => handleProjectClick(project)}
                                                className={`backdrop-blur-md rounded-lg p-6 cursor-pointer transition-all duration-300 mx-2
                          ${isProjectSelected(project.id)
                                                        ? 'bg-sea-green bg-opacity-20 border-2 border-sea-green shadow-lg shadow-sea-green/20'
                                                        : `bg-gray-900 bg-opacity-60 border border-gray-600 hover:bg-opacity-80 hover:scale-105 hover:shadow-xl hover:border-gray-500`
                                                    }`}
                                            >

                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex-1">
                                                        <div className="flex items-center mb-2">
                                                            <h4 className="text-xl font-bold text-white mr-3">{project.name}</h4>
                                                            {getStatusIcon(project.status)}
                                                        </div>
                                                        <p className="text-sm text-gray-400 mb-2">{project.subtitle}</p>
                                                        <p className="text-gray-300 text-sm leading-relaxed">
                                                            {project.description.substring(0, 120)}...
                                                        </p>
                                                    </div>

                                                    <ChevronRight
                                                        className={`ml-4 transition-all duration-300 flex-shrink-0
                              ${isProjectSelected(project.id) ? 'rotate-90 text-sea-green' : 'text-gray-400'}`}
                                                        size={20}
                                                    />
                                                </div>

                                                {/* Progress Bar */}
                                                <div className="mb-4">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-xs font-medium text-gray-300">Progress</span>
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
                                                <div className="flex flex-wrap gap-1">
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
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Sticky Sidebar (2/5) */}
                    <div className="lg:col-span-2 h-[800px]">
                        <div className="h-full">

                            {/* Default CTA State */}
                            {!selectedProject && (
                                <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sea-green rounded-lg p-8 text-center h-full flex flex-col justify-center">
                                    <div className="mb-6">
                                        <Mail size={48} className="mx-auto text-sea-green mb-4" />
                                        <h3 className="text-2xl font-bold text-white mb-3">Interested in working together?</h3>
                                        <p className="text-gray-300 leading-relaxed mb-6">
                                            Tens una idea interessant o un projecte desafiador? Let's bring your vision to life together!
                                        </p>
                                    </div>

                                    <div>
                                        <button className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold w-full mb-4">
                                            Start New Project
                                        </button>

                                        <div className="text-sm text-gray-400">

                                            <p>🕐 Usually responds within 24h</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Project Details State */}
                            {selectedProject && (
                                <div className="bg-gray-900 bg-opacity-90 backdrop-blur-md border-2 border-sea-green rounded-lg p-6 h-full flex flex-col">

                                    {/* Header */}
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold text-white">{selectedProject.name}</h3>
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    {/* Status & Category */}
                                    <div className="flex items-center gap-3 mb-4">
                                        {getStatusIcon(selectedProject.status)}
                                        <span className="text-sm text-gray-300">{selectedProject.category}</span>
                                    </div>

                                    {/* Full Description */}
                                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                        {selectedProject.description}
                                    </p>

                                    {/* Features */}
                                    <div className="mb-6 flex-1">
                                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                                        <ul className="space-y-2">
                                            {selectedProject.features.slice(0, 6).map((feature, index) => (
                                                <li key={index} className="text-sm text-gray-300 flex items-start">
                                                    <ArrowRight size={14} className="mr-2 mt-0.5 text-sea-green flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}

                                        </ul>
                                    </div>

                                    {/* Full Tech Stack */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((tech) => (
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
                                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                            <div className="flex items-center">
                                                <Github size={18} className="mr-3 text-gray-400" />
                                                <span className="text-sm text-gray-300">Repository</span>
                                            </div>
                                            <span className="text-xs text-yellow-400">Coming Soon</span>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                            <div className="flex items-center">
                                                <ExternalLink size={18} className="mr-3 text-gray-400" />
                                                <span className="text-sm text-gray-300">Live Demo</span>
                                            </div>
                                            <span className="text-xs text-yellow-400">Coming Soon</span>
                                        </div>

                                        <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                                            <div className="flex items-center">
                                                <Image size={18} className="mr-3 text-gray-400" />
                                                <span className="text-sm text-gray-300">Screenshots</span>
                                            </div>
                                            <span className="text-xs text-yellow-400">Coming Soon</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}