// =====================
// Import Logos
// =====================

// Company Logos
import ArabSoftLogo from "./assets/company_logo/ArabSoft.png";
import BimatechLogo from "./assets/company_logo/bimatech.png";

// Education Logos
import IsimgLogo from "./assets/education_logo/isimg.png";
import LyceeLogo from "./assets/education_logo/lycee.png";

// Tech Logos
import HtmlLogo from "./assets/tech_logo/html.jpg";
import CssLogo from "./assets/tech_logo/css.png";
import JavaScriptLogo from "./assets/tech_logo/JavaScript.png";
import ReactLogo from "./assets/tech_logo/React.webp";
import NodeJsLogo from "./assets/tech_logo/nodejs.png";
import ExpressLogo from "./assets/tech_logo/express.png";
import MongoDbLogo from "./assets/tech_logo/mongodb.png";
import GitLogo from "./assets/tech_logo/git.jpg";
import GithubLogo from "./assets/tech_logo/github.png";
import FigmaLogo from "./assets/tech_logo/figma.png";
import BootstrapLogo from "./assets/tech_logo/Bootstrap.png";
import CppLogo from "./assets/tech_logo/cpp.png";
import Angular from "./assets/tech_logo/angular.png";
import Spring_boot from "./assets/tech_logo/spring_boot.webp";
import Oracle12c from "./assets/tech_logo/oracle12c.png";
import Tailwind from "./assets/tech_logo/tailwind.png";

// Work/Project Logos
import BimaStoreLogo from "./assets/work_logo/BimaStore.png";
import DawiniLogo from "./assets/work_logo/Dawini.png";
import FilmiTounsiLogo from "./assets/work_logo/FilmiTounsi.png";
import La5esliLogo from "./assets/work_logo/La5esli.png";

// =====================
// Skills Data
// =====================

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: HtmlLogo },
      { name: "CSS", logo: CssLogo },
      { name: "JavaScript", logo: JavaScriptLogo },
      { name: "React", logo: ReactLogo },
      { name: "Bootstrap", logo: BootstrapLogo },
      { name: "Angular", logo: Angular },
      { name: "Tailwind Css", logo: Tailwind },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: NodeJsLogo },
      { name: "Express", logo: ExpressLogo },
      { name: "Spring Boot", logo: Spring_boot },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: MongoDbLogo },
      { name: "Oracle 12c", logo: Oracle12c },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: GitLogo },
      { name: "GitHub", logo: GithubLogo },
      { name: "Figma", logo: FigmaLogo },
    ],
  },
  {
    title: "Languages",
    skills: [{ name: "C++", logo: CppLogo }],
  },
];

// =====================
// Experiences
// =====================

export const experiences = [
  {
    id: 0,
    img: ArabSoftLogo,
    role: "Full Stack Engineer",
    company: "ArabSoft",
    date: "May 2025 - Present",
    desc: "Developed a hotel management system enabling room access, in-house purchases, and prepaid card functionality",
    skills: ["Angular", "Spring Boot", "Oracle 12c"],
  },
  {
    id: 1,
    img: BimatechLogo,
    role: "Full Stack Engineer",
    company: "Bimatech",
    date: "August 2024 - September 2024",
    desc: "Developed a complete multi-vendor e-commerce application",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];

// =====================
// Éducation
// =====================

export const education = [
  {
    id: 0,
    img: IsimgLogo,
    school:
      "ISIMG - Institut Supérieur d'Informatique et de Multimédia de Gabès.",
    date: "2021 - Present",
    degree: "Software and Information Systems Engineer.",
    desc: "Specialization in Fullstack Web Development.",
  },
  {
    id: 1,
    img: LyceeLogo,
    school: "Lycée Technique Zarzis",
    date: "2017 - 2021",
    grade: "Baccalaureate",
    degree: "Mathematical",
    desc: "Focus on solving mathematical problems.",
  },
];

// =====================
// Projets
// =====================

export const projects = [
  {
    id: 0,
    title: "BimaStore",
    description: "Multi-vendor e-commerce platform developed in MERN stack.",
    image: BimaStoreLogo,
    tags: ["React", "Redux", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ToumiFourat/MERN-MultiVendor-Shop",
    webapp: "https://www.youtube.com/watch?v=f0oHhQv0j9M&t=335s",
  },
  {
    id: 1,
    title: "Dawini",
    description: "Medical appointment booking platform with smart search.",
    image: DawiniLogo,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ToumiFourat/E-Appointment",
    webapp: "https://dawini.tn",
  },
  {
    id: 2,
    title: "Filmi Tounsi",
    description: "Tunisian movie streaming site, responsive and easy to use.",
    image: FilmiTounsiLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind Css",
      "React",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/ToumiFourat/Movies",
    webapp: "https://filmitounsi.tn",
  },
  {
    id: 3,
    title: "La5esli",
    description:
      "Web app developed with React and Flask for integrating fine-tuned BART and T5 models to summarize educational YouTube videos.",
    image: La5esliLogo,
    tags: ["React", "Flask", "MongoDB", "NLP"],
    github: "https://github.com/ToumiFourat/YT2Notes",
    webapp: "https://la5esli.tn",
  },
];
