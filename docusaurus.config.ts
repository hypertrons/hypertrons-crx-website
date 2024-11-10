import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const defaultLocale = 'zh';

const config: Config = {
  title: 'HyperCRX',
  tagline: 'Open source chrome extension for open source communities',
  favicon: 'img/favicon.ico',
  url: 'https://hypercrx.cn',
  baseUrl: process.env.PULL_NUM ? `/pull_${process.env.PULL_NUM}/` : '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale,
    locales: ['zh', 'en'],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      // You can omit a locale (e.g. fr) if you don't need to override the defaults
      fa: {
        direction: "rtl",
      },
    },
  },

  customFields: {
    pullNumber: process.env.PULL_NUM,
    imagePath: process.env.PULL_NUM ? `/pull_${process.env.PULL_NUM}/img/` : '/img/',
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'Recent Posts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }) satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexDocs: true,
      },
    ],
    require.resolve("docusaurus-plugin-image-zoom"),
  ],

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig:
    ({
      image: 'img/logos/hypercrx.png',
      navbar: {
        title: 'HyperCRX',
        logo: {
          alt: 'HyperCRX Logo',
          src: 'img/logos/hypercrx.svg',
          srcDark: 'img/logos/hypercrx-dark.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'userDocSidebar',
            label: 'userDocs',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'developerDocSidebar',
            label: 'devDocs',
            position: 'left',
          },
          {
            to: '/blog',
            label: 'blog',
            position: 'left'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'GitHub',
            className: 'header--github-dropdown',
            position: 'right',
            items: [
              {
                label: 'HyperCRX',
                href: 'https://github.com/hypertrons/hypertrons-crx',
              },
              {
                label: 'HyperCRX-Website',
                href: 'https://github.com/hypertrons/hypertrons-crx-website',
              },
            ],
          },
        ],
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} HyperCRX<br>
        <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备18048778号-6</a>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }) satisfies Preset.ThemeConfig,
};

export default config;
