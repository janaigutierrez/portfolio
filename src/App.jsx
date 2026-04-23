import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TranslationProvider } from './hooks/useTranslation.jsx'

const Portfolio = lazy(() => import('./pages/Portfolio'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./components/blog/BlogPost.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function LoadingFallback() {
    return (
        <div className="min-h-screen bg-blue-900 flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-sea-green"></div>
        </div>
    )
}

function App() {
    return (
        <TranslationProvider>
            <Router>
                <Suspense fallback={<LoadingFallback />}>
                    <div className="min-h-screen">
                        <Routes>
                            <Route path="/" element={<Portfolio />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </Suspense>
            </Router>
        </TranslationProvider>
    )
}

export default App
