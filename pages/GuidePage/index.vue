<template>
    <div>
        <header>
            <header-app/>
        </header>

        <div class="belt">
            <belt/>
        </div>

        <div class="guide">
            <giude/>
        </div>

        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import belt from './belt.vue'
import giude from './guide.vue'

export default {
    name: 'FrontendGuide',

    data() {
        return {
            
        };
    },

    components: {
        "header-app" : header,
        "footer-app" : footer,
        "belt" : belt,
        "giude" : giude,
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>

</style>