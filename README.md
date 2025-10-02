# Portfolio Personal - Janai Gutierrez

## Descripció del Projecte

Portfolio personal interactiu amb temàtica marina , desenvolupat amb React i Vite. Aquest projecte està dissenyat com a **carta de presentació ràpida i funcional** per mostrar projectes i habilitats, prioritzant la **utilitat i velocitat de desenvolupament** sobre la puresa del codi.

> **Nota Important**: Aquest portfolio NO pretén ser un exemple de codi perfecte o arquitectura ideal. Moltes coses estan hardcodejades o amb estils inline per prioritzar el desplegament ràpid. La intenció és tenir una base funcional que es pot refinar amb el temps.

---

##  Característiques Principals

### Disseny i UX
- **Temàtica Marina Cohesiva**: Narrativa visual que simula una immersió des de la superfície fins al fons marí
- **Parallax Scrolling**: Efectes de profunditat i transicions suaus entre seccions
- **Responsive Design**: Adaptat a tots els dispositius (mobile, tablet, desktop)
- **Animacions Personalitzades**: Efectes de bombolles, onades i transicions aquàtiques

### Seccions
1. **Hero**: Presentació amb efecte de submersió progressiva
2. **About**: Informació personal, tech stack i achievements amb estil gamificat
3. **Projects**: Galeria de projectes amb sistema de "quests" i progress tracking
4. **Blog**: Sistema de publicacions amb grid responsive i markdown rendering
5. **Contact**: Formulari de contacte amb informació professional
6. **Footer**: Navegació simplificada i links legals

### Funcionalitats Tècniques
- Sistema de blog amb routing dinàmic (`/blog/:slug`)
- Multi-idioma (Català/Anglès/Castellà) amb hook personalitzat
- Gestió d'estats amb React Hooks
- Formulari amb connexió
- Components reutilitzables i modulars
- CSS personalitzat amb Tailwind + animacions custom

---

## Stack Tecnològic

### Core
- **React** 19.1.1
- **Vite** 7.1.2
- **React Router DOM** (per navegació)

### Styling
- **Tailwind CSS** 3.4.0
- **PostCSS** + **Autoprefixer**
- Animacions CSS personalitzades

### Tools & Dev
- **ESLint** amb plugins React
- **Lucide React** (icones)
- Hot Module Replacement (HMR)

---

## Paleta de Colors Personalitzada

Definida a `tailwind.config.js`:

```javascript
colors: {
    'sea-green': '#20B2AA',    // Turquesa mediterrani
    'sky-blue': '#48CAE4',     // Blau cel
    'terra-siena': '#A0522D',  // Terra cuita
    'beige-pedra': '#F5F5DC',  // Beige pedra
    'gris-carbo': '#2F2F2F',   // Gris carbó
}
```

---

## Projectes Destacats

Actualment inclou 7 projectes principals:

- **NEST** - App de productivitat 
- **Terracota** - SaaS modular + portal web en desenvolupament
- **Web Casament** - Web personalitzada amb galeria i RSVP
- **Grove Fitness** - App de tracking fitness en desenvolupament
- **GeoCat** - Plataforma de joc estil wordle
- **Can Carerac** - Web de gestió de reserves i portal de la masia Can Carerac
- **Cafeteria i Gelateria Iseo** - Web de carta virtual, ubicació i contacte

---

## Sistema de Blog

Pàgina on aniré publicant diferents blogs relacionats amb el món de la programació, actualment en desenvolupament.

### Característiques
- Posts amb markdown basic rendering
- Routing dinàmic per slug (`/blog/nom-post`)
- 404 handling per posts inexistents
- Categories i tags (preparats per futur)

### Estructura Post

```javascript
{
  id: 1,
  title: "Títol del post",
  slug: "nom-url-amigable",
  excerpt: "Resum breu",
  content: "Contingut markdown",
  category: "Tutorial",
  tags: ["react", "javascript"],
  date: "2024-01-15",
  readTime: "5 min"
}
```


## 🚨 Limitacions Conegudes

- Dades estàtiques: Projectes i posts hardcodejats
- Formulari no funcional: Només `console.log` (sense backend)
- Inline styles: Alguns components amb estils directes
- No optimitzat: Manca lazy loading, code splitting, etc.
- SEO bàsic: Meta tags mínims
- Accessibilitat: No completament auditada


## 👤 Autor

**Janai Gutierrez**

- 🌐 Portfolio: [janai.dev](https://janai.dev)  
- 📧 Email: janaigs97@gmail.com  
- 💻 GitHub: [@janaigutierrez](https://github.com/janaigutierrez)  
- 🔗 LinkedIn: [Janai Gutierrez](https://www.linkedin.com/in/janai-gutiérrez-sañudo-8aa2622a0)  


## Última actualització

**Octubre 2025**