import React from "react";
import clsx from "clsx";
import styles from "./NavigationList.module.css";
import Link from "@docusaurus/Link";

const NavigationSections = [
  {
    title: "Getting Started",
    links: [
      {
        title: "First User Registration",
        url: "docs/getting-started/first-user-registration",
      },
      {
        title: "Forem Setup Checklist",
        url: "docs/getting-started/forem-setup-checklist",
      },
    ],
  },
  {
    title: "Forem Basics",
    links: [
      {
        title: "Create static content with Pages",
        url: "docs/forem-basics/pages",
      },
      {
        title: "Manage User Roles and Permissions",
        url: "docs/forem-basics/user-roles",
      },
      { title: "Update and customize Tags", url: "docs/forem-basics/tags" },
    ],
  },
  {
    title: "Managing Your Community",
    links: [
      {
        title: "Deleting Posts and Comments",
        url: "docs/managing-your-community/managing-posts-and-comments",
      },
      {
        title: "Removing Spam",
        url: "docs/managing-your-community/removing-spam",
      },
      {
        title: "Suspending Users",
        url: "docs/managing-your-community/suspending-users",
      },
    ],
  },
  {
    title: "Advanced Customization",
    links: [
      {
        title: "Set up OAuth and Access Level",
        url: "docs/advanced-customization/config/authentication",
      },
      {
        title: "Configure SMTP Settings",
        url: "docs/advanced-customization/config/smtp-settings",
      },
      {
        title: "Add and sort  Navigation Links",
        url: "docs/advanced-customization/navigation-links",
      },
    ],
  },
  {
    title: "Frequently Asked Questions",
    links: [
      {
        title:
          "How do I change the background image of the onboarding screens?",
        url: "docs/frequently-asked-questions",
      },
      {
        title: "How do I set the logo on my Forem?",
        url: "docs/frequently-asked-questions",
      },
      {
        title: "Where do I go to get help with self-hosting my Forem?",
        url: "docs/frequently-asked-questions",
      },
    ],
  },
  {
    title: "Community Resources",
    links: [
      {
        title: "Who are these docs for?",
        url: "docs/community-resources/who-are-these-docs-for",
      },
      {
        title: "Connect with other Forem Creators",
        url: "docs/community-resources/connect-with-forem-builders",
      },
      {
        title: "Contribute to these docs",
        url: "docs/community-resources/style-guide",
      },
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
