<template>
    <div>
        <div class="harder">
            <header-component />
        </div>

        <div class="content">
            <div class="menu">
                <menu-component />
            </div>
            <div class="main">
                <main-component />
            </div>
        </div>
    </div>
</template>

<script>
import header from './header.vue';
import main from './main.vue';
import menu from './menu.vue';

export default {
    name: 'FrontendIndex',

    data() {
        return {

        };
    },
    components: {
        "header-component": header,
        "menu-component": menu,
        "main-component": main,
    },

    mounted() {
    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
*{
    direction: rtl;
}
.content {
    width: 90%;
    margin-inline: 10%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 20px;
}

.menu {
    margin-left: 1%;
    width: 287px;
}
.main{
    width: 65%;
}
</style>