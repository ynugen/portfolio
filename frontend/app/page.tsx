import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "@/app/components/aboutMe/aboutMe";

export default function Home() {
  return (
    <main className={styles.section}>
      <div>
        <AboutMe>
          A little bit about me is...
        </AboutMe>
      </div>
    </main>
  
  );
}
