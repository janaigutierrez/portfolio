import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { TranslationProvider } from './hooks/useTranslation'

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