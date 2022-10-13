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

const story = await useStoryblok('blog',
    {
        version: config.public.STORY_VERSION,
    }
)

</script>
       