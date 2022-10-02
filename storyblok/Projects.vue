<template>
    <div v-editable="blok" id="projects" class="projects-blok">
        <div class="container mx-auto place-items-start">
            <h1 class="blok-title" v-html="blok.title"></h1>
            <div class="blok-projects">
                <StoryblokComponent v-for="project in blok.projects" :key="project._uid" :blok="project" />
            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/projects.scss" lang="scss">

</style>

<script setup>
defineProps({ blok: Object })
</script>