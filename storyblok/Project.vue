<template>
    <div class="blok-project" v-editable="blok">
        <div class="blok-project-summary">
            <h2 class="blok-project-title" v-text="blok.title"></h2>
            <div class="blok-project-description" v-html="renderHTML(blok.description)">
            </div>
            <a :href="blok.link.url" class="blok-project-link">Visit Website</a>
        </div>
        <div class="blok-project-teasers">
            <StoryblokComponent v-for="teaser in blok.teasers" :key="teaser._uid" :blok="teaser" />
        </div>
    </div>
</template>

<script setup>
defineProps({ blok: Object })

const renderHTML = function (blokField) {
    return renderRichText(blokField);
}
</script>