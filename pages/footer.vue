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
                    <input type="text" id="family" placeholder="نام خانوادگی">
                    <input type="text" id="name" placeholder="نام">
                    <input type="text" id="phoneNumber" placeholder="تلفن همراه">
                </div>
                <button class="signUpBtn">
                    ثبت نام
                </button>
            </div>
            <div class="block">
                <div class="e-Namad">
                    <a href="">
                        <img src="../assets/icons/e-namad.png" alt="e-namad">
                    </a>
                </div>
                <div>
                    <div id="logo">
                        <img src="../assets/icons/logoDarkBG.png" alt="">
                    </div>
                    <div class="navBar">
                        <button id="courses">
                            دوره ها 🡥
                        </button>

                        <button id="guide">
                            راهنمایی سایت 🡥
                        </button>

                        <button id="aboutUs">
                            درباره ما 🡥
                        </button>

                        <button id="contact">
                            تماس با ما 🡥
                        </button>
                    </div>
                </div>
                <div class="comunications">
                    <button>
                        <img src="../assets/icons/social media/Untitled-2-04.pn" alt="">
                    </button>
                    <button>
                        <img src="../../assets/icons/social media/Untitled-2-05.png" alt="">
                    </button>
                    <button>
                        <img src="../../assets/icons/social media/Untitled-2-07.png" alt="">
                    </button>
                    <button>
                        <img src="../../assets/icons/social media/Untitled-2-02.png" alt="">
                    </button>
                    <button>
                        <img src="../../assets/icons/social media/Untitled-2-01.png" alt="">
                    </button>
                    <button>
                        <img src="../../assets/icons/social media/Untitled-2-03.png" alt="">
                    </button>
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
    top: 4100px;
    width: 100%;
}

button {
    border: none;
}

.scrollUp {
    right: 10%;
    bottom: 70px;
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
    width: 10%;
    height: 12px;
    top: 28px;
    margin-left: 72%;
    display: inline;
    color: #7D7D7D;
}

.signUpInputs {
    position: relative;
    top: 50px;
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
    left: 7%;
    float: left;
    position: relative;
    background: #8569C2;
    width: 30%;
    height: 46px;
    top: 70px;
    border-radius: 37px;
    gap: 10px;
    border: none;
    color: white;
    font-size: 100%
}

#logo {
    position: relative;
    float: right;
    right: 10%;
    bottom: 110px;
}

.navBar {
    left: 2%;
    position: relative;
    float: right;
    bottom: 35px;
}

.navBar button {
    background: none;
    color: #FFFFFF;
    font-size: 120%;
    margin: 10px;
}

.e-Namad {
    position: relative;
    top: 50px;
    display: block;
    width: 10%;
    left: 43%;
}
</style>