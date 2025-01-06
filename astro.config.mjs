import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import vercel from "@astrojs/vercel/static";
import sitemap from "@astrojs/sitemap";
const site = "https://sizzle.lazebny.io/";

// https://astro.build/config
export default defineConfig({
  site,
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
  }),
  integrations: [
    starlight({
      title: "Sizzle Starter",
      social: {
        github: "https://github.com/hawkkiller/sizzle_starter",
      },
      favicon: "/fav.svg",
      logo: {
        light: "./src/assets/sizzlelogolight.svg",
        dark: "./src/assets/sizzlelogodark.svg",
        replacesTitle: true,
      },
      editLink: {
        baseUrl: "https://github.com/hawkkiller/sizzle_starter_docs/edit/main/",
      },
      sidebar: [
        {
          label: "Get Started",
          link: "/get-started"
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: site + "og.jpg?v=1",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: site + "og.jpg?v=1",
          },
        },
      ],
      customCss: [],
    }),
    sitemap(),
  ],
});
