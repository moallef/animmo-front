<template>
    <div>
        <header>
            <header-app/>
        </header>

        <div class="belt">
            <belt/>
        </div>

        <div class="background">
            <img src="../../assets/images/image 10.png" alt="">
        </div>

        <!-- <div class="blog">
            <theBlog/>
        </div> -->

        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import belt from '../Blogs/blogs.vue'



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
        "theBlog" : theBlog,
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.background image{
    width: 100%;
}
</style>
