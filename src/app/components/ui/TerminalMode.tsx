"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// ==================== DATA ====================
const COMMANDS: Record<string, { output: string[] }> = {
  help: {
    output: [
      "Available commands:",
      "",
      "  whoami    →  About me",
      "  skills    →  My tech stack",
      "  projects  →  Selected projects",
      "  contact   →  Get in touch",
      "  clear     →  Clear terminal",
      "  exit      →  Close terminal",
    ],
  },
  whoami: {
    output: [
      "Muhammed Ashique P K",
      "Full Stack Engineer — Calicut, Kerala, India",
      "",
      "I craft scalable, high-performance applications with a focus on",
      "clean architecture, premium UIs, and elegant engineering.",
      "",
      "Currently building at Subhx Infotech.",
    ],
  },
  skills: {
    output: [
      "Core Technologies",
      "─────────────────────────────────",
      "  Languages   TypeScript, JavaScript",
      "  Frontend    React, Next.js, Tailwind CSS, Framer Motion",
      "  Backend     Node.js, Express.js",
      "  Databases   PostgreSQL, MongoDB, Redis",
      "  Realtime    Socket.IO, WebRTC",
      "  Cloud       AWS, MinIO, Vercel",
    ],
  },
  projects: {
    output: [
      "Selected Projects",
      "─────────────────────────────────",
      "  01  CoinsPe             ─  Crypto exchange platform",
      "  02  SUBHX Connect       ─  Broadband ISP portal",
      "  03  Subhx HireUp        ─  AI-driven recruitment platform",
      "  04  FreshCheck          ─  Hotel food quality monitoring AI",
      "  05  VEEW                ─  Virtual event hosting platform",
      "  06  ZEPHYR              ─  Full-featured e-commerce store",
      "",
      "→  Scroll down to see each project in detail.",
    ],
  },
  contact: {
    output: [
      "Let's connect",
      "─────────────────────────────────",
      "  Email      ashiquekundala6@gmail.com",
      "  GitHub     github.com/AshiqueGhazali",
      "  LinkedIn   linkedin.com/in/ashiqueghazali",
      "  Instagram  instagram.com/ashique_pk__",
    ],
  },
};

// ==================== TYPING HOOK ====================
function useTypingEffect(lines: string[], active: boolean, speedMs = 14) {
  const [rendered, setRendered] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    setRendered([]);
    setDone(false);

    let lineIdx = 0;
    let charIdx = 0;
    const allLines = [...lines];

    const interval = setInterval(() => {
      const current = allLines[lineIdx] ?? "";
      if (charIdx <= current.length) {
        setRendered((prev) => {
          const copy = [...prev];
          copy[lineIdx] = current.slice(0, charIdx);
          return copy;
        });
        charIdx++;
      } else {
        lineIdx++;
        charIdx = 0;
        if (lineIdx >= allLines.length) {
          clearInterval(interval);
          setDone(true);
        }
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [lines, active]);

  return { rendered, done };
}

// ==================== OUTPUT BLOCK ====================
function OutputBlock({ lines }: { lines: string[] }) {
  const { rendered } = useTypingEffect(lines, true, 12);
  return (
    <div className="mt-1">
      {rendered.map((line, i) => (
        <div key={i} className={`leading-6 ${line.startsWith("  ") ? "text-muted-foreground/80" : line.includes("─") ? "text-foreground/20" : line === "" ? "" : "text-primary"}`}>
          {line || "\u00A0"}
        </div>
      ))}
    </div>
  );
}

// ==================== HISTORY ENTRY ====================
type HistoryEntry =
  | { type: "input"; text: string }
  | { type: "output"; lines: string[] }
  | { type: "error"; text: string };

// ==================== MAIN COMPONENT ====================
export default function TerminalMode() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: "output",
      lines: [
        'Type "help" to see available commands.',
      ],
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut: "/" to open
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && !open) {
        // Don't hijack if user is typing in another input
        if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Auto-focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Scroll to bottom when history updates
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const inputEntry: HistoryEntry = { type: "input", text: raw.trim() };

    if (cmd === "clear") {
      setHistory([{ type: "output", lines: ['Type "help" to see available commands.'] }]);
      return;
    }
    if (cmd === "exit") {
      setHistory((h) => [...h, inputEntry]);
      setTimeout(() => setOpen(false), 400);
      return;
    }

    const found = COMMANDS[cmd];
    if (found) {
      setHistory((h) => [...h, inputEntry, { type: "output", lines: found.output }]);
    } else {
      setHistory((h) => [
        ...h,
        inputEntry,
        { type: "error", text: `Command not found: "${cmd}". Type "help" for options.` },
      ]);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <>
      {/* Trigger Button (bottom-right) */}
      <motion.button
        onClick={() => setOpen(true)}
        title='Open Terminal (press "/")'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-foreground/5 border border-border text-muted-foreground text-xs font-mono tracking-wider hover:bg-foreground/10 hover:text-foreground transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg backdrop-blur-sm hidden md:flex"
        aria-label="Open terminal"
      >
        <span className="text-primary">_</span>
        <span>terminal</span>
        <kbd className="ml-1 px-1.5 py-0.5 bg-foreground/10 rounded text-[10px]">/</kbd>
      </motion.button>

      {/* Mobile Trigger */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-foreground/5 border border-border text-primary flex items-center justify-center text-lg font-mono hover:bg-foreground/10 transition-all duration-300 active:scale-95 shadow-lg backdrop-blur-sm md:hidden"
        aria-label="Open terminal"
      >
        _
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Terminal Window */}
            <motion.div
              className="relative w-full md:max-w-3xl h-[85svh] md:h-[600px] rounded-t-3xl md:rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-border glass-panel pointer-events-auto"
              initial={{ y: "100%", scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: "100%", scale: 0.97 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Title bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border flex-shrink-0 bg-background/50">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-[11px] font-mono text-muted-foreground/50 tracking-widest">
                  ashique@portfolio ~ %
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground/40 hover:text-muted-foreground transition-colors"
                  aria-label="Close terminal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Output Area */}
              <div
                className="flex-1 overflow-y-auto px-5 py-4 font-mono text-sm"
                onClick={() => inputRef.current?.focus()}
              >
                {history.map((entry, i) => {
                  if (entry.type === "input") {
                    return (
                      <div key={i} className="flex items-start gap-2 mt-3 mb-1">
                        <span className="text-primary flex-shrink-0">❯</span>
                        <span className="text-foreground">{entry.text}</span>
                      </div>
                    );
                  }
                  if (entry.type === "error") {
                    return (
                      <div key={i} className="text-red-400/80 mt-1 leading-6">
                        {entry.text}
                      </div>
                    );
                  }
                  return <OutputBlock key={i} lines={entry.lines} />;
                })}
                <div ref={bottomRef} />
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSubmit}
                className="flex items-center gap-2 px-5 py-3.5 border-t border-border flex-shrink-0 bg-background/50"
              >
                <span className="text-primary font-mono text-sm flex-shrink-0">❯</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder='type a command...'
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-muted-foreground/30 outline-none caret-primary"
                />
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-[7px] h-[15px] bg-primary/70 inline-block rounded-sm ml-0.5"
                />
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
