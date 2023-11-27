<template>
    <div>
        <header>
            <header-app />
        </header>

        <div class="belt">
            <belt />
        </div>

        <div class="backgound">
            <background />
        </div>

        <div class="blog">
            <theBlog />
        </div>

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



export default {
    name: 'FrontendIndex',
    data() {
        return {}
    },

    components: {
        "header-app": header,
        "footer-app": footer,
        "belt": belt,
        "theBlog": theBlog,
        "background": background
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped></style>
