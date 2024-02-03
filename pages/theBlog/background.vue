<template>
    <div>
        <div class="background">
            <img id="bground" :src="`https://animmo.ir/api/${blog.imgSrc}`" alt="">
        </div>
    </div>
</template>

<script>
import {useBlogStore} from '~/store/blogStore.js'

export default{
    props: {
        index: Number,
    },
    data() {
        return {
            blog: {},
            maxLength: 60,
        };
    },
    async beforeCreate() {
        const store = useBlogStore();
        const blogs = await store.fetchBlog();
        this.blog = blogs[this.index] || {};
    },
    methods: {
        truncateText(text, maxLength) {
            if (text.length > maxLength) {
                return text.slice(0, maxLength) + '...';
            }
            return text
        }
    }
}
</script>

<style scoped>
#bground {
    width: 100%;
}
</style>