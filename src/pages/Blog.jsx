import Header from '../components/sections/Header'
import Footer from '../components/sections/Footer'
import BlogHero from '../components/blog/BlogHero'
import BlogGrid from '../components/blog/BlogGrid.jsx'

export default function Blog() {
    return (
        <>
            <Header />
            <main className="bg-gradient-to-b from-blue-900 via-blue-800 to-indigo-900">
                <BlogHero />
                <BlogGrid />
            </main>
            <Footer />
        </>
    )
}