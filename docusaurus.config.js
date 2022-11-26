// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NoTako',
  tagline: 'Octobots are cool',
  url: 'https://tqkoyaki.github.io',
  baseUrl: '/NoTako/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Tqkoyaki', // Usually your GitHub org/user name.
  projectName: 'NoTako', // Usually your repo name.
  deploymentBranch: 'deploy', // Branch that GitHub pages will deploy from.
  trailingSlash: false, // GitHub pages adds a trailing slash by default.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          routeBasePath: '/docs/',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tqkoyaki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notes',
          },
          {
            type: 'doc',
            docId: 'turing-tako/turing',
            position: 'left',
            label: 'Computing'
          },
          {
            href: 'https://github.com/Tqkoyaki/NoTako',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Turing',
                to: '/docs/turing-tako',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Github Profile',
                href: 'https://github.com/Tqkoyaki',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Notes',
                to: '/docs/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Tqkoyaki/NoTako',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NoTako. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
