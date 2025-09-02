// // import Image from "next/image";

// // export default function Home() {
// //   return (
// //     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
// //       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
// //         <Image
// //           className="dark:invert"
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={180}
// //           height={38}
// //           priority
// //         />
// //         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
// //           <li className="mb-2 tracking-[-.01em]">
// //             Get started by editing{" "}
// //             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
// //               src/app/page.tsx
// //             </code>
// //             .
// //           </li>
// //           <li className="tracking-[-.01em]">
// //             Save and see your changes instantly.
// //           </li>
// //         </ol>

// //         <div className="flex gap-4 items-center flex-col sm:flex-row">
// //           <a
// //             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className="dark:invert"
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={20}
// //               height={20}
// //             />
// //             Deploy now
// //           </a>
// //           <a
// //             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Read our docs
// //           </a>
// //         </div>
// //       </main>
// //       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/file.svg"
// //             alt="File icon"
// //             width={16}
// //             height={16}
// //           />
// //           Learn
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/window.svg"
// //             alt="Window icon"
// //             width={16}
// //             height={16}
// //           />
// //           Examples
// //         </a>
// //         <a
// //           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
// //           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           <Image
// //             aria-hidden
// //             src="/globe.svg"
// //             alt="Globe icon"
// //             width={16}
// //             height={16}
// //           />
// //           Go to nextjs.org →
// //         </a>
// //       </footer>
// //     </div>
// //   );
// // }

// 'use client'

// import { useEffect } from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import About from './components/About'
// import Projects from './components/Project'
// import Skills from './components/Skills'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

// export default function Home() {
//   useEffect(() => {
//     // Create floating particles
//     const createParticles = () => {
//       const particleCount = 50
//       const container = document.body

//       for (let i = 0; i < particleCount; i++) {
//         const particle = document.createElement('div')
//         particle.className = 'particle'
//         particle.style.left = Math.random() * 100 + '%'
//         particle.style.animationDelay = Math.random() * 20 + 's'
//         particle.style.animationDuration = (Math.random() * 10 + 15) + 's'
//         container.appendChild(particle)
//       }
//     }

//     createParticles()

//     return () => {
//       // Cleanup particles
//       const particles = document.querySelectorAll('.particle')
//       particles.forEach(particle => particle.remove())
//     }
//   }, [])

//   return (
//     <main className="relative">
//       <Header />
//       <Hero />
//       <About />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Globe, Activity, Map, Newspaper, Cpu, Zap, Star, GitBranch, Users, ChevronDown } from 'lucide-react';

// CyberpunkPortfolio - single-file React component (TailwindCSS assumed)
// Notes: This is a static demo component. Replace placeholder data / links with your real data.

