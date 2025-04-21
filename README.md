### Portafolio Bilingüe - Daniel Esteban Pereira Rosas

Un portafolio profesional bilingüe (inglés/español) desarrollado con Next.js, React, Tailwind CSS y Framer Motion. Presenta un diseño moderno con animaciones fluidas, cambio de idioma en tiempo real y una experiencia de usuario optimizada.





## 🚀 Características

- **Diseño Responsivo**: Experiencia óptima en dispositivos móviles, tablets y escritorio
- **Bilingüe**: Soporte completo para inglés y español con cambio de idioma en tiempo real
- **Animaciones Fluidas**: Animaciones elegantes con Framer Motion
- **Modo Oscuro**: Diseño optimizado para modo oscuro con tema cyberpunk/neón
- **Secciones Completas**: Hero, Sobre Mí, Habilidades, Proyectos, Experiencia y Contacto
- **Formulario de Contacto**: Integración con EmailJS para envío de mensajes
- **Optimizado para SEO**: Metadatos y estructura optimizada para motores de búsqueda
- **Manejo de Errores**: Sistema robusto de manejo de errores y páginas 404


## 🛠️ Tecnologías

- **Next.js 14**: Framework de React con App Router
- **React 18**: Biblioteca para interfaces de usuario
- **Tailwind CSS**: Framework CSS utilitario
- **Framer Motion**: Biblioteca de animaciones para React
- **i18next**: Solución de internacionalización
- **EmailJS**: Servicio para envío de emails desde el frontend
- **TypeScript**: Tipado estático para JavaScript
- **Lucide Icons**: Iconos modernos y personalizables


## 📋 Requisitos Previos

- Node.js 18.x o superior
- npm, yarn o pnpm


## 🔧 Instalación

1. Clona el repositorio:

```shellscript
git clone https://github.com/tu-usuario/portafolio-bilingue.git
cd portafolio-bilingue
```


2. Instala las dependencias:

```shellscript
npm install
# o
yarn install
# o
pnpm install
```


3. Configura las variables de entorno:
Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```plaintext
# EmailJS (opcional para el formulario de contacto)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```


4. Inicia el servidor de desarrollo:

```shellscript
npm run dev
# o
yarn dev
# o
pnpm dev
```


5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.


## 📁 Estructura del Proyecto

```plaintext
/app                  # Directorio principal de Next.js App Router
  /[...not_found]     # Manejo de rutas no encontradas (404)
  /globals.css        # Estilos globales
  /layout.tsx         # Diseño principal de la aplicación
  /page.tsx           # Página principal
  /error.tsx          # Manejo de errores
  /global-error.tsx   # Manejo de errores globales
/components           # Componentes React
  /About.tsx          # Sección Sobre Mí
  /Contact.tsx        # Sección de Contacto
  /Experience.tsx     # Sección de Experiencia
  /Footer.tsx         # Pie de página
  /Hero.tsx           # Sección principal (hero)
  /Navbar.tsx         # Barra de navegación
  /Projects.tsx       # Sección de Proyectos
  /Skills.js          # Sección de Habilidades
/lib                  # Utilidades y configuraciones
  /i18n.ts            # Configuración de internacionalización
/public               # Archivos estáticos
  /img                # Imágenes del proyecto
```

## 🎨 Personalización

### Colores y Tema

Modifica `tailwind.config.ts` para cambiar la paleta de colores:

```typescript
theme: {
  extend: {
    colors: {
      "neon-green": "#00FF7F",
      "emerald": "#007F5F",
      // Añade o modifica colores aquí
    }
  }
}
```

### Contenido

Edita los archivos en `/components` para cambiar el contenido de cada sección.

### Traducciones

Modifica `lib/i18n.ts` para cambiar los textos en inglés y español:

```typescript
const enTranslations = {
  nav: {
    home: "Home",
    // Modifica los textos en inglés aquí
  }
}

const esTranslations = {
  nav: {
    home: "Inicio",
    // Modifica los textos en español aquí
  }
}
```

### Proyectos

