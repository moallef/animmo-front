<template>
    <div>
        <div class="container">
            <div class="logo">
                <nuxt-link to="/">
                    <img v-if="banner" :key="banner.header_logo" :src="`https://animmo.ir/${banner.header_logo}`"
                        alt="Animmo" />
                </nuxt-link>
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
import { getSlider } from '~/API/slider.js'

export default {
    name: 'FrontendHeader',

    data() {
        return {

        };
    },

    beforeCreate() {
        getSlider()
            .then(data => {
                if (data) {
                    this.banner = { header_logo: data[0].header_logo };
                }
            })
            .catch(error => {
                console.error("Error in beforeCreate ", error);
            })
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

.logo img {
    width: 60%;
    height: 60px;
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