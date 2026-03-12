"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { springConfigs } from "@/lib/animations";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          scrolled
            ? "bg-paper/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(26,58,58,0.08)]"
            : "bg-transparent"
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <nav className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="flex items-baseline gap-1.5"
              whileHover={{ scale: 1.03 }}
              transition={springConfigs.snappy}
            >
              <span
                className="font-display-en font-black text-deep tracking-tight"
                style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
              >
                ALPA-CASINO
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.span
                  className="px-3 py-2 text-sm text-cocoa-sub hover:text-cocoa font-medium relative group cursor-pointer inline-block"
                  whileHover={{ y: -2 }}
                  transition={springConfigs.snappy}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold w-0 group-hover:w-3/4 transition-all duration-300" />
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <motion.span
              className="block w-6 h-0.5 bg-cocoa origin-center"
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={springConfigs.snappy}
            />
            <motion.span
              className="block w-6 h-0.5 bg-cocoa"
              animate={
                isOpen
                  ? { opacity: 0, scale: 0 }
                  : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.15 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-cocoa origin-center"
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={springConfigs.snappy}
            />
          </button>
        </nav>

        {/* Scroll progress bar */}
        <ScrollProgress />
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-cream flex items-center justify-center"
            initial={{
              clipPath: "circle(0% at calc(100% - 40px) 40px)",
            }}
            animate={{
              clipPath: "circle(150% at calc(100% - 40px) 40px)",
            }}
            exit={{
              clipPath: "circle(0% at calc(100% - 40px) 40px)",
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <nav className="flex flex-col items-center gap-4">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    delay: 0.1 + i * 0.06,
                    ...springConfigs.gentle,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl md:text-3xl font-display-jp text-cocoa hover:text-rose transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              {/* Suit decorations */}
              <motion.div
                className="mt-6 flex gap-4 text-2xl opacity-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-rose">♥</span>
                <span className="text-deep">♠</span>
                <span className="text-rose">♦</span>
                <span className="text-deep">♣</span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/** スクロール進捗バー */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? window.scrollY / total : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[2px] bg-transparent">
      <motion.div
        className="h-full bg-gold origin-left"
        style={{ scaleX: progress }}
      />
    </div>
  );
}
