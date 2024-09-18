import Image from "next/image";
import styles from "./page.module.css";
import AboutMe from "@/app/components/aboutMe/aboutMe";

export default function Home() {
  return (
    <main>
      <div className={styles.section}>
        
        <div>
          <div className="grid grid-cols-4 items-center gap-2.5 justify-center">
            
            <div className="flex-col content-center flex p-10 items center gap-2.5 col-span-1">
              <Image src='/lovely.png' alt='Purple haired girl' width={260} height={260}/>
              
              <div className="justify-center">
                A little bit about me is...
              </div>
            </div>
            
            <div className="col-span-3">
              Yessss this is more about me
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
