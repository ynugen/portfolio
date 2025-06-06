"use client";
import { useEffect, useState } from "react";
import generateSlug from "../utils/slugify";

interface TOCProps {
  headings: { id: string; title: string }[];
  containerId: string;
  className?: string;
  highlightStyle?: string;
}

const TableOfContents = ({
  headings,
  containerId,
  className = "",
  highlightStyle = "text-marigold",
}: TOCProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -90% 0px", root: container }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (!container) return;

      const scrollTop = container.scrollTop;
      const scrollBottom = scrollTop + container.clientHeight;
      const scrollHeight = container.scrollHeight;

      // Near top: highlight first heading
      if (scrollTop <= 10 && headings.length > 0) {
        setActiveId(headings[0].id);
        return;
      }

      // Near bottom: highlight last heading
      if (scrollBottom >= scrollHeight - 10 && headings.length > 0) {
        setActiveId(headings[headings.length - 1].id);
        return;
      }
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
      container.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <nav className={`flex flex-col gap-2 ${className}`}>
      {headings.map((heading) => {
        const isActive = activeId === heading.id;
        const slug = generateSlug(heading.title);

        const baseClass =
          "transition-transform duration-200 hover:-translate-x-2 text-sm md:text-base body";
        const activeClass = isActive
          ? `-translate-x-2 body-i ${highlightStyle}`
          : "";

        return (
          <a
            key={slug}
            href={`#${slug}`}
            className={`${baseClass} ${activeClass}`}
          >
            {heading.title}
          </a>
        );
      })}
    </nav>
  );
};

export default TableOfContents;
