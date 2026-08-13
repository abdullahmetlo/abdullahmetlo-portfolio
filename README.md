# 🚀 Abdullah Metlo — Personal Portfolio

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=0,16,185,129,0,6,182,212&height=180&section=header&text=Abdullah%20Metlo&fontSize=42&fontColor=ffffff&fontAlignY=38&desc=Full-Stack%20Software%20Developer%20%7C%20Data%20%26%20ML%20Specialist&descFontSize=18&descAlignY=62" width="100%" alt="Abdullah Metlo Banner" />

  <p align="center">
    <strong>Modern, high-performance developer portfolio featuring bespoke 3D micro-interactions, canvas particle physics, and responsive glassmorphism.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/abdullahmetlo/abdullahmetlo-portfolio"><img src="https://img.shields.io/badge/Next.js%2016-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 16" /></a>
    <a href="https://github.com/abdullahmetlo/abdullahmetlo-portfolio"><img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" /></a>
    <a href="https://github.com/abdullahmetlo/abdullahmetlo-portfolio"><img src="https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://github.com/abdullahmetlo/abdullahmetlo-portfolio"><img src="https://img.shields.io/badge/Tailwind%20CSS%20v4-38B2AC?style=for-the-badge&logo=tailwind_css&logoColor=white" alt="Tailwind CSS v4" /></a>
    <a href="https://github.com/abdullahmetlo/abdullahmetlo-portfolio"><img src="https://img.shields.io/badge/Framer%20Motion-black?style=for-the-badge&logo=framer&logoColor=blue" alt="Framer Motion" /></a>
  </p>
</div>

---

## ✨ Overview

This repository houses the personal portfolio of **Abdullah Metlo**, a Computer Science graduate from **Swansea University** and Software Developer based in **London, UK**. 

The web application is built from the ground up using **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**, blending engineering rigor with interactive, state-of-the-art UI design.

---

## 🌟 Key Highlights & Features

- 🎯 **Interactive Expanding Logo**: Displays `METLO` by default; hovering smoothly triggers `ABDULLAH ` to slide out from the left with spring-eased motion.
- 🪪 **3D Tilt LinkedIn-Style Profile Card**:
  - Authentic LinkedIn profile card featuring cover banner, overlapping monogram avatar, verified badge, headline, and London location.
  - Interactive *"Message"*, *"Connect/Pending"*, and *"More"* dropdown actions.
  - **3D Cursor-Tracking Perspective**: Smoothly tilts in 3D space toward the cursor with dynamic specular glare and an ambient levitation cycle.
- 🌌 **Interactive Starfield Canvas**:
  - Background particle mesh tracking the cursor.
  - **Repulsion Physics**: Stars physically accelerate and float away whenever the cursor approaches them.
- ⏳ **Experience Timeline with Quantitative Toggles**:
  - Vertical spine layout detailing roles at **SAJAK** and **Swansea University**.
  - Expandable *"See quantitative achievements"* drawer revealing tangible business impact (e.g. *4,000+ transactions, 20% downtime reduction, 25% enquiry boost*).
  - Interactive tech tag pills with emerald hover illumination.
- 🛠️ **Interactive Tech Stack & Proficiency Modal**:
  - Clickable skill cards filterable by category (*Frontend*, *Backend*, *Data & ML*, *DevOps*).
  - **Proficiency Modal**: Features an animated **3-dot proficiency gauge**, years of experience, and real-world practical applications.
- 📜 **Certifications Carousel**:
  - Smooth horizontal slider showcasing verified credentials (**AWS Cloud Practitioner**, **Power BI Data Analyst**, **Python for Data Science & ML**).
- 💼 **Categorized Project Showcase**:
  - Interactive cards with live links, GitHub repos, and category filtering (*Full-Stack*, *Machine Learning*, *Data & Automation*).
- 📬 **Direct Contact Channel**:
  - Fully styled contact form with instant validation state and direct email/social channels.

---

## 🏗️ Project Architecture

```bash
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx                # Interactive expanding logo & blur header
│   │   ├── Hero.tsx                  # Two-column layout: 3D LinkedIn Card + Pitch
│   │   ├── LinkedInCard.tsx          # 3D tilt & floating LinkedIn profile card
│   │   ├── InteractiveBackground.tsx # Canvas starfield with mouse repulsion physics
│   │   ├── About.tsx                 # Profile bio & Swansea University education
│   │   ├── Experience.tsx            # Vertical spine timeline with quantitative toggles
│   │   ├── Skills.tsx                # Interactive tech stack cards & category filters
│   │   ├── SkillDetailModal.tsx      # Modal with 3-dot gauge & usage context
│   │   ├── Certifications.tsx        # Horizontal certifications carousel
│   │   ├── Projects.tsx              # Filterable project showcase cards
│   │   ├── Contact.tsx               # Contact form UI & direct channels
│   │   └── Footer.tsx                # Minimalist footer & back-to-top button
│   ├── data/
│   │   └── portfolioData.ts          # Centralized data store (bio, skills, projects, jobs)
│   ├── globals.css                   # Theme tokens, custom glassmorphism, scrollbars
│   ├── layout.tsx                    # Root layout, metadata & SEO tags
│   └── page.tsx                      # Main single-page application assembly
├── public/                           # Static icons and assets
├── package.json
└── tsconfig.json
```

---

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/abdullahmetlo/abdullahmetlo-portfolio.git
cd abdullahmetlo-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application live.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Customization

All personal information, experience history, skills, certifications, and projects are centralized in a single file:

📄 **[`app/data/portfolioData.ts`](file:///c:/Users/abdullah/Documents/portfolio/app/data/portfolioData.ts)**

You can easily update bio details, add new projects, or modify credentials in this file without modifying component logic.

---

## 📬 Contact & Connect

**Abdullah Metlo** — London, UK

- 🌐 **GitHub**: [github.com/abdullahmetlo](https://github.com/abdullahmetlo)
- 💼 **LinkedIn**: [linkedin.com](https://linkedin.com)
- 📧 **Email**: [contact@abdullah.dev](mailto:contact@abdullah.dev)

---

<div align="center">
  <sub>Built with ❤️ using Next.js, Tailwind CSS & Framer Motion.</sub>
</div>
