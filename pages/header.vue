<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>

        <header>
            <div class="headIcons">
                <nuxt-link to="/shoppingBag">
                    <div class="shopIcon">
                        <a href="">
                            <div class="imgHolder">
                                <p class="shopNum">{{ shopNum }}</p>
                                <img src="../assets/icons/Group 91.png">
                            </div>
                        </a>
                    </div>
                </nuxt-link>

                <button @click="navigateToAuthentication" :class="this.authenticationSituation ? 'none' : 'signIn'">
                    ورود / ثبت نام
                </button>

                <nuxt-link :class="this.authenticationSituation ? 'userProfile' : 'none'" to="/userProfile">
                    پروفایل کاربری
                    <img src="~/assets/icons/users.png" alt="">
                </nuxt-link>



            </div>


            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <li>
                        <nuxt-link to="/">
                            <a class="menu__item" href="#">
                                <img src="../assets/icons/HomePage.png" alt="Home">
                                صفحه اصلی
                            </a>
                        </nuxt-link>
                    </li>
                    <li> <nuxt-link to="/workSamples">
                            <a class="menu__item" href="#">
                                <img src="../assets/icons/WorkSamples.png" alt="Work Samples">
                                نمونه کار هنر جویان
                            </a></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/Blogs">
                            <a class="menu__item" href="#">
                                <img src="../assets/icons/Blog.png" alt="Blog">
                                بلاگ
                            </a>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/AboutUs">
                            <a class="menu__item" href="#">
                                <img src="../assets/icons/AboutUs.png" alt="AboutUs">
                                درباره ما
                            </a>
                        </nuxt-link>
                    </li>
                    <li> <nuxt-link to="/contactUs">
                            <a class="menu__item" href="#">
                                <img src="../assets/icons/Contacts.png" alt="Contacts">
                                تماس با ما
                            </a>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </header>

        <div class="headBar">
            <div class="logo">
                <img v-if="banner" :key="banner.header_logo" :src="`https://animmo.ir/${banner.header_logo}`"
                    alt="Animmo" />
            </div>
            <div class="search" v-on:keyup.enter="onEnter">
                <i class="fa fa-search search_icon"></i>
                <input class="searchInput" type="text" placeholder="Search" />
            </div>
            <div class="navBar">

                <nuxt-link to="/" class="navLink">
                    <img class="navBarImage" src="../assets/icons/HomePage.png" alt="Home">
                    خانه انیمو
                </nuxt-link>
                <nuxt-link to="/workSamples" class="navLink">
                    <img class="navBarImage" src="../assets/icons/WorkSamples.png" alt="Work Samples">
                    نمونه کار هنر جویان
                </nuxt-link>
                <nuxt-link to="/contactUs" class="navLink">
                    <img class="navBarImage" src="../assets/icons/Contacts.png" alt="Contacts">
                    تماس با ما
                </nuxt-link>
                <nuxt-link to="/Blogs" class="navLink">
                    <img class="navBarImage" src="../assets/icons/Blog.png" alt="Blog">
                    بلاگ
                </nuxt-link>
                <nuxt-link to="/AboutUs" class="navLink">
                    <img class="navBarImage" src="../assets/icons/AboutUs.png" alt="AboutUs">
                    درباره ما
                </nuxt-link>
            </div>

        </div>
    </div>
</template>

<script>
import { getSlider } from '~/API/slider.js'
import { useAuthStore } from '~/store/authenticationStore.js';

