const rehypeTruncate = require("rehype-truncate");
const remarkImages = require("remark-images");
const remarkOembed = require("@agentofuser/remark-oembed");
const oembed = require("@agentofuser/remark-oembed");
module.exports = {
  title: "Panduan Typescript untuk Developer React",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "SastraNababan", // Usually your GitHub org/user name.
  projectName: "react-ts", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "React TS",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "start",
          label: "Mulai",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Panduan Typescript untuk Developer React. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          remarkPlugins: [remarkImages, remarkOembed],
          rehypePlugins: [rehypeTruncate],
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
