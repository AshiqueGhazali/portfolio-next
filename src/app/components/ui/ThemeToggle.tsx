"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLight = theme === "light";

  return (
    <motion.button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-foreground/5 backdrop-blur-md border border-border text-foreground shadow-lg hover:bg-foreground/10 transition-colors"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isLight ? 180 : 0, scale: isLight ? 0.8 : 1 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
        className="relative flex items-center justify-center w-5 h-5"
      >
        {isLight ? <Sun className="w-5 h-5 absolute" /> : <Moon className="w-5 h-5 absolute" />}
      </motion.div>
    </motion.button>
  );
}
