"use client";

import { useState, useEffect } from "react";

interface ActiveTOCProps {
  sections: string[];
}

export function ActiveTOC({ sections }: ActiveTOCProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    sections.forEach((section) => {
      const id = section.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <aside className="hidden md:block w-64 flex-shrink-0 sticky top-24 self-start max-h-[80vh] overflow-y-auto pr-2">
      <nav className="bg-[#23205a]/70 rounded-xl p-6 border border-[#CFABFA]/10">
        <h2 className="text-lg font-bold mb-4 text-[#D4E333]">
          Table of Contents
        </h2>
        <ul className="space-y-2 text-sm">
          {sections.map((item, i) => {
            const id = item.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "");
            const isActive = activeSection === id;
            return (
              <li key={item}>
                <a
                  href={`#${id}`}
                  className={`transition-colors ${
                    isActive
                      ? "text-[#D4E333] font-semibold"
                      : "text-white/70 hover:text-[#D4E333]"
                  }`}
                >
                  {i + 1}. {item}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
