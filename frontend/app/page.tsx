import Image from "next/image";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-rubik font-semibold text-6xl text-neutral-900 text-center">
        <h1>Amy Nguyen</h1>
      </header>

      <section className="md:grid md:grid-cols-2 flex flex-col gap-10"></section>
    </section>
  )
}

export default HomePage;
