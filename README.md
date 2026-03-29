# Muhammed Ashique PK — Premium Cinematic Portfolio

A highly immersive, cinematic scroll-driven portfolio website built for modern web standards. Re-engineered from the ground up to abandon traditional stacked-section layouts in favor of an elegant, continuous storytelling experience powered by **Next.js 14**, **Tailwind CSS**, and advanced **Framer Motion** APIs.

![Portfolio Preview](/subhx.png) *(Preview graphic illustrative)*

## ✨ Key Features

- **Cinematic Storytelling:** Uses `useScroll` and `useTransform` to orchestrate continuous animations, creating a unified flow rather than disparate sections.
- **Interactive Project Previews:** High-impact, full-screen project exploration overlays powered by Framer Motion's `layoutId` for seamless zoom/scale transformations without navigating away from the page.
- **Developer Terminal Mode (`/`):** A hidden "Easter egg" interactive terminal interface complete with typing animations and physics-based modal entry. Press `/` anywhere to interact.
- **Global Micro-Interactions:** Custom trailing pointer cursor, progressive scroll indicators, and deeply satisfying button glow/press physics.
- **Mobile Optimized:** Relies on dynamic viewport heights (`100dvh`) and safe-area paddings to guarantee perfect, overflow-free responsiveness across all mobile devices.
- **Premium Typography & Whitespace:** Aggressive use of whitespace, refined font scaling, and custom easing curves (`cubic-bezier(0.22, 1, 0.36, 1)`) for true Awwwards-tier polish.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel ready

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/AshiqueGhazali/portfolio-next.git
cd portfolio-next
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to experience the cinematic flow.

## 📂 Architecture overview

The application layout has been refactored into "Scenes" rather than UI blocks.

```
├── src/app/
│   ├── components/
│   │   ├── scenes/
│   │   │   ├── IntroScene.tsx        # Immersive scaling title
│   │   │   ├── TextScene.tsx         # Progressive text morphing
│   │   │   ├── SkillsScene.tsx       # Scroll-mapped ambient traits
│   │   │   ├── ProjectsScene.tsx     # The core portfolio engine
│   │   │   ├── ExperienceScene.tsx   # Floating history cards
│   │   │   └── ContactScene.tsx      # Minimal CTA footer
│   │   └── ui/
│   │       ├── CustomCursor.tsx      # Global trailing dot cursor
│   │       ├── ScrollIndicator.tsx   # Progress bar
│   │       └── TerminalMode.tsx      # The developer command-line modal
│   ├── utils/
│   │   └── projectData.ts            # Centralized project configuration
│   ├── globals.css                   # Custom cinematic bezier curves & themes
│   ├── layout.tsx                    # Shared noise overlays
│   └── page.tsx                      # The master scroll container orchestrator
```

## 🎨 Customization

The portfolio is primarily driven by centralized configurations:

1. **Projects**: Edit `/src/app/utils/projectData.ts` to instantly change the cards and fullscreen modals.
2. **Terminal Content**: Modify the `COMMANDS` object in `TerminalMode.tsx`.
3. **Typography/Colors**: Adjust CSS variables in `globals.css` to tweak the core aesthetic.
4. **Environment Links**: Next.js public bounds (e.g., `NEXT_PUBLIC_GITHUB_URL`) can be mapped directly for social integrations.

## 📄 License & Contact

Open source under the [MIT License](LICENSE).

- **Email**: ashiquekundala6@gmail.com
- **GitHub**: [AshiqueGhazali](https://github.com/AshiqueGhazali)
- **LinkedIn**: [ashiqueghazali](https://linkedin.com/in/ashiqueghazali)