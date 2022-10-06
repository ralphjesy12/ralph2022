<template>
    <div v-editable="blok" id="apps" class="blok-section">
        <div class="container mx-auto place-items-start">
            <h1 class="blok-title" v-html="blok.title"></h1>
            <div class="blok-content" v-html="renderHTML(blok.content)"></div>
            <div class="blok-nav">
                <div class="blok-nav-item" v-for="category in categories" v-text="category"
                    @click="changeCategory(category)" :class="{ 'active' : category === activeCategory }"></div>
            </div>
            <div class="blok-apps">
                <StoryblokComponent v-for="app in displayApps" :key="app._uid" :blok="app" />
            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/apps.scss" lang="scss">

</style>

<script setup>
const props = defineProps({ blok: Object })

const categories = computed(() => {
    const existing = [...new Set(props.blok.apps.map(item => item.category))].sort();
    return ['all', ...existing];
})

const activeCategory = ref('all');

const changeCategory = function (category) {
    activeCategory.value = category;
}

const filteredApps = computed(() => {

    if (activeCategory.value === 'all') return props.blok.apps;

    return props.blok.apps.filter((app) => {
        return app.category === activeCategory.value;
    });
})

const displayApps = computed(() => {
    return [...filteredApps.value].sort(function (a, b) {
        if (a.name < b.name)
            return -1;
        if (a.name > b.name)
            return 1;
        return 0;
    });
});

const renderHTML = function (blokField) {
    return renderRichText(blokField);
}
</script>