import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from "@astrojs/markdoc";
import vercel from '@astrojs/vercel/serverless';

const site = "https://sizzle.lazebny.io/"

// https://astro.build/config
export default defineConfig({
  site,
  output: "static",
  
  adapter: vercel(
    {
      webAnalytics: {
        enabled: true,
      },
      speedInsights: {
        enabled: true,
      },
      imageService: true,
      devImageService: 'squoosh'
    }
  ),
  integrations: [starlight({
    title: 'Sizzle Starter',
    social: {
      github: 'https://github.com/hawkkiller/sizzle_starter'
    },
    favicon: "/favicon.svg",
    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg'
    },
    sidebar: [
      {
        label: 'Start Here',
        items: [
          {
            label: 'Introduction',
            link: '/introduction'
          },
          {
            label: 'Getting Started',
            link: '/getting-started'
          }
        ],
      },
      {
        label: 'Essentials',
        autogenerate: {
          directory: 'essentials',
        }
      }
    ],
    head: [
      {
        tag: 'meta',
        attrs: { property: 'og:image', content: site + 'og.jpg?v=1' },
      },
      {
        tag: 'meta',
        attrs: { property: 'twitter:image', content: site + 'og.jpg?v=1' },
      },
    ],
  }), markdoc()]
});