/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://forem-admin.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'Forem Admin Docs',
      logo: {
        alt: "Forem Admin Docs Logo",
        src: "./static/img/forem.svg",
        srcDark: "./static/img/foremDark.svg",
      },
      items: [
        {
          type: "doc",
          docId: "forem-admin-guide",
          position: "left",
          label: "Start",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left",
        },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Start",
              to: "/docs/forem-admin-guide",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "DEV",
              href: "https://dev.to",
            },
            {
              label: "forem.dev",
              href: "https://forem.dev",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/forem",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/forem/admin-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Forem`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/forem/admin-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/forem/admin-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
