<template>
    <div class="blok-project-teaser" v-editable="blok">
        <a :href="blok.link.url" target="_blank" class="blok-project-teaser-link">
            <img :src="blok.image.filename" :alt="blok.title" class="blok-project-teaser-image">
        </a>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>