<template>
    <div class="hero-social-link" v-editable="blok">
        <a :href="blok.link.url">
            <img :src="(blok.icon.filename + '/m/')" class="hero-social-icon" :alt="blok.name">
        </a>
    </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>