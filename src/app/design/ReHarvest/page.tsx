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
  Quotes,
  ArrowDown,
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
        <div className={`${styles.paraContainer}`}>
          {" "}
          <div className={`flex`}>
            <iframe
              style={{
                width: "100%",
                height: "500px",
                border: "none",
              }}
              width="800"
              height="450"
              src="https://embed.figma.com/design/xLa6Jm5eZW2VDCD4VGln0M/ReHarvest-CodeBrew-2025?node-id=918-2365&embed-host=share"
              allowFullScreen
              loading="lazy"
              title="High-Fidelity Prototypes"
            />
          </div>
        </div>

        {/* Project Overview */}
        <div className={`${styles.paraContainer}`}>
          <div
            className={`${styles.heading} ${styles.headingContainer} ${styles.forestGreen}`}
          >
            Project Overview
          </div>
          <div className={`${styles.bodyb} ${styles.forestGreen}`}>Team</div>
          <div className={`${styles.body} ${styles.text}`}>
            I collaborated in a cross-functional hackathon team of five with two
            front-end developers, two back-end developers, and myself as the
            designer. I led the creative direction, defining the brand identity
            and designing the user interface to ensure a visually engaging and
            intuitive web experience.
          </div>

          <div className={`${styles.bodyb} ${styles.forestGreen}`}>Role</div>
          <div className={`${styles.body} ${styles.text}`}>
            As the designer on the team, I led the end-to-end design process,
            from initial ideation and user flows to creating low- and
            high-fidelity prototypes. I developed a cohesive brand identity and
            designed reusable UI components to ensure consistency and usability
            across the platform.
          </div>

          <div className={`${styles.bodyb} ${styles.forestGreen}`}>Tools</div>
          <div className={`${styles.body} ${styles.text}`}>
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

          <div className={`${styles.body} ${styles.text}`}>
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

          <div className={`${styles.body} ${styles.text}`}>
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

          <div className={`${styles.body} ${styles.text}`}>
            {" "}
            Here&#39;s how current solutions fall short:
          </div>

          <ul
            className={`p-3 ${styles.body} ${styles.listContainer} ${styles.text}`}
          >
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
              <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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
              <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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
                <div className={`${styles.body} ${styles.text}`}>
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

          <div className={styles.paraContainer}>
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
          </div>

          <div className={`${styles.paraContainer}`}>
            <div className={`${styles.heading} ${styles.forestGreen}`}>
              Ideation
            </div>

            <div className={`${styles.body}`}>
              To address the challenges surrounding
              <span className={`${styles.bodybi}`}> food waste</span>, limited
              access to
              <span className={`${styles.bodybi}`}> ethical produce</span>, and
              a<span className={`${styles.bodybi}`}> lack of support</span> for
              our local Aussie growers, our team explored a range directions.
              After narrowing down our ideas, we focused on two potential
              solutions that aligned closely with our goals and user needs:
            </div>

            <div className={styles.paraContainer}>
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
                    <span className={`${styles.bodybi}`}>Reduces demand</span>{" "}
                    for imported goods by promoting{" "}
                    <span className={`${styles.bodybi}`}>
                      seasonal eating habits
                    </span>
                  </li>
                  <li>
                    <span className={`${styles.bodybi}`}>
                      Helps consumers save money
                    </span>{" "}
                    by highlighting{" "}
                    <span className={`${styles.bodybi}`}>
                      in-season produce
                    </span>
                    , which is typically{" "}
                    <span className={`${styles.bodybi}`}>fresher</span>, more
                    abundant, and more affordable than out-of-season
                    alternatives
                  </li>
                  <li>
                    <span className={`${styles.bodybi}`}>
                      Supports local farmers
                    </span>{" "}
                    by aligning consumer demand with
                    <span className={`${styles.bodybi}`}> harvest cycles</span>
                  </li>
                  <li>
                    <span className={`${styles.bodybi}`}>
                      Minimises the environmental costs
                    </span>{" "}
                    associated with long-distance transport and refrigeration
                  </li>
                  <li>
                    Acts as a{" "}
                    <span className={`${styles.bodybi}`}>
                      low-barrier educational entry point
                    </span>
                    , building long-term awareness of{" "}
                    <span className={`${styles.bodybi}`}>food systems</span>
                  </li>
                  <li>
                    Can be integrated into other platforms to help users compare
                    <span className={`${styles.bodybi}`}>
                      {" "}
                      produce availability and pricing
                    </span>
                    , loosely tying into the idea of a{" "}
                    <span className={`${styles.bodybi}`}>
                      centralised price comparison app
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.paraContainer}>
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
                    <span className={`${styles.bodybi}`}>Directly</span>{" "}
                    supports farmers affected by food waste by offering them a
                    channel to
                    <span className={`${styles.bodybi}`}>
                      {" "}
                      recoup losses
                    </span>{" "}
                    on unsold goods (e.g., labour, fuel, water)
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
                    <span className={`${styles.bodybi}`}>
                      co-impact tracker{" "}
                    </span>
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
                    <span className={`${styles.bodybi}`}>
                      future scalability
                    </span>{" "}
                    to support small businesses, restaurants, and community
                    kitchens
                  </li>
                  <li>
                    Builds{" "}
                    <span className={`${styles.bodybi}`}>user trust </span>
                    through{" "}
                    <span className={`${styles.bodybi}`}>
                      transparent sourcing
                    </span>{" "}
                    showing where produce comes from, what farm it supports, and
                    how much the grower earns
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.paraContainer}>
              <div className={`${styles.body}`}>
                Ultimately, we decided to move forward with the{" "}
                <span className={`${styles.bodyb} ${styles.grassGreen}`}>
                  Marketplace for Rescued Produce
                </span>
                . Compared with the Seasonal Food Tracker, it offered a stronger
                potential to create lasting, systemic change through a single,
                user-friendly platform. The solution not only addresses waste
                and affordability but also strengthens farmer-consumer
                relationships, improves supply chain transparency, and promotes
                more ethical, accessible food practices through a scalable,
                intuitive experience.
              </div>
            </div>
          </div>
        </div>

        {/* Delivery */}
        <div className={`${styles.paraContainer}`}>
          <div className={`${styles.heading} ${styles.forestGreen}`}>
            Designs
          </div>

          <div className={styles.paraContainer}>
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
          </div>

          <div className={styles.paraContainer}>
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
          </div>

          <div className={styles.paraContainer}>
            <div className={`${styles.heading1} ${styles.forestGreen}`}>
              High-Fidelity Prototypes
            </div>

            <div className={`${styles.body}`}>
              For ReHarvest&#39;s high-fidelity designs, I chose a
              retro-inspired colour palette and typeface to give the site a
              warm, nostalgic vibe inspired by the hackathon&#39;s theme of{" "}
              <span className={`${styles.bodybi}`}>Revisiting the Past</span>.
              This was also a deliberate contrast to the sterile and impersonal
              feel of many modern ecommerce platforms as I wanted something more
              inviting and approachable.
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

            <div className={styles.paraContainer}>
              <div className={`${styles.heading1} ${styles.forestGreen}`}>
                Customer Flow
              </div>

              <div className={`${styles.body}`}>
                The site is designed for quick, intuitive browsing. A prominent
                CTA on the landing page guides customers straight to shopping
                for produce. From there, they can easily{" "}
                <span className={`${styles.bodybi}`}>filter and sort</span>, use
                the search bar, and view curated seasonal produce. The checkout
                process is streamlined, and once a purchase is made, customers
                are shown a clear summary of their{" "}
                <span className={`${styles.bodybi}`}>environmental impact</span>{" "}
                including how much food they’ve helped save.
              </div>
            </div>

            <div className={styles.paraContainer}>
              <div className={`${styles.heading1} ${styles.forestGreen}`}>
                Wholesaler Flow
              </div>

              <div className={`${styles.body}`}>
                For wholesalers, everything is{" "}
                <span className={`${styles.bodybi}`}>
                  centralised in a dashboard
                </span>
                , with a clear CTA to access it from the homepage. The dashboard
                UI is{" "}
                <span className={`${styles.bodybi}`}>
                  intentionally minimal
                </span>{" "}
                and <span className={`${styles.bodybi}`}>colour-coded</span> to
                differentiate key actions. Wholesalers can search, filter, and
                manage their storefront with ease. Adding produce is flexible;
                wholesalers can either use a dynamic form to add rows manually
                or upload an existing CSV (with the right formatting). They also
                have
                <span className={`${styles.bodybi}`}> access to insights</span>:
                sales trends, popular products, total kg saved, and overall
                environmental impact.
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.paraContainer}`}>
          <div className={`${styles.heading} ${styles.forestGreen}`}>
            User Testing
          </div>

          <div className={`${styles.paraContainer}`}>
            <div className={`${styles.body} ${styles.text}`}>
              <div>
                I conducted{" "}
                <span className={`${styles.bodyb}`}>
                  unmoderated usability testing
                </span>{" "}
                using qualitative and quantitative measure with five
                participants, all university students who regularly shopped for
                their own groceries. These budget-friendly individuals were
                frustrated about rising supermarket prices, and had interest in
                more sustainable ways to buy produce. Participants were given
                task-based scenarios to evaluate ease of use, interface
                intuitivity, and overall flow comprehension. While they
                primarily matched my customer persona, they also helped me test
                the wholesaler user flow because I did not have access to real
                wholesalers.
              </div>
            </div>

            <div className={`${styles.paraContainer}`}>
              <div className={`${styles.heading1} ${styles.forestGreen}`}>
                Goals
              </div>

              <div className={`${styles.body} ${styles.text}`}>
                My main goals were to assess whether{" "}
                <span className={`${styles.bodyb}`}>customers</span> could
                easily <span className={`${styles.bodyi}`}>browse</span> and{" "}
                <span className={`${styles.bodyi}`}>shop </span>
                for rejected produce, with an{" "}
                <span className={`${styles.bodyi}`}>intuitive</span> search,
                cart, and checkout experience that would clearly display their{" "}
                <span className={`${styles.bodyi}`}>environmental impact</span>.
                For <span className={`${styles.bodyb}`}>wholesalers</span>, I
                wanted to evaluate the workflow{" "}
                <span className={`${styles.bodyi}`}>simplicity</span>,
                particularly, the{" "}
                <span className={`${styles.bodyi}`}>
                  ease of listing produce
                </span>
                , the{" "}
                <span className={`${styles.bodyi}`}>clarity and usability</span>{" "}
                of their storefront dashboard, and whether their insights and
                sustainable trackers were{" "}
                <span className={`${styles.bodyi}`}>comprehensive</span>.
              </div>
            </div>

            <div className={`${styles.paraContainer}`}>
              <div className={`${styles.heading1} ${styles.forestGreen}`}>
                Summarised Findings
              </div>

              <div className={`${styles.paraContainer}`}>
                <div className={`${styles.heading2} ${styles.forestGreen}`}>
                  Customer Flow
                </div>

                <div className={`${styles.body} ${styles.text}`}>
                  Overall, participants{" "}
                  <span className={`${styles.bodyb}`}>successfully </span> found
                  and added produce to their cart, rating the ease of the
                  process an average of{" "}
                  <span className={`${styles.bodybi}`}>5.40/7</span>. The
                  checkout and viewing their environmental impact scored even
                  higher with an average of
                  <span className={`${styles.bodybi}`}> 6.40/7</span>. For
                  browsing produce, participants were able to filter and search
                  for a specific fruit. Some feedback, however, highlighted some
                  confusion with some elements including non-clickable buttons,
                  and <span className={`${styles.bodyb}`}> mistaking</span> the
                  produce price box for the add to cart button.
                </div>

                <div
                  className={`${styles.bodyi} ${styles.grassGreen} ${styles.quote}`}
                >
                  <div className={`${styles.icon1}`}>
                    <Quotes size={24} color="#82a36b" weight="fill" />
                  </div>
                  The price box that is right under the product looked like it
                  was a button so everytime when I wanted to add into cart I
                  would click on that button instead of the add to cart one.
                </div>
              </div>

              <div className={`flex justify-center`}>
                <Image
                  src={`${basePath}/images/ReHarvestCustomerBarChart.png`}
                  alt="Customer Feedback"
                  width={748}
                  height={314}
                  className={styles.image1}
                />
              </div>

              <div className={`${styles.paraContainer}`}>
                <div className={`${styles.heading2} ${styles.forestGreen}`}>
                  Wholesaler Flow
                </div>

                <div className={`${styles.body} ${styles.text}`}>
                  In the second part of user testing, partcipants{" "}
                  <span className={`${styles.bodyb}`}>successfully </span>
                  located the store dahsboard from the landing page as a
                  wholesaler with relative ease, giving the task average
                  simplicity of{" "}
                  <span className={`${styles.bodybi}`}>5.60/7</span>. Adding
                  products to their storefront less intuitive with an rating of
                  <span className={`${styles.bodybi}`}> 4.60/7</span>. While
                  particpants understood and went through the correct
                  step-by-step of listing multiple items, some expected more
                  visual clarity and feedback during the process. Some
                  participants suggested that{" "}
                  <span className={`${styles.bodybi}`}>clearer navigation</span>{" "}
                  and <span className={`${styles.bodybi}`}> microcopy </span> of
                  buttons and would enhance the usability for a wholesaler.
                </div>

                <div
                  className={`${styles.bodyi} ${styles.grassGreen} ${styles.quote}`}
                >
                  <div className={`${styles.icon1}`}>
                    <Quotes size={24} color="#82a36b" weight="fill" />
                  </div>
                  Missing clear back buttons when in the insights and orders
                  page.
                </div>

                <div
                  className={`${styles.bodyi} ${styles.grassGreen} ${styles.quote}`}
                >
                  <div className={`${styles.icon1}`}>
                    <Quotes size={24} color="#82a36b" weight="fill" />
                  </div>
                  On the wholesaler profile, what do you mean by view orders?
                </div>

                <div
                  className={`${styles.bodyi} ${styles.grassGreen} ${styles.quote}`}
                >
                  <div className={`${styles.icon1}`}>
                    <Quotes size={24} color="#82a36b" weight="fill" />
                  </div>
                  The store dashboard could feel overwhelming for someone less
                  familiar with websites - there are three different tasks
                  happening on the same page: viewing store details, managing
                  products, and adding new produce. It might also help to add
                  filters to the orders page (like &#39;Not Started&#39;,
                  &#39;In Progress&#39;, or &#39;Completed&#39;) and include a
                  way to mark orders as dispatched.
                </div>
              </div>

              <div className={`flex justify-center`}>
                <Image
                  src={`${basePath}/images/ReHarvestWholesalerBarChart.png`}
                  alt="Customer Feedback"
                  width={748}
                  height={328}
                  className={styles.image1}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.paraContainer}`}>
          <div className={`${styles.heading} ${styles.forestGreen}`}>
            Refinements
          </div>

          <div className={`${styles.paraContainer}`}>
            <div className={`${styles.heading1} ${styles.forestGreen}`}>
              Improving button intuitivity
            </div>

            <div className={`${styles.paraContainer3}`}>
              <div className={`${styles.imageText}`}>
                <div className={`${styles.imageCompare}`}>
                  <div>
                    <ZoomableImage
                      src={`${basePath}/images/ReHarvest1Before.png`}
                      alt="Customer produce page before"
                      width={905}
                      height={857}
                      className={styles.image2}
                    />
                  </div>
                </div>

                <div className={`${styles.paraContainer2}`}>
                  <div className={`${styles.heading2} ${styles.grassGreen}`}>
                    Before
                  </div>

                  <div className={`${styles.body} ${styles.text}`}>
                    I had the dropdown button for selecting produce amount a
                    dark green. Compared to the light green add to cart, this
                    had more contrast and was{" "}
                    <span className={styles.bodyb}>mistaken </span>for the add
                    to cart button.
                  </div>
                </div>
              </div>

              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>
              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>
              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>

              <div className={`${styles.imageText}`}>
                <div className={`${styles.imageCompare}`}>
                  <div>
                    <ZoomableImage
                      src={`${basePath}/images/ReHarvest1After.png`}
                      alt="Customer produce page after"
                      width={905}
                      height={857}
                      className={styles.image2}
                    />
                  </div>
                </div>

                <div className={`${styles.paraContainer2}`}>
                  <div className={`${styles.heading2} ${styles.grassGreen}`}>
                    After
                  </div>

                  <div className={`${styles.body} ${styles.text}`}>
                    I swapped the colours of the dropdown and add to cart
                    buttons to make the add to cart have{" "}
                    <span className={styles.bodyb}>higher importance</span>. I
                    also made the dropdown arrow a dark green to maintain
                    <span className={styles.bodyb}> consistency </span> of
                    button actions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.paraContainer}`}>
            <div className={`${styles.heading1} ${styles.forestGreen}`}>
              Improving wholesaler page navigation
            </div>

            <div className={`${styles.paraContainer3}`}>
              <div className={`${styles.imageText}`}>
                <div className={`${styles.imageCompare}`}>
                  <div>
                    <ZoomableImage
                      src={`${basePath}/images/ReHarvest2Before.png`}
                      alt="Wholsaler insights page before"
                      width={905}
                      height={857}
                      className={styles.image2}
                    />
                  </div>
                </div>

                <div className={`${styles.paraContainer2}`}>
                  <div className={`${styles.heading2} ${styles.grassGreen}`}>
                    Before
                  </div>

                  <div className={`${styles.body} ${styles.text}`}>
                    There were <span className={styles.bodyb}> missing</span>{" "}
                    &#34;back to storefront&#34; page buttons so it was more
                    inconvenient and unclear how to navigate back to the
                    wholesaler dashboard.
                  </div>
                </div>
              </div>

              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>
              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>
              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>

              <div className={`${styles.imageText}`}>
                <div className={`${styles.imageCompare}`}>
                  <div>
                    <ZoomableImage
                      src={`${basePath}/images/ReHarvest2After.png`}
                      alt="Wholsaler insights page before"
                      width={905}
                      height={857}
                      className={styles.image2}
                    />
                  </div>
                </div>

                <div className={`${styles.paraContainer2}`}>
                  <div className={`${styles.heading2} ${styles.grassGreen}`}>
                    After
                  </div>

                  <div className={`${styles.body} ${styles.text}`}>
                    Added a back to storefront button on the insights page for
                    easy navigation back to storefront page. This way, they
                    don't need to guess and press around on the header to
                    return.
                  </div>
                </div>
              </div>

              <div className={`${styles.imageText}`}>
                <div className={`${styles.imageCompare}`}>
                  <div>
                    <ZoomableImage
                      src={`${basePath}/images/ReHarvest4Before.png`}
                      alt="Wholsaler dashboard page before"
                      width={905}
                      height={857}
                      className={styles.image2}
                    />
                  </div>
                </div>

                <div className={`${styles.paraContainer2}`}>
                  <div className={`${styles.heading2} ${styles.grassGreen}`}>
                    Before
                  </div>

                  <div className={`${styles.body} ${styles.text}`}>
                    The wholesaler dashboard was{" "}
                    <span className={styles.bodyb}>overwhelming </span> with
                    multiple areas of high contrast colours like the orange
                    profile container containing{" "}
                    <span className={styles.bodyb}>
                      low contrast, hard-to-read actions buttons
                    </span>
                    , and the listing produce container below. This can make it
                    confusing for new time users as there aren't clear points of
                    focus.
                  </div>
                </div>
              </div>

              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>
              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>
              <div className={`${styles.icon}`}>
                <ArrowDown size={24} color="#82a36b" weight="fill" />
              </div>

              <div className={`${styles.imageText}`}>
                <div className={`${styles.imageCompare}`}>
                  <div>
                    <ZoomableImage
                      src={`${basePath}/images/ReHarvest4After.png`}
                      alt="Wholsaler dashboard page after"
                      width={905}
                      height={857}
                      className={styles.image2}
                    />
                  </div>
                </div>
                <div className={`${styles.paraContainer2}`}>
                  <div className={`${styles.heading2} ${styles.grassGreen}`}>
                    After
                  </div>

                  <div className={`${styles.body} ${styles.text}`}>
                    I changed the profile container to have a lower contrast
                    colour, yellow, and the action buttons within to have{" "}
                    <span className={styles.bodyb}>
                      higher contrast and readability
                    </span>{" "}
                    with orange and light coloured text. I also improved the
                    <span className={styles.bodyb}> microcopy </span> of the
                    button &#34;My Orders&#34; to &#34;Manage Orders&#34; to
                    clarify that they can access any orders from their
                    storefront.
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.paraContainer}`}>
              <div className={`${styles.heading1} ${styles.forestGreen}`}>
                Improving Wholesaler Order Management
              </div>
              <div className={`${styles.paraContainer3}`}>
                <div className={`${styles.imageText}`}>
                  <div className={`${styles.imageCompare}`}>
                    <div>
                      <ZoomableImage
                        src={`${basePath}/images/ReHarvest3Before.png`}
                        alt="Manage orders page before"
                        width={905}
                        height={857}
                        className={styles.image2}
                      />
                    </div>
                  </div>

                  <div className={`${styles.paraContainer2}`}>
                    <div className={`${styles.heading2} ${styles.grassGreen}`}>
                      Before
                    </div>

                    <div className={`${styles.body} ${styles.text}`}>
                      It was a very simple page with{" "}
                      <span className={styles.bodyb}>no filters </span> or way
                      to sort orders. There is only one action button to export
                      order details as a spreadsheet. This was very limiting if
                      the wholesaler wanted to handle the orders one one central
                      platform.
                    </div>
                  </div>
                </div>

                <div className={`${styles.icon}`}>
                  <ArrowDown size={24} color="#82a36b" weight="fill" />
                </div>
                <div className={`${styles.icon}`}>
                  <ArrowDown size={24} color="#82a36b" weight="fill" />
                </div>
                <div className={`${styles.icon}`}>
                  <ArrowDown size={24} color="#82a36b" weight="fill" />
                </div>

                <div className={`${styles.imageText}`}>
                  <div className={`${styles.imageCompare}`}>
                    <div>
                      <ZoomableImage
                        src={`${basePath}/images/ReHarvest3After.png`}
                        alt="Manage orders page after"
                        width={905}
                        height={857}
                        className={styles.image2}
                      />
                    </div>
                  </div>

                  <div className={`${styles.paraContainer2}`}>
                    <div className={`${styles.heading2} ${styles.grassGreen}`}>
                      After
                    </div>

                    <div className={`${styles.body} ${styles.text}`}>
                      I added filters and sorting options for each property so
                      that the wholesaler can customise to their needs. I also
                      added a search bar to make it even easier to find a
                      specific order. This way, they can manage their orders on
                      the platform if they wish.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.paraContainer}`}>
          <div className={`${styles.heading} ${styles.forestGreen}`}>
            Next Steps
          </div>

          <div className={`${styles.body} ${styles.text}`}>
            I&#39;d love to continue refining ReHarvest, conducting{" "}
            <span className={styles.bodyb}>further usability testing</span> with
            both customers and wholesalers to ensure the changes are intuitive
            and effective for each user group. I also plan to{" "}
            <span className={styles.bodyb}>optimise </span> the layouts for
            <span className={styles.bodyb}> mobile responsiveness </span> to
            make the experience seamless across all devices.
          </div>

          <div className={`${styles.body} ${styles.text}`}>
            Throughout the hackathon, I learned a lot about{" "}
            <span className={styles.bodyi}>
              branding, user research, and rapid prototyping
            </span>{" "}
            within a tight{" "}
            <span className={styles.bodyb}>48-hour timeframe</span>. In the
            post-hackathon phase, refining the project gave me a deeper
            appreciation for the{" "}
            <span className={styles.bodyb}>Double Diamond design process</span>{" "}
            and the value of iterating based on real user feedback.
          </div>
        </div>
      </div>
    </div>
  );
}
