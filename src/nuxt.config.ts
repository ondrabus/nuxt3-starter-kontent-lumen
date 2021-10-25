import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    buildModules: [
        ['@pinia/nuxt'],
        ['kontent-nuxt3-module']
    ],
    publicRuntimeConfig: {
        kontent: {
            projectId: process.env.KONTENT_PROJECT_ID,
            previewApiKey: process.env.KONTENT_PREVIEW_KEY,
        }
    },
    routes: {
        '/': { prerender: true }
    },
    css: [
        '~/assets/scss/init.scss',
    ],
    meta: {
        link: [{
            'rel': 'stylesheet',
            'href': '/fonts/fontello-771c82e0/css/fontello.css'
        }],
        script: [
            {
                'type': 'text/javascript',
                'src': 'https://cdn.jsdelivr.net/npm/@kentico/kontent-smart-link@2.0.0/dist/kontent-smart-link.umd.min.js'
            }
        ]
    },
})
