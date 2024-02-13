<template>
    <div>
        <div class="header">
            <header-app />
        </div>

        <div class="main">
            <div class="elements">
                <div class="head">
                    <img id="logo" src="../../assets/icons/AnimmoLogo.png" alt="">
                    <h1 id="welcome">به انیمو خوش آمدید</h1>
                </div>
                <div class="container">

                    <div class="buttons">
                        <button autofocus @click="changeFocus(true)" :id="focusBoolian ? 'logIn' : ''">ورود</button>
                        <button autofocus  @click="changeFocus(false)" :id="focusBoolian ? '' : 'signUp'">ثبت
                            نام </button>
                    </div>
                    <div class="inputs">
                        <div :id="checkNumber ? 'logInInput' : 'hint'">
                            شماره تلفن اشتباه است!
                        </div>
                        <div :id="OTP_Boolian ? 'sentCode' : 'logInInput'"> شماره تلفن شما : {{ phone_number }}</div>
                        <div :id="focusBoolian || OTP_Boolian ? 'logInInput' : ''">
                            <input type="text" class="input" placeholder="نام " v-model="first_name">
                        </div>
                        <div :id="focusBoolian || OTP_Boolian ? 'logInInput' : ''">
                            <input type="text" class="input" placeholder="نام خانوادگی" v-model="last_name">
                        </div>
                        <div :id="OTP_Boolian ? 'logInInput' : ''">
                            <input type="text" :id="checkNumber ? '' : 'wrong'" class="input" placeholder="تلفن همراه"
                                v-model="phone_number">
                        </div>
                        <div :id="OTP_Boolian ? '' : 'logInInput'">
                            <input type="text" :id="checkNumber ? '' : 'wrong'" class="input" placeholder="رمز یکبار مصرف"
                                v-model="code">
                        </div>
                    </div>
                    <div class="oneTimePassword">
                        <button :id="OTP_Boolian ? 'logInInput' : 'sendPassword'"
                            @click="changeOTP(true); checkPhoneNumber(); register(); login(); getCorrectData()">
                            ارسال رمز یکبار مصرف
                        </button>
                        <button :id="OTP_Boolian ? 'editNumber' : 'logInInput'" @click="changeOTP(false)">
                            تغییر شماره تلفن
                        </button>
                        <button :id="OTP_Boolian ? 'editNumber' : 'logInInput'"
                            @click="changeOTP(false); loginVarification();registerVarification()">
                            تایید
                        </button>
                    </div>
                    <div class="otherWays">
                        <button id="facebook">
                            <img src="../../assets/icons/social media/image 5.png" alt="">
                        </button>
                        <button id="appleId">
                            <img src="../../assets/icons/social media/image 6.png" alt="">
                        </button>
                        <button id="gmail">
                            <img src="../../assets/icons/social media/image 7.png" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div class="image">
                <img src="../../assets/images/image 20.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import header from '../header.vue';
import { useAuthStore } from '~/store/authenticationStore.js';

