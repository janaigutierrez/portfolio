export const blogPosts = [
    {
        id: 1,
        title: "Com crear un sistema d'autenticació amb JWT",
        slug: "jwt-authentication-system",
        excerpt: "Guia completa per implementar autenticació segura amb JSON Web Tokens en aplicacions Node.js i React.",
        content: `
# Com crear un sistema d'autenticació amb JWT

L'autenticació és un dels pilars fonamentals de qualsevol aplicació web. En aquest article, explorarem com implementar un sistema segur utilitzant JSON Web Tokens.

## Què són els JWT?

Els JSON Web Tokens són un estàndard obert que defineix una manera compacta i segura de transmetre informació entre parts com un objecte JSON.

## Implementació Backend

### 1. Setup inicial
\`\`\`javascript
npm install jsonwebtoken bcryptjs express
\`\`\`

### 2. Crear el middleware d'autenticació
\`\`\`javascript
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
\`\`\`

## Implementació Frontend

### Hook personalitzat per gestionar autenticació
\`\`\`javascript
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    const { token, user } = response.data;
    
    localStorage.setItem('token', token);
    setUser(user);
  };
  
  return { user, login, loading };
};
\`\`\`

## Millors Pràctiques

1. **Expiracio temporal**: Els tokens han de tenir un temps d'expiració curt
2. **Refresh tokens**: Implementar sistema de renovació automàtica
3. **Secure storage**: Mai guardar tokens sensibles en localStorage per aplicacions crítiques

## Conclusió

JWT ofereix una solució elegant per l'autenticació en aplicacions modernes. La seva natura stateless els fa ideals per arquitectures distribuïdes.
    `,
        tags: ['Node.js', 'React', 'Security', 'Authentication'],
        category: 'Tutorial',
        publishedAt: '2024-03-15',
        readTime: '8 min',
        featured: true,
        image: '/blog/jwt-guide.jpg',
        author: 'Janai Gutiérrez'
    },
    {
        id: 2,
        title: "React Hooks que tot developer hauria de conèixer",
        slug: "essential-react-hooks",
        excerpt: "Descobreix els hooks més útils de React que poden simplificar el teu codi i millorar el rendiment de les teves aplicacions.",
        content: `
# React Hooks Essentials

Els hooks van revolucionar React quan es van introduir. Aquí tens els més importants que hauríem de dominar.

## 1. useState - Gestió d'estat local

El hook més bàsic però fonamental:
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`

## 2. useEffect - Efectes secundaris

Per subscripcions, API calls, etc:
\`\`\`javascript
useEffect(() => {
  fetchData();
}, [dependency]);
\`\`\`

## 3. useContext - Context sense Consumer

Simplifica l'ús de Context:
\`\`\`javascript
const theme = useContext(ThemeContext);
\`\`\`

## 4. useCallback - Optimització de funcions

Evita re-renderitzats innecessaris:
\`\`\`javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## 5. useMemo - Memoització de valors

Per càlculs costosos:
\`\`\`javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

## Hooks personalitzats

La veritable màgia de React:
\`\`\`javascript
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading };
};
\`\`\`
    `,
        tags: ['React', 'Hooks', 'Frontend', 'Performance'],
        category: 'Tutorial',
        publishedAt: '2024-03-10',
        readTime: '6 min',
        featured: false,
        image: '/blog/react-hooks.jpg',
        author: 'Janai Gutiérrez'
    },
    {
        id: 3,
        title: "Per què els portfolios tradicionals no funcionen",
        slug: "traditional-portfolios-problem",
        excerpt: "Reflexió sobre l'evolució dels portfolios digitals i per què cal innovar per destacar en un món saturat de desenvolupadors.",
        content: `
# El problema dels portfolios tradicionals

Cada dia veig centenars de portfolios de desenvolupadors. La majoria segueixen el mateix patró avorrit.

## El problema de la saturació

- **Template genèric**: Bootstrap/Material Design copy-paste
- **Contingut predictible**: About, Skills, Projects, Contact
- **Zero personalitat**: Semblen tots iguals

## Què esperem realment?

Un portfolio hauria de:
1. **Comptar una història** enlloc de només llistar skills
2. **Demostrar creativitat** més enllà del codi
3. **Crear una connexió emocional** amb el visitant

## La solució: Narrativa i experiència

En el meu portfolio, vaig triar una metàfora marina - un "dive" progressiu des de la superfície fins al fons del mar. Cada secció té significat dins aquesta història.

### Avantatges:
- **Memorable**: La gent recorda la experiència
- **Diferenciador**: No s'assembla a cap altre
- **Cohesiu**: Tot té sentit dins el context

## Consells pràctics

1. **Troba la teva metàfora**: Què et representa?
2. **Sigues consistent**: Aplica el theme a tot
3. **Funcionalitat primer**: Bonic però funcional
4. **Mobile-first**: 60% del tràfic és mòbil

## Conclusió

Un bon portfolio no és una llista de skills - és una experiència que reflexa qui ets com a professional i persona.
    `,
        tags: ['Portfolio', 'Design', 'Opinion', 'Career'],
        category: 'Opinion',
        publishedAt: '2024-03-05',
        readTime: '4 min',
        featured: true,
        image: '/blog/portfolio-opinion.jpg',
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