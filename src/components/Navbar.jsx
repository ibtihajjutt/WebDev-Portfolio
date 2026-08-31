import React, { useEffect, useState } from "react";
import { navItems } from "../constants";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.2, 0.4, 0.6, 0.8],
        rootMargin: "-10% 0px -55% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, href) => {
    const targetId = href.replace("#", "");
    const section = document.getElementById(targetId);

    if (event) {
      event.preventDefault();
    }

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        window.history.pushState(null, "", href);
      }, 50);
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="w-full fixed z-50 top-0 left-0 bg-transparent">
      <div className="container mx-auto px-5 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="ml-2 text-xl font-bold text-white">MI</span>
        </div>

        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <div
                key={item.name}
                className="relative after:absolute after:bg-white after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
              >
                <a
                  className={`gradient-title text-lg transition-colors ${isActive ? "text-white" : "text-white/80 hover:text-gray-200"}`}
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.href)}
                >
                  {item.name}
                </a>
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-50"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mx-4 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`py-3 text-lg transition-colors ${activeSection === item.href.replace("#", "") ? "text-blue-50" : "text-white hover:text-gray-300"}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;