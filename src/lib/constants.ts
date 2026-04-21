// Navigation links
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Videos", href: "#videos" },
  { label: "Criptografía", href: "#cryptography" },
  // { label: "Académico", href: "#academic" },
  { label: "Educación", href: "#education" },
  { label: "Tecnologías", href: "#technologies" },
  { label: "Proyectos", href: "#projects" },
  { label: "Certificaciones", href: "#certifications" },
  { label: "Contacto", href: "#contact" },
] as const;

import { Linkedin, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SocialLink {
  label: string;
  url: string;
  icon: LucideIcon;
}

// Social links
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", url: "https://linkedin.com/in/johann-trejo", icon: Linkedin },
  { label: "GitHub", url: "https://github.com/JohannTF", icon: Github },
];

// Contact info
export const CONTACT = {
  email: "trejofloresjohanndaniel@gmail.com",
  phone: "+52 56 1333 1115",
  location: "Ciudad de México, México",
} as const;

// Animation durations
export const ANIMATION = {
  duration: 0.3,
  easing: "easeOut" as const,
  stagger: 0.1,
} as const;
