export const f01TailwindVite = {
    id: 'f01-tailwind-vite',
    category: 'frontend',
    code: 'F01',

    metadata: {
        difficulty: 'easy',
        priority: 'high',
        estimatedTime: '???',
        status: 'pending',
        tags: ['tailwind', 'vite', 'css', 'setup'],
        relatedBlogs: ['F02', 'B01'],
        version: '1.0',
        lastUpdate: '2025-10-05'
    },

    content: {
        ca: {
            title: 'Tailwind + Vite: Evitar errors @apply',
            slug: 'tailwind-vite-errors-apply',
            excerpt: 'Guia per evitar els errors més comuns quan uses @apply amb Tailwind en projectes Vite.',
            readTime: '???',
            sections: [
                {
                    id: 'intro',
                    title: 'Introducció',
                    content: `Un dels errors més frustrants quan comences amb Tailwind...`
                },
                {
                    id: 'problema',
                    title: 'El problema dels @apply',
                    content: `Quan intentes usar @apply per crear classes custom...`,
                    code: {
                        language: 'css',
                        snippet: `/* ❌ Això dona error */
.custom-button {
    @apply px-4 py-2 bg-blue-500;
}`
                    }
                }
            ],
            tips: [
                'Sempre importar les directives @tailwind al principi',
                'Usa @layer per organitzar les classes custom'
            ]
        },

        es: {
            title: 'Tailwind + Vite: Evitar errores @apply',
            slug: 'tailwind-vite-errors-apply',
            excerpt: 'Guía para evitar los errores más comunes cuando usas @apply con Tailwind en proyectos Vite.',
            readTime: '???',
            sections: [
                {
                    id: 'intro',
                    title: 'Introducción',
                    content: `Uno de los errores más frustrantes cuando empiezas con Tailwind...`
                },
                {
                    id: 'problema',
                    title: 'El problema de @apply',
                    content: `Cuando intentas usar @apply para crear clases personalizadas...`,
                    code: {
                        language: 'css',
                        snippet: `/* ❌ Esto da error */
.custom-button {
    @apply px-4 py-2 bg-blue-500;
}`
                    }
                }
            ],
            tips: [
                'Siempre importa las directivas @tailwind al principio',
                'Usa @layer para organizar las clases personalizadas'
            ]
        },

        en: {
            title: 'Tailwind + Vite: Avoiding @apply errors',
            slug: 'tailwind-vite-errors-apply',
            excerpt: 'Guide to avoid the most common errors when using @apply with Tailwind in Vite projects.',
            readTime: '???',
            sections: [
                {
                    id: 'intro',
                    title: 'Introduction',
                    content: `One of the most frustrating errors when you start with Tailwind...`
                },
                {
                    id: 'problem',
                    title: 'The @apply problem',
                    content: `When you try to use @apply to create custom classes...`,
                    code: {
                        language: 'css',
                        snippet: `/* ❌ This gives an error */
.custom-button {
    @apply px-4 py-2 bg-blue-500;
}`
                    }
                }
            ],
            tips: [
                'Always import @tailwind directives at the beginning',
                'Use @layer to organize custom classes'
            ]
        }
    }
}