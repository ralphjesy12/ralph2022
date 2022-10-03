<template>
    <main>
        <Header></Header>
        <slot />
        <Footer></Footer>
    </main>
</template>
  

<script setup>
const route = useRoute()

const info = {
    title: `Ralph John - ${route.meta.title || 'Senior Web Developer'}`,
    description: 'An empathetic, idealistic, and forward-thinking Web Artisan based in the Philippines.',
    image: '/ralph-social.jpg',
    url: 'https://ralphjohn.com/'
};

useHead({
    title: info.title,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    htmlAttrs: { lang: 'en-PH' },
    meta: [
        { name: 'title', content: info.title },
        { name: 'description', content: info.description },

        { property: "og:type", content: "website" },
        { property: "og:url", content: info.url },
        { property: "og:title", content: info.title },
        { property: "og:description", content: info.description },
        { property: "og:image", content: info.image },

        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:url", content: info.url },
        { property: "twitter:title", content: info.title },
        { property: "twitter:description", content: info.description },
        { property: "twitter:image", content: info.image }

    ],
    link: [{ rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/android-icon-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
    { rel: 'manifest', href: '/favicon/manifest.json' }],
})
</script>