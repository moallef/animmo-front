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

                            <Swiper  
                            :modules="[SwiperAutoplay, SwiperEffectCreative]" 
                            :slides-per-view="3"
                            :loop="false" :effect="'creative'" :autoplay="sliderAutoPlay = {
                                delay: 1500,
                                }" :creative-effect="{
                                prev: {
                                    shadow: false,
                                    translate: ['-100%', 0, -1],
                                },
                                next: {
                                    translate: ['100%', 0, 0],
                                },
                                }">
                                <SwiperSlide class="Slider" 
                                    v-for="sample in samples" 
                                    :key="samples.sampleSrc">
                                 <the-Sample />
                                </SwiperSlide>
                    
                            </Swiper>
                    </div>

                    <div>
                        <button class="moreBtn">
                            مشاهده همه
                            <img src="../../assets/icons/Vector (1).png" alt="">
                        </button>
                    </div>

                </div>
            </div>
        </main>
    </div>
</template>

<script>
import theWorkSample from './theSample.vue'

export default {
    components: {
        "the-Sample": theWorkSample,
    },
    data(){
        return{
            playing: false, 
            samples : [
                { sampleSrc : theWorkSample},
                { sampleSrc : theWorkSample},
                { sampleSrc : theWorkSample},
                { sampleSrc : theWorkSample},
            ],
            sliderAutoPlay: true
        }
    }
}
</script>

<style scoped>
.workSamples {

    text-align: center;
    width: 100%;
    height: 630px;
    background: #252565;
    text-align: center;
    border-radius: 30px;
    padding-top: 20px;
    margin-top: 60px;
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
    margin-top: 130px;
    color: white;
    width: 9%;
    height: 49px;
    border-radius: 49px;
    background: #8569C2;
    border: none;
    font-size: 100%;
    font-weight: 400;
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
.slider{
    margin-inline: 3%;
    margin-top: 10px;
}
.smapleBtn:hover {
    background: #8569C2;
    color: #F9F9F9;
}
</style>
