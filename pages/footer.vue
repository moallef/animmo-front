<template>
    <div>
        <footer>
            <button class="scrollUp" @click="scrollUp()">
                <img src="../assets/icons/arrow-142-16.png" alt="">
            </button>
            <div class="rectangle">

            </div>

            <div class="block">
                <div class="e-Namad">
                    <a href="https://enamad.ir/" target="_blank">
                        <img src="../assets/icons/e-namad.png" alt="e-namad">
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
export default {
    data() {
        return {
            name: "",
            family: "",
            phoneNumber: "",

        }
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
    height: 243px;
    width: 100%;
}


#logo {
    text-align: right;
    margin-right: 5%;
    margin-top: -120px;
}

.navBar {
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

.e-Namad img {
    width: 90%;
}

.e-Namad {
    display: block;
    width: 10%;
    margin-right: 47%;
    padding-top: 20px;
}

.comunications {
    text-align: right;
    margin-right: 5%;
    width: 50%;
    margin-top: 40px;
}

.comunications a {
    margin-inline: 10px;
    cursor: pointer;
}

.comunications img {
    width: 6%;
}
</style>