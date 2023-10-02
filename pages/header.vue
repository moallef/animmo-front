<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div>
        <header>
            <div class="signIn">
                <a href="">ورود/ثبت نام</a>
            </div>
            <div class="shopIcon">
                <a href="">
                    <img src="../assets/icons/Group 91.png">
                    <p class="shopNum">0</p>
                </a>
            </div>
        </header>
        <div class="headBar">
            <div class="logo">
                <img src="../assets/icons/AnimmoLogo.png" alt="Animmo">
            </div>
            <div>
                <i class="fa fa-search search_icon"></i>
                <input class="searchInput" type="text" placeholder="Search" />
            </div>
            <div class="navBar">

                <button id="aboutUs">درباره ما
                    <img src="../assets/icons/AboutUs.png" alt="AboutUs">
                </button>

                <button id="blog">بلاگ
                    <img src="../assets/icons/Blog.png" alt="Blog">
                </button>

                <button id="contact">تماس با ما
                    <img src="../assets/icons/Contacts.png" alt="Contacts">
                </button>

                <button id="workSamples">نمونه کار هنر جویان
                    <img src="../assets/icons/WorkSamples.png" alt="Work Samples">
                </button>

                <button id="home"> خانه انیمو
                    <img src="../assets/icons/HomePage.png" alt="Home">
                </button>

            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
;

header {
    width: 1440px;
    height: 56px;
    background: #252565;
}

.signIn {
    background: #8569C2;
    width: 7%;
    height: 27px;
    top: 12px;
    left: 79px;
    border-radius: 28px;
    gap: 10px;
    position: relative;
    display: inline-block;
    text-align: center;
    padding-top: 5px;
}

.signIn a {
    text-decoration: none;
    color: white;
    top: 20px;
}

.shopIcon a img {
    width: 36px;
    height: 32px;
}

.shopIcon {
    bottom: 50%;
    left: 15%;
    padding: 0px, 0px, 2.67px, 3.33px;
    display: block;
    position: relative;
}

.shopNum {
    color: white;
    width: 13.33px;
    height: 13.33px;
    bottom: 18px;
    left: -2.69%;
    background: #8569C2;
    border-radius: 50%;
    position: relative;
    display: inline-block;
    text-align: center;
}

.headBar {
    width: 100%;
    height: 100px;
}

.logo {
    top: 30px;
    left: 79px;
    display: inline-block;
    position: relative;
}

.searchInput {
    width: 20%;
    height: 42px;
    bottom: 20px;
    left: 308px;
    padding: 9px, 226px, 8px, 11px;
    border-radius: 33px;
    border: solid 1px #B6A5DA;
    display: inline-block;
    position: relative;
    outline: none;
    padding-left: 25px;
}

.search_icon {
    color: #B6A5DA;
    position: relative;
    left: 23.5%;
    bottom: 19px;
    z-index: 1;
}

.searchInput::placeholder {
    color: #B6A5DA;
    ;
}

.searchInput:focus {
    border: 1px solid #8569C2;
}

.navBar {
    display: inline-block;
    position: relative;
    width: 670px;
    bottom: 55px;
    left: 691px;
    text-align: right;
}
.navBar button{
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
}
</style>