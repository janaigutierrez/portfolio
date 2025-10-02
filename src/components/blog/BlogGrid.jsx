import { Calendar, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BlogGrid({ posts = [] }) {
    return (
        <div className="container mx-auto max-w-6xl px-6 pb-20">
            <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                    Últims Posts
                </h2>

                {posts.length === 0 ? (
                    // Estat buit
                    <div className="text-center py-16">
                        <div className="text-gray-400 text-lg mb-4">
                            📝 Encara no hi ha posts publicats
                        </div>
                        <p className="text-gray-500">
                            Estic preparant contingut interessant. Torna aviat!
                        </p>
                    </div>
                ) : (
                    // Grid de posts
                    <div className="grid md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group"
                            >
                                <article className="bg-gray-900 bg-opacity-80 backdrop-blur-md border border-gray-600 rounded-xl p-6 hover:border-sea-green hover:shadow-xl hover:shadow-sea-green/20 transition-all duration-300 group-hover:scale-105">

                                    {/* Header del post */}
                                    <div className="flex items-center justify-between mb-4">
                                        {post.category && (
                                            <span className="bg-sea-green bg-opacity-20 text-sea-green px-3 py-1 rounded-full text-xs font-medium">
                                                {post.category}
                                            </span>
                                        )}
                                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                                            {post.publishedAt && (
                                                <span className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {new Date(post.publishedAt).toLocaleDateString('ca-ES')}
                                                </span>
                                            )}
                                            {post.readTime && (
                                                <span className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {post.readTime}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Títol */}
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sea-green transition-colors">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    {post.excerpt && (
                                        <p className="text-gray-300 leading-relaxed mb-4">
                                            {post.excerpt}
                                        </p>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                                        {post.author && (
                                            <span className="text-sm text-gray-400">Per {post.author}</span>
                                        )}
                                        <span className="text-sea-green group-hover:text-sky-blue font-medium text-sm">
                                            Llegir més →
                                        </span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    )
}
