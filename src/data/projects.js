// data/projects.js

export const projectsData = {
    applications: [
        {
            id: 1,
            name: 'NEST App',
            subtitle: 'Gamified Productivity',
            description: 'NEST App és una aplicació de productivitat on complir els teus recordatoris serà la teva aventura. Deixa que la IA personalitzi els teus recordatoris en missions que et retornaran experiència i punts d\'estadística permetent-te desbloquejar noves funcions i característiques de l\'aplicació.',
            progress: 100,
            status: 'complete',
            tech: ['Vite', 'React', 'Tailwind CSS', 'Express', 'Node.js', 'JWT', 'Bcrypt', 'Mocha/Chai'],
            category: 'Web App',
            github: '',
            demo: '',
            image: '',
            features: [
                'Sistema de gamificació amb XP i estadístiques',
                'IA personalitzada per crear missions',
                'Desbloqueig progressiu de funcionalitats',
                'Interfície intuïtiva i responsive',
                'Backend segur amb autenticació JWT'
            ]
        },
        {
            id: 2,
            name: 'Grove Fitness',
            subtitle: 'AI-Powered Training',
            description: 'Grove Fitness és una app que et farà concentrar-te realment en els teus objectius. Gràcies a la connexió amb OpenAI podràs organitzar i crear entrenaments dedicats a tu mateix, amb un menú interactiu pel moment d\'entrenar que no distregui i mostri els temps i sèries que toquen.',
            progress: 25,
            status: 'development',
            tech: ['React Native', 'NativeWind', 'Node.js', 'Express', 'REST API', 'OpenAI'],
            category: 'Mobile App',
            github: '',
            demo: '',
            image: '',
            features: [
                'Integració amb OpenAI per entrenaments personalitzats',
                'Interfície clean i no invasiva durant l\'entrenament',
                'Tracking automàtic de temps i repeticions',
                'Creació dinàmica d\'exercicis',
            ]
        }
    ],

    saasAndSystems: [
        {
            id: 3,
            name: 'Terracota',
            subtitle: 'Business Management Platform',
            description: 'Terracota és una solució completa que combina un portal web públic amb un sistema de gestió interna per a negocis. Els administradors poden gestionar caixa, inventari, comandes i clients des d\'un dashboard integrat, mentre que els usuaris gaudeixen d\'una experiència web fluida.',
            progress: 65,
            status: 'development',
            tech: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
            category: 'SaaS Platform',
            github: '',
            demo: '',
            image: '',
            features: [
                'Portal web públic responsive',
                'Dashboard d\'administració complet',
                'Gestió de caixa i facturació',
                'Control d\'inventari en temps real',
                'Sistema de comandes integrat',
                'Base de dades de clients'
            ]
        }
    ],

    customWebsites: [
        {
            id: 4,
            name: 'Web Casament',
            subtitle: 'Wedding Experience',
            description: 'Web personalitzada per a casament amb galeria interactiva, sistema RSVP i timeline animat. Focus en crear una experiència visual única per a la celebració més especial.',
            progress: 100,
            status: 'complete',
            tech: ['React', 'Tailwind CSS', 'Customized Google Form', 'Framer Motion'],
            category: 'Custom Website',
            github: '',
            demo: '',
            image: '',
            features: [
                'Galeria d\'imatges interactiva',
                'Sistema RSVP amb confirmacions',
                'Timeline animat dels esdeveniments',
                'Disseny completament personalitzat',
                'Responsive i optimitzat'
            ]
        },
        {
            id: 5,
            name: 'Can Carerac',
            subtitle: 'Gastronomic Experiences',
            description: 'Portal web per una masia especialitzada en oferir activitats gastronòmiques i culturals. Reserva d\'experiències culinàries amb un enfocament en la gastronomia local.',
            progress: 20,
            status: 'development',
            tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
            category: 'Business Website',
            github: '',
            demo: '',
            image: '',
            features: [
                'Sistema de reserves d\'activitats gastronòmiques',
                'Galeria d\'experiències culinàries',
                'Calendari de disponibilitat',
                'SEO optimitzat',
                'Informació detallada de les activitats i l\'espai'
            ]
        },
        {
            id: 6,
            name: 'Cafeteria - Gelateria Iseo',
            subtitle: 'Digital Menu',
            description: 'Web per cafeteria i gelateria amb carta digital interactiva. Experiència moderna per a un negoci local tradicional.',
            progress: 100,
            status: 'complete',
            tech: ['React', 'Tailwind CSS'],
            category: 'Restaurant Website',
            github: '',
            demo: '',
            image: '',
            features: [
                'Carta digital interactiva',
                'Experiència d\'usuari millorada',
                'Galeria de productes',
                'Informació de contacte i ubicació'
            ]
        }
    ],

    interactiveProjects: [
        {
            id: 7,
            name: 'GeoCat',
            subtitle: 'Catalan Geography Game',
            description: 'Joc interactiu estil Wordle centrat en municipis catalans. Una manera divertida d\'aprendre geografia local mentre et diverteixes amb un format de joc conegut i addictiu.',
            progress: 75,
            status: 'development',
            tech: ['React', 'Tailwind CSS', 'Local Storage', 'CSS Animations'],
            category: 'Web Game',
            github: '',
            demo: '',
            image: '',
            features: [
                'Mecànica de joc tipus Wordle',
                'Base de dades de municipis catalans',
                'Diferents minijocs',
                'Interfície intuïtiva i responsive',
                'Persistència local de partides'
            ]
        }
    ]
}

export const getProjectsByCategory = (category) => {
    return projectsData[category] || []
}

export const getAllProjects = () => {
    return [
        ...projectsData.applications,
        ...projectsData.saasAndSystems,
        ...projectsData.customWebsites,
        ...projectsData.interactiveProjects
    ]
}

export const getProjectById = (id) => {
    const allProjects = getAllProjects()
    return allProjects.find(project => project.id === id)
}