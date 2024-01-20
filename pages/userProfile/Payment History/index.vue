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
                <payment-history />
            </div>
        </div>
    </div>
</template>

<script>
import header from '../header.vue';
import menu from '../menu.vue';
import payments from './paymentHistory.vue'

export default {
    name: 'FrontendIndex',

    data() {
        return {
            
        };
    },
    components:{
        "header-component": header,
        "menu-component": menu,
        "payment-history": payments,
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.content {
    width: 80%;
    margin-inline: 10%;
}

.menu {
    margin-left: 1%;

}

.content {
    display: flex;
    margin-top: 20px;
}
</style>