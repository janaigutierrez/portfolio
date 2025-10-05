import { f01TailwindVite } from './frontend/f01-tailwind-vite.js'

// Exportar tots els blogs
export const allBlogs = [
    f01TailwindVite,
    // Aquí aniràs afegint més blogs
]

// Exportar per categories (opcional)
export const blogsByCategory = {
    frontend: [f01TailwindVite],
    backend: [],
    database: [],
    errors: [],
    validadors: [],
    estat: []
}