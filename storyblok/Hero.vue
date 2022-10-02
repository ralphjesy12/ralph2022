<template>
    <div v-editable="blok" class="hero-blok">
        <div class="container mx-auto place-items-center">
            <h1 class="blok-title" v-html="blok.title"></h1>
            <div class="hero-social">
                <StoryblokComponent v-for="icon in blok.icons" :key="icon._uid" :blok="icon" />
            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/hero.scss" lang="scss">

</style>

<script setup>
defineProps({ blok: Object })
</script>