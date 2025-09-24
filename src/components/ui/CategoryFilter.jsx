import { useState } from 'react'
import { Smartphone, Settings, Globe, Gamepad2, ChevronDown, Filter } from 'lucide-react'
import { useTranslation } from '../../hooks/useTranslation'
import { projectsData } from '../../data/static'

export default function CategoryFilter({ activeCategory, onCategoryChange }) {
    const { t } = useTranslation()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

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
            icon: Filter,
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

    const handleCategorySelect = (categoryKey) => {
        onCategoryChange(categoryKey)
        setIsDropdownOpen(false)
    }

    const activeItem = categories.find(cat => cat.key === activeCategory)

    return (
        <div className="mb-8">

            {/* DESKTOP VERSION - Horizontal Categories */}
            <div className="hidden lg:flex justify-center space-x-8">
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

            {/* MOBILE & TABLET VERSION - Dropdown Only */}
            <div className="lg:hidden relative">
                <div className="max-w-sm mx-auto px-4">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-gray-900 bg-opacity-80 backdrop-blur-md border-2 border-sea-green rounded-lg px-4 py-3 flex items-center justify-between text-white shadow-lg"
                    >
                        <div className="flex items-center space-x-3">
                            {activeItem?.icon && <activeItem.icon size={20} className="text-sea-green" />}
                            <div className="text-left">
                                <span className="font-medium text-white">{activeItem?.name}</span>
                                <div className="text-xs text-gray-400">
                                    {activeItem?.count} project{activeItem?.count !== 1 ? 's' : ''}
                                </div>
                            </div>
                        </div>
                        <ChevronDown
                            size={20}
                            className={`transition-transform duration-200 text-sea-green ${isDropdownOpen ? 'rotate-180' : ''}`}
                        />
                    </button>

                    {/* Dropdown Menu */}
                    {isDropdownOpen && (
                        <>
                            {/* Backdrop to close dropdown */}
                            <div
                                className="fixed inset-0 z-10 bg-black bg-opacity-20"
                                onClick={() => setIsDropdownOpen(false)}
                            />

                            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 bg-opacity-95 backdrop-blur-md border-2 border-gray-600 rounded-lg shadow-2xl z-20 overflow-hidden">
                                {categories.map((category, index) => (
                                    <button
                                        key={category.key}
                                        onClick={() => handleCategorySelect(category.key)}
                                        className={`w-full px-4 py-4 flex items-center space-x-3 transition-all duration-200 
                                            ${index !== categories.length - 1 ? 'border-b border-gray-700' : ''}
                                            ${activeCategory === category.key
                                                ? 'bg-sea-green bg-opacity-20 text-sea-green'
                                                : 'text-gray-300 hover:bg-gray-800 hover:text-white active:bg-gray-700'
                                            }`}
                                    >
                                        {category.icon && (
                                            <category.icon
                                                size={20}
                                                className={activeCategory === category.key ? 'text-sea-green' : 'text-gray-400'}
                                            />
                                        )}
                                        <div className="flex-1 text-left">
                                            <div className="font-medium">{category.name}</div>
                                            <div className="text-xs text-gray-400">
                                                {category.count} project{category.count !== 1 ? 's' : ''}
                                            </div>
                                        </div>
                                        {activeCategory === category.key && (
                                            <div className="w-2 h-2 bg-sea-green rounded-full"></div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}