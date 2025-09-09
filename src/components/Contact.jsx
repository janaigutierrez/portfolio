export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "NEST",
            subtitle: "App de Productivitat",
            description: "Aplicació completa per gestionar tasques, projectes i temps. Interfície intuïtiva amb sincronització en temps real.",
            tech: ["React Native", "Node.js", "MongoDB", "Socket.io"],
            status: "Completat",
            link: "#",
            github: "#",
            image: "/api/placeholder/400/300"
        },
        {
            id: 2,
            title: "Terracota",
            subtitle: "SaaS Platform",
            description: "Plataforma SaaS completa per gestió empresarial. Sistema modular, escalable i customitzable per diferents clients.",
            tech: ["React", "Express.js", "PostgreSQL", "Docker"],
            status: "En desenvolupament",
            link: "#",
            github: "#",
            image: "/api/placeholder/400/300"
        },
        {
            id: 3,
            title: "Web Casament",
            subtitle: "Landing Page Personalitzada",
            description: "Web personalitzada per casament amb galeria d'imatges, RSVP interactiu i timeline de l'esdeveniment.",
            tech: ["React", "Tailwind CSS", "Firebase", "Framer Motion"],
            status: "Completat",
            link: "#",
            github: "#",
            image: "/api/placeholder/400/300"
        },
        {
            id: 4,
            title: "FitTracker",
            subtitle: "App Fitness & Wellness",
            description: "App per tracking d'entrenaments, progressos i rutines personalitzades. Gamificació per mantenir la motivació.",
            tech: ["React Native", "FastAPI", "PostgreSQL", "TensorFlow"],
            status: "Coming Soon",
            link: null,
            github: "#",
            image: "/api/placeholder/400/300"
        }
    ]

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">

                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gris-carbo mb-4">
                        Projectes Destacats
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-sea-green to-sky-blue mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Una selecció dels projectes on he aplicat la meva passió per crear solucions digitals innovadores
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Project Image Placeholder */}
                            <div className="h-48 bg-gradient-to-br from-sea-green to-sky-blue flex items-center justify-center">
                                <div className="text-white text-center">
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                    <p className="text-sm opacity-90">{project.subtitle}</p>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-semibold text-gris-carbo">
                                        {project.title}
                                    </h3>
                                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${project.status === 'Completat'
                                            ? 'bg-green-100 text-green-800'
                                            : project.status === 'En desenvolupament'
                                                ? 'bg-blue-100 text-blue-800'
                                                : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-beige-pedra text-gris-carbo px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3">
                                    {project.link && (
                                        <button className="flex-1 bg-gradient-to-r from-sea-green to-sky-blue text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                                            Veure Demo
                                        </button>
                                    )}
                                    <button className="flex-1 border border-gray-300 text-gris-carbo py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                                        Veure Codi
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Projects CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">Vols veure més projectes?</p>
                    <button className="bg-white border-2 border-sea-green text-sea-green px-8 py-3 rounded-full hover:bg-sea-green hover:text-white transition-all duration-300">
                        Veure GitHub Complet
                    </button>
                </div>
            </div>
        </section>
    )
}