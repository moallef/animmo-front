<template id="slider">
    <Swiper 
        class="slider" 
        :modules="[SwiperAutoplay, SwiperEffectCreative]" 
        :slides-per-view="1"
        :loop="true"
        :effect="'creative'"
        :autoplay="sliderAutoPlay = {
            delay : 5000,
        }"
        :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-100%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
    <SwiperSlide class="container" v-for="banner in bannerList" :key="banner.imgSrc">
      <nuxt-link class="routerLink" to="">
          <img :src="banner.imgSrc" alt="" @mouseenter="stopRotarion" @mouseout="stopRotarion">
      </nuxt-link>
    </SwiperSlide>
    
    </Swiper>
</template>

<script>
import pic1 from '../../assets/images/SliderPic.png'
import pic2 from '../../assets/images/image 11.png'


export default  {
    modules: {
    },  
    data() {
        return {
            playing: false,
            bannerList: [
                { imgSrc: pic1, Rout: ''},
                { imgSrc: pic2, Rout: ''},
                { imgSrc: pic1, Rout: ''},
                { imgSrc: pic2, Rout: ''},
            ],
            sliderAutoPlay: true
        }
    },

    methods: {
        stopRotarion() {
            this.sliderAutoPlay = !this.sliderAutoPlay
            console.log(this.sliderAutoPlay);
        }
    }
}


</script>

<style scoped>
.container{
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