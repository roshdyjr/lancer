"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SectionConfig } from "../data/siteContent";

type NavOrbitProps = {
  items: SectionConfig[];
  activeSection: string;
  onSelect: (href: string) => void;
};

export function NavOrbit({ items, activeSection, onSelect }: NavOrbitProps) {
  const [isPinned, setIsPinned] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const hideTimer = useRef<number | null>(null);
  const lastScroll = useRef(0);
  const menuOpenRef = useRef(menuOpen);
  const isVisibleRef = useRef(isVisible);

  const isDesktop = viewportWidth >= 1024;
  const autoHideDelay = isDesktop ? 2600 : 1800;

  const clearHideTimer = () => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const revealNav = useCallback(() => {
    setIsVisible(true);
    clearHideTimer();
    if (menuOpenRef.current) {
      return;
    }
    hideTimer.current = window.setTimeout(() => {
      if (!menuOpenRef.current) {
        setIsVisible(false);
      }
    }, autoHideDelay);
  }, [autoHideDelay]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    isVisibleRef.current = isVisible;
  }, [isVisible]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      revealNav();
      if (isDesktop) {
        setMenuOpen(false);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isDesktop, revealNav]);

  useEffect(() => {
    if (isDesktop) {
      return;
    }

    if (menuOpen) {
      const frame = window.requestAnimationFrame(() => {
        setIsVisible(true);
        clearHideTimer();
      });
      return () => window.cancelAnimationFrame(frame);
    }

    const frame = window.requestAnimationFrame(() => {
      revealNav();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [isDesktop, menuOpen, revealNav]);

  useEffect(() => {
    if (isDesktop) {
      document.body.style.removeProperty("overflow");
      return () => document.body.style.removeProperty("overflow");
    }

    if (menuOpen) {
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previous;
      };
    }

    document.body.style.removeProperty("overflow");
    return () => document.body.style.removeProperty("overflow");
  }, [isDesktop, menuOpen]);

  useEffect(() => () => clearHideTimer(), []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsPinned(y > 80);
      setHasScrolled(y > 4);

      if (isDesktop) {
        const isScrollingUp = y < lastScroll.current;
        if (!isVisibleRef.current || isScrollingUp || y < 80) {
          revealNav();
        }
      } else if (!menuOpenRef.current) {
        const isScrollingUp = y < lastScroll.current;
        if (!isVisibleRef.current || isScrollingUp || y < 60) {
          revealNav();
        }
      }

      lastScroll.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop, revealNav]);

  const handleSelect = (href: string) => {
    onSelect(href);
    if (!isDesktop) {
      setMenuOpen(false);
    }
  };

  const navHidden = !menuOpen && !isVisible;

  return (
    <nav
      className={`sticky top-4 z-40 transition-all duration-500 ${isPinned ? "scale-100" : "scale-95"} ${
        navHidden ? "pointer-events-none -translate-y-4 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className={`glass-panel hidden items-center gap-3 rounded-3xl border border-white/10 bg-white/4 px-4 py-3 shadow-[0_10px_40px_rgba(2,6,23,0.35)] backdrop-blur-2xl lg:flex ${
          hasScrolled ? "border-white/20" : "border-white/10"
        }`}
      >
        {items.map((item) => (
          <button
            key={item.href}
            type="button"
            onClick={() => handleSelect(item.href)}
            aria-label={`Navigate to ${item.label}`}
            className={`nav-pill bg-linear-to-r ${item.tone} ${
              activeSection === item.href ? "ring-2 ring-white/80" : "ring-1 ring-white/10 opacity-80"
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">{item.tag}</span>
            <span className="text-base font-medium">{item.label}</span>
          </button>
        ))}
      </div>

      <div className="lg:hidden">
        <div className="glass-panel flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-[0_10px_30px_rgba(2,6,23,0.45)]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/60">Navigator</p>
            <p className="text-base font-semibold text-white">{items.find((i) => i.href === activeSection)?.label ?? "Menu"}</p>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? "Close" : "Menu"}
            <span
              className={`relative h-4 w-4 transition-transform ${menuOpen ? "rotate-45" : ""}`}
              aria-hidden
            >
              <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white" />
              <span className={`absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white transition ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`grid transition-all duration-500 ease-out ${
            menuOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-4 shadow-[0_20px_50px_rgba(2,6,23,0.65)] backdrop-blur-2xl">
            <div className="max-h-[70vh] space-y-3 overflow-y-auto pr-2">
              {items.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleSelect(item.href)}
                  className={`flex w-full items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-left text-white transition ${
                    activeSection === item.href ? "bg-white/15" : "bg-white/5"
                  }`}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/70">{item.tag}</p>
                    <p className="text-lg font-semibold">{item.label}</p>
                  </div>
                  <span aria-hidden>↗</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
