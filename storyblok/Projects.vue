<template>
    <div v-editable="blok" id="projects" class="projects-blok">
        <div class="container mx-auto place-items-start">
            <h1 class="blok-title" v-html="blok.title"></h1>
            <div class="blok-projects">
                <div class="blok-project" v-for="(project, p) in blok.projects">
                    <div class="blok-project-summary">
                        <h2 class="blok-project-title" v-text="project.title"></h2>
                        <div class="blok-project-description" v-html="renderHTML(project.description)">
                        </div>
                        <a :href="project.link.url" class="blok-project-link">Visit Website</a>
                    </div>
                    <div class="blok-project-teasers">
                        <div class="blok-project-teaser" v-for="(teaser, t) in project.teasers">
                            <a :href="teaser.link.url" target="_blank" class="blok-project-teaser-link">
                                <img :src="teaser.image.filename" :alt="teaser.title" class="blok-project-teaser-image">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/projects.scss" lang="scss">

</style>

<script setup>
defineProps({ blok: Object })

const renderHTML = function (blokField) {
    return renderRichText(blokField);
}
</script>