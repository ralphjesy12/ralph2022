<template>
    <div v-editable="blok" id="about" class="about-blok">
        <div class="container mx-auto place-items-start">
            <div class="blok-grid">
                <div class="blok-content-wrapper">
                    <div class="blok-content" v-html="renderHTML(blok.content)"></div>
                    <div class="blok-buttons">
                        <StoryblokComponent v-for="button in blok.buttons" :key="button._uid" :blok="button" />
                    </div>
                </div>
                <img :src="(blok.image.filename + '/m/')" class="blok-image">
            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/about.scss" lang="scss">

</style>

<script setup>
defineProps({ blok: Object })

const renderHTML = function (blokField) {
    return renderRichText(blokField);
}
</script>