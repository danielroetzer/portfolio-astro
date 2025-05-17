// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://danielroetzer.github.io',
  base: 'portfolio-astro',
  integrations: [mdx(), sitemap()],
})
