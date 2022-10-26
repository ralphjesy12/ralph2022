<template>
    <div v-editable="post" class="blok-post">
        <div class="post-overview">
            <div class="container mx-auto">
                <h1 class="post-title" v-text="post.title"></h1>
                <div class="post-meta">
                    <div class="post-tags">
                        <a :href="tag.url" v-for="(tag, t) in tags" v-text="tag.name"></a>
                    </div>
                    &middot;
                    <time :datatime="post.date" v-text="parseDate(post.date)"></time>
                </div>
                <div class="post-description" v-html="post.description"></div>
                <div class="post-image">
                    <img :src="(post.image.filename + '/m/')" :alt="post.title">
                </div>
            </div>
        </div>
        <div class="post-content-wrapper">
            <div class="container mx-auto">
                <div class="post-content" v-html="renderHTML(post.content)">
                </div>
            </div>
            <ClientOnly>
                <div class="container mx-auto my-48">
                    <div class="post-comments">
                        <Disqus />
                    </div>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>
   
<script setup>
import { parse } from 'node-html-parser';

const props = defineProps({ story: Object })

const kebabCase = str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .join('-')
    .toLowerCase()
const post = props.story.content;

const reformatRichText = function (html) {
    const root = parse(html);

    // Add ID to Headers
    const headers = root.querySelectorAll('h1');

    for (let i = 0; i < headers.length; i++) {
        const element = headers[i];
        element.setAttribute('id',kebabCase(element.text));
    }

    // Add Image Optimizations
    const images = root.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        const element = images[i];
        const src = element.getAttribute('src');
        element.setAttribute('src',src + '/m/');
    }

    return root.toString();
}

const renderHTML = function (blokField) {
    return reformatRichText(renderRichText(blokField));
}

const tags = computed(() => {
    const tagObject = [];
    props.story.tag_list.forEach(tag => {
        const slug = kebabCase(tag);
        tagObject.push({
            slug: slug,
            url: `/tags/${slug}`,
            name: tag
        });
    });

    return tagObject;
});

const parseDate = function (date) {
    return (new Date(date)).toDateString()
}
</script>