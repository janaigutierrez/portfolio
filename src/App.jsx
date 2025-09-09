import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Contact from './components/Contact'


function App() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
