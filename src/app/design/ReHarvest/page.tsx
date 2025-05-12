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
          <div className={`${styles.people}`}>
            {" "}
            <div className={`${styles.person}`}>
              {/* Jess Nguyen */}
              <div className={`${styles.body} grey`}>
                <div className={`${styles.heading1} ${styles.forestGreen}`}>
                  Jess Nguyen
                </div>
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

              {/* Goals */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Goals
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>
                    Find fresh produce that is affordable and within her budget
                  </li>
                  <li>
                    Support local Australian farmers and sustainable food
                    practices
                  </li>
                </ul>
              </div>

              {/* Behavioural */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Behavioural
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>Shops for herself and her housemates</li>
                  <li>
                    Uses apps to compare grocery prices and track spending
                  </li>
                  <li>Interested in food rescue and low-waste living</li>
                  <li>
                    Prefers convenience but is happy to pick up produce locally
                    if it saves money
                  </li>
                </ul>
              </div>

              {/* Pain Points */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Pain Points{" "}
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>
                    Supermarket produce is often expensive and lacks
                    transparency as to which farms it supports!
                  </li>
                  <li>
                    Doesn&#39;t know what&#39;s in season or where to buy local
                    produce affordably
                  </li>
                  <li>
                    Wants to shop more ethically, but it&#39;s often
                    inconvenient
                  </li>
                </ul>
              </div>

              {/* Needs */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Needs
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>
                    A trustworthy, easy-to-use platform to browse and purchase
                    discounted “rescued” produce
                  </li>
                  <li>
                    Trust that produce is safe and good quality - even if it
                    looks imperfect
                  </li>
                  <li>
                    A sense that her purchase is making a positive social and
                    environmental impact
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.person}`}>
              {/* Paul De Luca */}
              <div className={`${styles.body} grey`}>
                <div className={`${styles.heading1} ${styles.forestGreen}`}>
                  Paul De Luca
                </div>
                <div className={styles.personaContainer}>
                  <div className={styles.profileContainer}>
                    <Image
                      src={`${basePath}/images/Paul.png`}
                      alt="Jess Nguyen"
                      width={704}
                      height={753}
                      className={styles.image}
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className={`${styles.iconText}`}>
                      {" "}
                      <div className={`${styles.icon}`}>
                        <MapPin size={24} color="#82a36b" weight="fill" />
                      </div>{" "}
                      Mildura, VIC
                    </div>
                    <div className={`${styles.iconText}`}>
                      <div className={`${styles.icon}`}>
                        <User size={24} color="#82a36b" weight="fill" />
                      </div>{" "}
                      Age: 48
                    </div>
                    <div className={`${styles.iconText}`}>
                      {" "}
                      <div className={`${styles.icon}`}>
                        <Briefcase size={24} color="#82a36b" weight="fill" />
                      </div>{" "}
                      Fruit & veg wholesaler (mid-sized business)
                    </div>
                    <div className={`${styles.iconText}`}>
                      <div className={`${styles.icon}`}>
                        <DeviceMobile size={24} color="#82a36b" weight="fill" />
                      </div>{" "}
                      Moderate – uses digital tools, prefers simple, intuitive
                      interfaces
                    </div>
                  </div>
                </div>
              </div>

              {/* Goals */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Goals
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>
                    Reduce food waste and recover income from surplus/rejected
                    produce
                  </li>
                  <li>Reach buyers beyond traditional distributors</li>
                  <li>Build stronger local-buyer relationships</li>
                </ul>
              </div>

              {/* Behavioural */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Behavioural
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>
                    Regularly supplies large supermarkets, but deals with high
                    cosmetic rejection rates
                  </li>
                  <li>
                    Usually bins or compost tonnes of good produce each season
                  </li>
                </ul>
              </div>

              {/* Pain Points */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Pain Points{" "}
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>
                    Middlemen take significant margins, leaving low profit per
                    kilo of sold produce
                  </li>
                  <li>
                    Rejected produce creates disposal costs and environmental
                    guilt
                  </li>
                  <li>No direct-to-buyer channel for “imperfect” produce</li>
                </ul>
              </div>

              {/* Needs */}
              <div className={`${styles.heading2} ${styles.grassGreen}`}>
                Needs
              </div>
              <div className={`${styles.body} grey`}>
                <ul className={`${styles.listContainer1}`}>
                  <li>
                    A platform to quickly list available stock with basic
                    details and pricing
                  </li>
                  <li>
                    Visibility to nearby buyers (cafés, community orgs,
                    households)
                  </li>
                  <li>
                    Freedom to coordinate logistics independently (delivery,
                    pickup, etc.)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* User Journeys */}
        <div className={`${styles.paraContainer}`}>
          <div></div>
        </div>
      </div>
    </div>
  );
}