export default {
    data() {
        return {
            shopNum: 0,
            searchTerm: '',
            banner: '',
            authenticationSituation: null,
        }
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
    created() {
        const authStore = useAuthStore();
        this.authenticationSituation = authStore.isAuthenticated;
    },
    computed: {
        searchResults() {
            return this.$store.getters.getCourse.filter(course =>
                course.category.toLowerCase().includes(this.searchTerm.toLowerCase())
            );
        },
    },
    methods: {
        scrollDown() {
            window.scrollTo({ top: 5000, behavior: 'smooth' })
        },
        navigateToAuthentication() {
            this.$router.push('/authentication');
        },
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

@font-face {
    font-family: 'IRANSans';
    src: url('/assets/Fonts/IRANSans/FontsFree-Net-ir_sans.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

a {
    text-decoration: none;
    font-family: 'Yekan Bakh', sans-serif;
}

header {
    width: 100%;
    height: 56px;
    background: #252565;
}

.headIcons {
    height: 56px;
}

.signIn {
    font-family: 'Yekan Bakh', sans-serif;
    margin-top: -2px;
    margin-right: 88%;
    background: #8569C2;
    width: 7%;
    height: 32px;
    border-radius: 28px;
    display: block;
    text-align: center;
    border: none;
    color: white;
}

.userProfile {
    margin-top: -2px;
    margin-right: 85%;
    height: 32px;
    border-radius: 28px;
    display: block;
    text-align: center;
    border: none;
    color: white;
}

.none {
    display: none;
}

.imgHolder {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-right: 83%;
    padding-top: 11px;
    width: 3%;
    height: 15px;
}

.shopIcon a img {
    margin-top: 0px;
    width: 36px;
    height: 32px;
    margin-top: -12px;
}

.shopIcon {
    padding: 0px, 0px, 2.67px, 3.33px;
    text-decoration: none;
}

.shopNum {
    display: block;
    margin-right: 60%;
    color: white;
    width: 13.33px;
    height: 13.33px;
    background: #8569C2;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    z-index: 2;
    font-family: 'IRANSans';
    font-size: 7px;
    font-weight: 700;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: center;

}

.headBar {
    width: 100%;
    display: inline;
    margin-block: 20px;
}

.logo {
    display: block;
    margin-right: 82%;
    margin-top: 20px;
    height: 0px;
}

.logo img {
    width: 80%;
}

.search {
    display: block;
    width: 20%;
    height: 0px;
    margin-right: 55%;
}

.searchInput {
    direction: ltr;
    width: 100%;
    height: 42px;
    border-radius: 33px;
    border: solid 1px #B6A5DA;
    display: block;
    outline: none;
    padding-left: 10%;
    box-sizing: border-box;
    margin-top: -30px;
}

.search_icon {
    color: #B6A5DA;
    margin-right: 92%;
    z-index: 1;
    margin-top: 30px;
    display: block;
}

.searchInput::placeholder {
    color: #B6A5DA;
}

.searchInput:focus {
    border: 1px solid #8569C2;
}

.navBar {
    margin-right: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    padding: 10px 20px;
    margin-top: -10px;
}

.navLink {
    font-family: 'Yekan Bakh', sans-serif;
    color: black;
}

.navBarImage {
    padding-left: 5px;
}

.dropDown {
    position: absolute;
    display: none;
    height: 132px;
    width: 20%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 2;
    background: #F9F9F9;
    box-shadow: 0px 4px 14px 1px #8569C233;
    border-radius: 8px;
    box-sizing: border-box;
    margin-top: -10px;
    margin-right: 6%;
}

.dropDown button {
    font-family: 'Yekan Bakh', sans-serif;
    border: none;
    background: none;
    font-size: 17px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: #979797;
    margin-block: 7px;
    width: 100%;
    text-align: right;
}

.dropDown button:hover {
    color: #8569C2;
}

.workSample {
    display: inline;
}

.workSample:hover .dropDown {
    display: block;
}

.dropDown {
    display: none;
}

#menu__toggle {
    opacity: 0;
}

#menu__toggle:checked+.menu__btn>span {
    transform: rotate(45deg);
}

#menu__toggle:checked+.menu__btn>span::before {
    top: 0;
    transform: rotate(0deg);
}

#menu__toggle:checked+.menu__btn>span::after {
    top: 0;
    transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
    right: 0 !important;
}

.menu__box {
    right: -100%;
    transition: right 0.3s ease-in-out;
}


.menu__btn {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 3;
    margin-left: 85%;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
    display: none;
    position: relative;
    top: 5px;
    width: 100%;
    height: 2px;
    background-color: #8569C2;
    transition-duration: .25s;
}

.menu__btn>span::before {
    content: '';
    top: -8px;

}

.menu__btn>span::after {
    content: '';
    top: 8px;

}

#dropDownIcon {
    margin-right: 10px;
}

.menu__box {
    display: none;
    position: fixed;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #F9F9F9;
    margin-left: 40%;
    z-index: 2;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
}

.menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
}

.menu__item:hover {
    background-color: #B6A5DA;
}


@media (max-width : 1320px) {
    .dropDown {
        width: 20%;
    }


}

@media (max-width : 1050px) {
    .search {
        display: none;
    }

    .logo {
        width: 35%;
        margin-right: 63%;
    }

    .navBar {
        font-size: 12px;
    }

    .searchInput {
        margin-top: 130px;
        width: 200%;
    }

    .search_icon {
        position: relative;
        top: 160px;
        right: 98%;
    }

    .signIn {
        width: 15%;
        font-size: 17px;
        margin-right: 80%;
    }

    .shopIcon {
        margin-left: 95%;
    }

    .shopNum {
        margin-right: 2200%;
    }

}

@media (max-width : 800px) {
    .navBar {
        font-size: 10px;
        width: 60%;
    }
}

@media (max-width : 700px) {
    .navBar {
        display: none;
    }

    .logo {
        margin-right: 65%;
        padding-left: 5%;
    }

    .searchInput {
        margin-top: -35px;
        width: 250%;
        margin-right: -250%;
        padding-left: 20px;
    }

    .search_icon {
        top: -5px;
        right: -108%;
    }

    .signIn {
        width: 17%;
        margin-right: 80%;
        font-size: 100%;
    }

    .shopIcon {
        margin-left: 84%;
    }

    .menu button {
        display: block;
        text-align: right;
    }

    .shopNum {
        margin-right: 900%;
    }

    .menu__btn>span,
    .menu__btn>span::before,
    .menu__btn>span::after {
        display: block;
    }

    .menu__box {
        display: block;
        right: -250%;
    }

}

@media (max-width : 550px) {
    .signIn {
        width: 25%;
        margin-right: 70%;
    }

}

@media (max-width : 370px) {
    .signIn a {
        font-size: 12px;
    }

}</style>