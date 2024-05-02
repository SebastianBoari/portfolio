import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sebastián Boari",
  EMAIL: "luciosebastianboari@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 6,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Portfolio de desarrollo web de Sebastián Boari.",
};

export const WORK: Metadata = {
  TITLE: "Educación",
  DESCRIPTION: "Formación académica y certificados de Sebastián Boari.",
};

export const PROJECTS: Metadata = {
  TITLE: "Proyectos",
  DESCRIPTION: "Colección de proyectos de desarrollo web de Sebastián Boari",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/SebastianBoari"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/lucio-sebastian-boari/",
  }
];