Actualiza el array `projects` en `components/Projects.tsx` para mostrar tus propios proyectos:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Tu Proyecto",
    description: {
      en: "Description in English",
      es: "Descripción en Español",
    },
    // Añade más detalles aquí
  },
  // Añade más proyectos
]
```

### Experiencia

Actualiza el array `experiences` en `components/Experience.tsx` para mostrar tu propia experiencia:

```typescript
const experiences: Experience[] = [
  {
    id: 1,
    title: "Tu Puesto",
    company: "Tu Empresa",
    // Añade más detalles aquí
  },
  // Añade más experiencias
]
```

## 🚢 Despliegue

### Vercel (Recomendado)

La forma más sencilla de desplegar este proyecto es usando [Vercel](https://vercel.com):

1. Importa tu repositorio en Vercel
2. Configura las variables de entorno
3. Despliega


### Otros Proveedores

También puedes desplegar en otros proveedores como Netlify, AWS Amplify o cualquier servicio que soporte Next.js:

1. Construye el proyecto:

```shellscript
npm run build
# o
yarn build
# o
pnpm build
```


2. Despliega la carpeta `.next` según las instrucciones de tu proveedor.


## 📝 Características Detalladas

### Sistema de Internacionalización

El portafolio utiliza i18next para proporcionar una experiencia bilingüe completa:

- Cambio de idioma en tiempo real
- Persistencia del idioma seleccionado mediante localStorage
- Traducciones organizadas por secciones y componentes


### Animaciones y Efectos Visuales

Framer Motion se utiliza para crear una experiencia visual atractiva:

- Animaciones de entrada y salida para componentes
- Animaciones basadas en scroll
- Efectos de hover y transiciones suaves
- Animaciones de página completa


### Formulario de Contacto

El formulario de contacto utiliza EmailJS para enviar mensajes directamente desde el frontend:

- Validación de formularios
- Feedback visual durante el envío
- Notificaciones de éxito/error
- Configuración personalizable


### Carrusel de Fotos y Video

La sección Sobre Mí incluye un carrusel interactivo:

- Soporte para imágenes y videos de YouTube
- Controles de navegación
- Autoplay configurable
- Control de sonido para videos


### Línea de Tiempo de Experiencia

La sección de Experiencia utiliza una línea de tiempo vertical interactiva:

- Categorización por tipo (trabajo, educación, proyecto)
- Detalles expandibles
- Diseño responsivo
- Efectos visuales al hacer hover


### Filtrado de Proyectos

La sección de Proyectos permite filtrar por categoría:

- Filtros por tipo (frontend, backend, fullstack)
- Animaciones de transición entre filtros
- Detalles expandibles para cada proyecto
- Enlaces a GitHub y demos en vivo


## 🔧 Solución de Problemas

### Problemas de Construcción

Si encuentras problemas durante la construcción del proyecto:

1. Verifica que estás usando Node.js 18.x o superior
2. Limpia la caché de Next.js:

```shellscript
rm -rf .next
# o en Windows
rmdir /s /q .next
```


3. Reinstala las dependencias:

```shellscript
rm -rf node_modules
npm install
# o
yarn install
# o
pnpm install
```




### Problemas con EmailJS

Si el formulario de contacto no funciona:

1. Verifica que has configurado correctamente las variables de entorno
2. Asegúrate de que el servicio, la plantilla y la clave pública de EmailJS son correctos
3. Comprueba la consola del navegador para ver posibles errores


## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

- **Daniel "Atex" Pereira** - [GitHub](https://github.com/AtexDEPR)


## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - Por el increíble framework
- [Tailwind CSS](https://tailwindcss.com/) - Por el sistema de utilidades CSS
- [Framer Motion](https://www.framer.com/motion/) - Por las animaciones fluidas
- [i18next](https://www.i18next.com/) - Por la solución de internacionalización
- [EmailJS](https://www.emailjs.com/) - Por el servicio de envío de emails
- [Lucide Icons](https://lucide.dev/) - Por los iconos utilizados


---

Desarrollado con ❤️ y ☕
