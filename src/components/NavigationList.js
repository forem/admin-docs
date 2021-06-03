import React from "react";
import clsx from "clsx";
import styles from "./NavigationList.module.css";
import Link from "@docusaurus/Link";

const NavigationSections = [
  {
    title: "Getting Started",
    links: [
      {
        title: "Introduction to Forem Admin Docs",
        url: "docs/quick-start-guide#introduction-to-the-forem-admin-docs",
      },
      {
        title: "Getting Started with Forem Video",
        url: "docs/quick-start-guide#getting-started-with-forem-in-under-10-minutes-video",
      },
      {
        title: "Getting Started with Forem Checklist",
        url: "docs/quick-start-guide#getting-started-with-forem-checklist",
      },
    ],
  },
  {
    title: "Forem Basics",
    links: [
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
    ],
  },
  {
    title: "Managing Your Community",
    links: [
      {
        title: "Admin Moderation Features",
        url: "/docs/community-moderation/admin-moderation-features",
      },
      {
        title: "Tag Moderator Features",
        url: "docs/community-moderation/tag-moderator-features",
      },
      {
        title: "Trusted User Features",
        url: "docs/community-moderation/trusted-user-features",
      },
    ],
  },
  {
    title: "Advanced Customization",
    links: [
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
    ],
  },
  {
    title: "Frequently Asked Questions",
    links: [
      { title: "FAQ", url: "docs/faq/README" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
    ],
  },
  {
    title: "Community Resources",
    links: [
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
      { title: "Coming Soon...", url: "" },
    ],
  },
];

function Column({ title, links }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--left padding-horiz--md margin-top--lg">
        <h3>{title}</h3>
        <div className={styles.links}>
          {links.map((props, idx) => (
            <Link key={idx} to={props.url}>
              {props.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function NavigationList() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {NavigationSections.map((props, idx) => (
            <Column key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
