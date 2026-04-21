// ── Personal Info ──
export const personalInfo = {
  name: "Johann Daniel",
  lastName: "Trejo Flores",
  title: "Estudiante de Ingeniería en Sistemas Computacionales",
  description:
    "Estudiante de Ingeniería en Sistemas Computacionales en Escuela Superior de Cómputo (ESCOM) del Instituto Politécnico Nacional (IPN), apasionado por el desarrollo backend, tecnologías nuevas y algoritmos.",
  profileImage: "/assets/profile/profile.png",
  cvUrl: "/assets/English_CV_TrejoFlores.pdf",
  publicKeyUrl: "/assets/public_key.asc",
};

// ── Education ──
export const education = [
  {
    id: 1,
    institution: "Instituto Politécnico Nacional – ESCOM",
    degree: "Ing. en Sistemas Computacionales",
    period: "2022 – Dic. 2026 (esperado)",
    gpa: "91/100",
    highlights: [
      "Participante en el International Collegiate Programming Contest (ICPC), dentro del top 10 de equipos de ESCOM.",
    ],
  },
  {
    id: 2,
    institution: 'CECyT No. 1 "Gonzalo Vázquez Vela"',
    degree: "Técnico en Sistemas Digitales",
    period: "2019 – 2022",
    gpa: "91/100",
    highlights: [],
  },
];

