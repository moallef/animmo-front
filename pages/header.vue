<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <header>
            <div class="headIcons">
                <div class="shopIcon">
                    <a href="">
                        <div class="imgHolder">
                            <p class="shopNum">{{ shopNum }}</p>
                            <img src="../assets/icons/Group 91.png">
                        </div>
                    </a>
                </div>
                <div class="signIn">
                    <a href="">ورود/ثبت نام</a>
                </div>
            </div>


            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>

                <ul class="menu__box">
                    <li><a class="menu__item" href="#">
                        <img src="../assets/icons/HomePage.png" alt="Home">
                        صفحه اصلی
                    </a></li>
                    <li><a class="menu__item" href="#">
                        <img src="../assets/icons/WorkSamples.png" alt="Work Samples">
                        نمونه کار هنر جویان
                        <img src="../assets/icons/icons8-down-arrow-50.png" alt="">
                    </a></li>
                    <li><a class="menu__item" href="#">
                        <img src="../assets/icons/Blog.png" alt="Blog">
                        بلاگ
                    </a></li>
                    <li><a class="menu__item" href="#">
                        <img src="../assets/icons/AboutUs.png" alt="AboutUs">
                        درباره ما
                    </a></li>
                    <li><a class="menu__item" href="#">
                        <img src="../assets/icons/Contacts.png" alt="Contacts">
                        تماس با ما
                    </a></li>
                </ul>
            </div>
        </header>

    <div class="headBar">
        <div class="logo">
            <img src="../assets/icons/AnimmoLogo.png" alt="Animmo">
        </div>
        <div class="search">
            <i class="fa fa-search search_icon"></i>
            <input class="searchInput" type="text" placeholder="Search" />
        </div>
        <div class="navBar">

            <nuxt-link to="/">
            <button id="home">
                    <img src="../assets/icons/HomePage.png" alt="Home">
                    خانه انیمو
                </button>
            </nuxt-link>
            <div class="workSample">
                <nuxt-link to="">
                <button id="workSamples">
                        <img src="../assets/icons/WorkSamples.png" alt="Work Samples">
                        نمونه کار هنر جویان
                        <img src="../assets/icons/icons8-down-arrow-50.png" alt="">
                    </button>
                </nuxt-link>
                <div class="dropDown">
                    <button>نمونه کار دوره ریگ</button>
                    <button>نمونه کار دوره بن گذاری</button>
                    <button>نمونه کار دوره انیمیت </button>
                    <button>نمونه کار دوره طراحی کاراکتر </button>
                </div>
            </div>
            <nuxt-link to="">
            <button id="contact">
                    <img src="../assets/icons/Contacts.png" alt="Contacts">
                    تماس با ما
                </button>
            </nuxt-link>
            <nuxt-link to="">
            <button id="blog">
                    <img src="../assets/icons/Blog.png" alt="Blog">
                    بلاگ
                </button>
            </nuxt-link>
            <nuxt-link to="">
            <button id="aboutUs">
                    <img src="../assets/icons/AboutUs.png" alt="AboutUs">
                    درباره ما
                </button>
            </nuxt-link>
        </div>

    </div>
</div></template>

<script>
export default{
    data(){
        return{
            shopNum : 0,

        }
    },
    methods:{

    }
}
</script>

<style scoped>
body {
    margin: 0px;
}

a {
    text-decoration: none;
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

    margin-right: 88%;
    background: #8569C2;
    width: 7%;
    height: 27px;
    border-radius: 28px;
    display: block;
    text-align: center;
    padding-top: 5px;
}

.signIn a {
    text-decoration: none;
    color: white;

}

.imgHolder {
    box-sizing: border-box;
    display: block;
    margin-right: 83%;
    padding-top: 11px;
    width: 3%;
    height: 15px;
}

.shopIcon a img {
    margin-top: 0px;
    width: 36px;
    height: 32px;
    margin-top: -14px;
}

.shopIcon {
    padding: 0px, 0px, 2.67px, 3.33px;
    text-decoration: none;
}

.shopNum {
    margin-right: 60%;
    color: white;
    width: 13.33px;
    height: 13.33px;
    background: #8569C2;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
    z-index: 2;
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
    width: 50%;
    margin-right: 5%;
    padding-inline: 3%;
    margin-top: -15px;

}
.navBar button a {
    color: black;
}

.navBar button {
    border: none;
    background: none;
    font-size: 16px;
    margin: 10px;
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

.menu__btn {
    position: fixed;
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
    background-color: white;
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


@media (max-width : 1154px) {

    .navBar {
        width: 30%;
    }

    .navBar button {
        font-size: 14px;
    }

    .dropDown {
        width: 20%;
    }


}

@media (max-width : 1050px) {

    .navBar {
        width: 25%;
    }

    .navBar button {
        text-align: right;
        font-size: 16px;
        width: 100%;
    }

    .logo {
        width: 45%;
        margin-right: 58%;
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
    .navBar button {

        font-size: 12px;


    }
}

@media (max-width : 650px) {
    .navBar {
        display: none;
    }

    .logo {
        width: 200px;
        margin-right: 60%;
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
.menu__box{
    display: block;
}

}
</style>