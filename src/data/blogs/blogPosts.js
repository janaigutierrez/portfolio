import { metodologiesAgils } from './metodologies-agils.js'

// Funció per convertir Markdown a HTML (simple)
const markdownToHTML = (markdown) => {
  let html = markdown
    // Horizontal rule (abans de tot per evitar confusions)
    .replace(/^---$/gim, '<hr class="border-gray-600 my-8" />')
    // Headers
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-bold text-white mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold text-sea-green mt-8 mb-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold text-sky-blue mt-10 mb-6">$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    // Italic (després de bold per no interferir)
    .replace(/\*([^\*]+)\*/g, '<em class="italic text-gray-200">$1</em>')
    // Code inline
    .replace(/`([^`]+)`/g, '<code class="bg-gray-800 px-2 py-1 rounded text-sea-green text-sm">$1</code>')
    // Lists - agrupem en <ul>
    .replace(/^- (.*$)/gim, '<li class="text-gray-100 ml-6 mb-2 list-disc">$1</li>')
    // Paragraphs (només línies que no són tags HTML)
    .replace(/^(?!<[h|l|u|d])(.*$)/gim, '<p class="text-gray-100 text-lg leading-relaxed mb-4">$1</p>')
    // Netegem line breaks dobles
    .replace(/\n\n+/g, '\n')

  // Envolvem les llistes en <ul>
  html = html.replace(/(<li class="text-gray-100.*?<\/li>\n?)+/g, (match) => {
    return `<ul class="list-disc ml-6 mb-4 text-gray-100 space-y-1">${match}</ul>`
  })

  return html
}

const getBlogContent = (blog, lang = 'ca') => {
  const langContent = blog.content[lang]

  // Si té content en format string (markdown), convertir-lo
  const contentHTML = typeof langContent.content === 'string'
    ? markdownToHTML(langContent.content)
    : ''

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
  getBlogContent(metodologiesAgils, 'ca'),
]

export const getPostBySlug = (slug, lang = 'ca') => {
  const allBlogs = [metodologiesAgils]

  for (const blog of allBlogs) {
    const content = blog.content?.[lang]
    if (content && content.slug === slug) {
      return getBlogContent(blog, lang)
    }
  }
  return null
}

export const getAllPosts = (lang = 'ca') => {
  const allBlogs = [metodologiesAgils]
  return allBlogs.map(blog => getBlogContent(blog, lang))
}

export const categories = [
  { id: 'all', name: 'Tots els Posts', count: blogPosts.length },
  { id: 'frontend', name: 'Frontend', count: 0 },
  { id: 'backend', name: 'Backend', count: blogPosts.filter(p => p.category === 'backend').length },
]

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

export const getPostsByCategory = (category) => {
  if (category === 'all') return blogPosts
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
}