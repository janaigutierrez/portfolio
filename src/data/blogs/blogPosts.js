import { f01TailwindVite } from './f01-tailwind-vite.js'

const getBlogContent = (blog, lang = 'ca') => {
  const langContent = blog.content[lang]
  const sections = langContent.sections || []

  // ✅ Convertir sections a HTML correctament
  const contentHTML = sections
    .map(section => {
      let html = `<h2 class="text-3xl font-bold text-sea-green mt-8 mb-4">${section.title}</h2>\n`
      html += `<p class="text-gray-100 text-lg leading-relaxed mb-4">${section.content}</p>`

      // Si hi ha codi, afegir-lo amb estils
      if (section.code) {
        html += `\n<pre class="bg-gray-800 border border-gray-600 p-4 rounded-lg overflow-x-auto my-6"><code class="language-${section.code.language} text-gray-100">${section.code.snippet}</code></pre>`
      }

      return html
    })
    .join('\n\n')

  return {
    id: blog.id,
    code: blog.code,
    category: blog.category,
    slug: langContent.slug,
    title: langContent.title,
    excerpt: langContent.excerpt,
    content: contentHTML,
    tags: blog.metadata?.tags || [],
    publishedAt: blog.metadata?.lastUpdate || new Date().toISOString(),
    readTime: langContent.readTime || '5 min',
    featured: blog.metadata?.priority === 'high',
    author: 'Janai Gutiérrez',
    tips: langContent.tips || [],
    warnings: langContent.warnings || []
  }
}

export const blogPosts = [
  getBlogContent(f01TailwindVite, 'ca'),
]

export const getPostBySlug = (slug, lang = 'ca') => {
  const allBlogs = [f01TailwindVite]

  for (const blog of allBlogs) {
    const content = blog.content?.[lang]
    if (content && content.slug === slug) {
      return getBlogContent(blog, lang)
    }
  }
  return null
}

export const getAllPosts = (lang = 'ca') => {
  const allBlogs = [f01TailwindVite]
  return allBlogs.map(blog => getBlogContent(blog, lang))
}

export const categories = [
  { id: 'all', name: 'Tots els Posts', count: blogPosts.length },
  { id: 'frontend', name: 'Frontend', count: blogPosts.filter(p => p.category === 'frontend').length },
  { id: 'backend', name: 'Backend', count: 0 },
]

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

export const getPostsByCategory = (category) => {
  if (category === 'all') return blogPosts
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}