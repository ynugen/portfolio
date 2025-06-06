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
          className={`${styles.rosebud}`}
          normalStyle={`${styles.bodySmall}`}
          highlightStyle={`${styles.bodySmalli} ${styles.berry}`}
        />
      </div>

      {/* Title */}
      <div
        ref={easeRef}
        className={`${styles.titleContainer} ${styles.mint} text-center scroll-ease-in`}
      >
        <span className={`${styles.title}`}>
          <h2>Langwarrin Website Revamp</h2>
        </span>
      </div>

      {/* Body */}
      <div className={`${styles.bodyContainer}`}>
        {/* Cover image */}
        <div
          className={`${styles.paraContainer} scroll-ease-in flex items-center`}
          ref={easeRef}
        >
          <Image
            src={`${basePath}/images/LangwarrinThumbnail.png`}
            alt="Langwarrin Community Centre Website"
            width={800}
            height={450}
            className={`flex justify-center`}
          />
        </div>
        <div ref={easeRef} className={`${styles.paraContainer} scroll-ease-in`}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.mint}`}
          >
            <h3 id={generateSlug("Project Overview")}>Project Overview</h3>
          </div>

          <div className={`${styles.body} grey`}>
            I collaborated in a team of five, comprising two frontend and three
            backend developers, to revamp a website for a real-world client, the
            Langwarrin Community Centre. Working in an agile environment, our
            goal was to significantly improve usability, customisation options,
            and the overall experience for both users and administrators in the
            local community. We worked closely with Leona, the Centre's liaison
            staff member, to implement the new features she requested and to
            ensure we not only addressed the limitations of their outdated site
            but also optimised the redesign to better support their current
            workflow.
          </div>

          <div className={`${styles.heading3} ${styles.mint}`}>Role</div>

          <div className={`${styles.body} grey`}>
            I took the lead on frontend development and design, ensuring a
            cohesive and user-friendly interface that aligned with the client's
            needs. I also supported backend development as required,
            collaborating closely with the rest of the team to ensure smooth
            integration across the stack.
          </div>

          <div className={`${styles.heading3} ${styles.mint}`}>Tools</div>

          <div className={`${styles.body} grey`}>
            <ul>
              <li>Next.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Django</li>
              <li>Wagtail</li>
              <li>Vercel</li>
              <li>Heroku</li>
              <li>Github</li>
              <li>Figma</li>
              <li>Jira</li>
              <li>Confluence</li>
              <li>Canva</li>
            </ul>
          </div>
        </div>

        <div ref={easeRef} className={`${styles.paraContainer} scroll-ease-in`}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.mint}`}
          >
            <h3 id={generateSlug("Project Overview")}>Product Requirements</h3>
          </div>

          <div ref={easeRef} className={`${styles.body} grey scroll-ease-in`}>
            We consulted with our client, Leona, to establish her key concerns
            and desired changes for the current website. From these discussions,
            we identified the following:
          </div>

          <div
            ref={easeRef}
            className={`${styles.heading2} ${styles.berry} scroll-ease-in`}
          >
            Functional Requirements:
          </div>

          <div ref={easeRef} className={`scroll-ease-in`}>
            <ul className={`p-3 ${styles.listContainer1} ${styles.body} grey`}>
              <li>Secure account system for users and administrators</li>
              <li>Online class enrollment and room bookings</li>
              <li>
                Content and event management features (e.g., email verification,
                admin permissions for payments and invoices)
              </li>
            </ul>
          </div>

          <div
            ref={easeRef}
            className={`${styles.heading2} ${styles.berry} scroll-ease-in`}
          >
            Non-Functional Requirements:
          </div>

          <div ref={easeRef} className={`scroll-ease-in`}>
            <ul className={`p-3 ${styles.listContainer1} ${styles.body} grey`}>
              <li>Maintainability and ease of use for non-technical staff</li>
              <li>Scalability to support future growth</li>
              <li>Modern, engaging interface with clear navigation</li>
            </ul>
          </div>
          <div ref={easeRef} className={`${styles.body} grey scroll-ease-in`}>
            These requirements were prioritised using the MoSCoW method,
            balancing immediate needs with long-term adaptability.
          </div>
        </div>

        <div ref={easeRef} className={`${styles.paraContainer} scroll-ease-in`}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.mint}`}
          >
            <h3 id={generateSlug("User Stories")}>User Stories</h3>
          </div>

          <div ref={easeRef} className={`${styles.body} grey scroll-ease-in`}>
            Here are the stories we chose to focus on which to target needs of
            both <span className={`${styles.bodyb}`}> administrators</span> and{" "}
            <span className={`${styles.bodyb}`}>community users</span>.
          </div>

          <div
            ref={easeRef}
            className={`${styles.heading2} ${styles.berry} scroll-ease-in`}
          >
            Administrative User Stories:
          </div>

          <div ref={easeRef} className={`scroll-ease-in`}>
            <ul className={`p-3 ${styles.listContainer1} ${styles.body} grey`}>
              <li>Manage website content with minimal technical skill</li>
              <li>Create, publish, and remove pages</li>
              <li>
                Add events via templates which auto-updates on a calendar and
                carousel
              </li>
              <li>Advertise room hire and manage interest</li>
            </ul>
          </div>

          <div
            ref={easeRef}
            className={`${styles.heading2} ${styles.berry} scroll-ease-in`}
          >
            Community User Stories:
          </div>
          <div ref={easeRef} className={`scroll-ease-in`}>
            <ul className={`p-3 ${styles.listContainer1} ${styles.body} grey`}>
              <li>Navigate from homepage to key info and events</li>
              <li>Search site for relevant content</li>
              <li>See full program details and contact info</li>
              <li>Browse and enquire about room hire through online forms</li>
            </ul>
          </div>
        </div>

        <div ref={easeRef} className={`${styles.paraContainer} scroll-ease-in`}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.mint}`}
          >
            <h3 id={generateSlug("User Stories")}>Diagrams</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
