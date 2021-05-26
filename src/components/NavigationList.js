import React from "react";
import clsx from "clsx";
import styles from "./NavigationList.module.css";
import Link from "@docusaurus/Link";

const NavigationSections = [
  {
    title: "Quickstart",
    links: [
      { title: "Test 1", url: "docs/forem-admin-guide" },
      { title: "Test 2", url: "docs/forem-admin-guide" },
      { title: "Test 3", url: "docs/forem-admin-guide" },
      { title: "Test 4", url: "docs/forem-admin-guide" },
    ],
  },
  {
    title: "Forem Basics",
    links: [
      { title: "Test 1", url: "docs/forem-admin-guide" },
      { title: "Test 2", url: "docs/forem-admin-guide" },
      { title: "Test 3", url: "docs/forem-admin-guide" },
      { title: "Test 4", url: "docs/forem-admin-guide" },
    ],
  },
  {
    title: "Community Moderation",
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
    title: "Advanced Tutorials",
    links: [
      { title: "Test 1", url: "docs/forem-admin-guide" },
      { title: "Test 2", url: "docs/forem-admin-guide" },
      { title: "Test 3", url: "docs/forem-admin-guide" },
      { title: "Test 4", url: "docs/forem-admin-guide" },
    ],
  },
  {
    title: "Frequently Asked Questions",
    links: [
      { title: "Test 1", url: "docs/forem-admin-guide" },
      { title: "Test 2", url: "docs/forem-admin-guide" },
      { title: "Test 3", url: "docs/forem-admin-guide" },
      { title: "Test 4", url: "docs/forem-admin-guide" },
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
