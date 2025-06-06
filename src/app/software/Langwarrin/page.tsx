"use client";
import { useScrollEaseIn } from "../../utils/useScrollEaseIn";
import styles from "../../styles/Software.module.css";
import generateSlug from "../../utils/slugify";
import TableOfContents from "../../components/TableOfContents";
import { useState, useEffect } from "react";
import config from "../../../../next.config.js";
import Image from "next/image";

export default function Langwarrin() {
  const basePath = config.basePath;
  const easeRef = useScrollEaseIn();

  const [headings, setHeadings] = useState<{ id: string; title: string }[]>([]);
  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("#content h3")
    );

    const extracted = headingElements.map((el) => {
      const title = el.textContent?.trim() || "";
      const id = generateSlug(title);
      el.id = id;
      return { id, title };
    });

    setHeadings(extracted);
  }, []);

  return (
    <div id="content" className="page">
      {/* Table of Contents */}
      <div className="toc">
        <TableOfContents
          headings={headings}
          containerId="content"
          className={`olive`}
          highlightStyle={`matcha`}
        />
      </div>

      {/* Title */}
      <div
        ref={easeRef}
        className={`${styles.titleContainer} grey text-center scroll-ease-in`}
      >
        <span className={`${styles.title}`}>
          <h2>Langwarrin Website Revamp</h2>
        </span>
      </div>

      {/* Body */}
      <div className={`${styles.bodyContainer}`}>
        {/* Cover image */}
        <div className="flex">
          <Image
            src={`${basePath}/images/LangwarrinThumbnail.png`}
            alt="Langwarrin Community Centre Website"
            width={800}
            height={450}
            className={``}
          />
        </div>
        <div ref={easeRef} className={`${styles.paraContainer} scroll-ease-in`}>
          <div className={`${styles.heading} ${styles.headingContainer} olive`}>
            <h3 id={generateSlug("Project Overview")}>Project Overview</h3>
          </div>

          <div className={`${styles.body} grey`}>
            I collaborated in a team of five, comprising two frontend and three
            backend developers, to revamp a website for a real-world client, the
            Langwarrin Community Centre. Our goal was to significantly improve
            usability, customisation options, and the overall experience for
            both users and administrators in the local community. We worked
            closely with Leona, the Centre's liaison staff member, to implement
            the new features she requested and to ensure we not only addressed
            the limitations of their outdated site but also optimised the
            redesign to better support their current workflow.
          </div>

          <div className={`${styles.heading3} olive`}>Role</div>

          <div className={`${styles.body} grey`}></div>
        </div>
      </div>
    </div>
  );
}