// ── Projects ──
export interface Project {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  image: string;
  repoUrl: string;
  deployUrl?: string;
  owner: {
    name: string;
    avatar: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Ollin",
    subtitle: "Sistema de Monitoreo Sísmico",
    period: "Sep. – Dic. 2025",
    description:
      "Aplicación nativa Android desarrollada en equipo para visualización en tiempo real de sismos en México con datos del Sismológico Nacional (SSN). Integra Google Maps API para navegación interactiva, Firebase Cloud Messaging para notificaciones y generación de reportes sísmicos en PDF.",
    tags: ["Android", "Kotlin", "Spring Boot", "PostgreSQL", "Docker", "Firebase", "Redis"],
    image: "/assets/projects/ollin.jpg",
    repoUrl: "https://github.com/JohannTF/Ollin",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 2,
    title: "Shortest Path Algorithm",
    subtitle: "Visualizador interactivo Dijkstra",
    period: "Dic. 2025",
    description:
      "Aplicación interactiva en React para explorar y ver la ejecución del algoritmo de Dijkstra paso a paso con animaciones y representación visual de grafos.",
    tags: ["React", "TypeScript", "React Flow"],
    image: "/assets/projects/shortest-path-algorithm.jpg",
    repoUrl: "https://github.com/JohannTF/shortest-path-algorithm",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 3,
    title: "PSO",
    subtitle: "Servicio Social",
    period: "Feb. – Jul. 2025",
    description:
      "Implementación completa del algoritmo de Optimización por Enjambre de Partículas (PSO) desde cero, con análisis numérico y gráficas dinámicas para evaluar la convergencia del algoritmo bajo diferentes parámetros.",
    tags: ["Python", "Matplotlib", "Numpy"],
    image: "/assets/projects/pso.jpg",
    repoUrl: "https://github.com/JohannTF/PSO-algorithm",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 4,
    title: "gRPC File Transfer",
    subtitle: "Transferencia de archivos",
    period: "Jun. 2025",
    description:
      "Sistema de transferencia de archivos basado en gRPC usando chunks para la entrega de datos a múltiples equipos conectados dentro de una misma LAN.",
    tags: ["Python", "gRPC", "Shell"],
    image: "/assets/projects/grpc-file-transfer.jpg",
    repoUrl: "https://github.com/JohannTF/grpc-file-transfer",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 5,
    title: "Toy Block Cipher",
    subtitle: "Cifrado de bloque en C++",
    period: "Jun. 2025",
    description:
      "Implementación de un cifrador de bloque (toy block cipher) en C++ con SP-Network de 16 bits y 5 rondas, soporte para modos ECB/CBC/CTR, generación segura de claves/IV con OpenSSL y entrada/salida en Base64 desde una interfaz CLI.",
    tags: ["C++", "OpenSSL"],
    image: "/assets/projects/toy-block-cipher.jpg",
    repoUrl: "https://github.com/JohannTF/toy-block-cipher",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 6,
    title: "OpenBook",
    subtitle: "Sistema de Recomendación de Libros",
    period: "Mar. – Jun. 2025",
    description:
      "Implementación de una plataforma web literaria para recomendación de libros usando la API pública de OpenLibrary.",
    tags: ["Spring Boot", "JavaScript", "CSS", "HTML", "MySQL", "Thymeleaf", "Docker"],
    image: "/assets/projects/openbook.jpg",
    repoUrl: "https://github.com/JohannTF/hola-spring-6IV3",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 7,
    title: "Compyler",
    subtitle: "Compilador en Python",
    period: "Mar. – Jun. 2025",
    description:
      "Compilador hecho desde cero en Python enfocado en el frontend del pipeline: compilación de archivos y argumentos pasados desde línea de comandos, y análisis léxico, sintáctico y semántico.",
    tags: ["Python", "Collaborative"],
    image: "/assets/projects/compyler.jpg",
    repoUrl: "https://github.com/JohannTF/compyler",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
  {
    id: 8,
    title: "Graph News",
    subtitle: "Árbol de conocimiento",
    period: "Feb. – Jun. 2025",
    description:
      "Aplicación web desarrollada en equipo que analiza y gestiona noticias interconectando relaciones entre sí y mostrando los resultados del procesamiento visualmente a través de grafos de conocimiento.",
    tags: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Neo4j",
      "TEAM WORK",
    ],
    image: "/assets/projects/graph-news.jpg",
    repoUrl: "https://github.com/IrminDev/graph-news",
    owner: {
      name: "IrminDev",
      avatar: "https://github.com/IrminDev.png",
    },
  },
  {
    id: 9,
    title: "Volume Integrals",
    subtitle: "Volúmenes de Integrales",
    period: "Ene. 2023",
    description:
      "Programa con interfaz gráfica que calcula el área entre la parábola y la recta y muestra la graficación en 2D y 3D de su volumen.",
    tags: ["Python", "Matplotlib", "Sympy"],
    image: "/assets/projects/volume-integrals.jpg",
    repoUrl: "https://github.com/JohannTF/Volume-Integrals",
    owner: {
      name: "JohannTF",
      avatar: "https://github.com/JohannTF.png",
    },
  },
];

// ── Certifications & Achievements ──
export interface Certification {
  id: number;
  title: string;
  issuer: string;
  period: string;
  description: string;
  tags: string[];
  url?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    period: "Sep. 2025",
    description:
      "Entrenamiento en infraestructura de Google Cloud. Certificado verificable con Credly.",
    tags: ["Google Cloud", "Certificación"],
    url: "https://www.credly.com/badges/225ade52-d731-428a-a922-bf5ee14ffdc8/linked_in_profile",
  },
  {
    id: 2,
    title: "Inglés Nivel B2",
    issuer: "CELEX – IPN",
    period: "2020 – 2023",
    description:
      "Certificación de nivel B2 de inglés en el Centro de Lenguas Extranjeras del IPN.",
    tags: ["Inglés", "B2"],
  },
  {
    id: 3,
    title: "International Collegiate Programming Contest (ICPC)",
    issuer: "ICPC",
    period: "Jun. – Ago. 2025",
    description:
      "Participante del ICPC regional.",
    tags: ["ICPC"],
    url: "https://icpc.global/ICPCID/30E3INV5W5OJ",
  },
];

// ── Technologies (for grid section) ──
export interface Technology {
  id: number;
  name: string;
  iconKey: string;
  brandColor: string;
}

