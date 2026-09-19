export const services = [
  {
    id: "custom-software-development",
    number: "01",
    title: "Custom Software Development",
    shortDescription: "Tailored software engineered around your unique business logic, workflows, and operational architecture.",
    fullDescription: "Off-the-shelf software often forces businesses into rigid constraints. We architect and develop custom software solutions tailored to your operational workflows, eliminating bottlenecks, automating repetitive processes, and scaling effortlessly with your growth.",
    deliverables: [
      "Custom business workflow architecture",
      "Scalable modular code structure",
      "Database schema & data pipelines",
      "Automated testing & quality assurance",
      "Comprehensive developer documentation"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "TypeScript"],
    idealFor: "Businesses requiring tailored software that integrates with existing workflows."
  },
  {
    id: "web-mobile-app-development",
    number: "02",
    title: "Web & Mobile App Development",
    shortDescription: "Modern, high-performance web applications and responsive cross-platform mobile experiences.",
    fullDescription: "From progressive web applications (PWAs) to responsive mobile-first digital products, we craft fast, intuitive applications built to handle real traffic, complex user journeys, and seamless cross-device state synchronization.",
    deliverables: [
      "Mobile-first responsive web apps",
      "Cross-platform mobile optimization",
      "Offline caching & PWA support",
      "State management & live sync",
      "App store & web deployment setup"
    ],
    technologies: ["React.js", "Tailwind CSS", "Vite", "PWA", "REST APIs"],
    idealFor: "Startups and companies launching customer-facing digital products."
  },
  {
    id: "ecommerce-website",
    number: "03",
    title: "E-commerce Website",
    shortDescription: "High-conversion online storefronts with fast loading speeds, product catalogs, and cart workflows.",
    fullDescription: "Every millisecond counts in e-commerce. We build lightning-fast storefronts with optimized checkout funnels, catalog filtering, inventory management, dynamic pricing, and mobile-first shopping experiences that maximize conversion.",
    deliverables: [
      "High-speed product catalog & search",
      "Seamless shopping cart & checkout flow",
      "Customer account & order tracking",
      "Inventory & SKU management hooks",
      "Core Web Vitals & SEO optimization"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Tailwind CSS", "MongoDB"],
    idealFor: "DTC brands, retailers, and marketplaces seeking high-conversion storefronts."
  },
  {
    id: "payment-gateway-integration",
    number: "04",
    title: "Payment Gateway Integration",
    shortDescription: "Secure, compliant payment processing supporting Stripe, PayPal, Razorpay, and global currencies.",
    fullDescription: "Monetize your product safely. We engineer robust payment integration architectures with webhooks, recurring subscription billing, invoice generation, multi-currency conversion, and PCI-compliant tokenized checkout.",
    deliverables: [
      "Stripe, PayPal, Razorpay API integrations",
      "Recurring subscriptions & webhook handlers",
      "Multi-currency conversion & tax handling",
      "Failed payment retry logic & receipts",
      "PCI-compliant tokenized transactions"
    ],
    technologies: ["Stripe API", "Razorpay", "PayPal SDK", "Node.js", "Webhooks"],
    idealFor: "SaaS platforms, e-commerce stores, and service businesses taking payments."
  },
  {
    id: "portfolio-brand-sites",
    number: "05",
    title: "Portfolio & Brand Sites",
    shortDescription: "Prestigious digital flagship websites for agencies, executives, studios, and luxury brands.",
    fullDescription: "Your digital storefront is your primary credibility signal. We craft bespoke brand websites with editorial typography, subtle micro-interactions, responsive storytelling layouts, and high-trust presentations that convert high-value clients.",
    deliverables: [
      "Custom visual identity & design system",
      "Smooth scroll animations & micro-interactions",
      "Client inquiry & lead capture funnels",
      "SEO meta & Open Graph optimization",
      "Global CDN edge hosting setup"
    ],
    technologies: ["React.js", "Tailwind CSS", "Space Grotesk", "Vite", "Vercel"],
    idealFor: "Founders, boutique studios, consultants, and premium service firms."
  },
  {
    id: "ai-powered-application-development",
    number: "06",
    title: "AI-Powered Application Development",
    shortDescription: "Generative AI, LLM prompt engineering, streaming UI, and intelligent workflow automation.",
    fullDescription: "Transform cutting-edge AI into practical business value. We build LLM-powered applications featuring real-time streaming interfaces, document summarization, intelligent classification, contextual retrieval, and natural language interfaces.",
    deliverables: [
      "OpenAI, Claude, & OpenRouter integrations",
      "Streaming token UI with markdown parsing",
      "Prompt engineering & safety guardrails",
      "Vector search & document ingestion",
      "AI workflow tools for enterprise tasks"
    ],
    technologies: ["LLM APIs", "OpenRouter", "React.js", "Streaming APIs", "Python"],
    idealFor: "Founders and businesses embedding AI capabilities into digital products."
  },
  {
    id: "authentication-security-systems",
    number: "07",
    title: "Authentication & Security Systems",
    shortDescription: "Enterprise-grade authentication, role-based access control (RBAC), and data encryption.",
    fullDescription: "Security is non-negotiable. We implement robust authentication pipelines including JWT token rotation, OAuth (Google/GitHub), multi-factor authentication (MFA), role-based permissions, rate limiting, and encrypted session handling.",
    deliverables: [
      "JWT auth with refresh token interceptors",
      "OAuth 2.0 social login integration",
      "Role-Based Access Control (RBAC)",
      "Brute-force protection & rate limiting",
      "Encrypted data storage & CSRF/XSS defense"
    ],
    technologies: ["JWT", "OAuth 2.0", "bcrypt", "Express.js", "Node.js", "PostgreSQL"],
    idealFor: "Applications handling sensitive user accounts, customer data, and payments."
  },
  {
    id: "realtime-multilingual-communication",
    number: "08",
    title: "Real-Time & Multilingual Communication Features",
    shortDescription: "Live WebSockets, instant chat, multilingual localization (i18n), and live sync.",
    fullDescription: "Connect users in real-time across borders. We engineer low-latency WebSocket communication systems for live notifications, collaborative editing, multi-language localization, and instant text translation workflows.",
    deliverables: [
      "WebSocket real-time event broadcasting",
      "Live chat & room state synchronization",
      "Multi-language i18n localization engines",
      "Automated text translation pipelines",
      "Reconnection handlers & presence status"
    ],
    technologies: ["WebSockets", "Socket.io", "React i18n", "LLM APIs", "Node.js"],
    idealFor: "Collaborative platforms, international marketplaces, and live tools."
  },
  {
    id: "lms-certification-platforms",
    number: "09",
    title: "LMS & Certification Platforms",
    shortDescription: "Educational platforms with hierarchical courses, interactive quizzes, progress tracking, and certificates.",
    fullDescription: "Deliver structured learning at scale. We build complete LMS platforms with modular course curriculum, interactive video/text lessons, automated quiz evaluation, progress tracking, and verifiable PDF certificate generation.",
    deliverables: [
      "Course, chapter, and topic management",
      "Interactive quiz evaluation & scoring engine",
      "Student learning progress dashboard",
      "Automated verifiable certificate generation",
      "Instructor & curriculum admin portal"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "PDFKit", "JWT"],
    idealFor: "EdTech startups, training academies, and internal employee certification."
  },
  {
    id: "admin-dashboards-internal-tools",
    number: "10",
    title: "Admin Dashboards & Internal Tools",
    shortDescription: "Operational back-offices, data visualization, user management, and KPI analytics.",
    fullDescription: "Empower your team with intuitive internal tools. We build custom admin dashboards featuring multi-role permissions, interactive data tables with filtering and export, KPI analytics charts, and operational audit logs.",
    deliverables: [
      "Multi-metric analytics & KPI dashboards",
      "Data tables with sorting, filtering & CSV export",
      "User & customer management console",
      "Activity audit logs & system health monitors",
      "Secure backend CRUD administration"
    ],
    technologies: ["React.js", "Tailwind CSS", "Recharts", "Node.js", "PostgreSQL"],
    idealFor: "Growing businesses replacing disconnected spreadsheets with unified dashboards."
  },
  {
    id: "maintenance-support-retainers",
    number: "11",
    title: "Post-Launch Maintenance & Support Retainers",
    shortDescription: "Ongoing monitoring, security patching, dependency upgrades, and on-demand feature iterations.",
    fullDescription: "Software isn't finished when it ships. Our ongoing retainers provide dedicated developer hours for routine security audits, performance optimization, dependency updates, bug fixes, and continuous feature expansion.",
    deliverables: [
      "Monthly security & dependency updates",
      "Uptime monitoring & error tracking",
      "Performance optimization & database tuning",
      "Priority bug fixes & developer support",
      "Continuous feature iteration backlog"
    ],
    technologies: ["Git", "GitHub Actions", "Vercel", "Sentry", "AWS Monitoring"],
    idealFor: "Companies and founders needing an ongoing technical partner post-launch."
  }
];
