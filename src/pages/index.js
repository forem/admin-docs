import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import NavigationList from "../components/NavigationList";
import ForemLogo from "@site/static/img/forem.svg";
import ForemLogoDark from "@site/static/img/foremDark.svg";
import useThemeContext from "@theme/hooks/useThemeContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useThemeContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        {isDarkTheme ? (
          <ForemLogoDark title="Forem Logo" className={styles.logo} />
        ) : (
          <ForemLogo title="Forem Logo" className={styles.logo} />
        )}
        <p className={styles.subtext}>
          This documentation is for those who have launched and are managing a
          Forem community. If you haven’t yet installed the app and are hoping
          to self-host, please check out our <br />
          <a href="https://hackmd.io/6DljLehNR5OsowmNpD2FnA" target="_blank">
            Forem Selfhost Installation Documentation
          </a>
          .
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <NavigationList />
      </main>
    </Layout>
  );
}
