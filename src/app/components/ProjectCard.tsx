import styles from "@/app/styles/ProjectCard.module.css";
import config from "../../../next.config.js";
import Image from "next/image";

const basePath = config.basePath;

interface ProjectCardProps {
  src: string;
  alt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ src, alt }) => {
  const squareSize = Math.min(window.innerHeight / 5, window.innerWidth / 8);
  return (
    <div className={styles.mainContainer}>
      <div>
        <Image
          src={`${basePath}${src}`}
          alt={`${alt}`}
          width={squareSize * 2}
          height={squareSize}
        />
      </div>
    </div>
  );
};
