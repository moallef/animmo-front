<template>
    <div>
        <header>
            <header-app />
        </header>

        <div class="belt">
            <belt />
        </div>

        <Suspense class="backgound">
            <background />
        </Suspense>

        <Suspense class="blog">
            <theBlog />
        </Suspense>

        <footer>
            <footer-app />
        </footer>
    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import belt from '../blogs/blogBelt.vue'
import theBlog from './theblog.vue'
import background from './background.vue'

import { useBlogStore } from '~/store/blogStore.js';

export default {
    name: 'FrontendIndex',
    data() {
        return {
            blogs: [],
        };
    },
    
    components: {
        "header-app": header,
        "footer-app": footer,
        "belt": belt,
        "theBlog": theBlog,
        "background": background
    },
    
    async created() {
        this.blogs = await useBlogStore().fetchBlog();
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>
