<template>
    <div>
        <header>
            <header-app />
        </header>

        <div class="belt">
            <belt />
        </div>

        <Suspense class="blog">
            <Blog v-for="(blog, index) in blogs" :key="index" :index="index" />
        </Suspense>

        <footer>
            <footer-app />
        </footer>

    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import belt from './blogBelt.vue'
import Blog from './blogs.vue'
import { useBlogStore } from "~/store/blogStore.js";

export default {
    name: 'FrontendIndex',

    data() {
        return {
            blogs: [],
        };
    },
    props: {

    },
    async created() {
        this.blogs = await useBlogStore().fetchBlog();
    },

    components: {
        "header-app": header,
        "footer-app": footer,
        "belt": belt,
        "Blog": Blog,
    },
};
</script>

<style lang="scss" scoped>
.blog {
    width: 90%;
    margin-top: 40px;
    display: flex;
    justify-content: right;
    flex-wrap: wrap;
}

footer {
    margin-top: 150px;
}
</style>