export default {
    name: 'FrontendIndex',

    data() {
        return {
            focusBoolian: true,
            OTP_Boolian: false,
            checkNumber: true,
            correctData: true,
            first_name: '',
            last_name: '',
            phone_number: '',
            code: ''
        };
    },
    components: {
        "header-app": header,
    },

    methods: {
        changeFocus(change) {
            const authStore = useAuthStore();
            authStore.setFocusBoolian(change)
            this.focusBoolian = change;
            this.OTP_Boolian = false;
            this.checkNumber = true;
        },
        changeOTP(change) {
            this.OTP_Boolian = change;
            this.checkNumber = true;
        },
        checkPhoneNumber() {
            const iranianPhoneNumberRegex = /^(\+98|0)?9\d{9}$/;
            if (this.phone_number === '' || this.phone_number === null || !iranianPhoneNumberRegex.test(this.phone_number)) {
                this.OTP_Boolian = false;
                this.checkNumber = false;
            }
        },
        backToFirstStep() {
            if (this.correctData === false) {
                this.OTP_Boolian = false;
            }
        },
        async register() {
            const authStore = useAuthStore();
            if (this.focusBoolian === false) {
                try {
                    const userData = {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        phone_number: this.phone_number,
                    };

                    await authStore.setRegistrationData(userData);

                    const userDataWithExpiration = {
                        ...userData,
                        expirationDate: authStore.registrationData.expirationDate,
                    };

                    localStorage.setItem('userData', JSON.stringify(userDataWithExpiration));

                } catch (error) {
                    console.error('Error during registration:', error);
                }
            }
        },
        async login() {
            const authStore = useAuthStore();
            if (this.focusBoolian === true) {
                try {
                    const phoneNumber = {
                        phone_number: this.phone_number,
                    };
                    await authStore.setLoginData(phoneNumber);
                } catch (error) {
                    console.error('Error during login:', error);
                }
            }
        },
        async registerVarification() {
            if (this.focusBoolian === false) {
                const authStore = useAuthStore();
                try {
                    const OTP = {
                        code: this.code,
                        phone_number: this.phone_number,
                        first_name: this.first_name,
                        last_name: this.last_name,
                    };
                    await authStore.setVarifyData(OTP);
                } catch (error) {
                    console.error('Error during varification:', error);
                }
            }
        },
        getCorrectData() {
            const authStore = useAuthStore();
            this.correctData = computed(() => authStore.correctData);
        },
        async loginVarification() {
            if (this.focusBoolian === true) {
                const authStore = useAuthStore();
                try {
                    const OTP = {
                        code: this.code,
                        phone_number: this.phone_number,
                    };
                    await authStore.setVarifyData(OTP);
                } catch (error) {
                    console.error('Error during varification:', error);
                }
            }
        },
        getCorrectData() {
            const authStore = useAuthStore();
            this.correctData = computed(() => authStore.correctData);
        }
    },
}
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('~/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'IRANSans';
    src: url('~/assets/Fonts/IRANSans/FontsFree-Net-ir_sans.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
.image {
    width: 30%;
    margin-right: 100%;
    margin-top: -450px;
    height: 100%;
    margin-bottom: 200px;
}

.main {
    text-align: center;
    width: 60%;
    margin-top: 100px;
}

.container {
    width: 100%;
    height: 350px;
}

#logo {
    width: 193px;
}

#logInInput {
    display: none;
}

h1 {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 27px;
    font-weight: 500;
    line-height: 42px;
    letter-spacing: 0em;
    color: #252565;
}

.otherWays {
    margin: auto;
    margin-top: 20px;
    width: 301px;

}

.otherWays button {
    border-radius: 50%;
    border: none;
    background: none;
    margin-inline: 10px;
}

.buttons {
    margin: auto;
    background: #E9E9E9;
    width: 301px;
    height: 42px;
    border-radius: 35px;
    margin-top: 30px;
}

.buttons button {
    color: #8569C2;
    background: none;
    border: none;
    border-radius: 32px;
    width: 148px;
    height: 100%;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
}

.unfocus {
    outline: none;
    color: #8569C2;
}

.focus {
    background: #8569C2;
    color: white;
}

#logIn[autofocus] {
    outline: none;
    background: #8569C2;
    color: white;
}

#signUp[autofocus] {
    outline: none;
    background: #8569C2;
    color: white;
}

.inputs {
    margin: auto;
    width: 301px;
    margin-bottom: 30px;
    margin-top: 10px;
}

.input {
    border: 1px solid #C9C9C9;
    color: #C9C9C9;
    width: 100%;
    height: 42px;
    top: 105px;
    padding: 10px 14px 10px 10px;
    border-radius: 33px;
    margin-top: 10px;
    font-family: 'IRANSans', sans-serif;

    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
}

.input:focus {
    outline: none;
    border: 2px solid #8569C2;
    font-size: 16px;
    color: #8569C2;
}

.oneTimePassword {
    width: 301px;
    margin: auto;
}

#sendPassword {
    width: 100%;
    height: 42px;
    padding: 2px, 14px, 2px, 14px;
    border-radius: 37px;
    border: none;
    background: #8569C2;
    color: white;
    font-family: 'IRANSans', sans-serif;

    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
}

#editNumber {
    width: 100%;
    height: 42px;
    padding: 2px, 14px, 2px, 14px;
    margin-top: 10px;
    border-radius: 37px;
    border: none;
    background: #8569C2;
    color: white;
    font-family: 'IRANSans', sans-serif;

    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
}

#submit {
    width: 100%;
    height: 42px;
    margin-top: 10px;
    padding: 2px, 14px, 2px, 14px;
    border-radius: 37px;
    border: none;
    background: #8569C2;
    color: white;
    font-family: 'IRANSans', sans-serif;

    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
}

#wrong {
    border: solid 2px red;
}

#hint {
    color: red;
}

@media (max-width : 1100px) {
    .image {
        display: none;
    }

    .main {
        width: 100%;
        margin-bottom: 200px;
    }
}
</style>