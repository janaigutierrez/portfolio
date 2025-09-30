export const personalInfo = {
    name: "Janai Gutiérrez",
    shortName: "Janai",
    initials: "JG",
    location: {
        city: "Barcelona",
        region: "Catalunya",
        country: "España"
    },
    contact: {
        email: "janaigs97@gmail.com",
        linkedin: "https://www.linkedin.com/in/janai-gutiérrez-sañudo-8aa2622a0",
        github: "https://github.com/janaigutierrez",
        website: "https://janai.dev"
    },
    status: {
        available: true,
        responseTime: "24h"
    },
    experience: "1+"
}

export const skillCategories = [
    {
        id: 'frontend',
        icon: 'Code',
        color: 'blue',
        borderColor: 'border-blue-400',
        skills: ['JavaScript', 'React', 'Tailwind CSS', 'CSS', 'HTML']
    },
    {
        id: 'backend',
        icon: 'Server',
        color: 'green',
        borderColor: 'border-green-400',
        skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT & Security']
    },
    {
        id: 'tools',
        icon: 'Globe',
        color: 'purple',
        borderColor: 'border-purple-400',
        skills: ['Git & GitHub', 'MongoDB', 'Vercel/Netlify', 'Postman', 'Vite']
    }
]

export const stats = [
    {
        id: 'projects',
        value: '4+',
        icon: 'Award',
        color: 'text-green-400'
    },
    {
        id: 'clients',
        value: '100%',
        icon: 'User',
        color: 'text-blue-400'
    },
    {
        id: 'experience',
        value: '1+',
        icon: 'Clock',
        color: 'text-purple-400'
    }
]

export const projectsData = {
    applications: [
        {
            id: 1,
            key: 'nest',
            progress: 80,
            status: 'complete',
            tech: ['Vite', 'React', 'Tailwind CSS', 'Express', 'Node.js', 'JWT', 'Bcrypt', 'Mocha/Chai'],
            category: 'Web App',
            githubUrl: 'https://github.com/janaigutierrez/nest-app',
            liveUrl: 'https://nest-app.surge.sh',
            images: ['/projects/nestapp1.jpg', '/projects/nestapp2.jpg']
        },
        {
            id: 2,
            key: 'grove',
            progress: 15,
            status: 'development',
            tech: ['React Native', 'NativeWind', 'Node.js', 'Express', 'REST API', 'OpenAI'],
            category: 'Mobile App',
            githubUrl: null,
            liveUrl: null,
            images: []
        }
    ],

    saasAndSystems: [
        {
            id: 3,
            key: 'terracota',
            progress: 65,
            status: 'development',
            tech: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Mongoose', 'Tailwind CSS'],
            category: 'SaaS Platform',
            githubUrl: null,
            liveUrl: 'http://terracotaceramiqueria.netlify.app',
            images: ['projects/terracota1.jpg']
        }
    ],

    customWebsites: [
        {
            id: 4,
            key: 'wedding',
            progress: 100,
            status: 'complete',
            tech: ['React', 'Tailwind CSS', 'Customized Google Form', 'Framer Motion'],
            category: 'Custom Website',
            githubUrl: 'https://github.com/janaigutierrez/boda-modo-cata',
            liveUrl: 'http://bodaenmodocata.es',
            images: ['/projects/boda1.jpg']
        },
        {
            id: 5,
            key: 'canCarerac',
            progress: 20,
            status: 'development',
            tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB'],
            category: 'Business Website',
            githubUrl: null,
            liveUrl: null,
            images: []
        },
        {
            id: 6,
            key: 'iseo',
            progress: 90,
            status: 'complete',
            tech: ['React', 'Tailwind CSS'],
            category: 'Restaurant Website',
            githubUrl: 'https://github.com/janaigutierrez/cafeiseo',
            liveUrl: 'http://caffeiseo.netlify.app',
            images: ['/projects/iseo1.jpg']
        }
    ],

    interactiveProjects: [
        {
            id: 7,
            key: 'geocat',
            progress: 75,
            status: 'development',
            tech: ['React', 'Tailwind CSS', 'Local Storage', 'CSS Animations'],
            category: 'Web Game',
            githubUrl: null,
            liveUrl: null,
            images: []
        }
    ]
}

export const projectCategories = [
    {
        key: 'all',
        icon: null,
        color: 'sea-green'
    },
    {
        key: 'applications',
        icon: 'Smartphone',
        color: 'blue'
    },
    {
        key: 'saasAndSystems',
        icon: 'Settings',
        color: 'green'
    },
    {
        key: 'customWebsites',
        icon: 'Globe',
        color: 'purple'
    },
    {
        key: 'interactiveProjects',
        icon: 'Gamepad2',
        color: 'orange'
    }
]

export const reviewsData = [
    {
        id: 1,
        key: 'boda',
        rating: 5,
        date: "August 2025",
        projectType: "Wedding Website",
        hasClient: true
    },
    {
        id: 2,
        key: 'iseo',
        rating: 5,
        date: "September 2025",
        projectType: "Digital Menu Website",
        hasClient: true
    },
    {
        id: 3,
        key: 'canCarerac',
        rating: 5,
        date: "October 2025",
        projectType: "Web Gastronòmica",
        hasClient: true
    }
]

export const testimonialStats = {
    satisfaction: "100%",
    averageRating: "5.0",
    completedProjects: () => testimonialsData.filter(t => !t.placeholder).length
}

export const timeline = [
    { key: 'landing', time: '1-2' },
    { key: 'fullWebsite', time: '3-4' },
    { key: 'ecommerce', time: '6-8' }
]

export const includes = ['hosting', 'ssl', 'responsive', 'support']

export const workProcess = ['discovery', 'design', 'development', 'launch']

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