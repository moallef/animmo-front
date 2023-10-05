<template>
    <div>
        <footer>
            <button class="scrollUp">
                <img src="../assets/icons/arrow-142-16.png" alt="">
            </button>
            <div class="rectangle">

            </div>
            <div class="signUp">
                <p>ثبت نام</p>
                <div class="signUpInputs">
                    <input type="text" id="name" placeholder="نام">
                    <input type="text" id="family" placeholder="نام خانوادگی">
                    <input type="text" id="phoneNumber" placeholder="تلفن همراه">
                </div>
                <button class="signUpBtn">
                    ثبت نام
                </button>
            </div>
            <div class="block">
                <div id="e-Namad">
                    <a href="">
                        <img src="../assets/icons/e-namad.png" alt="e-namad">
                    </a>
                </div>
                <div>
                    <div id="logo">
                        <img src="../assets/icons/logoDarkBG.png" alt="">
                    </div>
                    <div class="navBar">
                        <div>
                            <button id="courses">دوره ها</button>
                            <img src="" alt="">
                        </div>
                        <div>
                            <button id="guide">راهنمایی سایت</button>
                            <img src="" alt="">
                        </div>
                        <div>
                            <button id="aboutUs">درباره ما</button>
                            <img src="" alt="">
                        </div>
                        <div>
                            <button id="contact">تماس با ما</button>
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>
footer {
    text-align: center;
    position: absolute;
    top: 3700px;
}

.scrollUp {
    left: 150%;
    float: right;
    position: relative;
    width: 42px;
    height: 42px;
    background: #DF59A1;
    border-radius: 50%;
    border: none;
}

.signUp {
    position: absolute;
    background: #F4F4F4;
    height: 243px;
    width: 35%;
    bottom: 50px;
    left: 5%;
}

.signUp p {
    position: relative;
    font-size: 24px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: -0.065em;
    text-align: center;
    width: 58px;
    height: 12px;
    top: 18px;
    left: 82%;
    color: #7D7D7D;
}

.signUpInputs {
    position: relative;
    top: 20px;
}

.signUpInputs input {
    border: none;
    border-radius: 32px;
    background: #F9F9F9;
    height: 32px;
    margin: 5px;
    text-align: right;
}

#name {
    width: 40%;
    top: 66px;
    left: 263px;
    padding: 10px, 6px, 10px, 197px;
}

#family {
    width: 40%;
}

#phoneNumber {
    width: 464px;
    top: 114px;
    left: 23px;
    padding: 10px, 11px, 10px, 387px;

}

.block {
    background: #252565;
    height: 243px;
    width: 1440px;
}

.signUpBtn {
    left: 7%;
    float: left;
    position: relative;
    background: #8569C2;
    width: 30%;
    height: 46px;
    top: 30px;
    padding: 2px, 14px, 2px, 14px;
    border-radius: 37px;
    gap: 10px;
    border: none;
    color: white;
    font-size: 100%

}
</style>