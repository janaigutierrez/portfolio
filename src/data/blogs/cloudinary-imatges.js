export const cloudinaryImatges = {
    id: 'cloudinary-imatges',
    category: 'backend',
    tags: ['cloudinary', 'images', 'optimization', 'upload', 'next.js', 'react'],
    publishedAt: '2026-04-22',
    featured: true,

    content: {
        ca: {
            title: 'Cloudinary: Gestió d\'Imatges a Producció sense Maldecaps',
            slug: 'cloudinary-imatges',
            excerpt: 'Com pujar, optimitzar i servir imatges de manera professional amb Cloudinary. Tutorial pràctic amb exemples reals de Next.js i React.',
            readTime: '12 min',
            content: `
# Per què no pots servir imatges des del teu servidor

Quan comences un projecte, el primer instint és guardar les imatges al \`public/\` del teu projecte o directament al servidor. Funciona... fins que no funciona:

- **Pes**: Una foto de mòbil pesa 3-8MB. Multiplica per 50 receptes amb 3 fotos cadascuna i tens 1GB+ de dades servides directament des del teu hosting.
- **Format**: Els navegadors moderns suporten WebP i AVIF, que pesen un 40-60% menys que JPEG. Però no tots els navegadors ho suporten igual.
- **Mides**: Serves la mateixa imatge de 4000px d'ample per a un mòbil de 375px? Estàs malbaratant ample de banda.
- **CDN**: Si el teu servidor està a Europa i l'usuari a Amèrica, cada imatge triga més del necessari.

**Cloudinary resol tot això** amb una sola URL.

---

# Què és Cloudinary?

Cloudinary és un servei de gestió de media al núvol. En termes pràctics:

1. **Puges** la imatge original (una sola vegada)
2. **Transformes** via URL: mida, qualitat, format, retall...
3. **Serves** des d'un CDN global automàticament

El pla gratuït inclou 25GB de storage i 25GB de bandwidth mensual — suficient per a projectes petits i mitjans.

## Configuració Inicial

Necessites 3 valors del teu dashboard de Cloudinary:

\`\`\`
CLOUDINARY_CLOUD_NAME=el-teu-cloud
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=abc-secret
\`\`\`

**Important**: L'API Secret NOMÉS va al servidor. Mai l'exposis al frontend.

Instal·la el SDK:

\`\`\`
npm install cloudinary
\`\`\`

Configura'l al backend:

\`\`\`
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
\`\`\`

---

# Pujar Imatges: El Flux Complet

## 1. Frontend: Capturar l'arxiu

El formulari envia l'arxiu com a FormData:

\`\`\`
const handleUpload = async (file) => {
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  // data.url conté la URL de Cloudinary
}
\`\`\`

## 2. Backend: Pujar a Cloudinary

A l'API route del teu servidor (Next.js exemple):

\`\`\`
const result = await cloudinary.uploader.upload(filePath, {
  folder: 'receptes',
  quality: 'auto',
  format: 'auto',
})

// result.secure_url → la URL pública
// result.public_id → l'identificador per transformar
\`\`\`

**Els paràmetres clau:**
- \`folder\`: organitza les imatges per carpetes (receptes/, avatars/, etc.)
- \`quality: 'auto'\`: Cloudinary analitza la imatge i tria la qualitat òptima
- \`format: 'auto'\`: serveix WebP als navegadors que ho suporten, JPEG als altres

## 3. Guardar a Base de Dades

Guarda el \`public_id\` i la \`secure_url\`:

\`\`\`
{
  url: result.secure_url,
  publicId: result.public_id,
  width: result.width,
  height: result.height,
}
\`\`\`

---

# Transformacions via URL: El Poder Real

Aquí és on Cloudinary brilla. Un cop tens la imatge pujada, pots transformar-la simplement canviant la URL.

## Estructura d'una URL de Cloudinary

\`\`\`
https://res.cloudinary.com/CLOUD/image/upload/TRANSFORMACIONS/PUBLIC_ID.FORMAT
\`\`\`

## Exemples Pràctics

**Redimensionar a 800px d'ample:**
\`\`\`
/w_800,c_limit/receptes/pasta-carbonara.jpg
\`\`\`

**Thumbnail quadrat de 200x200:**
\`\`\`
/w_200,h_200,c_fill,g_auto/receptes/pasta-carbonara.jpg
\`\`\`

**Qualitat automàtica + format automàtic:**
\`\`\`
/q_auto,f_auto/receptes/pasta-carbonara.jpg
\`\`\`

**Blur de fons (per a placeholders):**
\`\`\`
/w_40,q_10,e_blur:1000/receptes/pasta-carbonara.jpg
\`\`\`

## Les Transformacions Més Útils

- \`w_X\` — Ample màxim
- \`h_X\` — Alt màxim
- \`c_fill\` — Retalla per omplir les dimensions exactes
- \`c_limit\` — Redimensiona sense excedir les dimensions
- \`g_auto\` — Detecció automàtica del punt d'interès (cares, objectes)
- \`q_auto\` — Qualitat optimitzada automàticament
- \`f_auto\` — Format modern automàtic (WebP/AVIF)
- \`e_blur:X\` — Efecte blur

---

# Patró Pràctic: Helper de URLs

Crea un helper per generar URLs transformades:

\`\`\`
const cloudinaryUrl = (publicId, options = {}) => {
  const {
    width = 800,
    height,
    crop = 'limit',
    quality = 'auto',
    format = 'auto',
  } = options

  const transforms = [
    \`w_\${width}\`,
    height ? \`h_\${height}\` : '',
    \`c_\${crop}\`,
    \`q_\${quality}\`,
    \`f_\${format}\`,
  ].filter(Boolean).join(',')

  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  return \`https://res.cloudinary.com/\${cloud}/image/upload/\${transforms}/\${publicId}\`
}
\`\`\`

**Ús:**

\`\`\`
// Card de recepta (llistat)
cloudinaryUrl('receptes/pasta', { width: 400, height: 300, crop: 'fill' })

// Detall de recepta (pantalla completa)
cloudinaryUrl('receptes/pasta', { width: 1200 })

// Avatar petit
cloudinaryUrl('avatars/user123', { width: 80, height: 80, crop: 'fill' })

// Placeholder blur
cloudinaryUrl('receptes/pasta', { width: 40, quality: 10 })
\`\`\`

---

# Esborrar Imatges

Quan un usuari esborra una recepta o canvia l'avatar, esborra també la imatge de Cloudinary per no acumular storage:

\`\`\`
await cloudinary.uploader.destroy(publicId)
\`\`\`

**Consell**: Guarda sempre el \`publicId\` a la base de dades, no només la URL. Sense el \`publicId\` no pots esborrar la imatge.

---

# Optimització Real: Quant Estalvies?

Dades reals d'un projecte amb ~200 imatges:

- **Sense optimització**: 1.2GB transferits/mes
- **Amb q_auto + f_auto**: 480MB transferits/mes (60% menys)
- **Amb redimensionat adaptatiu**: 280MB transferits/mes (77% menys)

La diferència es nota especialment en mòbil, on la connexió és més lenta i l'ample de banda més car.

---

# Errors Comuns

**1. Exposar l'API Secret al frontend**
L'API Secret permet esborrar qualsevol imatge del teu compte. Si l'exposes al codi del client, qualsevol pot buidar-te el storage. Sempre puja des del servidor.

**2. No esborrar imatges antigues**
Si l'usuari canvia l'avatar 10 vegades, tens 10 imatges ocupant espai. Esborra l'antiga abans de pujar la nova.

**3. No posar límits de mida**
Valida la mida del fitxer ABANS de pujar-lo. Un límit de 5-10MB per imatge és raonable:

\`\`\`
if (file.size > 10 * 1024 * 1024) {
  return res.status(400).json({ error: 'Imatge massa gran (màx 10MB)' })
}
\`\`\`

**4. Servir sempre la mateixa mida**
No serveixis una imatge de 2000px per a un thumbnail de 100px. Usa les transformacions per servir la mida adequada.

**5. No usar f_auto**
Si servixes JPEG a un navegador que suporta WebP, estàs enviant un 40% més de dades del necessari. \`f_auto\` ho resol automàticament.

---

# Resum

- **Puja una sola vegada** la imatge original a Cloudinary
- **Transforma via URL** per a cada cas d'ús (thumbnail, detall, avatar)
- **Usa \`q_auto,f_auto\` sempre** per optimització automàtica
- **Guarda el \`publicId\`** a la base de dades, no només la URL
- **Esborra imatges** quan ja no es necessiten
- **Valida al servidor** la mida i tipus d'arxiu abans de pujar
- **Mai exposis l'API Secret** al frontend

Cloudinary et permet centrar-te en construir la teva app sense preocupar-te per l'optimització d'imatges. El pla gratuït és més que suficient per començar.
            `,
            tips: [
                'Usa sempre q_auto i f_auto per estalviar fins a un 60% de bandwidth',
                'Guarda el publicId a la base de dades, no només la URL',
                'Crea un helper centralitzat per generar URLs transformades',
                'Posa un límit de mida (5-10MB) al backend abans de pujar',
                'Organitza les imatges en carpetes: receptes/, avatars/, etc.'
            ],
            warnings: [
                'Mai exposis CLOUDINARY_API_SECRET al frontend',
                'Esborra les imatges antigues quan l\'usuari les substitueixi',
                'No serveixis la mateixa mida per mòbil i desktop',
                'El pla gratuït té límits: 25GB storage, 25GB bandwidth/mes',
                'Sense f_auto estàs enviant un 40% més de dades del necessari'
            ]
        },

        es: {
            title: 'Cloudinary: Gestión de Imágenes en Producción sin Dolores de Cabeza',
            slug: 'cloudinary-imatges',
            excerpt: 'Cómo subir, optimizar y servir imágenes de forma profesional con Cloudinary. Tutorial práctico con ejemplos reales de Next.js y React.',
            readTime: '12 min',
            content: `
# Por qué no puedes servir imágenes desde tu servidor

Cuando empiezas un proyecto, el primer instinto es guardar las imágenes en \`public/\` de tu proyecto o directamente en el servidor. Funciona... hasta que deja de funcionar:

- **Peso**: Una foto de móvil pesa 3-8MB. Multiplica por 50 recetas con 3 fotos cada una y tienes 1GB+ de datos servidos directamente desde tu hosting.
- **Formato**: Los navegadores modernos soportan WebP y AVIF, que pesan un 40-60% menos que JPEG. Pero no todos los navegadores lo soportan igual.
- **Tamaños**: ¿Sirves la misma imagen de 4000px de ancho para un móvil de 375px? Estás desperdiciando ancho de banda.
- **CDN**: Si tu servidor está en Europa y el usuario en América, cada imagen tarda más de lo necesario.

**Cloudinary resuelve todo esto** con una sola URL.

---

# ¿Qué es Cloudinary?

Cloudinary es un servicio de gestión de media en la nube. En términos prácticos:

1. **Subes** la imagen original (una sola vez)
2. **Transformas** vía URL: tamaño, calidad, formato, recorte...
3. **Sirves** desde un CDN global automáticamente

El plan gratuito incluye 25GB de storage y 25GB de bandwidth mensual — suficiente para proyectos pequeños y medianos.

## Configuración Inicial

Necesitas 3 valores de tu dashboard de Cloudinary:

\`\`\`
CLOUDINARY_CLOUD_NAME=tu-cloud
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=abc-secret
\`\`\`

**Importante**: El API Secret SOLO va en el servidor. Nunca lo expongas al frontend.

Instala el SDK:

\`\`\`
npm install cloudinary
\`\`\`

Configúralo en el backend:

\`\`\`
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
\`\`\`

---

# Subir Imágenes: El Flujo Completo

## 1. Frontend: Capturar el archivo

El formulario envía el archivo como FormData:

\`\`\`
const handleUpload = async (file) => {
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  // data.url contiene la URL de Cloudinary
}
\`\`\`

## 2. Backend: Subir a Cloudinary

En la API route de tu servidor (ejemplo Next.js):

\`\`\`
const result = await cloudinary.uploader.upload(filePath, {
  folder: 'recetas',
  quality: 'auto',
  format: 'auto',
})

// result.secure_url → la URL pública
// result.public_id → el identificador para transformar
\`\`\`

**Los parámetros clave:**
- \`folder\`: organiza las imágenes por carpetas (recetas/, avatars/, etc.)
- \`quality: 'auto'\`: Cloudinary analiza la imagen y elige la calidad óptima
- \`format: 'auto'\`: sirve WebP a los navegadores que lo soportan, JPEG a los demás

## 3. Guardar en Base de Datos

Guarda el \`public_id\` y la \`secure_url\`:

\`\`\`
{
  url: result.secure_url,
  publicId: result.public_id,
  width: result.width,
  height: result.height,
}
\`\`\`

---

# Transformaciones vía URL: El Poder Real

Aquí es donde Cloudinary brilla. Una vez tienes la imagen subida, puedes transformarla simplemente cambiando la URL.

## Estructura de una URL de Cloudinary

\`\`\`
https://res.cloudinary.com/CLOUD/image/upload/TRANSFORMACIONES/PUBLIC_ID.FORMAT
\`\`\`

## Ejemplos Prácticos

**Redimensionar a 800px de ancho:**
\`\`\`
/w_800,c_limit/recetas/pasta-carbonara.jpg
\`\`\`

**Thumbnail cuadrado de 200x200:**
\`\`\`
/w_200,h_200,c_fill,g_auto/recetas/pasta-carbonara.jpg
\`\`\`

**Calidad automática + formato automático:**
\`\`\`
/q_auto,f_auto/recetas/pasta-carbonara.jpg
\`\`\`

## Las Transformaciones Más Útiles

- \`w_X\` — Ancho máximo
- \`h_X\` — Alto máximo
- \`c_fill\` — Recorta para llenar las dimensiones exactas
- \`c_limit\` — Redimensiona sin exceder las dimensiones
- \`g_auto\` — Detección automática del punto de interés
- \`q_auto\` — Calidad optimizada automáticamente
- \`f_auto\` — Formato moderno automático (WebP/AVIF)

---

# Patrón Práctico: Helper de URLs

Crea un helper para generar URLs transformadas:

\`\`\`
const cloudinaryUrl = (publicId, options = {}) => {
  const { width = 800, height, crop = 'limit', quality = 'auto', format = 'auto' } = options
  const transforms = [
    \`w_\${width}\`,
    height ? \`h_\${height}\` : '',
    \`c_\${crop}\`,
    \`q_\${quality}\`,
    \`f_\${format}\`,
  ].filter(Boolean).join(',')
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  return \`https://res.cloudinary.com/\${cloud}/image/upload/\${transforms}/\${publicId}\`
}
\`\`\`

---

# Errores Comunes

**1. Exponer el API Secret al frontend** — Permite borrar cualquier imagen. Siempre sube desde el servidor.

**2. No borrar imágenes antiguas** — Si el usuario cambia el avatar 10 veces, tienes 10 imágenes ocupando espacio.

**3. No poner límites de tamaño** — Valida ANTES de subir. 5-10MB por imagen es razonable.

**4. Servir siempre el mismo tamaño** — No sirvas una imagen de 2000px para un thumbnail de 100px.

**5. No usar f_auto** — Estás enviando un 40% más de datos del necesario.

---

# Resumen

- **Sube una sola vez** la imagen original a Cloudinary
- **Transforma vía URL** para cada caso de uso
- **Usa \`q_auto,f_auto\` siempre** para optimización automática
- **Guarda el \`publicId\`** en la base de datos, no solo la URL
- **Borra imágenes** cuando ya no se necesiten
- **Valida en el servidor** el tamaño y tipo de archivo antes de subir
- **Nunca expongas el API Secret** al frontend
            `,
            tips: [
                'Usa siempre q_auto y f_auto para ahorrar hasta un 60% de bandwidth',
                'Guarda el publicId en la base de datos, no solo la URL',
                'Crea un helper centralizado para generar URLs transformadas',
                'Pon un límite de tamaño (5-10MB) en el backend antes de subir',
                'Organiza las imágenes en carpetas: recetas/, avatars/, etc.'
            ],
            warnings: [
                'Nunca expongas CLOUDINARY_API_SECRET al frontend',
                'Borra las imágenes antiguas cuando el usuario las sustituya',
                'No sirvas el mismo tamaño para móvil y desktop',
                'El plan gratuito tiene límites: 25GB storage, 25GB bandwidth/mes',
                'Sin f_auto estás enviando un 40% más de datos del necesario'
            ]
        },

        en: {
            title: 'Cloudinary: Production Image Management Without the Headaches',
            slug: 'cloudinary-imatges',
            excerpt: 'How to upload, optimize, and serve images professionally with Cloudinary. Practical tutorial with real Next.js and React examples.',
            readTime: '12 min',
            content: `
# Why You Can't Serve Images From Your Server

When starting a project, the first instinct is to store images in your project's \`public/\` folder or directly on the server. It works... until it doesn't:

- **Size**: A mobile photo weighs 3-8MB. Multiply by 50 recipes with 3 photos each and you have 1GB+ of data served directly from your hosting.
- **Format**: Modern browsers support WebP and AVIF, which weigh 40-60% less than JPEG. But not all browsers support them equally.
- **Dimensions**: Are you serving the same 4000px wide image for a 375px mobile? You're wasting bandwidth.
- **CDN**: If your server is in Europe and the user in America, every image takes longer than necessary.

**Cloudinary solves all of this** with a single URL.

---

# What is Cloudinary?

Cloudinary is a cloud media management service. In practical terms:

1. **Upload** the original image (once)
2. **Transform** via URL: size, quality, format, crop...
3. **Serve** from a global CDN automatically

The free plan includes 25GB of storage and 25GB of monthly bandwidth — enough for small to medium projects.

## Initial Setup

You need 3 values from your Cloudinary dashboard:

\`\`\`
CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_KEY=123456789
CLOUDINARY_API_SECRET=abc-secret
\`\`\`

**Important**: The API Secret goes ONLY on the server. Never expose it to the frontend.

Install the SDK:

\`\`\`
npm install cloudinary
\`\`\`

Configure it on the backend:

\`\`\`
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})
\`\`\`

---

# Uploading Images: The Complete Flow

## 1. Frontend: Capture the file

The form sends the file as FormData:

\`\`\`
const handleUpload = async (file) => {
  const formData = new FormData()
  formData.append('image', file)

  const res = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  const data = await res.json()
  // data.url contains the Cloudinary URL
}
\`\`\`

## 2. Backend: Upload to Cloudinary

In your server's API route (Next.js example):

\`\`\`
const result = await cloudinary.uploader.upload(filePath, {
  folder: 'recipes',
  quality: 'auto',
  format: 'auto',
})

// result.secure_url → the public URL
// result.public_id → the identifier for transformations
\`\`\`

**Key parameters:**
- \`folder\`: organize images in folders (recipes/, avatars/, etc.)
- \`quality: 'auto'\`: Cloudinary analyzes the image and picks optimal quality
- \`format: 'auto'\`: serves WebP to supporting browsers, JPEG to others

## 3. Save to Database

Store the \`public_id\` and \`secure_url\`:

\`\`\`
{
  url: result.secure_url,
  publicId: result.public_id,
  width: result.width,
  height: result.height,
}
\`\`\`

---

# URL Transformations: The Real Power

This is where Cloudinary shines. Once the image is uploaded, you can transform it by simply changing the URL.

## Cloudinary URL Structure

\`\`\`
https://res.cloudinary.com/CLOUD/image/upload/TRANSFORMATIONS/PUBLIC_ID.FORMAT
\`\`\`

## Practical Examples

**Resize to 800px wide:**
\`\`\`
/w_800,c_limit/recipes/pasta-carbonara.jpg
\`\`\`

**200x200 square thumbnail:**
\`\`\`
/w_200,h_200,c_fill,g_auto/recipes/pasta-carbonara.jpg
\`\`\`

**Auto quality + auto format:**
\`\`\`
/q_auto,f_auto/recipes/pasta-carbonara.jpg
\`\`\`

## Most Useful Transformations

- \`w_X\` — Maximum width
- \`h_X\` — Maximum height
- \`c_fill\` — Crop to fill exact dimensions
- \`c_limit\` — Resize without exceeding dimensions
- \`g_auto\` — Auto-detect point of interest (faces, objects)
- \`q_auto\` — Automatically optimized quality
- \`f_auto\` — Automatic modern format (WebP/AVIF)

---

# Practical Pattern: URL Helper

Create a helper to generate transformed URLs:

\`\`\`
const cloudinaryUrl = (publicId, options = {}) => {
  const { width = 800, height, crop = 'limit', quality = 'auto', format = 'auto' } = options
  const transforms = [
    \`w_\${width}\`,
    height ? \`h_\${height}\` : '',
    \`c_\${crop}\`,
    \`q_\${quality}\`,
    \`f_\${format}\`,
  ].filter(Boolean).join(',')
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  return \`https://res.cloudinary.com/\${cloud}/image/upload/\${transforms}/\${publicId}\`
}
\`\`\`

---

# Common Mistakes

**1. Exposing the API Secret to the frontend** — It allows deleting any image. Always upload from the server.

**2. Not deleting old images** — If the user changes their avatar 10 times, you have 10 images using storage.

**3. Not setting size limits** — Validate BEFORE uploading. 5-10MB per image is reasonable.

**4. Always serving the same size** — Don't serve a 2000px image for a 100px thumbnail.

**5. Not using f_auto** — You're sending 40% more data than necessary.

---

# Summary

- **Upload once** the original image to Cloudinary
- **Transform via URL** for each use case
- **Always use \`q_auto,f_auto\`** for automatic optimization
- **Store the \`publicId\`** in the database, not just the URL
- **Delete images** when no longer needed
- **Validate on the server** file size and type before uploading
- **Never expose the API Secret** to the frontend
            `,
            tips: [
                'Always use q_auto and f_auto to save up to 60% bandwidth',
                'Store the publicId in the database, not just the URL',
                'Create a centralized helper for generating transformed URLs',
                'Set a size limit (5-10MB) on the backend before uploading',
                'Organize images in folders: recipes/, avatars/, etc.'
            ],
            warnings: [
                'Never expose CLOUDINARY_API_SECRET to the frontend',
                'Delete old images when the user replaces them',
                'Don\'t serve the same size for mobile and desktop',
                'The free plan has limits: 25GB storage, 25GB bandwidth/month',
                'Without f_auto you\'re sending 40% more data than necessary'
            ]
        }
    }
}
