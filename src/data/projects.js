export const projects = [
  {
    id: "multitranslate-ai",
    title: "MultiTranslate AI",
    category: "AI / Web Application",
    filterCategory: "AI",
    filterCategories: ["AI", "Web Apps"],
    shortDescription: "An AI-powered translation experience designed to make multilingual communication faster and easier.",
    liveUrl: "https://multi-language-translator-lime.vercel.app/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    isFeaturedHero: true,
    accentColor: "#06b6d4",
    tagline: "High-speed multi-language translation interface powered by modern LLM APIs.",
    overview: "MultiTranslate AI was designed and built to overcome the friction of traditional translation tools. It delivers a fast, responsive, and intuitive web application where users can seamlessly switch languages, translate nuanced text, and copy or export results with minimal latency.",
    challenge: "Traditional translation interfaces often suffer from cluttered layouts, sluggish response times when handling multiple language targets, and complex state management across multiple input/output panes.",
    approach: "We architected a streamlined, distraction-free interface built with React.js, focusing on instant state responsiveness, clean typography with high readability, and reliable API integration for fast translations.",
    solution: "A responsive single-page web application featuring dynamic source/target language selectors, instant character feedback, optimized API handling, and responsive mobile-first layouts.",
    keyFeatures: [
      "Multi-language translation engine with fast API response",
      "Dynamic source and target language selection",
      "Instant copy-to-clipboard and clear actions",
      "Responsive typography and mobile-optimized dual-pane layout",
      "Clean visual hierarchy with distraction-free dark/light contrast"
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "REST API", "Vercel"],
    deliverables: [
      "Responsive Single Page Application",
      "State-managed translation workflow",
      "Production deployment on Vercel"
    ],
    outcome: "Successfully deployed and live on Vercel, providing a fast, reliable multilingual translation tool accessible on all device sizes."
  },
  {
    id: "agenstory",
    title: "AgenStory",
    category: "AI / Creative Web Application",
    filterCategory: "AI",
    filterCategories: ["AI", "Web Apps"],
    shortDescription: "An AI-powered creative storytelling experience designed to help users turn ideas into generated stories.",
    liveUrl: "https://gen-story-gamma.vercel.app/",
    hasLiveUrl: true,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#8b5cf6",
    tagline: "Transforming narrative prompts into structured creative story chapters with generative AI.",
    overview: "AgenStory is a creative web platform that leverages generative AI models to help writers, creators, and storytellers transform brief concept prompts into structured narratives, characters, and engaging storytelling arcs.",
    challenge: "Building an AI storytelling tool requires handling long-form text streaming, keeping readers engaged through comfortable typography, and offering an intuitive interface for story configuration without intimidating non-technical users.",
    approach: "We designed a clean narrative interface prioritizing readable serif/sans typography, intuitive genre/tone selectors, and responsive UI cards to display story chapters sequentially.",
    solution: "An interactive storytelling application featuring custom prompt builders, responsive story reader views, genre configuration, and instant story generation with clean visual formatting.",
    keyFeatures: [
      "AI-driven story generation from user prompts",
      "Genre, tone, and character premise selectors",
      "Chapter-based story reading and layout structure",
      "Responsive reader view optimized for mobile and desktop screens",
      "Copy and share story functionality"
    ],
    techStack: ["React.js", "JavaScript", "CSS Modules", "LLM API", "Vercel"],
    deliverables: [
      "Interactive Story Generator Interface",
      "Reader-friendly layout system",
      "Vercel production deployment"
    ],
    outcome: "Live production web application allowing users to generate and explore custom creative narratives on demand."
  },
  {
    id: "medexplain-ai",
    title: "MedExplain AI",
    category: "AI / Full-Stack Application",
    filterCategory: "Full Stack",
    filterCategories: ["Full Stack", "AI"],
    shortDescription: "An AI-powered application designed to analyze user-provided health-related information and present the output through a structured digital experience.",
    liveUrl: null,
    hasLiveUrl: false,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#10b981",
    tagline: "Simplifying complex health documentation into clear, structured, readable breakdowns.",
    overview: "MedExplain AI is an informational tool that takes complex medical terminology, lab report descriptions, or health documentation and formats it into plain-language summaries to help users better understand their personal health records.",
    challenge: "Health documents are often dense and filled with technical jargon. The technical challenge was to structure AI prompt pipelines to translate terminology accurately while strictly enforcing safety guardrails and disclaimers (never providing diagnoses or medical advice).",
    approach: "We built a multi-step analysis pipeline that parses text input, extracts key medical terms, queries an LLM with strict informational system instructions, and renders structured accordion-based breakdowns.",
    solution: "A secure, privacy-conscious full-stack web application featuring file/text input, structured category breakdown (vital metrics, terminology glossary, questions to ask your doctor), and prominent disclaimer banners.",
    keyFeatures: [
      "Structured health document text parser",
      "Plain-language terminology explanations and glossary generator",
      "Exportable summary for patient-doctor conversations",
      "Strict informational safety guardrails and disclaimer integration",
      "Clean, reassuring UI with accessible color contrast"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "LLM APIs"],
    deliverables: [
      "Full-stack informational analysis platform",
      "Terminology breakdown and question generator",
      "Secure client-side document processing UI"
    ],
    outcome: "Built an informational health literacy tool that transforms complex lab terminology into structured, approachable documentation for patients."
  },
  {
    id: "officialcoders",
    title: "OfficialCoders",
    category: "E-Learning / Full-Stack Platform",
    filterCategory: "Full Stack",
    filterCategories: ["Full Stack"],
    shortDescription: "A full-stack learning platform featuring courses, topics, quizzes, progress tracking and certificates.",
    liveUrl: null,
    hasLiveUrl: false,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#3b82f6",
    tagline: "End-to-end e-learning management system with course progression and verified certification.",
    overview: "OfficialCoders is a comprehensive full-stack educational web platform built to deliver structured programming and technical curricula. It supports hierarchical courses, chapters, interactive quizzes, student progress calculation, and automated certificate generation.",
    challenge: "Handling complex hierarchical curriculum data (courses > modules > topics), tracking per-student completion status across dozens of lessons, and securing quiz evaluation on the backend.",
    approach: "Designed a relational data schema, built REST API endpoints with authentication and role-based access control (students vs. instructors/admins), and created a responsive LMS frontend.",
    solution: "A complete learning platform with authenticated student portals, course curriculum navigation, interactive timed quizzes, automated score computation, and verifiable PDF certificate generation.",
    keyFeatures: [
      "Hierarchical course curriculum management (Courses, Modules, Topics)",
      "Interactive quiz engine with instant score calculation and review",
      "Student learning progress dashboard and completion trackers",
      "Automated certificate generation upon course completion",
      "Admin and instructor management portal for curriculum updates"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth"],
    deliverables: [
      "Full-stack Learning Management System",
      "Role-based authentication & student dashboard",
      "Verifiable certificate generation engine"
    ],
    outcome: "Delivered a complete, scalable full-stack LMS supporting authenticated users, curriculum delivery, interactive assessments, and automated certificate issuing."
  },
  {
    id: "lumora-cafe",
    title: "Lumora Cafe",
    category: "Business Website",
    filterCategory: "Business Websites",
    filterCategories: ["Business Websites"],
    shortDescription: "A modern visual website concept designed for a cafe brand, combining responsive layouts with an engaging browsing experience.",
    liveUrl: null,
    hasLiveUrl: false,
    hasCaseStudy: true,
    isFeaturedHero: false,
    accentColor: "#f59e0b",
    tagline: "Artisan cafe branding, interactive digital menu, and location-driven storytelling.",
    overview: "Lumora Cafe is a premium business website created for an artisan specialty coffee brand. It pairs modern editorial aesthetics with high-performance responsive web standards, showcasing the cafe's seasonal menu, sourcing ethos, and table reservation flow.",
    challenge: "Creating an immersive cafe atmosphere online without heavy multimedia files slowing down mobile performance, while ensuring that the food and drink menu is accessible and legible on small smartphone screens.",
    approach: "We used a refined warm-palette design system, lightweight CSS micro-interactions, responsive category-filtered menus, and mobile-friendly tap targets.",
    solution: "A sleek business website featuring smooth scroll navigation, interactive menu tab switching, story/roastery highlight section, and clear reservation booking CTAs.",
    keyFeatures: [
      "Interactive food and beverage menu with dietary filtering",
      "Warm, modern boutique visual identity with elegant typography",
      "Mobile-optimized table inquiry and reservation contact flow",
      "Integrated hours of operation, location map, and social channels",
      "Smooth section transitions and fast load times on mobile devices"
    ],
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    deliverables: [
      "High-conversion business website",
      "Interactive digital menu module",
      "Mobile-optimized reservation UI"
    ],
    outcome: "Shipped a visually stunning, responsive brand website that effectively communicates cafe quality and drives direct customer visit inquiries."
  }
];

export const filterCategories = ["All", "AI", "Web Apps", "Business Websites", "Full Stack"];

export const matchesProjectCategory = (project, filterId) => {
  if (!filterId || filterId === 'All') return true;
  if (project.filterCategory === filterId) return true;
  if (Array.isArray(project.filterCategories) && project.filterCategories.includes(filterId)) return true;
  return false;
};
