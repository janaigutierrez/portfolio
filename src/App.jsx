import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TranslationProvider } from './hooks/useTranslation.jsx'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog.jsx'
import BlogPost from './components/blog/BlogPost.jsx'

function App() {
  return (
    <TranslationProvider>
      <Router>
        <div className="min-h-screen">
          <Routes>
            {/* Ruta Portfolio */}
            <Route path="/" element={<Portfolio />} />

            {/* Ruta blog */}
            <Route path="/blog" element={<Blog />} />

            {/* Ruta post individual */}
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </TranslationProvider>
  )
}

export default App