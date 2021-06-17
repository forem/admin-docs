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
        url: "docs/_getting-started/first_user_registration",
      },
      {
        title: "Forem Setup Checklist",
        url: "docs/_getting-started/forem_setup_checklist",
      },
    ],
  },
  {
    title: "Forem Basics",
    links: [
      { title: "What are pages?", url: "docs/_forem-basics/what_are_pages" },
      { title: "What are posts?", url: "docs/_forem-basics/what_are_posts" },
      { title: "What are tags?", url: "docs/_forem-basics/what_are_tags" },
    ],
  },
  {
    title: "Managing Your Community",
    links: [
      {
        title: "How do I delete a post or comment?",
        url: "docs/_managing-your-community/how_do_I_delete_a_post_or_comment",
      },
      {
        title: "How do I remove spam?",
        url: "docs/_managing-your-community/how_do_I_remove_spam",
      },
      {
        title: "How do I suspend a user?",
        url: "docs/_managing-your-community/how_do_i_suspend_a_user",
      },
    ],
  },
  {
    title: "Advanced Customization",
    links: [
      { title: "Display Ads", url: "docs/_advanced-customization/display_ads" },
      {
        title: "HTML Variants",
        url: "docs/_advanced-customization/html_variants",
      },
      {
        title: "Tag Display Order",
        url: "docs/_advanced-customization/tag_display_order",
      },
    ],
  },
  {
    title: "Frequently Asked Questions",
    links: [
      {
        title:
          "How do I change the background image of the onboarding screens?",
        url: "docs/frequently_asked_questions",
      },
      {
        title: "How do I set the logo on my Forem?",
        url: "docs/frequently_asked_questions",
      },
      {
        title: "Where do I go to get help with self-hosting my Forem?",
        url: "docs/frequently_asked_questions",
      },
    ],
  },
  {
    title: "Community Resources",
    links: [
      {
        title: "Who are these docs for?",
        url: "docs/_community-resources/who_are_these_docs_for",
      },
      {
        title: "Connect with Forem builders?",
        url: "docs/_community-resources/connect_with_forem_builders",
      },
      {
        title: "How can I submit a bug report?",
        url: "docs/_community-resources/submit_bug_report",
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
