# Personal Portfolio - Janai Gutierrez

## Project Description

Interactive personal portfolio with a marine theme, built with React and Vite. This project is designed as a quick and functional presentation card to showcase projects and skills, prioritizing utility and development speed over code purity.

> **Important Note**: This portfolio is NOT intended to be an example of perfect code or ideal architecture. Many things are hardcoded or use inline styles to prioritize rapid deployment. The intention is to have a functional base that can be refined over time.

---

## Main Features

### Design and UX
- **Cohesive Marine Theme**: Visual narrative simulating an immersion from the surface to the seabed
- **Parallax Scrolling**: Depth effects and smooth transitions between sections
- **Responsive Design**: Adapted to all devices (mobile, tablet, desktop)

### Sections
1. **Hero**: Presentation with progressive submersion effect
2. **About**: Personal information, tech stack, and achievements
3. **Projects**: Gallery with all my projects' data and progress tracking
4. **Blog**: Publication system with responsive grid and markdown rendering
5. **Contact**: Contact form with professional information
6. **Footer**: Simplified navigation

### Technical Features
- Blog system with dynamic routing (`/blog/:slug`)
- Multi-language (Catalan/English/Spanish) with custom hook
- State management with React Hooks
- Form with connection
- Reusable and modular components
- Custom CSS with Tailwind + custom animations

---

## Technology Stack

### Core
- **React** 19.1.1
- **Vite** 7.1.2
- **React Router DOM** (for navigation)

### Styling
- **Tailwind CSS** 3.4.0
- **PostCSS** + **Autoprefixer**
- Custom CSS animations

### Tools & Dev
- **ESLint** with React plugins
- **Lucide React** (icons)
- Hot Module Replacement (HMR)

---

## Custom Color Palette

Defined in `tailwind.config.js`:
```javascript
colors: {
    'sea-green': '#20B2AA',    // Mediterranean turquoise
    'sky-blue': '#48CAE4',     // Sky blue
    'terra-siena': '#A0522D',  // Terracotta
    'beige-pedra': '#F5F5DC',  // Stone beige
    'gris-carbo': '#2F2F2F',   // Charcoal grey
}
```
---

## Featured Projects

Currently includes 7 main projects:

- **NEST** - Productivity app 
- **Terracota** - Modular SaaS + web portal in development
- **Web Casament** - Custom website with gallery and RSVP
- **Grove Fitness** - Fitness tracking app in development
- **GeoCat** - Wordle-style game platform
- **Can Carerac** - Booking management website and portal for Can Carerac
- **Cafeteria i Gelateria Iseo** - Virtual menu website, location and contact

---

## Blog System

Page where I will be publishing different blogs related to the programming world, currently in development.

### Característiques
- Posts with basic markdown rendering
- Dynamic routing by slug (`/blog/post-name`)
- 404 handling for non-existent posts
- Categories and tags (prepared for future)

### Post Structure

```javascript
{
  id: 1,
  title: "Post Title",
  slug: "url-friendly-name",
  excerpt: "Brief Summary",
  content: "Markdown content",
  category: "Tutorial",
  tags: ["react", "javascript"],
  date: "2024-01-15",
  readTime: "5 min"
}
```
##  Author

**Janai Gutierrez**

- 🌐 Portfolio: [janai.dev](https://janai.dev)  
- 📧 Email: janaigs97@gmail.com  
- 💻 GitHub: [@janaigutierrez](https://github.com/janaigutierrez)  
- 🔗 LinkedIn: [Janai Gutierrez](https://www.linkedin.com/in/janai-gutiérrez-sañudo-8aa2622a0)  


## Last Update
**October 2025**