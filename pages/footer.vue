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
                <div class="e-Namad">
                    <a href="https://enamad.ir/" target="_blank">
                        <img src="../assets/icons/e-namad.png"  alt="e-namad">
                    </a>
                </div>
                <div>
                    <div id="logo">
                        <img src="../assets/icons/logoDarkBG.png" alt="">
                    </div>
                    <div class="navBar">
                        <button id="courses">
                            🡥
                            دوره ها
                        </button>

                        <button id="guide">
                            🡥
                            راهنمایی سایت
                        </button>

                        <button id="aboutUs">
                            🡥
                            درباره ما
                        </button>

                        <button id="contact">
                            🡥
                            تماس با ما
                        </button>
                    </div>
                </div>
                <div class="comunications">
                    <a>
                        <img src="../assets/icons/social media/Untitled-2-04.svg" alt="">
                    </a>
                    <a>
                        <img src="../assets/icons/social media/Untitled-2-05.svg" alt="">
                    </a>
                    <a>
                        <img src="../assets/icons/social media/Untitled-2-06.svg" alt="">
                    </a>
                    <a>
                        <img src="../assets/icons/social media/Untitled-2-02.svg" alt="">
                    </a>
                    <a>
                        <img src="../assets/icons/social media/Untitled-2-01.svg" alt="">
                    </a>
                    <a>
                        <img src="../assets/icons/social media/Untitled-2-03.svg" alt="">
                    </a>
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
    width: 100%;
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
    margin-bottom: -10px;
}

.signUp {
    background: #F4F4F4;
    height: 243px;
    width: 35%;
    bottom: 50px;
    margin-right: 60%;
    margin-bottom: -200px;
    padding-top: 15px;
    z-index: 5;
}

.signUp p {
    font-size: 24px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: -0.065em;
    text-align: center;
    width: 10%;
    height: 12px;
    margin-left: 72%;
    display: inline;
    color: #7D7D7D;
}

.signUpInputs {
    margin-top: 30px;
}
.signUpInputs input {
    border: none;
    border-radius: 32px;
    background: #F9F9F9;
    height: 32px;
    margin: 5px;
    text-align: right;
    padding-right: 10px;
}

#name {
    width: 40%;
}

#family {
    width: 40%;
}

#phoneNumber {
    width: 84%;
}

.block {
    background: #252565;
    height: 243px;
    width: 100%;
}

.signUpBtn {
    background: #8569C2;
    width: 25%;
    height: 36px;
    border-radius: 37px;
    gap: 10px;
    border: none;
    color: white;
    font-size: 100%;
    margin-right: 59%;
    margin-top: 3px;
}

#logo {
    text-align: right;
    margin-right: 5%;
    margin-top: -120px;
}
.navBar{
    text-align: right;
    margin-right: 5%;
    height: 10px;
    width: 50%;
    margin-top: 10px;
}

.navBar button {
    background: none;
    color: #FFFFFF;
    font-size: 120%;
    margin: 10px;
}

.e-Namad {
    display: block;
    width: 10%;
    margin-right: 50%;
    margin-top: 40ox;
}
.comunications{
    text-align: right;
    margin-right: 5%;
    width: 50%;
    margin-top: 40px;
}
.comunications a{
    margin-inline: 10px;
    cursor: pointer;
}
.comunications img{
    width: 6%;
}
</style>