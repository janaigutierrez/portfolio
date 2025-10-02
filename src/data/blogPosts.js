export const blogPosts = [
  {
    id: 1,
    title: "Com crear un sistema d'autenticació amb JWT",
    slug: "jwt-authentication-system",
    excerpt: "Guia completa per implementar autenticació segura amb JSON Web Tokens en aplicacions Node.js i React.",
    content: "blablabla",
    tags: ['Node.js', 'React', 'Security', 'Authentication'],
    category: 'Tutorial',
    publishedAt: '2024-03-15',
    readTime: '8 min',
    featured: true,
    image: '/blog/jwt-guide.jpg',
    author: 'Janai Gutiérrez'
  }
];

export const categories = [
  { id: 'all', name: 'Tots els Posts', count: blogPosts.length },
  { id: 'tutorial', name: 'Tutorials', count: blogPosts.filter(p => p.category === 'Tutorial').length },
  { id: 'opinion', name: 'Opinions', count: blogPosts.filter(p => p.category === 'Opinion').length },
  { id: 'news', name: 'Tech News', count: 0 }
];

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured);
};

export const getPostsByCategory = (category) => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};