export const technologies: Technology[] = [
    { id: 1, name: "Python", iconKey: "python", brandColor: "#3776AB" },
    { id: 2, name: "C++", iconKey: "cplusplus", brandColor: "#00599C" },
    { id: 3, name: "Java", iconKey: "java", brandColor: "#ED8B00" },
    { id: 4, name: "TypeScript", iconKey: "typescript", brandColor: "#3178C6" },
    { id: 5, name: "React", iconKey: "react", brandColor: "#61DAFB" },
    { id: 6, name: "Spring Boot", iconKey: "springboot", brandColor: "#6DB33F" },
    { id: 7, name: "PostgreSQL", iconKey: "postgresql", brandColor: "#4169E1" },
    { id: 8, name: "MySQL", iconKey: "mysql", brandColor: "#4479A1" },
    { id: 9, name: "Docker", iconKey: "docker", brandColor: "#2496ED" },
    { id: 10, name: "Git", iconKey: "git", brandColor: "#F05032" },
    { id: 11, name: "Linux", iconKey: "linux", brandColor: "#FCC624" },
    { id: 12, name: "Google Cloud", iconKey: "googlecloud", brandColor: "#4285F4" },
    { id: 13, name: "Azure", iconKey: "azure", brandColor: "#0078D4" },
];

// ── Hobbies ──
export const hobbies = [
  {
    id: 1,
    title: "Programación Competitiva",
    description:
      "La programación es algo que practico también como hobby. Me gusta resolver retos y problemas algorítmicos por la sensación de progreso y por lo satisfactorio que es encontrar soluciones elegantes. Competencias como ICPC o plataformas como Codeforces y LeetCode me han acompañado durante un tiempo y se han convertido en una parte importante de mis intereses personales.",
    image: "/assets/hobbies/hobby1.jpg",
  },
  {
    id: 2,
    title: "Videojuegos",
    description:
      "Me gusta jugar videojuegos en mi tiempo libre, especialmente aquellos que me permiten explorar, desconectarme o pasar buenos momentos con amigos. Suelo jugar títulos como Minecraft, Watch Dogs, Inversion, Halo y Outlast (este último sobre todo porque disfruto las reacciones y el ambiente cuando lo juego con amigos). También me gustan los juegos de pelea como Dragon Ball FighterZ. Para mí, los videojuegos son una forma de relajarme, divertirme y compartir experiencias con amigos.",
    image: "/assets/hobbies/hobby2.jpg",
  },
  {
    id: 3,
    title: "Ejercicio",
    description:
      "Otro pasatiempo que disfruto es hacer ejercicio por las mañanas. Hace unas semanas empecé a practicar barras y calistenia, y aunque al principio fue pesado, he logrado mantener la constancia y se ha vuelto una parte importante de mi rutina.",
    image: "/assets/hobbies/hobby3.jpg",
  },
];

// ── Videos ──
export const videos = [
  {
    id: 1,
    title: "Mi experiencia en el ICPC",
    description: "Mi experiencia como participante en competencias de programación.",
    thumbnail: "/assets/videos/ICPC.jpg",
    youtubeUrl: "https://youtube.com/watch?v=PLACEHOLDER1",
    category: "hobby",
  },
  {
    id: 2,
    title: "Videojuegos",
    description: "Detrás de cámaras del desarrollo de un videojuego.",
    thumbnail: "/assets/videos/thumb2.jpg",
    youtubeUrl: "https://youtube.com/watch?v=PLACEHOLDER2",
    category: "hobby",
  },
  {
    id: 3,
    title: "Video PGP - Actividad",
    description: "Video sobre el artículo Pretty Good Privacy (PGP) atendiendo a las preguntas dadas.",
    thumbnail: "/assets/videos/PGP.jpg",
    youtubeUrl: "https://youtu.be/9rTfjKXdtF4",
    category: "pgp",
  },
];

