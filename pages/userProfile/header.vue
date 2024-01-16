<template>
    <div>
        <div class="container">
            <div class="logo">
                <img src="~/assets/icons/AnimmoLogo.png" alt="">
            </div>
            <div class="returnToSite">
                <button id="return">
                    بازگشت به سایت
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendHeader',

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
#return {
    width: 172px;
    height: 42px;
    background: #2F3BBD;
    border: none;
    border-radius: 8px;
    padding: 9px 16px 9px 16px;
    color: white;
}
.returnToSite{
    margin-right: 82.5%;
    margin-top: 30px;
}

.logo {
    height: 0px;
}

img {
    width: 216px;
    height: 77px;
    margin-right: 10%;
}
</style>