<template>
    <div>
        <div class="container">
            <div class="logo">
                <img src="~/assets/icons/AnimmoLogo.png" alt="">
            </div>
            <div class="returnToSite">
                <nuxt-link to="/">
                    <button id="return">
                        بازگشت به سایت
                    </button>
                </nuxt-link>
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
    margin-left: 4%;
}

.returnToSite {
    text-align: left;
    margin-top: 30px;
    margin-left: 11%;
}

.logo {
    height: 0px;
}

img {
    width: 216px;
    height: 77px;
    margin-right: 10%;
}
@media (max-width: 600px) {
    img {
    width: 116px;
    height: 37px;
    margin-right: 10%;
}
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
}
</style>