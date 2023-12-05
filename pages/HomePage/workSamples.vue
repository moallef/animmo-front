<template>
    <div>
        <main>
            <div class="workSamples">
                <p>نمونه کار هنرجویان</p>
                <div class="sampleBlock">
                    <div class="sections" id="sampleSection">
                        <button class="smapleBtn">
                            دو بعدی
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            سه بعدی
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            فیلمنامه نویسی
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            فتوشاپ
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            ایلستریتور
                            <img src="" alt="">
                        </button>
                    </div>

                    <div class="slider">

                        <Swiper class="Swiper" :modules="[SwiperAutoplay, SwiperEffectCreative]"
                            :slides-per-view='isMobile ? 1 : 3' :loop="false" :effect="'creative'" :autoplay="sliderAutoPlay = {
                                delay: 1500,
                            }" :creative-effect="{
                                prev: {
                                    shadow: false,
                                    translate: ['-100%', 0, -1],
                                },
                                next: {
                                    translate: ['100%', 1, 0],
                                },
                            }">
                            <SwiperSlide class="Slider" v-for="sample in samples" :key="samples.sampleSrc">
                                <div class="theSample">
                                    <the-Sample />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div>
                        <nuxt-link to="/workSamples">
                            <button class="moreBtn">
                                مشاهده همه
                                <img src="../../assets/icons/Vector (4).png" alt="">
                            </button>
                        </nuxt-link>
                    </div>

                </div>
            </div>
        </main>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper';
import theWorkSample from './theSample.vue'

export default {
    components: {
        "the-Sample": theWorkSample,
    },
    setup() {
    const isMobile = ref(false)

    const handleResize = () => {
      isMobile.value = window.innerWidth < 600
    }

    onMounted(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
    })

    return {
      isMobile
    }
  },
    data() {
        return {
            sliderPerView: 2,
            playing: false,
            samples: [
                { sampleSrc: theWorkSample, route: '', },
                { sampleSrc: theWorkSample, route: '', },
                { sampleSrc: theWorkSample, route: '', },
                { sampleSrc: theWorkSample, route: '', },
            ],
            sliderAutoPlay: true,
        }
    },
    methods: {
    },


}
</script>

<style scoped>
.workSamples {

    text-align: center;
    width: 100%;
    background: #252565;
    text-align: center;
    border-radius: 30px;
    padding-top: 20px;
    margin-top: 80px;
}

.workSamples p {
    color: #F4F4F4;
    width: 100%;
    height: 12px;
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    margin-block: 30px;
}

.moreBtn {
    margin-top: 60px;
    color: #8569C2;
    width: 9%;
    height: 49px;
    border-radius: 49px;
    background: none;
    border: 2px solid #8569C2;
    font-size: 100%;
    font-weight: 400;
    margin-bottom: 40px;
}

#sampleSection {
    margin: auto;
    width: 60%;
    height: 64px;
    padding: 5px;
    border-radius: 45px;
    gap: 4px;
    background: #16163D;
}

.smapleBtn {
    width: 20%;
    height: 56px;
    border-radius: 30px;
    gap: 16px;
    background: #252565;
    border: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    color: #B6A5DA;

}

.slider {
    margin-left: 1%;
    margin-top: 10px;
}

.smapleBtn:hover {
    background: #8569C2;
    color: #F9F9F9;
}
.smapleBtn:focus{
    background: #8569C2;
    color: #F9F9F9;
}

@media (max-width : 970px) {
    .moreBtn {
        width: 20%;
    }
}

@media (max-width : 850px) {
    .sections {
        display: none;
    }

    .moreBtn {
        width: 22%;
        height: 45px;
    }
}


@media (max-width : 550px) {
    .moreBtn {
        width: 30%;
        height: 40px;
    }
}
</style>
