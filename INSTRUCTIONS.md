# 📄 ESPECIFICACIÓN COMPLETA DEL PORTAFOLIO WEB

> **Documento técnico — Versión profesional**

---

## 1. Visión General del Proyecto

Este proyecto corresponde al desarrollo de un portafolio personal profesional, diseñado bajo un estilo minimalista blanco y negro, utilizando React, TypeScript, TailwindCSS, Framer Motion y Lucide Icons.

Además del contenido profesional, debe integrar los elementos solicitados por la asignatura: hobbies, videos y contenido adicional (criptografía, PGP, prácticas, etc.) en un formato ordenado, limpio y extensible.

---

## 2. Pantalla Principal (Presentación / Hero Section)

### 2.1 Elementos obligatorios

- Nombre completo (título principal, tipografía bold, tamaño grande)
- Fotografía personal (estilo blanco/negro, recorte circular o rectangular minimalista)
- Secciones visibles o accesos rápidos:
  - Formación Académica
  - Correo electrónico
  - Redes sociales (Facebook, LinkedIn, TikTok, Twitter)
  - Micro–descripción profesional opcional

**Layout recomendado:**
- **Derecha:** foto
- **Izquierda:** nombre, enlaces, correo, formación
- Todo en diseño minimalista con spacing amplio

### 2.2 Requerimientos visuales

- Estilo monocromático (negro, blanco, gris neutro)
- Espaciado amplio
- Tipografía sans-serif moderna
- Animaciones suaves (fade-in, slide-up)
- Botones con efectos dinámicos (estilo Liquid Fill Button Hover)
- Íconos con microinteracciones fluidas (puede ser igual estilo Liquid Fill Hover)

### 2.3 Componentes necesarios

```tsx
<ProfileImage />
<HeadingTitle />
<SocialLinks />
<AcademicSummary />
```

---

## 3. Sección de Hobbies

### 3.1 Requerimientos funcionales

- Incluir al menos 3 hobbies
- Cada hobby debe contener:
  - Fotografía en blanco y negro
  - Título del hobby
  - Texto descriptivo corto

### 3.2 Interacción

Implementar un carrusel animado puede ser un:
- Fotos en la mitad izquierda (image slider) 
- Texto del hobby con breve descripción en la mitad derecha

Al cambiar de imagen:
- Fade-in/out de fotografía
- Slide-in del nuevo texto

### 3.3 Requerimientos adicionales

- Diseño minimalista (bordes finos, fondo blanco)
- Cada slide debe poder expandirse para una vista detallada opcional

### 3.4 Componentes necesarios

```tsx
<Carousel />
<HobbySlide />
<HobbyDescription />
```

---

## 4. Sección de Videos

### 4.1 Contenido requerido

- Dos videos sobre hobbies o actividades extracurriculares
- Un video PGP, donde aparezcas hablando (3–5 min)

### 4.2 Diseño

- Disposición en grid de 3 columnas (si hay espacio)
- Cards rectangulares:
  - Miniatura del video
  - Título
  - Descripción corta
  - Icono de reproducción

### 4.3 Componentes

```tsx
<VideoCard />
<VideoGrid />
<VideoPlayerModal /> {/* opcional */}
```

---

## 5. Sección de Criptografía y Material Académico

### 5.1 Tipos de contenido

Esta sección debe incluir tarjetas clasificables según etiquetas definidas por ti:
- "Prácticas"
- "Ejercicios"
- "Investigaciones"
- "Videos"
- "Lecturas"

### 5.2 Estructura de visualización

- Grid de 3 tarjetas por fila
- Tarjetas rectangulares verticales, minimalistas:
  - Título
  - Etiquetas (chips/badges)
  - Breve descripción
  - Icono representativo
  - Enlace o botón a más detalles

### 5.3 Filtro por etiquetas

- Barra superior con filtros tipo `<BadgeFilter />`
- Al hacer click, se ocultan/filtran las tarjetas

### 5.4 Componentes

```tsx
<ContentCard />
<FilterBar />
<Tag />
<ContentGrid />
<CategorySection />
```

---

## 6. Línea de Tiempo (Experiencia / Formación)

### 6.1 Requerimientos funcionales

- Línea vertical delgada (gris claro)
- Puntos circulares negros
- Tarjetas informativas alineadas a la derecha

### 6.2 Animación

Los puntos deben animarse al hacer scroll, usando:
- Fade-in
- Scale-up (0.8 → 1.0)
- Slide-up (5–8px)

### 6.3 Componentes

```tsx
<Timeline />
<TimelineItem />
<AnimatedDot />
```

---

