<template>
    <a v-editable="blok" :href="blok.url.url" class="blok-app aspect-square" :class="{ 'blok-app-tiled' : blok.tiled }">
        <img :src="blok.icon.filename" class="blok-app-icon">
        <div class="blok-app-name" v-text="blok.name"></div>
    </a>
</template>

<script setup>
defineProps({ blok: Object })
</script>