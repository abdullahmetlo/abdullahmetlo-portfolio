export interface Project {
  id: string;
  title: string;
  category: "Full-Stack" | "Machine Learning" | "Data & Automation";
  description: string;
  longDescription?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  metrics?: string;
  accentColor?: string;
}

export interface SkillDetail {
  name: string;
  category: "Frontend" | "Backend" | "Data & ML" | "DevOps & Tools";
  level: "Intermediate" | "Advanced" | "Expert";
  levelScore: number; // 1 to 3 dots
  yearsOfExperience: string;
  description: string;
  practicalUsage: string[];
  relatedProjects: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  summary: string;
  bulletPoints: string[];
  metrics: string[];
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  description: string;
  skills: string[];
  iconType: "aws" | "data" | "cloud" | "dev";
}

export const portfolioData = {
  profile: {
    name: "Abdullah Metlo",
    shortName: "ABDU",
    fullName: "ABDULLAH METLO",
    pronouns: "He/Him",
    headline:
      "Computer Science Graduate, Software Developer, Experienced in Data Analysis & Machine Learning.",
    pitch:
      "CS Graduate from Swansea University with full-stack experience deploying web applications, automated web-scraping scripts, and adaptive machine learning systems.",
    location: "London, UK",
    educationOrg: "Swansea University",
    educationDegree: "BSc (Hons) in Computer Science",
    currentRole: "Software Developer & Data Specialist",
    currentOrg: "Full-Stack & ML Engineering",
    connectionsCount: "500+",
    followersCount: "1.5k",
    openToWorkRoles: [
      "Software Developer",
      "Full-Stack Engineer",
      "Data Analyst / ML Engineer",
    ],
    email: "abdullah.metlo@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },

  skills: [
    {
      name: "React & Next.js",
      category: "Frontend",
      level: "Expert",
      levelScore: 3,
      yearsOfExperience: "3+ years",
      description:
        "Modern App Router, SSR, SSG, Turbopack, React 19 concurrent features, and interactive state architecture.",
      practicalUsage: [
        "Built responsive client portals handling thousands of daily active users.",
        "Engineered SEO-optimized dashboards with dynamic server actions.",
      ],
      relatedProjects: ["AI Workspace Portal", "SAJAK Client Web App"],
    },
    {
      name: "TypeScript / JavaScript",
      category: "Frontend",
      level: "Expert",
      levelScore: 3,
      yearsOfExperience: "4+ years",
      description:
        "Strict static typing, complex generic types, asynchronous orchestration, and clean design patterns.",
      practicalUsage: [
        "Architected end-to-end type-safe APIs with Zod and Prisma.",
        "Refactored legacy JS codebases to robust TypeScript with zero build warnings.",
      ],
      relatedProjects: ["Fintech Live Dashboard", "E-Commerce Automation"],
    },
    {
      name: "Python",
      category: "Data & ML",
      level: "Expert",
      levelScore: 3,
      yearsOfExperience: "4+ years",
      description:
        "Advanced data manipulation, web automation, ML modeling (Scikit-Learn, PyTorch), and backend APIs (Django, FastAPI).",
      practicalUsage: [
        "Engineered automated web-scraping pipelines scraping 50k+ daily data points.",
        "Trained predictive machine learning models with 92%+ classification accuracy.",
      ],
      relatedProjects: ["Automated Data Scraper", "Predictive Analytics Engine"],
    },
    {
      name: "Machine Learning & Data Analysis",
      category: "Data & ML",
      level: "Advanced",
      levelScore: 2,
      yearsOfExperience: "3 years",
      description:
        "Pandas, NumPy, Scikit-Learn, statistical regression, NLP models, and exploratory data analysis visualization.",
      practicalUsage: [
        "Analyzed large transaction datasets to discover customer churn bottlenecks.",
        "Built automated sentiment classification for customer feedback streams.",
      ],
      relatedProjects: ["ML Sentiment Classifier", "Power BI Business Dashboard"],
    },
    {
      name: "Tailwind CSS & Framer Motion",
      category: "Frontend",
      level: "Expert",
      levelScore: 3,
      yearsOfExperience: "3+ years",
      description:
        "Design systems, responsive fluid layouts, micro-interactions, spring physics, and canvas animations.",
      practicalUsage: [
        "Crafted custom dark-mode aesthetics, glassmorphic HUDs, and smooth layout transitions.",
      ],
      relatedProjects: ["Abdullah Metlo Portfolio", "SAJAK Customer Portal"],
    },
    {
      name: "Node.js & Express",
      category: "Backend",
      level: "Advanced",
      levelScore: 2,
      yearsOfExperience: "3 years",
      description:
        "Event-driven RESTful architectures, JWT authentication, caching strategies, and middleware pipelines.",
      practicalUsage: [
        "Developed scalable microservices with sub-50ms endpoint response times.",
      ],
      relatedProjects: ["E-Commerce Backend", "Real-Time Sync API"],
    },
    {
      name: "PostgreSQL & Prisma / SQL",
      category: "Backend",
      level: "Advanced",
      levelScore: 2,
      yearsOfExperience: "3 years",
      description:
        "Relational schema modeling, query optimization, indexing, ACID transactions, and ORM migrations.",
      practicalUsage: [
        "Structured complex relational schemas handling 4,000+ financial transaction records.",
      ],
      relatedProjects: ["SAJAK Billing Platform", "Fintech Database"],
    },
    {
      name: "Docker & CI/CD",
      category: "DevOps & Tools",
      level: "Intermediate",
      levelScore: 2,
      yearsOfExperience: "2 years",
      description:
        "Containerization, multi-stage Dockerfiles, GitHub Actions workflow pipelines, and automated test runners.",
      practicalUsage: [
        "Automated deployment pipelines to staging and production on Vercel and AWS.",
      ],
      relatedProjects: ["Cloud Deployment Automation"],
    },
    {
      name: "Power BI & Tableau",
      category: "Data & ML",
      level: "Advanced",
      levelScore: 2,
      yearsOfExperience: "2 years",
      description:
        "DAX expressions, star schema modeling, interactive executive KPIs, and automated data refresh pipelines.",
      practicalUsage: [
        "Built enterprise dashboards providing real-time visibility on revenue and inventory.",
      ],
      relatedProjects: ["Executive KPI Visualizer"],
    },
    {
      name: "Git & Version Control",
      category: "DevOps & Tools",
      level: "Expert",
      levelScore: 3,
      yearsOfExperience: "4+ years",
      description:
        "Git branching strategies, code reviews, rebasing, issue tracking, and collaborative open-source contributions.",
      practicalUsage: [
        "Managed multi-developer repositories with strict branch protection rules and automated linting.",
      ],
      relatedProjects: ["Open Source Repositories"],
    },
  ] as SkillDetail[],

  experience: [
    {
      id: "exp-1",
      role: "Assistant Web Developer",
      company: "SAJAK",
      location: "London, UK",
      period: "2023 - Present",
      summary:
        "Key contributor in delivering responsive web applications, streamlining database query pipelines, and enhancing client onboarding experiences.",
      bulletPoints: [
        "Engineered mission-critical web applications processing 4,000+ online transactions smoothly.",
        "Cut system downtime by 20% by implementing automated error recovery telemetry and database connection pooling.",
        "Boosted customer enquiry conversion by 25% through high-converting UI re-architectures and fast page loads.",
        "Collaborated cross-functionally with senior engineers and product managers using agile sprints.",
      ],
      metrics: [
        "4,000+ Transactions Handled",
        "20% Downtime Reduction",
        "25% Enquiry Boost",
      ],
      skills: ["React", "TypeScript", "Python", "PostgreSQL", "Django", "Tailwind CSS", "Git"],
    },
    {
      id: "exp-2",
      role: "Graduate Software Engineer & Researcher",
      company: "Swansea University",
      location: "Swansea, UK",
      period: "2020 - 2023",
      summary:
        "Focused on full-stack development, algorithms, automated web data scrapers, and machine learning models during BSc Computer Science.",
      bulletPoints: [
        "Graduated with honors in Computer Science, mastering software engineering, data structures, and AI.",
        "Built automated multi-threaded web scrapers extracting data from dynamic JavaScript-heavy websites.",
        "Designed and trained predictive ML models evaluating classification accuracy across benchmark datasets.",
        "Mentored junior computer science students in algorithm optimization and Python development.",
      ],
      metrics: [
        "BSc (Hons) Computer Science",
        "Top 10% Project Distinction",
        "50k+ Daily Scraped Records",
      ],
      skills: ["Python", "Machine Learning", "Algorithms", "React", "SQL", "Linux"],
    },
  ] as ExperienceItem[],

  certifications: [
    {
      id: "cert-1",
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      issueDate: "2024",
      description:
        "Comprehensive validation of AWS Cloud concepts, security, architecture, pricing, and compute/storage services.",
      skills: ["AWS EC2", "S3", "IAM", "Cloud Architecture"],
      iconType: "aws",
    },
    {
      id: "cert-2",
      title: "Power BI Data Analyst & Visualisation",
      issuer: "Santander Open Academy",
      issueDate: "2024",
      description:
        "Advanced data extraction, DAX modeling, interactive report building, and business intelligence analytics.",
      skills: ["Power BI", "DAX", "Data Modeling", "Business Intelligence"],
      iconType: "data",
    },
    {
      id: "cert-3",
      title: "Python for Data Science & Machine Learning",
      issuer: "Coursera / Deep Learning Specialization",
      issueDate: "2023",
      description:
        "Mastery of NumPy, Pandas, Scikit-Learn, data visualization, feature engineering, and neural network foundations.",
      skills: ["Python", "Scikit-Learn", "Pandas", "Machine Learning"],
      iconType: "dev",
    },
    {
      id: "cert-4",
      title: "Full-Stack Web Development & Modern React",
      issuer: "Meta / Coursera",
      issueDate: "2023",
      description:
        "In-depth frontend & backend application engineering, component lifecycle, Next.js, and API security.",
      skills: ["React", "Next.js", "REST APIs", "TypeScript"],
      iconType: "dev",
    },
  ] as Certification[],

  projects: [
    {
      id: "proj-1",
      title: "Adaptive ML Transaction & Fraud Detector",
      category: "Machine Learning",
      description:
        "Machine learning model pipeline trained to detect anomalous transactional patterns in high-frequency data streams.",
      tags: ["Python", "Scikit-Learn", "FastAPI", "Pandas", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      metrics: "94.8% Detection Accuracy • <15ms inference",
      accentColor: "from-emerald-500 to-teal-600",
    },
    {
      id: "proj-2",
      title: "High-Volume Automated Web Scraping Engine",
      category: "Data & Automation",
      description:
        "Resilient distributed web scraper with proxy rotation, anti-bot bypass, and automated CSV/PostgreSQL ingestion.",
      tags: ["Python", "Playwright", "BeautifulSoup", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      metrics: "50,000+ daily scraped entities",
      accentColor: "from-blue-500 to-indigo-600",
    },
    {
      id: "proj-3",
      title: "SAJAK Transaction & Client Management Portal",
      category: "Full-Stack",
      description:
        "Full-stack customer engagement and transaction dashboard built with Next.js and Django, handling client queries in real-time.",
      tags: ["Next.js", "Django", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      metrics: "4,000+ Transactions • 20% downtime cut",
      accentColor: "from-emerald-600 to-cyan-600",
    },
    {
      id: "proj-4",
      title: "Executive Business Intelligence Dashboard",
      category: "Data & Automation",
      description:
        "Interactive Power BI and web analytics dashboard translating complex raw revenue metrics into visual executive insights.",
      tags: ["Power BI", "DAX", "SQL", "React", "Tailwind"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      metrics: "Real-time automated data refreshes",
      accentColor: "from-amber-500 to-orange-600",
    },
  ] as Project[],
};
