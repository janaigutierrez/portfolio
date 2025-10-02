import { CheckCircle, Clock, PlayCircle } from 'lucide-react'

export const PROJECT_TRANSLATIONS = {
    1: 'nest',
    2: 'grove',
    3: 'terracota',
    4: 'wedding',
    5: 'canCarerac',
    6: 'iseo',
    7: 'geocat'
}

export const ICON_MAP = {
    'Award': 'Award',
    'User': 'User',
    'Clock': 'Clock',
    'Code': 'Code',
    'Server': 'Server',
    'Globe': 'Globe'
}

export const getStatusIcon = (status) => {
    switch (status) {
        case 'complete': return <CheckCircle className="text-green-400" size={20} />
        case 'development': return <Clock className="text-yellow-400" size={20} />
        case 'planning': return <PlayCircle className="text-blue-400" size={20} />
        default: return <Clock className="text-gray-400" size={20} />
    }
}

export const getProjectData = (project, t) => {
    const translationKey = PROJECT_TRANSLATIONS[project.id]

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