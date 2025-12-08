<template>
    <div v-editable="blok" class="hero-blok">
        <ClientOnly>
            <div style="width: 100%; height: 600px; position: absolute; top: 0; left: 0; z-index: 0;">
                <LazyPixelBlast
                    variant="circle"
                    :pixel-size="6"
                    color="#A7EF9E"
                    :pattern-scale="3"
                    :pattern-density="1.2"
                    :pixel-size-jitter="0.5"
                    :enable-ripples="true"
                    :ripple-speed="0.4"
                    :ripple-thickness="0.12"
                    :ripple-intensity-scale="1.5"
                    :liquid="true"
                    :liquid-strength="0.12"
                    :liquid-radius="1.2"
                    :liquid-wobble-speed="5"
                    :speed="0.6"
                    :edge-fade="0.25"
                    :transparent="true"
                />
            </div>
        </ClientOnly>
        <div class="container mx-auto place-items-center" style="position: relative; z-index: 1;">
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