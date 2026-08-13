# Abdullah Metlo : Personal Portfolio

<div align="center">
  <p align="center">
    <strong>My personal developer portfolio built with Next.js, Tailwind CSS, and Framer Motion.</strong>
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

## About Me and This Project

Hi there! I am Abdullah, a Computer Science graduate from Swansea University currently based in London, UK.

I built this portfolio to showcase what I love doing most: creating reliable full-stack web applications, writing automated data-collection scripts in Python, and experimenting with practical machine learning models. 

Rather than sticking with a generic template, I designed this site to feel interactive and alive with custom physics, fluid micro-interactions, and a clean dark aesthetic.

---

## What I Built Into the Site

- **Expanding Logo**: Hover over the logo at the top left to see my full name smoothly expand out from the left.
- **3D Floating Profile Card**: An authentic LinkedIn-style card on the left side of the hero section that tilts in 3D based on your cursor position, complete with realistic depth and specular lighting.
- **Interactive Starlit Background**: A canvas particle background where stars gently drift and physically float away whenever your mouse gets close.
- **Experience Timeline**: A breakdown of my work as an Assistant Web Developer at SAJAK and my time at Swansea University, featuring toggleable metrics showing real results like processing over 4,000 transactions and cutting downtime by 20%.
- **Tech Stack with Proficiency Modals**: Click any skill badge to open a detailed modal showing my experience level via an animated gauge and real-world project context.
- **Certifications Slider**: A clean horizontal carousel showcasing my credentials in AWS, Power BI, and Python Data Science.
- **Project Showcase**: A filterable gallery of my full-stack, data automation, and machine learning projects.

---

## Technologies I Used

- **Framework**: Next.js 16 (App Router) & React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom glassmorphic utilities
- **Animations**: Framer Motion & HTML5 Canvas API
- **Icons**: Lucide React
- **Deployment**: Vercel

---

## Project Structure

```bash
portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx                # Expanding header navigation
│   │   ├── Hero.tsx                  # Split hero with 3D profile card & intro
│   │   ├── LinkedInCard.tsx          # 3D interactive tilt card
│   │   ├── InteractiveBackground.tsx # Canvas starfield with cursor repulsion
│   │   ├── About.tsx                 # Degree background & engineering focus
│   │   ├── Experience.tsx            # Spine timeline with expandable impact metrics
│   │   ├── Skills.tsx                # Clickable skill cards with category filters
│   │   ├── SkillDetailModal.tsx      # Modal breakdown with proficiency meter
│   │   ├── Certifications.tsx        # Horizontal certifications slider
│   │   ├── Projects.tsx              # Filterable project showcase
│   │   ├── Contact.tsx               # Contact form and direct links
│   │   └── Footer.tsx                # Footer with quick links
│   ├── data/
│   │   └── portfolioData.ts          # Central data source for all content
│   ├── globals.css                   # Theme definitions & layout utilities
│   ├── layout.tsx                    # Layout and metadata
│   └── page.tsx                      # Main single-page application
├── public/                           # Static assets
└── package.json
```

---

## Running Locally

If you would like to run this on your own machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/abdullahmetlo/abdullahmetlo-portfolio.git
   cd abdullahmetlo-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser.

---

## Let us Connect

I am always keen to discuss software engineering roles, machine learning ideas, or freelance projects.

- **GitHub**: [github.com/abdullahmetlo](https://github.com/abdullahmetlo)
- **LinkedIn**: [linkedin.com](https://linkedin.com)
- **Email**: [contact@abdullah.dev](mailto:contact@abdullah.dev)
- **Location**: London, United Kingdom
