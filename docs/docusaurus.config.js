// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Transient Array Radio Telescope',
  tagline: 'TART: Open-source Aperture-Synthesis Radio Telescope',
  url: 'https://tart.elec.ac.nz/',
  baseUrl: 'doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tart-telescope', // Usually your GitHub org/user name.
  projectName: 'tart_website', // Usually your repo name.
  deploymentBranch: 'gh-pages', // Default is 'gh-pages' for non github.io 
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'af', 'sw', 'xh', 'zu', 'pt'],
  },

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl:
            'https://github.com/tart-telescope/tart_website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/tart-telescope/tart_website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  favicon: '/img/favicon.svg',

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TART',
        logo: {
          alt: 'TART Logo',
          src: 'img/elec_logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'right',
          },          
          {
            href: 'https://github.com/tart-telescope',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                href: 'https://t.me/+a_jZzTz1PyFhNmIz',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/tmolteno/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Electronics Research Foundation',
                to: 'https://elec.ac.nz',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/tart-telescope',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Electronics Research Foundation. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
