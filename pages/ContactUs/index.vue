<template>
    <div>
        <header>
            <header-app/>
        </header>

        <div class="belt">
            <belt/>
        </div>

        <div class="contactUs">
            <contactUs/>
        </div>

        <footer>
            <footer-app/>
        </footer>
    </div>
</template>

<script>
import header from '../header.vue';
import footer from '../footer.vue';
import belt from './belt.vue';
import contactUs from './contactUs.vue';

export default {
    name: 'FrontendIndex',

    data() {
        return {

        };
    },
    components: {
        "header-app": header,
        "footer-app": footer,
        "belt": belt,
        "contactUs": contactUs
    },


    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>