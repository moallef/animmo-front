<template id="slider">
    <Swiper class="slider" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
        :effect="'creative'" :autoplay="sliderAutoPlay = {
            delay: 5000,
        }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
        <SwiperSlide class="container" v-for="banner in bannerList" :key="banner.imgSrc" @v-on:mouseover="stopRotarion"
            @mouseout="stopRotarion">
            <nuxt-link class="routerLink" to="">
                <img :src="`http://127.0.0.1:8000/${banner.imgSrc}`" alt="" @mouseenter="stopRotation" @mouseout="stopRotation">
            </nuxt-link>
            
        </SwiperSlide>

    </Swiper>
</template>

<script>
import * as axios from 'axios'
import { getSlider } from '~/API/slider.js'

export default {
    modules: {
    },
    data() {
        return {
            playing: false,
            bannerList: [],
            sliderAutoPlay: true,
        }
    },

    methods: {
        stopRotarion() {
            this.sliderAutoPlay = !this.sliderAutoPlay
        }
    },
    async beforeCreate() {
        try {
            const data = await getSlider()
            data.forEach(element => {
                this.bannerList.push({
                    id: element.id,
                    imgSrc: element.image,
                    name: element.name
                })
            });
        } catch (error) {
            console.log(error);   
        }
    },
}


</script>

<style scoped>
.container {
    border-radius: 15px;
}

img {
    border-radius: 15px;
    width: 100%;
    height: 270px;
}

ul {
    list-style-type: none;
}

.slider {
    height: 270px;
    width: 93%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 40px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

li {
    display: none;
}

li.on {
    display: block;
}
</style>