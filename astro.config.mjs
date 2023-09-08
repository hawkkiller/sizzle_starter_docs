import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from "@astrojs/markdoc";
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic(
    {
      analytics: true,
    }
  ),
  integrations: [starlight({
    title: 'Sizzle Starter',
    social: {
      github: 'https://github.com/hawkkiller/sizzle_starter'
    },
    favicon: "./public/favicon.svg",
    logo: {
      light: './src/assets/light-logo.svg',
      dark: './src/assets/dark-logo.svg'
    },
    sidebar: [
      {
        label: 'Get Started',
        items: [
          {
            label: 'Introduction',
            link: '/introduction'
          }
        ]
      }
    ]
  }), markdoc()]
});