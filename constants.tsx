import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Ulcer Detection System",
    category: "Flutter / Backend / AI",
    image: "/Foot Ulcer.png",
    description: "Advanced Flutter application with deep-learning backend integration for medical diagnostic support."
  },
  {
    id: 2,
    title: "Brandverse UI Kit",
    category: "Branding / Product Design",
    image: "/BrandVerse.png",
    description: "A comprehensive digital design system and set of high-conversion templates for modern brands."
  },
  {
    id: 3,
    title: "Architectural Workflows",
    category: "Python / Automation",
    image: "/Architectural.png",
    description: "Modular workflow solutions and backend troubleshooting tools designed for enterprise efficiency."
  },
  {
    id: 4,
    title: "AI Portfolio Optimizer",
    category: "React / Vite / Workflow",
    image: "/AI Portfolio.png",
    description: "A cinematic, modular portfolio system integrating custom assets, workflow automation, and branding visuals for professional identity."
  }
];

export const SKILLS: Skill[] = [
  { name: "Flutter & Dart", level: 95, category: "Frontend" },
  { name: "Python / Backend", level: 90, category: "Frontend" },
  { name: "API Integration", level: 92, category: "Frontend" },
  { name: "Troubleshooting", level: 88, category: "Tools" },
  { name: "Workflow Architecture", level: 94, category: "Tools" },
  { name: "Branding Design", level: 96, category: "Design" },
  { name: "UI/UX Design", level: 90, category: "Design" },
  { name: "Digital Products", level: 85, category: "Design" },
  { name: "Teaching & Mentoring", level: 80, category: "Tools" },
  { name: "Git & DevOps", level: 85, category: "Tools" },
];
