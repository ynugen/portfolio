"use client";
import { useEffect, useState } from "react";
import styles from "@/app/styles/ProjectCard.module.css";
import config from "../../../next.config.js";
import Image from "next/image";

const basePath = config.basePath;

interface ProjectCardProps {
  projectTitle: string;
  projectDate: string;
  projectType: string;
  src: string;
  alt: string;
}

export default function ProjectCard({
  projectTitle,
  projectDate,
  projectType,
  src,
  alt,
}: ProjectCardProps) {
  // const [squareSize, setSquareSize] = useState(100); // Default fallback

  // useEffect(() => {
  //   const newSize = Math.min(window.innerHeight / 5, window.innerWidth / 8);
  //   setSquareSize(newSize);
  // }, []);

  return (
    <div className={styles.mainContainer}>
      {/* Title */}
      <div className={`${styles.titleContainer} ${styles.projectTitle}`}>
        <div>{projectTitle}</div>
        <div>{projectDate}</div>
      </div>
      {/* Image */}
      <div className={styles.imageContainer}>
        <Image
          src={`${basePath}${src}`}
          alt={`${alt}`}
          layout="responsive"
          width={16} // Aspect ratio width
          height={10} // Aspect ratio height
        />
      </div>
      <div>{projectType}</div>
    </div>
  );
}
