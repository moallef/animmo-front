<template>
    <div>
        <header>
            <header-app/>
        </header>

        <div class="belt">
            <belt/>
        </div>

        <div class="blog">
            <Blog/>
        </div>

        <footer>
            <footer-app/>
        </footer>

    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import belt from './blogBelt.vue'
import theBlog from './theBlog.vue'

export default {
    name: 'FrontendIndex',

    data() {
        return {
            
        };
    },

    components: {
        "header-app" : header,
        "footer-app" : footer,
        "belt" : belt,
        "Blog": theBlog,
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.blog{
    width: 40%;
    margin-top: 40px;
    margin-inline: 5%;
}
</style>