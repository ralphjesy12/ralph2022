<template>
    <div class="page-wrapper">
        <Suspense>
            <StoryblokComponent v-if="story" :blok="story.content" />
            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

let { slug } = useRoute().params

if (slug.length > 1) slug = slug.join('/')

const story = await useStoryblok(slug ? slug : 'home',
    {
        version: config.public.STORY_VERSION,
    }
)
</script>
       