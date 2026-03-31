"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { NAV_LINKS, SNS_LINKS } from "@/lib/constants"

const KEY_LINKS = [
  { href: "/newcustomer", label: "はじめての方" },
  { href: "/system", label: "料金" },
  { href: "/access", label: "アクセス" },
  { href: SNS_LINKS.line, label: "LINE予約", external: true },
] as const

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--color-bg)]/95 backdrop-blur-sm shadow-[0_1px_0_var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50"
            onClick={() => setIsOpen(false)}
          >
            <span
              className="font-[family-name:var(--font-serif)] text-[var(--color-green)] tracking-tight"
              style={{ fontSize: "clamp(1.2rem, 3vw, 1.5rem)" }}
            >
              ALPACASINO
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {KEY_LINKS.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm text-[var(--color-fg)] hover:text-[var(--color-green)] font-medium transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-[var(--color-fg)] hover:text-[var(--color-green)] font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <span
              className={`block w-6 h-[2px] transition-all duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[5px] bg-[var(--color-bg)]" : "bg-[var(--color-fg)]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-200 ${
                isOpen ? "opacity-0 scale-0 bg-[var(--color-bg)]" : "opacity-100 bg-[var(--color-fg)]"
              }`}
            />
            <span
              className={`block w-6 h-[2px] transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[5px] bg-[var(--color-bg)]" : "bg-[var(--color-fg)]"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-30 bg-[var(--color-green)] flex items-center justify-center transition-[clip-path] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "[clip-path:circle(150%_at_calc(100%-40px)_40px)]"
            : "[clip-path:circle(0%_at_calc(100%-40px)_40px)] pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-3">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-2xl md:text-3xl font-bold text-[var(--color-bg)] hover:text-[var(--color-terra)] transition-colors"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.4s ease ${0.1 + i * 0.05}s, transform 0.4s ease ${0.1 + i * 0.05}s`,
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* LINE CTA in mobile menu */}
          <a
            href={SNS_LINKS.line}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-8 py-3 bg-[var(--color-line)] text-white text-sm font-bold rounded-[2px] hover:opacity-90 transition-opacity"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: `opacity 0.4s ease ${0.1 + NAV_LINKS.length * 0.05}s`,
            }}
          >
            LINE で予約する
          </a>
        </nav>
      </div>
    </>
  )
}
