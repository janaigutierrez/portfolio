import Header from '../components/sections/Header'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

export default function Portfolio() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </>
    )
}