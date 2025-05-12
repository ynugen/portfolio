"use client";
import styles from "@/app/styles/ReHarvest.module.css";
import config from "../../../../next.config.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MapPin,
  User,
  Briefcase,
  DeviceMobile,
  Target,
  ShoppingCartSimple,
  WarningCircle,
  CheckCircle,
} from "@phosphor-icons/react";

export default function ReHarvest() {
  const basePath = config.basePath;
  return (
    <div className="page">
      <div className={styles.container}></div>
      {/* Title */}
      <div className={`${styles.titleContainer}`}>
        <span className={`${styles.title}`}>
          <h2>ReHarvest</h2>
        </span>{" "}
        <span className={`${styles.subtitle} ${styles.forestGreen}`}>
          Rethinking Food Waste for Good
        </span>
      </div>

      {/* Body */}
      <div className={`${styles.bodyContainer}`}>
        {/* Problem Statement */}
        <div className={styles.paraContainer}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.forestGreen}`}
          >
            Problem Statement
          </div>

          <div className={`${styles.body} grey`}>
            Farmers across Australia are forced to discard{" "}
            <span className={styles.bodyb}>perfectly good produce</span> that
            doesn’t meet the{" "}
            <span className={styles.bodyb}>strict cosmetic standards</span> of
            major supermarkets, leading to{" "}
            <span className={styles.bodyb}>wasted resources</span> like labour,
            water, and fuel, and stripping farmers of potential income.
            Meanwhile, consumers face{" "}
            <span className={styles.bodyb}>inflated prices</span> and rising
            food insecurity, missing out on nutritious, affordable options that
            never reach shelves.
          </div>
        </div>

        {/* Competitor Analysis */}

        <div className={styles.paraContainer}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.forestGreen}`}
          >
            Competitor Analysis
          </div>

          <div className={`${styles.body} grey`}>
            Most food waste solutions focus on{" "}
            <span className={styles.bodyb}>end-of-line fixes</span> like
            upcycling or surplus redistribution, often missing the{" "}
            <span className={styles.bodyb}>root causes</span>. ReHarvest takes a{" "}
            <span className={styles.bodyb}>holistic </span>
            approach, connecting{" "}
            <span className={styles.bodyb}>wholesalers to consumers</span> and
            rescuing <span className={styles.bodyb}>rejected produce</span> that
            would otherwise go to waste.
          </div>

          <div className={`${styles.body} grey`}>
            {" "}
            Here&#39;s how current solutions fall short:
          </div>

          <ul className={`p-3 ${styles.body} ${styles.listContainer} grey`}>
            <li>
              Surplus food apps (e.g.{" "}
              <Link
                href="https://toogoodtogo.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.bodyi} ${styles.forestGreen}`}
              >
                Too Good To Go
              </Link>
              ) <span className={styles.bodyb}>ignore upstream waste</span>.
            </li>
            <li>
              Ugly produce boxes (e.g.{" "}
              <Link
                href="https://www.farmerspick.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.bodyi} ${styles.forestGreen}`}
              >
                Farmer&#39;s Pick
              </Link>
              ) have <span className={styles.bodyb}>limited options</span> and
              <span className={styles.bodyb}> subscriptions</span>.
            </li>
            <li>
              <span className={styles.bodyb}>Limited customization</span> and no
              <span className={styles.bodyb}> large-scale ordering</span>.
            </li>
            <li>
              Supermarkets like{" "}
              <Link
                href="https://www.woolworths.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.bodyi} ${styles.forestGreen}`}
              >
                Woolworths
              </Link>{" "}
              and{" "}
              <Link
                href="https://www.coles.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.link} ${styles.bodyi} ${styles.forestGreen}`}
              >
                Coles
              </Link>{" "}
              focus on <span className={styles.bodyb}>appearance</span>,
              contributing to
              <span className={styles.bodyb}> waste</span>.
            </li>
            <li>
              Lack of <span className={styles.bodyb}>transparency</span> and
              <span className={styles.bodyb}> flexibility</span> in
              sustainability claims.
            </li>
          </ul>
        </div>

        {/* User Personas */}
        <div className={styles.paraContainer}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.forestGreen}`}
          >
            User Personas
          </div>

          <div className={`${styles.body} grey`}>
            <div className={styles.personaContainer}>
              <div className={styles.profileContainer}>
                <Image
                  src={`${basePath}/images/Jess.png`}
                  alt="Jess Nguyen"
                  width={704}
                  height={753}
                  className={styles.image}
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className={`${styles.heading1}`}>Jess Nguyen</div>
                <div className={`${styles.iconText}`}>
                  {" "}
                  <div className={`${styles.icon}`}>
                    <MapPin size={24} color="#82a36b" weight="fill" />
                  </div>{" "}
                  Melbourne, VIC
                </div>
                <div className={`${styles.iconText}`}>
                  <div className={`${styles.icon}`}>
                    <User size={24} color="#82a36b" weight="fill" />
                  </div>{" "}
                  Age: 25
                </div>
                <div className={`${styles.iconText}`}>
                  {" "}
                  <div className={`${styles.icon}`}>
                    <Briefcase size={24} color="#82a36b" weight="fill" />
                  </div>{" "}
                  Graduate Nurse
                </div>
                <div className={`${styles.iconText}`}>
                  <div className={`${styles.icon}`}>
                    <DeviceMobile size={24} color="#82a36b" weight="fill" />
                  </div>{" "}
                  Tech-savvy — frequently uses shopping and budgeting apps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
