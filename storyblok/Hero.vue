<template>
    <div v-editable="blok" class="hero-blok">
        <div class="container mx-auto place-items-center">
            <h1 class="blok-title" v-html="blok.title"></h1>
            <div class="hero-social">
                <div class="hero-social-link" v-for="(link,l) in blok.icons">
                    <a :href="link.link.url">
                        <img :src="link.icon.filename" class="hero-social-icon" :alt="link.name">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/hero.scss" lang="scss">

</style>

<script setup>
defineProps({ blok: Object })
</script>