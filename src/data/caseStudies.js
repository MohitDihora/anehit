export const caseStudies = [
  {
    id: "multitranslate-ai",
    title: "MultiTranslate AI",
    category: "AI / Web Application",
    clientType: "Internal Product / Public Tool",
    summary: "Engineering an AI-powered translation interface focused on speed, language switching, and distraction-free mobile utility.",
    liveUrl: "https://multi-language-translator-lime.vercel.app/",
    hasLiveUrl: true,
    figNumber: "FIG. 01",
    tagline: "Breaking translation latency with clean React architecture and AI APIs.",
    challenge: "Existing translation platforms are frequently overcrowded with ads, have clumsy language swap interactions, and suffer from sluggish API roundtrips. The core engineering challenge was delivering an instant, clutter-free single-page interface with reliable state transitions across differing character encodings and target languages.",
    approach: "We adopted a mobile-first, minimalist design system. We isolated the translation dispatch layer into a dedicated service hook, implemented debounced input listeners, and built dynamic language pickers with instant swap animations.",
    solution: "A high-performance React application featuring clean dual-column input/output panes on desktop, stacking seamlessly into an ergonomic mobile view with one-tap copy, clear, and language swap capabilities.",
    keyFeatures: [
      "Instant language swap mechanism preserving input context",
      "Dynamic source and target language selector with high-frequency languages pre-pinned",
      "One-click clipboard export and input clearing",
      "Mobile-first responsive layout with comfortable touch areas",
      "Optimized API connection handling with graceful fallback notices"
    ],
    technology: [
      { name: "React.js", role: "Component hierarchy and reactive state management" },
      { name: "JavaScript (ES6+)", role: "Client-side logic, clipboard APIs, and event handling" },
      { name: "Tailwind CSS", role: "Responsive utility styling and dark theme tokens" },
      { name: "RESTful LLM API", role: "Backend translation generation engine" },
      { name: "Vercel", role: "Edge-distributed continuous deployment" }
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Analyzed friction points in existing web translation tools." },
      { step: "02", title: "Interface Design", desc: "Crafted a zero-distraction layout with high typographic legibility." },
      { step: "03", title: "Component Build", desc: "Engineered responsive translation panels and language selectors in React." },
      { step: "04", title: "API Integration", desc: "Hooked into translation endpoints with error boundaries." },
      { step: "05", title: "Testing & Polish", desc: "Audited mobile touch targets, dark mode contrast, and copy actions." },
      { step: "06", title: "Production Deploy", desc: "Deployed to Vercel with global CDN caching." }
    ],
    outcome: "Delivered a live, production-ready AI translation web application deployed on Vercel that offers fast, reliable translation across multiple languages on any device."
  },
  {
    id: "agenstory",
    title: "AgenStory",
    category: "AI / Creative Web Application",
    clientType: "Generative Media Web App",
    summary: "Developing an AI-driven creative storytelling interface that transforms user concepts into sequential narrative chapters.",
    liveUrl: "https://gen-story-gamma.vercel.app/",
    hasLiveUrl: true,
    figNumber: "FIG. 02",
    tagline: "From concept prompt to multi-chapter narrative with generative intelligence.",
    challenge: "Presenting generative story content requires balanced typography, intuitive tone and genre configuration, and a clean reader interface that feels like reading a crafted digital book rather than a raw terminal output.",
    approach: "We structured the frontend around a two-phase user flow: a tactile prompt-crafting stage (genre, protagonist premise, story pacing) followed by an immersive chapter reader formatted with comfortable line-heights and font pairings.",
    solution: "An interactive creative writing suite built in React with customized prompt templates, structured chapter pagination, and instant export tools.",
    keyFeatures: [
      "Custom story prompt builder with genre and tone parameters",
      "Structured chapter layout with sequential reading flow",
      "Responsive typography crafted for long-form reading on phones and laptops",
      "Quick-action toolbar for copying narrative text or generating subsequent scenes",
      "Lightweight client bundle for rapid initial page load"
    ],
    technology: [
      { name: "React.js", role: "Interactive story builder and reader view states" },
      { name: "JavaScript", role: "State machines and prompt interpolation" },
      { name: "CSS Modules / Custom CSS", role: "Typography styling for long-form readability" },
      { name: "Generative AI API", role: "Narrative synthesis and chapter generation" },
      { name: "Vercel", role: "Continuous deployment and hosting" }
    ],
    process: [
      { step: "01", title: "Conceptualization", desc: "Defined core creative writing parameters and chapter milestones." },
      { step: "02", title: "Reader UX", desc: "Designed reading modes with optimal line lengths and comfortable contrast." },
      { step: "03", title: "State Architecture", desc: "Built state handlers to manage multi-turn narrative progression." },
      { step: "04", title: "API Wiring", desc: "Integrated LLM text generation with prompt templates." },
      { step: "05", title: "Mobile Refinement", desc: "Ensured distraction-free reading mode on compact mobile viewports." },
      { step: "06", title: "Vercel Release", desc: "Shipped public production build on Vercel." }
    ],
    outcome: "A live, publicly accessible web application that empowers users to explore creative storytelling with generative AI."
  },
  {
    id: "medexplain-ai",
    title: "MedExplain AI",
    category: "AI / Full-Stack Application",
    clientType: "Health Literacy Web App",
    summary: "Architecting a secure informational platform that translates medical terminology and lab sheets into plain language without providing medical diagnosis.",
    liveUrl: null,
    hasLiveUrl: false,
    figNumber: "FIG. 03",
    tagline: "Clarifying complex health documentation into accessible, structured breakdowns.",
    challenge: "Patients receiving laboratory results or medical documentation are frequently overwhelmed by complex clinical abbreviations and numerical ranges. The engineering challenge required structuring an AI pipeline that breaks down terminology simply, highlights relevant questions for their doctor, and strictly avoids making diagnostic claims or replacing healthcare providers.",
    approach: "We built an informational-only system with explicit safety guardrails. The UI categorizes input into three distinct panels: 'Common Terminology Defined', 'General Metric Ranges Explained', and 'Questions to Ask Your Doctor'.",
    solution: "A responsive full-stack platform featuring document/text input, structured category parsing, prominent disclaimer banners, and clean visual cards.",
    keyFeatures: [
      "Informational terminology parser converting jargon into accessible English",
      "Contextual questions generator to empower patient-doctor conversations",
      "Strict informational safety guardrails and persistent disclaimer notices",
      "Clean visual cards categorizing terms, measurements, and general definitions",
      "Mobile-friendly document review experience with high contrast"
    ],
    technology: [
      { name: "React.js", role: "Accessible, patient-friendly frontend interface" },
      { name: "Node.js & Express", role: "Backend validation and API coordination" },
      { name: "Tailwind CSS", role: "High-contrast, accessible UI design system" },
      { name: "LLM API", role: "Informational terminology analysis pipeline" }
    ],
    process: [
      { step: "01", title: "Scope & Safety Definition", desc: "Established non-diagnostic boundaries and informational guardrails." },
      { step: "02", title: "Information Architecture", desc: "Designed a 3-tier card layout for definitions, metrics, and doctor questions." },
      { step: "03", title: "Prompt Pipeline", desc: "Engineered strict system prompts forbidding medical diagnosis." },
      { step: "04", title: "Full-Stack Implementation", desc: "Built Express endpoints and secure client-side form parsing." },
      { step: "05", title: "UX Audit", desc: "Verified accessibility standards and clear disclaimer prominence." },
      { step: "06", title: "Delivery", desc: "Delivered production-ready codebase with comprehensive documentation." }
    ],
    outcome: "Engineered a functional full-stack health literacy tool that helps patients understand complex documentation and prepare informed questions for their healthcare providers."
  },
  {
    id: "officialcoders",
    title: "OfficialCoders",
    category: "E-Learning / Full-Stack Platform",
    clientType: "Educational Technology Platform",
    summary: "Building an end-to-end learning management system complete with hierarchical courses, interactive quizzes, student progress, and verifiable certificates.",
    liveUrl: null,
    hasLiveUrl: false,
    figNumber: "FIG. 04",
    tagline: "Modular curriculum delivery with automated quiz grading and verified certification.",
    challenge: "Educational platforms require complex relational data structures: courses contain modules, modules contain topics, and topics contain code snippets and assessments. The challenge was building an intuitive navigation system where students can track their completion percentage in real time and receive authentic completion certificates upon passing quizzes.",
    approach: "We designed a full-stack architecture using Node.js and MongoDB to model curriculum hierarchies, paired with an authenticated React dashboard that provides instant feedback on quiz submissions and tracks module completion.",
    solution: "A comprehensive LMS featuring role-based dashboards, video/text lesson viewers, interactive quiz runners with score calculation, and dynamic PDF certificate generation.",
    keyFeatures: [
      "Hierarchical course curriculum navigation (Course > Module > Topic)",
      "Interactive quiz engine with real-time score calculation and answer review",
      "Student progress tracker computing percentage completion dynamically",
      "Verifiable certificate generation engine upon curriculum completion",
      "Admin/Instructor portal to manage modules, upload topics, and configure quizzes",
      "Secure JWT authentication and protected student routes"
    ],
    technology: [
      { name: "React.js", role: "Student and instructor portal user interfaces" },
      { name: "Node.js & Express", role: "REST API backend and quiz evaluation engine" },
      { name: "MongoDB", role: "Curriculum and student progress document store" },
      { name: "Tailwind CSS", role: "Dashboard design system and responsive lesson view" },
      { name: "JWT Auth", role: "Stateless secure student/admin authentication" }
    ],
    process: [
      { step: "01", title: "Data Modeling", desc: "Architected hierarchical schemas for courses, topics, and quiz questions." },
      { step: "02", title: "Auth & Roles", desc: "Built JWT authentication separating student access from instructor management." },
      { step: "03", title: "Lesson Viewer UI", desc: "Designed distraction-free sidebar curriculum and lesson reading pane." },
      { step: "04", title: "Assessment Engine", desc: "Implemented backend quiz validation, scoring, and retake logic." },
      { step: "05", title: "Certificate Pipeline", desc: "Engineered dynamic certificate generation with unique verification IDs." },
      { step: "06", title: "System Verification", desc: "Tested full student lifecycle from sign-up to graduation certificate." }
    ],
    outcome: "Shipped a complete, production-ready full-stack learning platform with active curriculum management, interactive assessments, and automated certificate generation."
  },
  {
    id: "lumora-cafe",
    title: "Lumora Cafe",
    category: "Business Website",
    clientType: "Hospitality & Food Brand",
    summary: "Crafting a sophisticated, mobile-first brand website for an artisan coffee roastery featuring interactive menus and reservation workflows.",
    liveUrl: null,
    hasLiveUrl: false,
    figNumber: "FIG. 05",
    tagline: "Connecting artisan coffee craftsmanship with seamless digital customer engagement.",
    challenge: "Hospitality websites often suffer from unreadable PDF menus, clunky external booking widgets, and slow-loading hero imagery on mobile connections. Lumora Cafe needed a digital presence that mirrored the warm artisan atmosphere of their physical roastery while making menu exploration and table reservation effortless on smartphones.",
    approach: "We designed a bespoke aesthetic utilizing warm neutral tones, crisp typography, and responsive tabbed menu components that allow customers to filter by category (espresso, brew, pastries, brunch) without reloading the page.",
    solution: "A mobile-first brand website featuring an interactive digital menu, roastery story section, location map integration, and an intuitive reservation inquiry modal.",
    keyFeatures: [
      "Interactive tab-based menu with dietary tags and clear price presentation",
      "Mobile-optimized table inquiry and contact reservation form",
      "Integrated roastery story, sourcing values, and operating schedule",
      "Smooth section transitions and fast load times on cellular networks",
      "Clean responsive layout designed to guide visitors directly toward visiting or reserving"
    ],
    technology: [
      { name: "React.js", role: "Interactive menu state and reservation components" },
      { name: "JavaScript", role: "Smooth scroll and form validation logic" },
      { name: "Tailwind CSS", role: "Warm boutique color tokens and mobile-first layout" },
      { name: "Responsive Standards", role: "Cross-breakpoint touch optimization" }
    ],
    process: [
      { step: "01", title: "Brand Discovery", desc: "Defined visual style matching artisan roastery aesthetics." },
      { step: "02", title: "Menu Architecture", desc: "Structured food and beverage offerings into intuitive interactive tabs." },
      { step: "03", title: "Mobile Prototyping", desc: "Optimized thumb reach and readability on mobile viewports." },
      { step: "04", title: "Form & Reservation", desc: "Built validated inquiry module with party size and date selection." },
      { step: "05", title: "Performance Tuning", desc: "Optimized layout shifts and font rendering speeds." },
      { step: "06", title: "Launch Readiness", desc: "Packaged for instant hosting on modern CDN platforms." }
    ],
    outcome: "Built a high-converting, responsive hospitality website that elevates brand perception and streamlines customer menu exploration and table inquiries."
  }
];