export default function CyberpunkPortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    "> Welcome to Alex's terminal portfolio...",
    "> Type \"help\" to see available commands"
  ]);
  const [githubStats, setGithubStats] = useState({
    repos: 42,
    commits: 1337,
    stars: 89,
    followers: 156
  });
  const timelineRef = useRef(null);
  const [currentTimelineIndex, setCurrentTimelineIndex] = useState(0);

  const timelineData = [
    {
      year: '2020',
      title: 'The Awakening',
      level: 1,
      description: 'Started my coding journey with HTML & CSS',
      skills: ['HTML', 'CSS', 'JavaScript'],
      achievement: 'First Website Deployed'
    },
    {
      year: '2021',
      title: 'React Realm',
      level: 25,
      description: 'Mastered React and component architecture',
      skills: ['React', 'Redux', 'Node.js'],
      achievement: 'Built 5 React Apps'
    },
    {
      year: '2022',
      title: 'Fullstack Fusion',
      level: 50,
      description: 'Expanded to backend and databases',
      skills: ['MongoDB', 'Express', 'PostgreSQL', 'Docker'],
      achievement: 'Freelance Success'
    },
    {
      year: '2023',
      title: 'Cloud Conqueror',
      level: 75,
      description: 'Embraced cloud architecture and DevOps',
      skills: ['AWS', 'Kubernetes', 'CI/CD', 'Terraform'],
      achievement: 'Senior Developer Role'
    },
    {
      year: '2024',
      title: 'AI Architect',
      level: 95,
      description: 'Leading AI integration and team mentorship',
      skills: ['Next.js', 'AI/ML', 'Team Leadership', 'System Design'],
      achievement: 'Tech Lead Position'
    }
  ];

  const projects = [
    {
      id: 'quantum-chat',
      name: 'QuantumChat',
      type: 'Real-time Communication Platform',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
      status: 'Production',
      users: '10k+',
      description: 'End-to-end encrypted messaging with quantum security protocols'
    },
    {
      id: 'neural-dashboard',
      name: 'NeuralDash',
      type: 'AI Analytics Dashboard',
      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
      status: 'Beta',
      users: '500+',
      description: 'Machine learning insights visualization for enterprise clients'
    },
    {
      id: 'blockchain-vote',
      name: 'ChainVote',
      type: 'Decentralized Voting System',
      tech: ['Solidity', 'Web3', 'IPFS', 'React'],
      status: 'Concept',
      users: 'TBD',
      description: 'Transparent voting platform using blockchain technology'
    }
  ];

  const mapLocations = [
    { lat: 40.7128, lng: -74.0060, city: 'New York', project: 'FinTech Startup MVP', year: '2023' },
    { lat: 51.5074, lng: -0.1278, city: 'London', project: 'E-commerce Platform', year: '2023' },
    { lat: 35.6762, lng: 139.6503, city: 'Tokyo', project: 'Gaming Backend API', year: '2024' },
    { lat: -33.8688, lng: 151.2093, city: 'Sydney', project: 'Healthcare Dashboard', year: '2024' }
  ];

  const terminalCommands:any = {
    help: () => [
      '> Available commands:',
      '  projects - Show my projects',
      '  skills - Display my tech stack',
      '  contact - Get in touch',
      '  clear - Clear terminal',
      '  whoami - About me',
      '  ls - List directories'
    ],
    projects: () => [
      '> Loading projects...',
      '📁 QuantumChat/ - Real-time messaging platform',
      '📁 NeuralDash/ - AI analytics dashboard',
      '📁 ChainVote/ - Blockchain voting system',
      '📁 portfolio/ - This cyberpunk showcase'
    ],
    skills: () => [
      '> Scanning skill tree...',
      '⚡ Frontend: React, Next.js, TypeScript, Tailwind',
      '🚀 Backend: Node.js, Python, PostgreSQL, MongoDB',
      '☁️  Cloud: AWS, Docker, Kubernetes, Terraform',
      '🧠 AI/ML: TensorFlow, PyTorch, OpenAI API'
    ],
    contact: () => [
      '> Contact protocols established:',
      '📧 alex@cybercoder.dev',
      '🐙 github.com/alexcyber',
      '💼 linkedin.com/in/alexcyber',
      '🐦 @alexcyberdev'
    ],
    whoami: () => [
      '> Identity scan complete:',
      '👨‍💻 Alex Chen - Fullstack Architect',
      '📍 Based in San Francisco, works globally',
      '🎯 Specializes in scalable web applications',
      "⚡ Passionate about clean code and user experience"
    ],
    ls: () => [
      '> Directory listing:',
      'drwxr-xr-x  projects/',
      'drwxr-xr-x  skills/',
      'drwxr-xr-x  experience/',
      '-rw-r--r--  resume.pdf',
      '-rw-r--r--  contact.info'
    ],
    clear: () => []
  };

  const handleTerminalSubmit = (e:any) => {
    e?.preventDefault();
    const command = terminalInput.toLowerCase().trim();
    const newOutput = [...terminalOutput, `> ${terminalInput}`];

    if (terminalCommands[command]) {
      const response = terminalCommands[command]();
      if (command === 'clear') {
        setTerminalOutput([]);
      } else {
        newOutput.push(...response);
        setTerminalOutput(newOutput);
      }
    } else {
      newOutput.push(`> Command not found: ${command}. Type 'help' for available commands.`);
      setTerminalOutput(newOutput);
    }

    setTerminalInput('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimelineIndex((prev) => (prev + 1) % timelineData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // FloatingCube component (kept local)
  const FloatingCube = () => {
    const cubeRef = useRef<any>(null);

    useEffect(() => {
      const cube = cubeRef.current;
      if (!cube) return;

      let rafId:any;
      const animate = () => {
        if (!cube) return;
        const t = Date.now();
        cube.style.transform = `rotateX(${(t * 0.001) % 360}deg) rotateY(${(t * 0.002) % 360}deg)`;
        rafId = requestAnimationFrame(animate);
      };
      animate();

      return () => cancelAnimationFrame(rafId);
    }, []);

    return (
      <div className="absolute right-10 top-20 w-32 h-32 perspective-1000 pointer-events-none">
        <div
          ref={cubeRef}
          className="relative w-full h-full transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {['React', 'Node', 'AWS', 'AI', 'Web3', 'UI/UX'].map((skill, index) => (
            <div
              key={skill}
              className="absolute inset-0 flex items-center justify-center bg-cyan-500/20 border border-cyan-400 backdrop-blur-sm text-xs font-bold text-cyan-300 rounded"
              style={{
                transform: index === 0 ? 'rotateY(0deg) translateZ(64px)' :
                          index === 1 ? 'rotateY(180deg) translateZ(64px)' :
                          index === 2 ? 'rotateY(-90deg) translateZ(64px)' :
                          index === 3 ? 'rotateY(90deg) translateZ(64px)' :
                          index === 4 ? 'rotateX(90deg) translateZ(64px)' :
                          'rotateX(-90deg) translateZ(64px)'
              }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          opacity: 0.1
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-cyan-400">&lt;AlexCyber /&gt;</div>

          <div className="hidden md:flex items-center space-x-6">
            {['Timeline', 'Terminal', '3D Lab', 'Dashboard', 'Magazine', 'Journey'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className="text-gray-400 hover:text-cyan-300 transition-colors hover:glow"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
              <GitBranch className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
              <Globe className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors">
              <Terminal className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="container mx-auto px-6 py-4 text-center text-gray-500 border-t border-gray-800">
          <div className="mb-2">© 2024 Alex Chen. Crafted with React, Three.js, and lots of caffeine.</div>
          <div className="text-xs">
            <span className="text-green-400">●</span> System Status: All services operational
            <span className="ml-4 text-cyan-400">●</span> Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </nav>

      {/* Main content wrapper */}
      <main className="pt-28">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative">
          <FloatingCube />
          <div className="text-center z-10 px-6">
            <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              ALEX CHEN
            </h1>
            <div className="text-2xl mb-6 text-cyan-300">
              <span className="typing-animation">Fullstack Architect &amp; AI Enthusiast</span>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span>Level 95 Developer</span>
              <Star className="w-6 h-6 text-yellow-400" />
            </div>
            <button
              onClick={() => setActiveSection('timeline')}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              Enter the Matrix
            </button>
          </div>
          <ChevronDown className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce w-8 h-8" />
        </section>

        {/* Timeline Section */}
        <section className="py-20 relative" id="timeline">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
              {/* <Timeline className="inline mr-3" /> */}
              Developer Journey
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl font-bold text-cyan-400">{item.year}</span>
                        <div className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full px-3 py-1">
                          <Zap className="w-4 h-4" />
                          <span className="text-sm">Level {item.level}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-purple-300">{item.title}</h3>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-cyan-500/20 rounded text-xs border border-cyan-500/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="text-yellow-400 text-sm">🏆 {item.achievement}</div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-black"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terminal Section */}
        <section className="py-20 bg-gray-900/30" id="terminal">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
              <Terminal className="inline mr-3" />
              Interactive Terminal
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="bg-black rounded-lg border border-gray-600 overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-300">alex@cybercoder:~$</span>
                </div>

                <div className="p-4 h-96 overflow-y-auto">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className="mb-1 text-green-400 whitespace-pre-wrap">
                      {line}
                    </div>
                  ))}

                  <form onSubmit={handleTerminalSubmit} className="flex items-center mt-4">
                    <span className="text-cyan-400 mr-2">$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      className="bg-transparent outline-none flex-1 text-green-400"
                      placeholder="Type a command..."
                      autoFocus
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Lab Section */}
        <section className="py-20" id="3d">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
              <Cpu className="inline mr-3" />
              3D Laboratory
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Interactive Skill Cube</h3>
                <div className="relative h-64 bg-black/30 rounded-lg flex items-center justify-center border border-cyan-500/20">
                  <div className="w-24 h-24 perspective-1000">
                    <div className="relative w-full h-full animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
                      <div className="absolute inset-0 bg-cyan-500/30 border border-cyan-400 rounded flex items-center justify-center text-xs" style={{ transform: 'translateZ(48px)' }}>React</div>
                      <div className="absolute inset-0 bg-purple-500/30 border border-purple-400 rounded flex items-center justify-center text-xs" style={{ transform: 'rotateY(180deg) translateZ(48px)' }}>Node</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mt-4">Hover and interact with 3D elements to explore my tech stack</p>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Neural Network Visualization</h3>
                <div className="relative h-64 bg-black/30 rounded-lg flex items-center justify-center border border-cyan-500/20">
                  <div className="grid grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mt-4">AI-powered solutions with real-time data processing</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-20 bg-gray-900/30" id="dashboard">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
              <Activity className="inline mr-3" />
              Developer Dashboard
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-6 text-center">
                <GitBranch className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <div className="text-2xl font-bold text-cyan-300">{githubStats.repos}</div>
                <div className="text-sm text-gray-400">Repositories</div>
              </div>
              <div className="bg-black/50 border border-purple-500/30 rounded-lg p-6 text-center">
                <Zap className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <div className="text-2xl font-bold text-purple-300">{githubStats.commits}</div>
                <div className="text-sm text-gray-400">Commits</div>
              </div>
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-6 text-center">
                <Star className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <div className="text-2xl font-bold text-yellow-300">{githubStats.stars}</div>
                <div className="text-sm text-gray-400">Stars Earned</div>
              </div>
              <div className="bg-black/50 border border-green-500/30 rounded-lg p-6 text-center">
                <Users className="w-8 h-8 mx-auto mb-3 text-green-400" />
                <div className="text-2xl font-bold text-green-300">{githubStats.followers}</div>
                <div className="text-sm text-gray-400">Followers</div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {projects.map(project => (
                <div key={project.id} className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-cyan-300">{project.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs ${
                      project.status === 'Production' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-3">{project.type}</p>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-purple-500/20 rounded text-xs text-purple-300">{tech}</span>
                    ))}
                  </div>
                  <div className="text-sm text-cyan-400">👥 {project.users} users</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Magazine Section */}
        <section className="py-20" id="magazine">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
              <Newspaper className="inline mr-3" />
              Developer Spotlight
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900 to-black border border-cyan-500/30 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-1">
                  <div className="bg-black p-8">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        <div className="text-sm text-cyan-400 mb-2">FEATURED DEVELOPER</div>
                        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">THE RISE OF<br />ALEX CHEN</h1>
                        <div className="text-lg text-gray-300 mb-6">"From curious beginner to fullstack architect - a journey through the digital frontier"</div>
                        <p className="text-gray-400 leading-relaxed mb-6">In an industry that never sleeps, Alex Chen has emerged as a force to be reckoned with. Starting with simple HTML pages and evolving into complex cloud architectures, this developer's journey exemplifies the modern tech renaissance.</p>
                        <div className="flex space-x-6 text-sm">
                          <div>
                            <div className="text-cyan-400">EXPERTISE</div>
                            <div>Fullstack Development</div>
                          </div>
                          <div>
                            <div className="text-purple-400">FOCUS</div>
                            <div>AI Integration</div>
                          </div>
                          <div>
                            <div className="text-yellow-400">IMPACT</div>
                            <div>10k+ Users Served</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-gray-800/50 rounded-lg p-6 border border-cyan-500/30">
                          <h3 className="text-lg font-bold mb-3 text-cyan-300">"Code as Art"</h3>
                          <p className="text-gray-300 text-sm">"Every line of code is a brushstroke on the canvas of possibility. I don't just build applications - I craft digital experiences."</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-purple-500/20 rounded-lg p-4 text-center border border-purple-500/30">
                            <div className="text-2xl font-bold text-purple-300">50+</div>
                            <div className="text-xs text-gray-400">Projects Completed</div>
                          </div>
                          <div className="bg-cyan-500/20 rounded-lg p-4 text-center border border-cyan-500/30">
                            <div className="text-2xl font-bold text-cyan-300">5</div>
                            <div className="text-xs text-gray-400">Years Experience</div>
                          </div>
                        </div>

                        <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-500/30">
                          <div className="text-sm text-yellow-300 font-bold mb-2">LATEST ACHIEVEMENT</div>
                          <div className="text-xs text-gray-300">Successfully led migration of legacy system to microservices, improving performance by 300%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Map Section */}
        <section className="py-20 bg-gray-900/30" id="journey">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
              <Map className="inline mr-3" />
              Global Journey
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="bg-black/50 border border-cyan-500/30 rounded-lg p-8">
                <div className="relative bg-gray-900 rounded-lg p-8 min-h-96">
                  <div className="absolute inset-0 opacity-20">
                    <div className="w-full h-full bg-gradient-to-br from-blue-900 to-green-900 rounded-lg"></div>
                  </div>

                  <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 h-full">
                    {mapLocations.map((location, index) => (
                      <div
                        key={location.city}
                        className="bg-gray-800/80 border border-cyan-500/30 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                        style={{
                          marginTop: `${index * 20}px`
                        }}
                      >
                        <div className="flex items-center mb-2">
                          <div className="w-3 h-3 bg-cyan-400 rounded-full mr-2 animate-pulse"></div>
                          <span className="font-bold text-cyan-300">{location.city}</span>
                        </div>
                        <div className="text-xs text-gray-300 mb-2">{location.year}</div>
                        <div className="text-sm text-gray-400">{location.project}</div>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-4 left-4 text-xs text-gray-500">Click markers to explore project details</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-cyan-500/30 py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold text-cyan-400 mb-2">&lt;/AlexCyber&gt;</div>
              <div className="text-gray-400">Building the future, one line of code at a time</div>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-300">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-cyan-300">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-cyan-300">Contact</a>
            </div>
          </div>

          <div className="mt-6 text-xs text-gray-500 text-center">Made with ♥ in React • Last updated: {new Date().toLocaleDateString()}</div>
        </div>
      </footer>

      {/* Inline styles (JSX) */}
      <style jsx>{`
        @keyframes typing { from { width: 0 } to { width: 100% } }
        .typing-animation { overflow: hidden; border-right: 2px solid; white-space: nowrap; animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite; display: inline-block; }
        @keyframes blink-caret { from, to { border-color: transparent } 50% { border-color: #00ffff; } }
        .perspective-1000 { perspective: 1000px; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        @keyframes spin { from { transform: rotateX(0deg) rotateY(0deg); } to { transform: rotateX(360deg) rotateY(360deg); } }
        .glow { text-shadow: 0 0 10px currentColor; }
        .hover\\:glow:hover { text-shadow: 0 0 10px currentColor; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #00ffff; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #00cccc; }
        .terminal-cursor::after { content: '█'; animation: blink 1s infinite; }
        @keyframes blink { 0%, 50% { opacity: 1; } 51%, 100% { opacity: 0; } }
        .bg-particles { background-image: radial-gradient(2px 2px at 20px 30px, #00ffff, transparent); background-repeat: repeat; background-size: 200px 100px; animation: float 20s linear infinite; }
        @keyframes float { 0% { transform: translate(0, 0); } 100% { transform: translate(-200px, 0); } }
        .matrix-text { background: linear-gradient(45deg, #00ff00, #00ffff, #00ff00, #00ffff); background-size: 400% 400%; animation: matrix-glow 3s ease-in-out infinite; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        @keyframes matrix-glow { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .hologram { background: linear-gradient(45deg, transparent 30%, rgba(0, 255, 255, 0.1) 50%, transparent 70%); background-size: 20px 20px; animation: hologram-scan 2s linear infinite; }
        @keyframes hologram-scan { 0% { background-position: -20px 0; } 100% { background-position: 20px 0; } }
        .neon-border { border: 1px solid #00ffff; box-shadow: 0 0 5px #00ffff, inset 0 0 5px #00ffff; animation: neon-pulse 2s ease-in-out infinite alternate; }
        @keyframes neon-pulse { from { box-shadow: 0 0 5px #00ffff, inset 0 0 5px #00ffff; } to { box-shadow: 0 0 20px #00ffff, 0 0 30px #00ffff, inset 0 0 10px #00ffff; } }
        .transform-gpu { transform: translateZ(0); backface-visibility: hidden; }
        .gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .float { animation: float-up-down 3s ease-in-out infinite; }
        @keyframes float-up-down { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        .glitch { position: relative; }
        .glitch::before, .glitch::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .glitch::before { animation: glitch-1 0.5s infinite; color: #ff0000; z-index: -1; }
        .glitch::after { animation: glitch-2 0.5s infinite; color: #00ff00; z-index: -2; }
        @keyframes glitch-1 { 0%, 100% { transform: translate(0); } 20% { transform: translate(-2px, 2px); } 40% { transform: translate(-2px, -2px); } 60% { transform: translate(2px, 2px); } 80% { transform: translate(2px, -2px); } }
        @keyframes glitch-2 { 0%, 100% { transform: translate(0); } 20% { transform: translate(2px, 2px); } 40% { transform: translate(2px, -2px); } 60% { transform: translate(-2px, 2px); } 80% { transform: translate(-2px, -2px); } }
      `}</style>
    </div>
  );
}
