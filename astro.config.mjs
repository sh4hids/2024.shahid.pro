import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import playformInline from '@playform/inline';
import { defineConfig } from 'astro/config';

import { remarkPostMeta } from './src/utils/remark-post-meta.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://v2024.shahid.pro/',
    base: '/',
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react(),
        sitemap(),
        playformInline(),
    ],
    markdown: {
        remarkPlugins: [remarkPostMeta],
    },
});
