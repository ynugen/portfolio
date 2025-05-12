"use client";
import styles from "@/app/styles/ProjectCard.module.css";
import config from "../../../next.config.js";
import Image from "next/image";
import Link from "next/link";

const basePath = config.basePath;

interface ProjectCardProps {
  projectLink: string;
  projectTitle: string;
  projectDate: string;
  projectType: string[];
  src: string;
  alt: string;
}

export default function ProjectCard({
  projectLink,
  projectTitle,
  projectDate,
  projectType,
  src,
  alt,
}: ProjectCardProps) {
  return (
    <div>
      <Link href={projectLink}>
        <div className={styles.mainContainer}>
          <div className={`${styles.bodyContainer}`}>
            {/* Image */}
            <div className={styles.imageContainer}>
              <Image
                src={`${basePath}${src}`}
                alt={`${alt}`}
                layout="responsive"
                width={8} // Aspect ratio width
                height={5} // Aspect ratio height
              />
            </div>

            {/* Title */}
            <div className={`${styles.descContainer} grey`}>
              <div
                className={`${styles.titleContainer} ${styles.projectTitle}`}
              >
                {projectTitle}
              </div>

              <div className={`${styles.projectDesc}`}>
                {projectDate} • {projectType.join(" • ")}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
