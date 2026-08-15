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
  image: string;
  description: string;
  skills: string[];
  iconType?: "aws" | "data" | "cloud" | "dev" | "ai" | "citi" | "cisco";
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
    email: "abdullahmetlo@gmail.com",
    github: "https://github.com/abdullahmetlo",
    linkedin: "https://www.linkedin.com/in/abdullahmetlo/",
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
      company: "SAJAK – E-commerce Platform",
      location: "London, UK",
      period: "Jun 2025 - May 2026",
      summary:
        "Supported 4,000+ monthly e-commerce transactions, automated product ingestion pipelines, and elevated search visibility across core web systems.",
      bulletPoints: [
        "Supported 4,000+ monthly e-commerce transactions and cut system downtime by 20% by debugging, deploying critical security patches, and maintaining core HTML, CSS, JavaScript, and SQL databases.",
        "Reduced manual input workflows by 40% by designing and implementing automated product upload scripts.",
        "Drove a 15% increase in web traffic by executing targeted SEO strategies that significantly elevated Google search rankings.",
        "Delivered features on time within an Agile environment, actively participating in weekly sprint reviews and stand-ups to align with team roadmap objectives.",
      ],
      metrics: [
        "4,000+ Monthly Transactions",
        "20% Downtime Reduction",
        "40% Manual Input Cut",
        "15% Web Traffic Boost",
      ],
      skills: ["JavaScript", "HTML5", "CSS3", "SQL", "SEO", "Agile / Scrum", "Automation"],
    },
    {
      id: "exp-2",
      role: "Trainee Software Engineer",
      company: "King Fahd Center – Montessori & Daycare",
      location: "Remote / Al-Khobar, KSA",
      period: "Jan 2024 - May 2025",
      summary:
        "Modernized institutional digital branding with responsive UI engineering and boosted registration conversions through live communication channels.",
      bulletPoints: [
        "Boosted parent enquiries and registration submissions by 25% through the integration of a real-time live chat system.",
        "Modernised institutional digital branding by leading a full frontend redesign using HTML, CSS, and JavaScript, optimising cross-device navigation for visitors.",
        "Streamlined stakeholder communications by managing and pushing continuous content updates regarding mission, curriculum, and enrolment data.",
      ],
      metrics: [
        "25% Enquiry & Registration Boost",
        "Full Frontend Redesign",
      ],
      skills: ["JavaScript", "HTML5", "CSS3", "Live Chat", "Responsive UI", "Content Management"],
    },
    {
      id: "exp-3",
      role: "Software Developer / Full Stack Engineer (Intern)",
      company: "CleanSpotGlobal – Restroom Finder App",
      location: "London, UK",
      period: "Jan 2023 - Aug 2023",
      summary:
        "Engineered scalable full-stack containerized cloud architectures, automated web scrapers, and dynamic frontend filtering systems.",
      bulletPoints: [
        "Improved user decision-making efficiency by 30% by proposing and architecting a dynamic frontend filtering interface built on React.js, HTML, CSS, and Bootstrap.",
        "Engineered a scalable full-stack architecture utilising Python, Node.js, MongoDB, and REST APIs, containerising the application with Docker and deploying via AWS S3 and ECS.",
        "Enriched the application platform data by writing BeautifulSoup scraping Python scripts to aggregate and process 400+ real-time availability listings.",
        "Enhanced user navigation and engagement for active users by integrating Google Maps API features and custom search functionalities.",
        "Achieved a 95% on-time feature delivery rate within Agile sprints by managing tasks via Slack and Trello and establishing automated CI/CD pipelines with GitHub.",
      ],
      metrics: [
        "30% Decision Efficiency Boost",
        "400+ Real-Time Listings",
        "95% On-Time Delivery",
      ],
      skills: [
        "React.js",
        "Python",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Docker",
        "AWS (ECS/S3)",
        "CI/CD",
      ],
    },
    {
      id: "exp-4",
      role: "Student Ambassador",
      company: "Swansea University",
      location: "Swansea, Wales",
      period: "Nov 2021 - Jun 2025",
      summary:
        "Represented the university across recruitment open days, mentored prospective international students, and collaborated on high-engagement campus initiatives.",
      bulletPoints: [
        "Elevated student recruitment and engagement metrics by presenting at university open days, public speaking events, and community outreach initiatives.",
        "Advised and mentored prospective international students, resolving queries regarding academic progression and student life by translating personal academic experiences into guidance.",
        "Partnered with cross-functional faculty and staff to plan, iterate, and execute campus events designed to foster an inclusive community culture.",
      ],
      metrics: [
        "Open Days & Outreach",
        "Student Mentorship",
      ],
      skills: ["Public Speaking", "Mentorship", "Community Outreach", "Cross-Functional Collaboration"],
    },
  ] as ExperienceItem[],

  certifications: [
    {
      id: "cert-aws",
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Training & Certification",
      issueDate: "July 02, 2026",
      image: "/certificates/aws-cloud-practitioner.jpg",
      description:
        "Comprehensive validation of fundamental AWS cloud concepts, core compute and storage architectures, cloud security principles, and cost optimization.",
      skills: ["AWS Cloud", "Cloud Architecture", "EC2 & S3", "IAM", "Cloud Security"],
      iconType: "aws",
    },
    {
      id: "cert-citi",
      title: "Technology Software Development Job Simulation",
      issuer: "Citi (via Forage)",
      issueDate: "July 07, 2026",
      image: "/certificates/citi-software-dev.png",
      description:
        "Completed practical enterprise engineering simulation involving state diagrams, technical feature proposals, live web data querying, and data visualization.",
      skills: ["Software Engineering", "State Diagrams", "Data Querying", "Data Visualization", "Technical Proposals"],
      iconType: "citi",
    },
    {
      id: "cert-linkedin-ai",
      title: "What Is Generative AI?",
      issuer: "LinkedIn Learning",
      issueDate: "July 02, 2026",
      image: "/certificates/linkedin-generative-ai.png",
      description:
        "In-depth course on generative AI capabilities, LLM architectures, generative tooling, prompt engineering techniques, and practical AI workflow integrations.",
      skills: ["Generative AI", "AI Tools", "Prompt Engineering", "Large Language Models", "Artificial Intelligence"],
      iconType: "ai",
    },
    {
      id: "cert-cisco",
      title: "Data Science Essentials with Python",
      issuer: "Cisco Networking Academy",
      issueDate: "July 03, 2026",
      image: "/certificates/cisco-data-science.jpg",
      description:
        "Hands-on program covering Python data science pipelines, statistical analysis, data cleaning and manipulation, and predictive modeling foundations.",
      skills: ["Python", "Data Science", "Pandas & NumPy", "Statistical Analysis", "Data Cleaning"],
      iconType: "data",
    },
    {
      id: "cert-santander",
      title: "Power BI Intermediate: Data Analysis and Modeling",
      issuer: "Santander Open Academy",
      issueDate: "August 12, 2026",
      image: "/certificates/santander-power-bi.jpg",
      description:
        "Advanced business intelligence certification covering relational data modeling, custom DAX measures, interactive KPI dashboards, and data transformation.",
      skills: ["Power BI", "DAX Formulas", "Data Modeling", "Business Intelligence", "Data Analytics"],
      iconType: "data",
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
      accentColor: "from-[#0072b1] via-sky-500 to-cyan-500",
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
      accentColor: "from-[#0072b1] to-blue-600",
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
