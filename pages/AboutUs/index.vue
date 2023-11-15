<template>
    <div>
        <header>
            <header-app/>
        </header>

        <div class="belt">
            <blet/>
        </div>

        <div class="aboutUs">
            <aboutus/>
        </div>

        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<script>
import header from '../header.vue'
import footer from '../footer.vue'
import blet from './belt.vue'
import aboutUs from './aboutUs.vue'

export default {
    name: 'FrontendIndex',

    data() {
        return {
            
        };
    },
    components: {
        "header-app" : header,
        "footer-app" : footer,
        "blet": blet,
        "aboutus": aboutUs
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>