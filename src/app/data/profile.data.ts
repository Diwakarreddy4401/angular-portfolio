export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
}

export interface Project {
  name: string;
  stack: string[];
  description: string;
  highlights: string[];
  accent: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface TechGroup {
  group: string;
  items: { name: string; icon: string }[];
}

export interface ProfileLink {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string[];
  avatarUrl: string;
  resumeUrl: string;
  bio: string;
  stats: { value: string; label: string }[];
  skills: string[];
  techStack: TechGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  certifications: Certification[];
  email: string;
  phone: string;
  location: string;
  socialLinks: ProfileLink[];
}

export const PROFILE: Profile = {
  name: 'Diwakar Reddy',
  title: 'Full Stack Developer',
  tagline: [
    'Angular Frontend Developer',
    'Spring Boot API Developer',
  ],
  avatarUrl: 'assets/diwakar_photo2.jpeg',
  resumeUrl: 'assets/Diwakar_Reddy_Java_Angular_full_stack_developer_Resume.pdf',
  bio:
    'Java Angular Full Stack Developer with 3.7+ years of experience building scalable enterprise web applications with Angular, Spring Boot, REST APIs, and MySQL. Experienced in Angular migrations, NgRx, RxJS, Signals, standalone components, CI/CD pipelines, and campaign systems supporting 100K to 400K+ users.',
  stats: [
    { value: '3.7+', label: 'Years experience' },
    { value: '100K-400K+', label: 'Campaign users supported' },
    { value: 'Angular 6-20', label: 'Migration experience' },
  ],
  skills: [
    'Angular',
    'TypeScript',
    'JavaScript',
    'RxJS',
    'NgRx',
    'Signals',
    'Standalone Components',
    'Lazy Loading',
    'Reactive Forms',
    'Angular Material',
    'PrimeNG',
    'Spring Boot',
    'RESTful APIs',
    'JPA/Hibernate',
    'Liquibase',
    'MySQL',
    'JWT Authentication',
    'HTML5',
    'CSS3',
    'SCSS',
    'Git',
    'GitHub',
    'Jenkins',
    'Docker',
    'Postman',
    'Swagger',
    'Agile Scrum',
  ],
  techStack: [
    {
      group: 'Frontend',
      items: [
        { name: 'Angular 6-20', icon: 'A' },
        { name: 'TypeScript', icon: 'TS' },
        { name: 'JavaScript ES6+', icon: 'JS' },
        { name: 'RxJS', icon: 'Rx' },
        { name: 'NgRx', icon: 'Ng' },
        { name: 'Signals', icon: 'Sg' },
        { name: 'Angular Material', icon: 'AM' },
        { name: 'PrimeNG', icon: 'PN' },
        { name: 'HTML5', icon: 'H5' },
        { name: 'SCSS', icon: 'Sc' },
      ],
    },
    {
      group: 'Backend',
      items: [
        { name: 'Spring Boot', icon: 'SB' },
        { name: 'RESTful APIs', icon: '{}' },
        { name: 'JPA/Hibernate', icon: 'JPA' },
        { name: 'Liquibase', icon: 'Lq' },
        { name: 'MySQL', icon: 'SQL' },
        { name: 'JWT Authentication', icon: 'JWT' },
        { name: 'Kafka', icon: 'Kf' },
      ],
    },
    {
      group: 'DevOps',
      items: [
        { name: 'Jenkins CI/CD', icon: 'J' },
        { name: 'Docker', icon: 'Dk' },
        { name: 'Git', icon: 'Git' },
        { name: 'GitHub', icon: 'GH' },
      ],
    },
    {
      group: 'Tools & Practices',
      items: [
        { name: 'Postman', icon: 'API' },
        { name: 'Swagger', icon: 'Sw' },
        { name: 'Agile Scrum', icon: 'Ag' },
        { name: 'Debugging', icon: 'Db' },
        { name: 'Cross-Team Collaboration', icon: 'CT' },
        { name: 'System Troubleshooting', icon: 'ST' },
      ],
    },
  ],
  experience: [
    {
      company: 'Infosys',
      role: 'Java Angular Full Stack Developer',
      duration: 'Oct 2022 - Present',
      location: 'Bangalore, India',
      achievements: [
        'Build enterprise-scale web applications using Angular and Spring Boot in Agile environments.',
        'Led Angular migration from Angular 6 to Angular 20 while refactoring deprecated APIs and improving maintainability.',
        'Implemented NgRx, Angular Signals, standalone components, lazy loading, and change detection optimizations for complex workflows.',
        'Contributed to Spring Boot REST APIs, CRUD operations, MySQL database work, and Jenkins CI/CD support.',
      ],
    },
  ],
  projects: [
    {
      name: 'Infosys Marcom Campaign Management System',
      stack: ['Angular', 'NgRx', 'Signals', 'Spring Boot', 'MySQL', 'Jenkins'],
      description:
        'Enterprise campaign automation platform for designing and executing large-scale Email, SMS, and IVR communication workflows.',
      highlights: [
        'Developed a graph-based campaign builder UI with interconnected audience, template, persona, and communication-channel nodes.',
        'Integrated 25+ automated workflow nodes with conditional routing, branching logic, and multi-channel execution.',
        'Delivered bulk communication campaigns for 100K candidate interviews and 400K+ alumni communications.',
        'Implemented an MJML-based email template editor and improved UI responsiveness by 30% for large workflow graphs and datasets.',
      ],
      accent: '#00d4ff',
    },
    {
      name: 'Infosys URL Shortener Internal Link Management Platform',
      stack: ['Angular', 'Spring Boot', 'MySQL', 'Liquibase', 'JWT', 'Jenkins'],
      description:
        'Full-stack web application for generating, managing, and tracking short URLs used in internal campaigns and communication flows.',
      highlights: [
        'Built an Angular dashboard for short URL creation, management, analytics, and validation workflows.',
        'Developed Spring Boot REST APIs for URL generation, redirection handling, and click analytics tracking.',
        'Designed MySQL schema updates with Liquibase change sets and secured endpoints with JWT authentication.',
        'Integrated Jenkins CI/CD for automated builds and deployments.',
      ],
      accent: '#7c3aed',
    },
    {
      name: 'E-Commerce Application',
      stack: ['Angular', 'NgRx', 'Spring Boot', 'JPA/Hibernate', 'MySQL', 'JWT'],
      description:
        'Full-stack e-commerce application with product catalog management, cart functionality, order processing, and role-based access control.',
      highlights: [
        'Developed a modular Angular SPA using reusable components and lazy-loaded modules.',
        'Implemented NgRx state management for cart and order workflows.',
        'Built Spring Boot REST APIs for product, cart, and order management using JPA/Hibernate and MySQL.',
        'Managed database migrations with Liquibase and validated APIs using Postman.',
      ],
      accent: '#22c55e',
    },
    {
      name: 'Expenses Tracker App',
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Dexie', 'IndexedDB', 'Capacitor'],
      description:
        'Offline-first personal expense tracker for web, PWA, and Android platforms with budgets, analytics, exports, and theme support.',
      highlights: [
        'Developed responsive React and TypeScript screens with dashboard analytics and interactive charts.',
        'Built offline-first storage using Dexie and IndexedDB for seamless local data access.',
        'Added monthly budgets, currency settings, alert thresholds, JSON backup import/export, Excel export, and PDF reports.',
        'Integrated PWA support, Android builds with Capacitor, Zustand, React Hook Form, and Zod validation.',
      ],
      accent: '#f97316',
    },
  ],
  education: [
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering - 75%',
      institution: 'Jawaharlal Nehru Technological University, Anantapur',
      year: 'Jul 2018 - Jun 2022',
    },
  ],
  certifications: [
    { name: 'Infosys Certified Angular Professional', issuer: 'Infosys' },
    { name: 'Infosys Certified Front End Web Developer', issuer: 'Infosys' },
    { name: 'Infosys Certified Angular Web Developer', issuer: 'Infosys' },
    { name: 'Infosys Certified Spring Microservice Developer', issuer: 'Infosys' },
  ],
  email: 'diwakarreddy1255@gmail.com',
  phone: '+91 9381524276',
  location: 'Bangalore, India',
  socialLinks: [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/mallakaluva-diwakar-reddy',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/orgs/CodeOrbitLabs/repositories',
    },
  ],
};
