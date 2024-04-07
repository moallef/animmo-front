<template>
    <div>
        <Suspense class="harder">
            <header-component />
        </Suspense>

        <div class="content">
            <div class="menu">
                <menu-component />
            </div>
            <Suspense class="main">
                <main-component />
            </Suspense>
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
@media (max-width: 930px) {
    .menu{
        width: 150px;
    }
}
@media (max-width: 800px) {
    .menu{
        display: none;
    }
    .main{
        margin-left: 5%;
        width: 85%;
}
}
</style>