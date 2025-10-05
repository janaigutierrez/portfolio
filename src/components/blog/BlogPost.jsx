import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { getPostBySlug } from '../../data/blogs/blogPosts'
import { useTranslation } from '../../hooks/useTranslation'

export default function BlogPost() {
    const { slug } = useParams()
    const { currentLanguage } = useTranslation()
    const post = getPostBySlug(slug, currentLanguage)

    if (!post) {
        return (
            <>
                <Header />
                <main className="bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 min-h-screen">
                    <div className="container mx-auto max-w-4xl px-6 pt-24 pb-20">
                        <div className="text-center py-16">
                            <h1 className="text-4xl font-bold text-white mb-4">Post no trobat</h1>
                            <p className="text-gray-300 mb-8">Aquest post no existeix o ha estat eliminat.</p>
                            <Link
                                to="/blog"
                                className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 inline-flex items-center"
                            >
                                <ArrowLeft className="mr-2 w-5 h-5" />
                                Tornar al Blog
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Header />
            <main className="bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900 min-h-screen">
                <div className="container mx-auto max-w-4xl px-6 pt-24 pb-20">

                    {/* Back Button */}
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-sea-green hover:text-sky-blue transition-colors mb-8"
                    >
                        <ArrowLeft className="mr-2 w-5 h-5" />
                        Tornar al Blog
                    </Link>

                    {/* Article */}
                    <article className="bg-gray-900 bg-opacity-80 backdrop-blur-md border border-gray-600 rounded-xl p-8">

                        {/* Header */}
                        <header className="mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${post.category === 'Tutorial'
                                    ? 'bg-blue-900 text-blue-300 border border-blue-600'
                                    : 'bg-purple-900 text-purple-300 border border-purple-600'
                                    }`}>
                                    {post.category}
                                </span>
                                <div className="flex items-center space-x-4 text-sm text-gray-400">
                                    <span className="flex items-center">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        {new Date(post.publishedAt).toLocaleDateString('ca-ES')}
                                    </span>
                                    <span className="flex items-center">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                {post.title}
                            </h1>

                            <p className="text-xl text-gray-300 leading-relaxed mb-6">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-sea-green bg-opacity-20 text-sea-green px-3 py-1 rounded text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center text-gray-400">
                                <User className="w-5 h-5 mr-2" />
                                <span>Per {post.author}</span>
                            </div>
                        </header>

                        {/* Content - Renderització directa */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />

                            {/* Tips */}
                            {post.tips && post.tips.length > 0 && (
                                <div className="mt-8 bg-sea-green bg-opacity-10 border-l-4 border-sea-green p-6 rounded-r-lg">
                                    <h3 className="text-sea-green font-bold text-xl mb-3 flex items-center">
                                        💡 Tips
                                    </h3>
                                    <ul className="space-y-2">
                                        {post.tips.map((tip, index) => (
                                            <li key={index} className="text-gray-100 flex items-start">
                                                <span className="text-sea-green mr-2">✓</span>
                                                {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Warnings */}
                            {post.warnings && post.warnings.length > 0 && (
                                <div className="mt-6 bg-yellow-500 bg-opacity-10 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                                    <h3 className="text-yellow-400 font-bold text-xl mb-3 flex items-center">
                                        ⚠️ Warnings
                                    </h3>
                                    <ul className="space-y-2">
                                        {post.warnings.map((warning, index) => (
                                            <li key={index} className="text-gray-100 flex items-start">
                                                <span className="text-yellow-400 mr-2">!</span>
                                                {warning}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </article>

                    {/* Navigation */}
                    <div className="mt-8 text-center">
                        <Link
                            to="/blog"
                            className="bg-gradient-to-r from-sea-green to-sky-blue text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 inline-flex items-center"
                        >
                            <ArrowLeft className="mr-2 w-5 h-5" />
                            Veure més posts
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}