// @ts-check
import { defineConfig } from 'astro/config';

// Live URL after GitHub Pages publish:
// https://bmoney-tesla-keys.github.io/level2-chargers
// `site` is the origin and `base` is the repo path, per Astro's GitHub Pages docs.
export default defineConfig({
	site: 'https://bmoney-tesla-keys.github.io',
	base: '/level2-chargers',
});
