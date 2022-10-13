<template>
    <div v-editable="blok" id="articles" class="blok-section">
        <div class="container mx-auto place-items-start">
            <h1 class="blok-title" v-html="blok.title"></h1>
            <div class="blok-content" v-html="renderHTML(blok.description)"></div>
        </div>
        <div class="container mx-auto place-items-start">
            <div class="article-grid">
                <article v-for="(article,a) in articles">
                    <a :href="`/${article.full_slug}`">
                        <img class="article-image" :src="article.content.image.filename">
                        <h2 class="article-title" v-text="article.content.title"></h2>
                        <div class="post-meta">
                            <div class="post-tags">
                                <a :href="tag.url" v-for="(tag,t) in tags(article)" v-text="tag.name"></a>
                            </div>
                            &middot;
                            <time :datatime="article.content.date" v-text="parseDate(article.content.date)"></time>
                        </div>
                        <div class="article-description" v-text="limitText(article.content.description)"></div>
                    </a>
                </article>
            </div>
        </div>
    </div>
</template>

<style src="~/assets/scss/blok/articles.scss" lang="scss">

</style>

<script setup>
const props = defineProps({ blok: Object })

const config = useRuntimeConfig()

const storyblokApi = useStoryblokApi();
const stories = await storyblokApi.get('cdn/stories',
    {
        starts_with: 'blog/',
        version: config.public.STORY_VERSION,
    }
)
const kebabCase = str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase()

const tags = function(story){
    const tagObject = [];
    story.tag_list.forEach(tag => {
        const slug = kebabCase(tag);
        tagObject.push({
            slug: slug,
            url: `/tags/${slug}`,
            name: tag
        });
    });

    return tagObject;
};

const articles = stories.data.stories.filter((story) => !story.is_startpage)

const parseDate = function (date) {
    return (new Date(date)).toDateString()
}

const renderHTML = function (blokField) {
    return renderRichText(blokField);
}

const limitText = function (text) {
    return text.substr(0, 100) + '...';
}
</script>