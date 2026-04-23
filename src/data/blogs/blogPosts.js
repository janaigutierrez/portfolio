import { metodologiesAgils } from './metodologies-agils.js'
import { cloudinaryImatges } from './cloudinary-imatges.js'

const getBlogContent = (blog, lang = 'ca') => {
  const langContent = blog.content[lang]

  return {
    id: blog.id,
    category: blog.category,
    slug: langContent.slug,
    title: langContent.title,
    excerpt: langContent.excerpt,
    rawContent: typeof langContent.content === 'string' ? langContent.content.trim() : '',
    tags: blog.tags || [],
    publishedAt: blog.publishedAt || new Date().toISOString(),
    readTime: langContent.readTime || '5 min',
    featured: blog.featured || false,
    author: 'Janai Gutiérrez',
    tips: langContent.tips || [],
    warnings: langContent.warnings || []
  }
}

export const blogPosts = [
  getBlogContent(cloudinaryImatges, 'ca'),
  getBlogContent(metodologiesAgils, 'ca'),
]

export const getPostBySlug = (slug, lang = 'ca') => {
  const allBlogs = [cloudinaryImatges, metodologiesAgils]

  for (const blog of allBlogs) {
    const content = blog.content?.[lang]
    if (content && content.slug === slug) {
      return getBlogContent(blog, lang)
    }
  }
  return null
}

export const getAllPosts = (lang = 'ca') => {
  const allBlogs = [cloudinaryImatges, metodologiesAgils]
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