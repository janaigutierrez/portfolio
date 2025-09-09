export default function About() {
    const skills = [
        'JavaScript', 'React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
        'Tailwind CSS', 'Express.js', 'Git', 'Docker', 'AWS', 'Figma'
    ]

    return (
        <section id="about" className="py-20 bg-beige-pedra">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">

                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gris-carbo mb-4">
                            Sobre mi
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-sea-green to-sky-blue mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Text Content */}
                        <div className="space-y-6">
                            <p className="text-lg text-gris-carbo leading-relaxed">
                                Soc un desenvolupador creatiu amb passió per convertir idees innovadores en solucions reals.
                                Combino coneixements tècnics sòlids amb un enfocament centrat en la UX per crear experiències digitals excepcionals.
                            </p>

                            <p className="text-lg text-gris-carbo leading-relaxed">
                                La meva filosofia és simple: la tecnologia ha de ser accessible i útil. Per això, cada projecte que desenvolupo
                                està pensat des de la perspectiva de l'usuari final, sense deixar de banda la qualitat tècnica i la performance.
                            </p>

                            <div className="pt-4">
                                <h3 className="text-xl font-semibold text-gris-carbo mb-4">
                                    El que em motiva:
                                </h3>
                                <ul className="space-y-2 text-gris-carbo">
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-sea-green rounded-full mr-3"></span>
                                        Resoldre problemes reals amb codi elegant
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                                        Aprendre constantment noves tecnologies
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-2 h-2 bg-terra-siena rounded-full mr-3"></span>
                                        Col·laborar amb equips multidisciplinaris
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div>
                            <h3 className="text-xl font-semibold text-gris-carbo mb-6">
                                Tech Stack
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill}
                                        className="bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-gris-carbo hover:shadow-md transition-all duration-300 hover:scale-105"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <button className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                            Descarregar CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}