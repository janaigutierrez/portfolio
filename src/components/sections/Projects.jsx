import { useState } from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { projectsData } from '../../data/static'
import CategoryFilter from '../ui/CategoryFilter'
import ProjectCard from '../ui/ProjectCard'
import ProjectSidebar from '../ui/ProjectSidebar'
import ProjectModal from '../ui/ProjectModal'
import ImageGalleryModal from '../ui/ImageGalleryModal'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [activeCategory, setActiveCategory] = useState('all')
    const { t } = useTranslation()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)

    const getDisplayCategories = () => {
        const categories = [
            { key: 'applications', name: t('projects.categories.applications'), color: 'blue', projects: projectsData.applications },
            { key: 'saasAndSystems', name: t('projects.categories.saasAndSystems'), color: 'green', projects: projectsData.saasAndSystems },
            { key: 'customWebsites', name: t('projects.categories.customWebsites'), color: 'purple', projects: projectsData.customWebsites },
            { key: 'interactiveProjects', name: t('projects.categories.interactiveProjects'), color: 'orange', projects: projectsData.interactiveProjects }
        ]
        return activeCategory === 'all'
            ? categories
            : categories.filter(cat => cat.key === activeCategory)
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

    const handleProjectClick = (project) => {

        setSelectedProject(project)

        if (window.innerWidth < 1024) {
            setIsModalOpen(true)
        }

    }

    const handleCategoryClick = (categoryKey) => {
        setActiveCategory(categoryKey)
        setSelectedProject(null)
        setIsModalOpen(false)
    }

    const handleOpenGallery = (project) => {
        setSelectedProject(project)
        setIsGalleryOpen(true)
    }

    return (
        <section id="projects" className="relative min-h-screen py-20 bg-gradient-to-b from-blue-800 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-2xl">
                        {t('projects.title')}
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {t('projects.subtitle')}
                    </p>
                </div>

                {/* Category Filter */}
                <CategoryFilter
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryClick}
                />

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* LEFT COLUMN */}
                    <div className="col-span-1 lg:col-span-3 lg:h-[800px] lg:overflow-y-auto scrollbar-custom-left">
                        <div className="pr-6 p-6">
                            {getDisplayCategories().map((category) => (
                                <div key={category.key} className="mb-8">

                                    {activeCategory === 'all' && (
                                        <div className={`flex items-center mb-6 pb-2 border-b-2 ${getCategoryColor(category.color)}`}>
                                            <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                                            <span className="ml-auto text-sm text-gray-400">
                                                {category.projects.length} project{category.projects.length !== 1 ? 's' : ''}
                                            </span>
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        {category.projects.map((project) => (
                                            <ProjectCard
                                                key={project.id}
                                                project={project}
                                                isSelected={selectedProject?.id === project.id}
                                                onClick={() => handleProjectClick(project)}
                                                onOpenGallery={handleOpenGallery}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="hidden lg:block lg:col-span-2 lg:h-[800px]">
                        <ProjectSidebar
                            selectedProject={selectedProject}
                            onClose={() => setSelectedProject(null)}
                            onOpenGallery={handleOpenGallery}
                        />
                    </div>
                </div>
            </div>

            {/* Modal mobile */}
            <ProjectModal
                project={selectedProject}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onOpenGallery={handleOpenGallery}
            />
            {/* MODAL DE GALERIA */}
            <ImageGalleryModal
                project={selectedProject}
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
            />
        </section>
    )
}
