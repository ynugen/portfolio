"use client";
import styles from "@/app/styles/ReHarvest.module.css";
import config from "../../../../next.config.js";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ZoomableImage from "../../components/ZoomableImage";
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
      <div className={`${styles.titleContainer} text-center`}>
        <span className={`${styles.title}`}>
          <h2>ReHarvest</h2>
        </span>
      </div>

      {/* Body */}
      <div className={`${styles.bodyContainer}`}>
        {/* Project Overview */}
        <div className={`${styles.paraContainer}`}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.forestGreen}`}
          >
            Project Overview
          </div>
          <div className={`${styles.bodyb} ${styles.forestGreen}`}>Team</div>
          <div className={`${styles.body} grey`}>
            I collaborated in a cross-functional hackathon team of five with two
            front-end developers, two back-end developers, and myself as the
            designer. I led the creative direction, defining the brand identity
            and designing the user interface to ensure a visually engaging and
            intuitive web experience.
          </div>

          <div className={`${styles.bodyb} ${styles.forestGreen}`}>Role</div>
          <div className={`${styles.body} grey`}>
            As the designer on the team, I led the end-to-end design process,
            from initial ideation and user flows to creating low- and
            high-fidelity prototypes. I developed a cohesive brand identity and
            designed reusable UI components to ensure consistency and usability
            across the platform.
          </div>

          <div className={`${styles.bodyb} ${styles.forestGreen}`}>Tools</div>
          <div className={`${styles.body} grey`}>
            <ul>
              <li>Figma</li>
              <li>Canva</li>
              <li>Github</li>
              <li>Notion</li>
            </ul>
          </div>
        </div>

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
                      src={`${basePath}/images/ReHarvestJess.png`}
                      alt="Jess Nguyen"
                      width={352}
                      height={376.5}
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
              <div className={styles.paraContainer1}>
                {" "}
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <Target size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Goals</div>
                </div>
                <div className={`${styles.body} grey`}>
                  <ul className={`${styles.listContainer1}`}>
                    <li>
                      Find fresh produce that is affordable and within her
                      budget
                    </li>
                    <li>
                      Support local Australian farmers and sustainable food
                      practices
                    </li>
                  </ul>
                </div>
              </div>

              {/* Behavioural */}
              <div className={styles.paraContainer1}>
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <ShoppingCartSimple size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Behavioural</div>
                </div>
                <div className={`${styles.body} grey`}>
                  <ul className={`${styles.listContainer1}`}>
                    <li>Shops for herself and her housemates</li>
                    <li>
                      Uses apps to compare grocery prices and track spending
                    </li>
                    <li>Interested in food rescue and low-waste living</li>
                    <li>
                      Prefers convenience but is happy to pick up produce
                      locally if it saves money
                    </li>
                  </ul>
                </div>
              </div>

              {/* Pain Points */}
              <div className={styles.paraContainer1}>
                {" "}
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <WarningCircle size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Pain Points</div>
                </div>
                <div className={`${styles.body} grey`}>
                  <ul className={`${styles.listContainer1}`}>
                    <li>
                      Supermarket produce is often expensive and lacks
                      transparency as to which farms it supports!
                    </li>
                    <li>
                      Doesn&#39;t know what&#39;s in season or where to buy
                      local produce affordably
                    </li>
                    <li>
                      Wants to shop more ethically, but it&#39;s often
                      inconvenient
                    </li>
                  </ul>
                </div>
              </div>

              {/* Needs */}
              <div className={styles.paraContainer1}>
                {" "}
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <CheckCircle size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Needs</div>
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
                      src={`${basePath}/images/ReHarvestPaul.png`}
                      alt="Jess Nguyen"
                      width={352}
                      height={376.5}
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
              <div className={styles.paraContainer1}>
                {" "}
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <Target size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Goals</div>
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
              </div>

              {/* Behavioural */}
              <div className={styles.paraContainer1}>
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <ShoppingCartSimple size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Behavioural</div>
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
              </div>

              {/* Pain Points */}
              <div className={styles.paraContainer1}>
                {" "}
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <WarningCircle size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Pain Points</div>
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
              </div>

              {/* Needs */}
              <div className={styles.paraContainer1}>
                {" "}
                <div
                  className={`${styles.heading2} ${styles.forestGreen} ${styles.iconText}`}
                >
                  <CheckCircle size={24} color="#82a36b" weight="fill" />
                  <div className={`${styles.h2Height}`}>Needs</div>
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
        </div>

        {/* User Journeys */}
        <div className={`${styles.paraContainer}`}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.forestGreen}`}
          >
            User Journeys
          </div>

          <div className={`${styles.flowContainer}`}>
            <div
              className={`flex flex-col items-center ${styles.heading2} ${styles.forestGreen} gap-3`}
            >
              <div>Customer</div>
              <div>
                <ZoomableImage
                  src={`${basePath}/images/ReHarvestJessUJ.png`}
                  alt="Customer User Journey"
                  width={574}
                  height={1098}
                  className={styles.image1}
                />
              </div>
            </div>

            <div
              className={`flex flex-col items-center ${styles.heading2} ${styles.forestGreen} gap-3`}
            >
              <div>Wholesaler</div>
              <div>
                {" "}
                <ZoomableImage
                  src={`${basePath}/images/ReHarvestPaulUJ.png`}
                  alt="Wholesaler User Journey"
                  width={572}
                  height={1932}
                  className={styles.image1}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.paraContainer}`}>
            <div className={`${styles.heading} ${styles.forestGreen}`}>
              Ideation
            </div>

            <div className={`${styles.body}`}>
              To address the challenges surrounding food waste, limited access
              to ethical produce, and a lack of support for our local Aussie
              growers, our team explored a range directions. After narrowing
              down our ideas, we focused on two potential solutions that aligned
              closely with our goals and user needs:
            </div>

            <div className={`${styles.heading2} ${styles.forestGreen}`}>
              1. Seasonal Produce Tracker
            </div>

            <div className={`${styles.body}`}>
              A visual and educational tool designed to help users easily
              identify which produce is in season, encouraging sustainable and
              informed shopping decisions.
            </div>
            <div className={`${styles.body}`}>
              <ul className={`${styles.listContainer}`}>
                <li>
                  Reduces demand for imported goods by promoting seasonal eating
                  habits
                </li>
                <li>
                  Helps consumers save money by highlighting in-season produce,
                  which is typically fresher, more abundant, and more affordable
                  than out-of-season alternatives
                </li>
                <li>
                  Supports local farmers by aligning consumer demand with
                  harvest cycles
                </li>
                <li>
                  Minimises the environmental costs associated with
                  long-distance transport and refrigeration
                </li>
                <li>
                  Acts as a low-barrier educational entry point, building
                  long-term awareness of food systems
                </li>
                <li>
                  Can be integrated into other platforms to help users compare
                  produce availability and pricing, loosely tying into the idea
                  of a centralised price comparison app
                </li>
              </ul>
            </div>

            <div className={`${styles.heading2} ${styles.forestGreen}`}>
              2. Marketplace for Rescued Produce{" "}
              <span className={`${styles.bodyi} ${styles.goldenSquash}`}>
                (Chosen Solution)
              </span>
            </div>

            <div className={`${styles.body}`}>
              A platform where users can browse, reserve, and purchase
              discounted surplus or imperfect produce from nearby farmers and
              suppliers.
            </div>
            <div className={`${styles.body}`}>
              <ul className={`${styles.listContainer}`}>
                <li>
                  Tackles food waste at the{" "}
                  <span className={`${styles.bodybi}`}>
                    production and distribution level
                  </span>{" "}
                  by giving excess or cosmetically imperfect stock a second
                  chance
                </li>
                <li>
                  Provides an{" "}
                  <span className={`${styles.bodybi}`}>
                    alternative to supermarkets
                  </span>{" "}
                  during periods of shortage or boycott, helping users access
                  fresh, local produce while{" "}
                  <span className={`${styles.bodybi}`}>
                    supporting fair pricing
                  </span>{" "}
                  for growers
                </li>
                <li>
                  <span className={`${styles.bodybi}`}>Directly</span> supports
                  farmers affected by food waste by offering them a channel to
                  <span className={`${styles.bodybi}`}> recoup losses</span> on
                  unsold goods (e.g., labour, fuel, water)
                </li>
                <li>
                  Embeds the principles of an aesthetic standards bypass,{" "}
                  <span className={`${styles.bodybi}`}>
                    valuing nutritional quality and freshness
                  </span>{" "}
                  over appearance
                </li>
                <li>
                  Includes an{" "}
                  <span className={`${styles.bodybi}`}>co-impact tracker </span>
                  so users can visualise the{" "}
                  <span className={`${styles.bodybi}`}>
                    positive outcomes
                  </span>{" "}
                  of their purchases (e.g., kilograms of food saved, emissions
                  avoided)
                </li>
                <li>
                  Designed with{" "}
                  <span className={`${styles.bodybi}`}>
                    bulk-buying features
                  </span>{" "}
                  in mind, allowing for{" "}
                  <span className={`${styles.bodybi}`}>future scalability</span>{" "}
                  to support small businesses, restaurants, and community
                  kitchens
                </li>
                <li>
                  Builds <span className={`${styles.bodybi}`}>user trust </span>
                  through{" "}
                  <span className={`${styles.bodybi}`}>
                    transparent sourcing
                  </span>{" "}
                  showing where produce comes from, what farm it supports, and
                  how much the grower earns
                </li>
              </ul>
            </div>

            <div className={`${styles.body}`}>
              Ultimately, we decided to move forward with the{" "}
              <span className={`${styles.bodyb} ${styles.grassGreen}`}>
                Marketplace for Rescued Produce
              </span>
              . Compared with the Seasonal Food Tracker, it offered a stronger
              potential to create lasting, systemic change through a single,
              user-friendly platform. The solution not only addresses waste and
              affordability but also strengthens farmer-consumer relationships,
              improves supply chain transparency, and promotes more ethical,
              accessible food practices through a scalable, intuitive
              experience.
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className={`${styles.paraContainer}`}>
          <div className={`${styles.heading} ${styles.forestGreen}`}>
            Deliverables
          </div>

          <div className={`${styles.heading1} ${styles.forestGreen}`}>
            User Flows
          </div>

          <div className={`${styles.flowContainer}`}>
            <div
              className={`flex flex-col items-center ${styles.heading2} ${styles.forestGreen} gap-3`}
            >
              <div>Customer</div>
              <div>
                <ZoomableImage
                  src={`${basePath}/images/ReHarvestCustomerUserFlow.png`}
                  alt="Wholesaler User Journey"
                  width={3088}
                  height={7120}
                  className={styles.image1}
                  bgColor="#F4F1E6"
                />
              </div>
            </div>
            <div
              className={`flex flex-col items-center ${styles.heading2} ${styles.forestGreen} gap-3`}
            >
              <div>Wholesaler</div>
              <div>
                <ZoomableImage
                  src={`${basePath}/images/ReHarvestWholesalerUserFlow.png`}
                  alt="Wholesaler User Journey"
                  width={4648}
                  height={6496}
                  className={styles.image1}
                  bgColor="#F4F1E6"
                />
              </div>
            </div>
          </div>

          <div className={`${styles.heading1} ${styles.forestGreen}`}>
            Low-Fidelity Prototypes
          </div>

          <div className="flex justify-center">
            <ZoomableImage
              src={`${basePath}/images/ReHarvestLoFiPrototypes.png`}
              alt="Wholesaler User Journey"
              width={1147}
              height={510}
              className={styles.image1}
              bgColor="#F4F1E6"
            />
          </div>

          <div className={`${styles.heading1} ${styles.forestGreen}`}>
            High-Fidelity Prototypes
          </div>

          <div className={`flex`}>
            <iframe
              style={{
                width: "100%",
                height: "500px",
                border: "none",
              }}
              width="800"
              height="450"
              src="https://embed.figma.com/proto/xLa6Jm5eZW2VDCD4VGln0M/ReHarvest-CodeBrew-2025?page-id=918%3A2365&node-id=918-2868&viewport=697%2C366%2C0.06&scaling=scale-down&content-scaling=fixed&starting-point-node-id=918%3A2868&show-proto-sidebar=1&embed-host=share"
              allowFullScreen
              loading="lazy"
              title="High-Fidelity Prototypes"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
