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
      enabled: true
    },
    speedInsights: {
      enabled: true
    },
    imageService: true
  }),
  integrations: [starlight({
    title: "Sizzle Starter",
    social: {
      github: "https://github.com/hawkkiller/sizzle_starter"
    },
    favicon: "/fav.svg",
    logo: {
      light: "./src/assets/sizzlelogolight.svg",
      dark: "./src/assets/sizzlelogodark.svg",
      replacesTitle: true
    },
    editLink: {
      baseUrl: 'https://github.com/hawkkiller/sizzle_starter_docs/edit/main/'
    },
    sidebar: [{
      label: "Start Here",
      items: [{
        label: "Introduction",
        link: "/introduction"
      }, {
        label: "Getting Started",
        link: "/getting-started"
      }]
    }, {
      label: "Essentials",
      autogenerate: {
        directory: "essentials"
      }
    }, {
      label: "Storage",
      items: [{
        label: "Local Database",
        items: [{
          label: "About the local database",
          link: "storage/database/about/"
        }, {
          label: "Define Tables",
          link: "storage/database/define-tables/"
        }, {
          label: "Accessing Data",
          link: "storage/database/accessing-data/"
        }]
      }]
    }],
    head: [{
      tag: "meta",
      attrs: {
        property: "og:image",
        content: site + "og.jpg?v=1"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: site + "og.jpg?v=1"
      }
    }],
    customCss: []
  }), sitemap()]
});