<template>
    <div class="menu">
        <nuxt-link to="/userProfile">
            <div class="menuObj" ref="">
                <img src="" alt="">
                دوره های خریداری شده من
            </div>
        </nuxt-link>
        <nuxt-link to="/userProfile/payment history">
            <div class="menuObj">
                <img src="" alt="">
                سوابق پرداخت
            </div>
        </nuxt-link>
        <nuxt-link to="/userProfile/Edit profile">
            <div class="menuObj">
                <img src="" alt="">
                ویرایش پروفایل
            </div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'FrontendMenu',

    data() {
        return {

        };
    },

    mounted() {
    },

    methods: {
    },
};
</script>

<style lang="scss" scoped>
.menu {
    background: #F9F9F9;
    color: #2F2F2F;
    width: 100%;
    height: 720px;
    border-radius: 16px;
}

.menu a {
    color: #2F2F2F;
    text-decoration: none;
}

.menuObj {
    height: 24px;
    margin-right: 15px;
    cursor: pointer;
    padding-top: 30px;
    margin-bottom: 10px;
}

.menuObj:hover,
.menuObj:focus {
    color: #8569C2;
}
</style>