import Header from './components/sections/Header'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/sections/Footer'
import { TranslationProvider } from './hooks/useTranslation.jsx'

function App() {
  return (
    <TranslationProvider>
      <div className="min-h-screen">
        <Header />

        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </TranslationProvider>
  )
}

export default App