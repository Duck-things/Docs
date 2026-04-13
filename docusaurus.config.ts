import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const config: Config = {
  title: 'Apex Pathing',
  tagline: 'Autonomous pathing, made easy',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true,
  },

  // Production URL
  url: 'https://apexpathing.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'Apex Pathing',
  projectName: 'docs',
  deploymentBranch:'main',
  trailingSlash : false,
  onBrokenLinks: 'warn',

  // Languages
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social_card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Apex Pathing',
      logo: {
        alt: 'AP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/ApexPathing',
          className: 'navbar-githubl',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation and Resources',
          items: [
            {
              label: 'Docs',
              to: '/docs/docs/about',
            },
            // TODO: Add more resources here
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/jFAduGfHcs',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ApexPathing/main',
            },
            // TODO: Add socials here
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Apex Pathing. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;