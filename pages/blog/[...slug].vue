<template>
    <div class="post-wrapper">
        <Suspense>
            <StoryblokComponent v-if="story" :story="story" :blok="story.content"/>
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
</script>
       