<template id="slider">
    <Swiper class="slider" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
        :effect="'creative'" :autoplay="sliderAutoPlay" :creative-effect="{
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
                <img :src="`https://animmo.ir/${banner.imgSrc}`" alt="">
            </nuxt-link>

        </SwiperSlide>

    </Swiper>
</template>

<script>
import { getSlider } from '~/API/slider.js'

export default {
    modules: {
    },
    data() {
        return {
            playing: false,
            bannerList: [],
            sliderAutoPlay: true,
            sliderAutoPlay: {
                delay: 5000,
            },
        }
    },

    methods: {
        stopRotarion() {
            this.sliderAutoPlay = !this.sliderAutoPlay
        },
        updateDelay(newDelay) {
            this.sliderAutoPlay.delay = newDelay;
        },
    },
    beforeCreate() {
        getSlider()
            .then(data => {
                if (data) {
                    this.bannerList = data.map(element => ({
                        id: element.id,
                        imgSrc: element.banner,
                        name: element.name
                    }));
                }
            })
            .catch(error => {
                console.error("Error in beforeCreate ", error);
            })
    }
}


</script>

<style scoped>
.container {
    border-radius: 15px;
}

img {
    border-radius: 15px;
    width: 100%;
    height: 570px;
}

ul {
    list-style-type: none;
}

.slider {

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

@media (max-width : 1200px) {
    img {
        border-radius: 15px;
        width: 100%;
        height: 550px;
    }
}

@media (max-width : 900px) {
    img {
        border-radius: 15px;
        width: 100%;
        height: 400px;
    }
}

@media (max-width : 600px) {
    img {
        border-radius: 15px;
        width: 100%;
        height: 200px;
    }
}
@media (max-width : 500px) {
    img {
        border-radius: 15px;
        width: 100%;
        height: 170px;
    }
}
</style>