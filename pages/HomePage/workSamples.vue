<template>
    <div>
        <main>
            <div class="workSamples">
                <p>نمونه کار هنرجویان</p>
                <div class="sampleBlock">
                    <div class="slider">
                        <Swiper class="slider" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
                            :loop="true" :effect="'creative'" :autoplay="sliderAutoPlay" :creative-effect="{
                                prev: {
                                    shadow: false,
                                    translate: ['-100%', 0, -1],
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                },
                            }">
                            <SwiperSlide class="Slider" v-for="(exercise, index) in exercises" :key="index">
                                <div class="theSample">
                                    <the-Sample :exercise="exercise" />
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
import { useExerciseStore } from '~/store/exerciseStore.js';
import theWorkSample from './theSample.vue';
import { SwiperSlide } from 'swiper/vue';

export default {
    components: {
        "the-Sample": theWorkSample,
        SwiperSlide
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
            exercises: [],
            playing: false,
            bannerList: [],
            sliderAutoPlay: true,
        };
    },
    async created() {
        const test = await useExerciseStore().fetchExercise();
        this.exercises = [...test]
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

.moreBtn:hover {
    background: #8569C2;
    color: white;
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

.smapleBtn:focus {
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
