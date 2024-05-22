import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import playformInline from '@playform/inline';
import { defineConfig } from 'astro/config';

import { remarkPostMeta } from './src/utils/remark-post-meta.mjs';

// https://astro.build/config
export default defineConfig({
    site: 'https://sh4hids.github.io/',
    base: import.meta.env.DEV ? '.' : '/2024.shahid.pro',
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
