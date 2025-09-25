import { Waves } from 'lucide-react'

export default function BlogHero() {
    return (
        <section className="relative pt-24 pb-16 px-6">
            <div className="container mx-auto max-w-6xl text-center">
                <div className="flex items-center justify-center mb-6">
                    <Waves className="mr-4 w-12 h-12 text-sea-green" />
                    <h1 className="text-5xl md:text-6xl font-bold text-white">
                        Blog
                    </h1>
                </div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Reflexions, tutorials i experiències d'un desenvolupador en constant aprenentatge
                </p>
            </div>
        </section>
    )
}