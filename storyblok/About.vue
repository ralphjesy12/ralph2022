<template>
    <div v-editable="blok" id="about" class="about-blok">
        <div class="container mx-auto place-items-start">
            <div class="blok-grid">
                <div class="blok-content-wrapper">
                    <div class="blok-content" v-html="renderHTML(blok.content)"></div>
                    <div class="blok-buttons">
                        <a :href="button.link.url" v-for="(button,b) in blok.buttons" v-text="button.label"
                            :class="[('btn-' + button.theme)]"></a>
                    </div>
                </div>
                <img :src="blok.image.filename" class="blok-image">

            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/about.scss" lang="scss">

</style>

<script setup>
import { render } from 'vue';

defineProps({ blok: Object })

const renderHTML = function (blokField) {
    return renderRichText(blokField);
}
</script>