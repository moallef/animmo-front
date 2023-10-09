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

            <div class="menuBtn">
                <button>
                    <img src="../assets/icons/align-right.png" alt="">
                </button>
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

                <div class="workSample">
                    <button id="workSamples">
                        <img src="../assets/icons/icons8-down-arrow-50.png" alt="">
                        نمونه کار هنر جویان
                        <img src="../assets/icons/WorkSamples.png" alt="Work Samples">

                    </button>
                    <div class="dropDown">
                        <button>نمونه کار دوره ریگ</button>
                        <button>نمونه کار دوره بن گذاری</button>
                        <button>نمونه کار دوره انیمیت </button>
                        <button>نمونه کار دوره طراحی کاراکتر </button>
                    </div>
                </div>

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
a{
    text-decoration: none;
}
header {
    width: 100%;
    height: 56px;
    background: #252565;
}

.signIn {
    position: relative;
    background: #8569C2;
    width: 7%;
    height: 27px;
    top: 12px;
    left: 5%;
    border-radius: 28px;
    gap: 10px;
    display: inline-block;
    text-align: center;
    padding-top: 5px;
}

.signIn a {
    text-decoration: none;
    color: white;
    top: 20px;
    font-size: 90%;
    margin-inline: 5%;
}

.shopIcon a img {
    width: 36px;
    height: 32px;
}

.shopIcon {
    position: relative;
    bottom: 17px;
    left: 15%;
    padding: 0px, 0px, 2.67px, 3.33px;
    display: block;
    text-decoration: none;
}

.shopNum {
    position: relative;
    color: white;
    width: 13.33px;
    height: 13.33px;
    bottom: 38px;
    background: #8569C2;
    border-radius: 50%;
    text-align: center;
    box-sizing: border-box;
}

.headBar {
    width: 100%;
    height: 100px;
}

.logo {
    top: 30px;
    left: 7%;
    display: inline-block;
    position: relative;
}

.searchInput {
    width: 20%;
    height: 42px;
    bottom: 20px;
    left: 22%;
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
}

.searchInput:focus {
    border: 1px solid #8569C2;
}

.navBar {
    position: relative;
    width: 40%;
    bottom: 55px;
    float: right;
    right: 2%;
}

.navBar button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    margin: 10px;
}

.dropDown {
    display: none;
    position: absolute;
    height: 132px;
    width: 50%;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
    left: 30%;
    top: 30px;
    background: #F9F9F9;
    box-shadow: 0px 4px 14px 1px #8569C233;
    border-radius: 8px;
    box-sizing: border-box;
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

.workSample {
    display: inline;
}

.workSample:hover .dropDown {
    display: block;
}

.dropDown {
    display: none;
}

.menuBtn{
    display: none;
    position: relative;
    float: right;
    top: -65px;
    right: 2%;
}
.menuBtn button{
    border: none;
    background: none;

}

@media (max-width : 1154px) {

    .navBar {
        width: 30%;
    }

    .dropDown {
        left: -20%;
        top: 70px;
        width: 70%;
    }


}

@media (max-width : 1050px) {
    .menuBtn{
        display: block;
    }
    .navBar{
        display: none;
    }
    .searchInput{
        left : 40%;
        width : 55%;
    }
    .search_icon{
        left: 42.5%;
    }
}


@media (max-width : 890px) {

}
</style>