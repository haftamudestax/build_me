import { useEffect, useState, useCallback } from "react";
import { Logo } from "./Logo";

type NavLink = {
  id: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      event.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    },
    [],
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-linear-to-r from-slate-900 via-teal-600 to-cyan-400 backdrop-blur-md shadow-sm shadow-black/10"
          : "bg-linear-to-r from-slate-900/70 via-teal-600/70 to-cyan-400/70 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <Logo onClick={(e) => handleLinkClick(e, "home")} />
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-teal-500 transition-transform duration-300 ${
                    activeSection === link.id ? "scale-x-100" : "scale-x-0"
                  }`}
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-md md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
        >
          <span
            className={`block h-0.5 w-5 bg-slate-900 transition-transform duration-200 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-900 transition-opacity duration-200 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-900 transition-transform duration-200 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden bg-white/95 backdrop-blur-md transition-[max-height] duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-teal-50 text-teal-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