// ── Academic / Crypto Content ──
export type ContentTag = "Prácticas" | "Ejercicios" | "Investigaciones" | "Videos" | "Lecturas";

export interface AcademicContent {
  id: number;
  title: string;
  description: string;
  tags: ContentTag[];
  icon: string;
  link?: string;
}

export const academicContent: AcademicContent[] = [
  {
    id: 1,
    title: "Historia del Algoritmo RSA",
    description:
      "Investigación sobre los orígenes, desarrollo y evolución del algoritmo RSA en la criptografía moderna.",
    tags: ["Investigaciones"],
    icon: "FileText",
    link: "#",
  },
  {
    id: 2,
    title: "Cifrado Simétrico vs Asimétrico",
    description:
      "Análisis comparativo de los esquemas de cifrado simétrico y asimétrico, sus ventajas y aplicaciones.",
    tags: ["Investigaciones", "Lecturas"],
    icon: "Lock",
    link: "#",
  },
  {
    id: 3,
    title: "Práctica: Implementación AES",
    description:
      "Implementación del algoritmo AES en Python con diferentes modos de operación (ECB, CBC, CTR).",
    tags: ["Prácticas", "Ejercicios"],
    icon: "Code",
    link: "#",
  },
  {
    id: 4,
    title: "Firmas Digitales y Certificados",
    description:
      "Estudio sobre los mecanismos de firmas digitales, PKI y certificados X.509.",
    tags: ["Lecturas", "Investigaciones"],
    icon: "Shield",
    link: "#",
  },
  {
    id: 5,
    title: "Ejercicios de Criptografía Clásica",
    description:
      "Conjunto de ejercicios resueltos sobre cifrado César, Vigenère, y transposición.",
    tags: ["Ejercicios", "Prácticas"],
    icon: "PenTool",
    link: "#",
  },
  {
    id: 6,
    title: "Video: Protocolo Diffie-Hellman",
    description:
      "Explicación audiovisual del intercambio de claves Diffie-Hellman y su importancia en comunicaciones seguras.",
    tags: ["Videos"],
    icon: "Play",
    link: "#",
  },
];

export const allTags: ContentTag[] = [
  "Prácticas",
  "Ejercicios",
  "Investigaciones",
  "Videos",
  "Lecturas",
];

// ── Cryptography Carousel ──
export interface CryptographyItem {
  id: number;
  title: string;
  type: "biography" | "algorithm" | "event";
  description: string;
  image: string;
}

export const cryptographyItems: CryptographyItem[] = [
  {
  id: 1,
    title: "Algoritmo RSA",
    type: "algorithm",
    description: `Desarrollado y publicado en 1977 por Ron Rivest, Adi Shamir y Leonard Adleman, RSA fue el primer esquema de cifrado de clave pública con viabilidad práctica. Su seguridad se fundamenta en la dificultad computacional de factorizar números semiprimos de cientos o miles de bits, un problema sin solución eficiente conocida para computadoras clásicas.
    
    El algoritmo introdujo una arquitectura criptográfica disruptiva: separación entre clave pública y privada, capacidad de cifrado y firma digital en un mismo marco matemático, y una escalabilidad que permitió su adopción masiva. Su construcción se basa en aritmética modular, el teorema de Euler, la función φ(n) y la elección cuidadosa de exponentes para optimizar rendimiento sin comprometer seguridad.`,
    image: "/assets/crypto/rsa.png"
  },
  {
    id: 2,
    title: "Exponenciación Rápida Modular",
    type: "algorithm",
    description: `
    La exponenciación rápida modular (o “exponentiation by squaring”) es una técnica fundamental para ejecutar cálculos del tipo a^b mod n de forma eficiente, reduciendo drásticamente la complejidad desde O(b) a O(log b). Esta optimización es crucial porque operaciones de potencia modular con exponentes enormes aparecen constantemente en los algoritmos de clave pública.
  `,
    image: "/assets/crypto/fast_exp.png"
  }
];
