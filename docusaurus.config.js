// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "Cubxity's Docs",
  tagline: "Let's get started!",
  url: "https://docs.cubxity.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cubxity",
  projectName: "docs.cubxity.dev",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import("@docusaurus/preset-classic").Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "Cubxity's Docs",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://discord.gg/UUPeTMVjV7",
            label: "Discord",
            position: "right",
          },
          {
            href: "https://github.com/cubxity/docs.cubxity.dev",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      algolia: {
        appId: "B9NMSRWWZL",
        apiKey: "7b56091b43fc29f0da05dc32a1ba2f3b",
        indexName: "docs-cubxity",
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
      },
    }),
};

module.exports = config;
