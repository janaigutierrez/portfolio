import { Smartphone, Settings, Globe, Gamepad2 } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { projectsData } from '../../data/static'

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
    const { t } = useTranslation()

    const getAllProjects = () => {
        return [
            ...projectsData.applications,
            ...projectsData.saasAndSystems,
            ...projectsData.customWebsites,
            ...projectsData.interactiveProjects
        ]
    }

    const categories = [
        {
            key: 'all',
            name: t('projects.categories.all'),
            icon: null,
            color: 'sea-green',
            count: getAllProjects().length
        },
        {
            key: 'applications',
            name: t('projects.categories.applications'),
            icon: Smartphone,
            color: 'blue',
            count: projectsData.applications.length
        },
        {
            key: 'saasAndSystems',
            name: t('projects.categories.saasAndSystems'),
            icon: Settings,
            color: 'green',
            count: projectsData.saasAndSystems.length
        },
        {
            key: 'customWebsites',
            name: t('projects.categories.customWebsites'),
            icon: Globe,
            color: 'purple',
            count: projectsData.customWebsites.length
        },
        {
            key: 'interactiveProjects',
            name: t('projects.categories.interactiveProjects'),
            icon: Gamepad2,
            color: 'orange',
            count: projectsData.interactiveProjects.length
        }
    ]

    return (
        <div className="mb-8">
            <div className="flex justify-center space-x-8">
                {categories.map((category) => (
                    <button
                        key={category.key}
                        onClick={() => onCategoryChange(category.key)}
                        className={`relative pb-4 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap
                            ${activeCategory === category.key
                                ? 'text-white font-bold'
                                : 'text-gray-400 hover:text-gray-200 font-medium'
                            }`}
                    >
                        {category.icon && <category.icon size={18} />}
                        <span>{category.name}</span>
                        <span className="text-xs opacity-75">({category.count})</span>

                        {/* Individual underline for each category */}
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sea-green to-sky-blue transition-all duration-300
                            ${activeCategory === category.key ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}