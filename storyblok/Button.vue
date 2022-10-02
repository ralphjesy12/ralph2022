<template>
    <a :href="blok.link.url" v-editable="blok" v-text="blok.label" :class="[('btn-' + blok.theme)]"></a>
</template>

<script setup>
defineProps({ blok: Object })
</script>