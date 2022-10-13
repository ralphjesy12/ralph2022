<template>
    <div class="post-wrapper">
        <Suspense>
            <StoryblokComponent v-if="story" :story="story" :blok="story.content" />
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>
<style src="~/assets/scss/layouts/posts.scss" lang="scss">

</style>
<script setup>
const config = useRuntimeConfig()

let { slug } = useRoute().params

if (slug.length > 1) slug = slug.join('/')

const story = await useStoryblok('/blog/' + slug,
    {
        version: config.public.STORY_VERSION,
    }
)

const route = useRoute()

const info = {
    title: `${story.value.content.title || 'Senior Web Developer'} - Ralph John`,
    description: (story.value.content.description || '').substr(0, 165),
    image: story.value.content.image.filename,
    url: route.fullPath
};

useHead({
    title: info.title,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    charset: 'utf-8',
    htmlAttrs: { lang: 'en-PH' },
    meta: [
        { name: 'title', content: info.title },
        { name: 'description', content: info.description },
        { name: 'keywords', content: 'web, portfolio, frontend, developer, jamstack, philippines, ' + (story.value.tag_list || []).join(', ') },

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
})
</script>
       