## 7. Navegación y Layout General

### 7.1 Navbar

- Minimalista, fija
- Fondo blanco, borde inferior gris claro
- Links: `Home | Hobbies | Videos | Criptografía | Experiencia | Contacto`

### 7.2 Footer

- Texto pequeño
- Íconos sociales repetidos

### 7.3 Componentes

```tsx
<Navbar />
<Footer />
<MainLayout />
```

---

## 8. Paleta de Colores

| Nombre           | Código    | Descripción                  |
| ---------------- | --------- | ---------------------------- |
| Negro            | `#000000` | Color principal              |
| Negro suave      | `#111111` | Variante oscura              |
| Blanco           | `#FFFFFF` | Fondo principal              |
| Gris claro       | `#F5F5F5` | Fondos secundarios           |
| Borde gris       | `#E5E5E5` | Separadores                  |
| Texto secundario | `#C9C9C9` | Texto tenue                  |
| Verde terminal   | `#2ECC71` | Solo si usas consola en hero |

---

## 9. Arquitectura Recomendada del Proyecto

```
portfolio/
│
├── src/
│   ├── app/
│   │   ├── home/
│   │   ├── hobbies/
│   │   ├── videos/
│   │   ├── cryptography/
│   │   ├── experience/
│   │   └── contact/
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── avatar.tsx
│   │   │   └── modal.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SectionContainer.tsx
│   │   │
│   │   ├── display/
│   │   │   ├── Timeline.tsx
│   │   │   ├── TimelineItem.tsx
│   │   │   ├── ContentGrid.tsx
│   │   │   ├── ContentCard.tsx
│   │   │   └── VideoCard.tsx
│   │   │
│   │   ├── composite/
│   │   │   ├── PresentationHero.tsx
│   │   │   ├── HobbiesCarousel.tsx
│   │   │   ├── VideosSection.tsx
│   │   │   ├── CryptoSection.tsx
│   │   │   └── ExperienceTimeline.tsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │   └── typography.css
│   │
│   ├── lib/
│   │   ├── constants.ts
│   │   ├── data.ts
│   │   └── utils.ts
│   │
│   └── layouts/
│       └── MainLayout.tsx
│
└── public/
    └── assets/
        ├── profile/
        ├── hobbies/
        ├── videos/
        └── cryptography/
```

---

## 10. Comportamiento y Animaciones (Framer Motion)

### 10.1 Reglas globales

- Duración estándar: 200–300ms
- Easing: `easeOut`

### 10.2 Para tarjetas

- Hover: levitar 4px
- Shadow sutil al hover

### 10.3 Para timeline

- Scroll reveal con `useInView()`

### 10.4 Para carrusel de hobbies

- Transición slide horizontal
- Crossfade de contenido
- Indicadores inferiores minimalistas

---

## 11. Datos configurables (separados en `/lib/data.ts`)

```typescript
export const hobbies = [
  {
    id: 1,
    title: "Fotografía",
    description: "...",
    image: "/assets/hobbies/h1.jpg",
  },
  ...
];

export const cryptoContent = [
  {
    id: 1,
    category: "Investigaciones",
    title: "Historia del Algoritmo RSA",
    description: "…",
    tags: ["criptografía", "investigación"],
  },
  ...
];
```

---

## 12. Beneficios de esta Arquitectura

- Alta reutilización de componentes
- Routing limpio y desacoplado
- Separación clara: UI / Composite / Pages
- Fácil mantenimiento y escalado
- Diseño consistente en todo el proyecto

---

## 13. Sección: CV y Documentos Descargables

Requerimientos funcionales:
- Incluir un botón o enlace visible que permita descargar el CV en formato PDF.
- El PDF debe ser almacenado localmente en el portafolio (por ejemplo, /assets/CV.pdf) o desde un servidor externo.
- El enlace debe decir claramente “Descargar CV (PDF)”.
- El botón puede usar un estilo interactivo (hover animado, como tus Liquid Fill Buttons o efectos similares).

Requerimientos de diseño:
- El botón debe mantener coherencia con el estilo visual del sitio.
- Se recomienda usar animación sutil al pasar el cursor (puede ser una microinteracción estilo liquid fill o gradient hover).

## 14. Videos

Para el caso de los videos, me encargaré de subirlos a Youtube por lo que, uan miniatura con una vista de la reproducción quedaría bien. 

## 15. Librerias Adicionales

- En caso de haber librerias ya prehechas para trabajar con este estilo muy bonitas puedes integrarlas. No es necesario crear todo desde cero. Por ejemplo Embla Carousel (Solo es una sugerencia no necesariamente usar este estilo).
