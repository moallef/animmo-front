<template>
    <div class="menu">
        <div class="menuObj">
            <img src="" alt="">
            دوره های خریداری شده من
        </div>
        <div class="menuObj">
            <img src="" alt="">
            سوابق پرداخت
        </div>
        <div class="menuObj">
            <img src="" alt="">
            ویرایش پروفایل
        </div>
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
    width: 287px;
    height: 720px;
    border-radius: 16px;
}
.menuObj{
    height: 24px;  
    margin-right: 15px;
    cursor: pointer;
    padding-top: 30px;
    margin-bottom: 10px;
}
.menuObj:hover{
    color: #8569C2;
}
</style>