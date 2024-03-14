<template>
    <div class="cardContainer">
        <div class="card" v-for="(course, index) in userCourses">
            <img id="courseCover" :src="`https://animmo.ir/${course.image}`" alt="course image">
            <div class="text">
                <div class="title"> {{ course.course }}</div>
                <div class="teacher"> {{ course.teacher }} </div>
                <div class="during">
                    <div class="seasons">
                        <img class="icon" src="~/assets/icons/clock-3-16.png" alt="">
                        {{ course.season }} فصل
                    </div>
                    <div class="hours">
                        <img class="icon" src="~/assets/icons/pngaaa.com-630491.png" alt="">
                        {{ course.duration }} ساعت
                    </div>
                </div>
    
                <button @click="copyLicense(course)">
                    کپی لایسنس اسپات پلیر
                    <img class="icon" src="~/assets/icons/icons8-shape-64.png" alt="">
                </button>
    
                <div class="backupNumber">شماره پشتیبانی: {{ }}</div>
                <div class="line"></div>
                <nuxt-link to="/GuidePage">
                    <div class="guide">راهنمای نصب و راه اندازی اسپات پلیر</div>
                </nuxt-link>
            </div>
    
        </div>
    </div>
</template>

<script>
import {useUserPannel} from '@/store/userPannel'

export default {
    name: 'FrontendCourses',

    data() {
        return {
            userCourses : '',
        };
    },

    async created(){
        const store =  useUserPannel();
        this.userCourses = await store.fetchUserPannel();
    },

    methods: {
        copyLicense(course) {
            const licenseText = course.spot_player_license;

            const textarea = document.createElement("textarea");
            textarea.value = licenseText;

            textarea.style.position = "fixed";
            textarea.style.opacity = 0;

            document.body.appendChild(textarea);

            textarea.select();

            document.execCommand("copy");

            document.body.removeChild(textarea);

            alert("لایسنس با موفقیت کپی شد!");
        }
    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'PeydaWeb';
    src: url('/assets/Fonts/PeydaWeb/PeydaWeb.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.cardContainer{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
.card {
    width: 30%;
    margin: 20px;
}

#courseCover {
    width: 84%;
    height: 89px;
    border-radius: 8px;
    margin-inline: 8%;
}

.text {
    width: 100%;
    height: 267px;
    border-radius: 16px;
    background: #F4F4F4;
    margin-top: -80px;
    padding-top: 80px;
    padding-inline: 10px;
}

.title {
    font-family: 'IRAN Yekan';
    font-size: 16px;
    font-weight: 800;
    line-height: 15px;
    letter-spacing: -0.04em;
    height: 19px;
    margin-top: 5px;
}

.teacher {
    color: #646464;
    height: 19px;
    font-family: 'IRAN Yekan';
    font-size: 12px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.04em;
}

.during {
    font-family: 'IRAN Yekan';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.04em;
    color: #979797;
}

.seasons {
    height: 0px;
}

.hours {
    text-align: left;
    margin-left: 8%;
}

.icon {
    margin-left: 2px;
    width: 12px;
}

button {
    width: 147px;
    height: 24px;
    border-radius: 16px;
    border: none;
    background: #252565;
    margin-block: 15px;
    color: white;
}

.backupNumber {
    font-family: 'PeydaWeb', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.02em;
    color: #7D7D7D;
}

.line {
    border: 1px solid #C9C9C9;
    width: 90%;
    margin-inline: 5%;
    margin-block: 15px;
}

.guide {
    color: #7D7D7D;
    font-family: 'PeydaWeb', sans-serif;
    font-size: 11px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
}
@media (max-width: 970px) {
    button{
        width: 96%;
    }
    .card{
        width: 60%;
    }
}
@media (max-width: 750px) {
    .card{
        width: 80%;
    }
}
</style>