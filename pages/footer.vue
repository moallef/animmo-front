<template>
    <div>
        <footer>
            <button class="scrollUp" @click="scrollUp()">
                <img src="../assets/icons/arrow-142-16.png" alt="">
            </button>

            <div class="block">
                <div id="logo">
                    <nuxt-link to="/">
                        <img v-if="banner" :key="banner.footer_logo" :src="`https://animmo.ir/${banner.footer_logo}`" alt="Animmo"/>
                    </nuxt-link>
                </div>

                <div class="container">
                    <ul class="menu__box">
                        <div class="firstRow">
                            <li>
                                <nuxt-link to="/">
                                    <img class="navBarImage" src="../assets/icons/HomePage.png" alt="Home">
                                    صفحه اصلی
                                </nuxt-link>
                            </li>
                            <li> <nuxt-link to="/workSamples">

                                    <img class="navBarImage" src="../assets/icons/WorkSamples.png" alt="Work Samples">
                                    نمونه کار هنر جویان
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/GuidePage">

                                    <img class="navBarImage" src="../assets/icons/help-circle.png" alt="Blog">
                                    راهنما

                                </nuxt-link>
                            </li>
                        </div>
                        <div class="secondRow">

                            <li>
                                <nuxt-link to="/Blogs">

                                    <img class="navBarImage" src="../assets/icons/Blog.png" alt="Blog">
                                    بلاگ

                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/AboutUs">
                                    <a class="menu__item" href="#">
                                        <img class="navBarImage" src="../assets/icons/alert-octagon.png" alt="AboutUs">
                                        درباره ما
                                    </a>
                                </nuxt-link>
                            </li>
                            <li> <nuxt-link to="/contactUs">

                                    <img class="navBarImage" src="../assets/icons/Contacts.png" alt="Contacts">
                                    تماس با ما

                                </nuxt-link>
                            </li>
                        </div>
                    </ul>

                    <div class="aboutUs" style="display: none;">
                        <div id="backUpNum">
                            شماره های پشتیبانی :
                        </div>
                        <div id="firstNum">
                            {{ firstNum }}
                        </div>
                        <div id="secondNum">
                            {{ secondNum }}
                        </div>
                        <div class="workTime">
                            {{ workTime }}
                        </div>
                    </div>

                    <div class="comunicateBlock">

                        <div class="certificates">
                            <a href="https://enamad.ir/" target="_blank">
                                <img class="certificateIcon" id="e-namad" src="../assets/icons/e-namad.png" alt="e-namad">
                            </a>

                        </div>

                        <div class="comunications">
                            <a>
                                <img class="comunicationsButton" src="../assets/icons/social media/Untitled-2-04.svg"
                                    alt="">
                            </a>
                            <a>
                                <img class="comunicationsButton" src="../assets/icons/social media/Untitled-2-05.svg"
                                    alt="">
                            </a>
                            <a>
                                <img class="comunicationsButton" src="../assets/icons/social media/Untitled-2-06.svg"
                                    alt="">
                            </a>
                            <a>
                                <img class="comunicationsButton" src="../assets/icons/social media/Untitled-2-02.svg"
                                    alt="">
                            </a>
                            <a>
                                <img class="comunicationsButton" src="../assets/icons/social media/Untitled-2-01.svg"
                                    alt="">
                            </a>
                            <a>
                                <img class="comunicationsButton" src="../assets/icons/social media/Untitled-2-03.svg"
                                    alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import {getSlider} from '~/API/slider.js'

export default {
    data() {
        return {
            name: "",
            family: "",
            banner: '',
            firstNum: "۰۲۱۳۳۶۷۸۵۵",
            secondNum: "۰۲۱۳۳۶۷۸۴۷",
            workTime: "زمان پاسخگویی تلفن از ساعت ۸ الی 16 روز های غیر تعطیل "
        }
    },
    beforeCreate() {
    getSlider()
      .then(data => {
        if (data) {
          this.banner = { footer_logo: data[0].footer_logo };
        }
      })
      .catch(error => {
        console.error("Error in beforeCreate ", error);
      })
  },
    methods: {
        scrollUp() {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        },
    },
    computed: {

    }
}
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
footer {
    text-align: center;
    width: 100%;
    margin-top: 100px;
}

button {
    border: none;
}

.scrollUp {
    margin-left: 80%;
    width: 42px;
    height: 42px;
    background: #DF59A1;
    border-radius: 50%;
    border: none;
    margin-bottom: 20px;
}

.block {
    background: #252565;
    width: 100%;
}

.comunicateBlock {
    text-align: center;
    width: 35%;
    margin-right: 65%;
}

.aboutUs {
    display: flex;
    flex-direction: column;
    color: white;
    text-align: right;
    width: 25%;
    margin-right: 39%;
    height: 0px;
    margin-top: 45px;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;
}

.menu__box {
    width: 35%;
    text-align: right;
    margin-right: 5%;
    list-style: none;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    height: 0px;
}

li {
    padding-top: 50px;
}

.navBarImage {
    padding-left: 10px;
}

.firstRow {
    height: 0px;
}

.secondRow {
    margin-right: 50%;
}
.certificates{
    text-align: left;
    margin-left: 5%;
}

a {
    color: white;
}

.certificateIcon {
    width: 18%;
    margin-top: -50px;
    margin-bottom: 40px;
    margin-inline: 5%;

}

#logo {
    text-align: right;
    margin-right: 5%;
    padding-top: 30px;
}

#logo img {
    width: 12%;
}

.comunications {
    width: 100%;
    padding-bottom: 80px;
}

.comunications a {
    margin-inline: 10px;
    cursor: pointer;
}

.comunications img {
    width: 10%;
}

#firstNum,
#secondNum {
    margin-top: 20px;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: -0.02em;

}

.workTime {
    margin-top: 30px;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #8569C2;
}
.comunicationsButton{
    height: 50px;
    width: 50px
}

@media (max-width:1400px) {
    .aboutUs {
        margin-right: 35%;
    }
}

@media (max-width:1200px) {
    .aboutUs {
        display: none;
    }

    .comunicateBlock {

        padding-top: 80px;
    }
}

@media (max-width:1000px) {
    .firstRow {
        height: unset;
    }

    .secondRow {
        margin-right: 0;
    }

    li {
        padding-top: 20px;
    }

    #logo img {
        width: 17%;
    }

    .comunicateBlock {
        width: 45%;
        margin-right: 50%;
    }
}

@media (max-width:1000px) {
    .certificateIcon {
        display: none;
    }

    #e-namad {
        display: block;
        margin-right: 70%;
    }

    .comunicateBlock {
        width: 65%;
        margin-right: 35%;
    }

}

@media (max-width:550px) {
    li{
        font-size: 14px;
    }
    .comunicateBlock {
        margin-top: 50px;
    }
    .comunications a {
    margin-inline: 5px;
}
}
@media (max-width:480px) {
    #e-namad {
        width: 40%;
        margin-right: 40%;
        margin-top: -100px;
    }
    .comunications{
        margin-right: -10%;
        margin-top: 60px;
    }
}

</style>