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
                        <button autofocus @click="changeFocus(false)" :id="focusBoolian ? '' : 'signUp'">ثبت نام </button>
                    </div>
                    <div class="inputs">
                        <div :id="focusBoolian ? 'logInInput' : ''">
                            <input type="text" class="input" placeholder="نام " v-model="name">
                        </div>
                        <div :id="focusBoolian ? 'logInInput' : ''">
                            <input type="text" class="input" placeholder="نام خانوادگی" v-model="family">
                        </div>
                        <div id="phoneNumber">
                            <input type="text" class="input" placeholder="تلفن همراه" v-model="phoneNumber">
                        </div>
                    </div>
                    <div class="oneTimePassword">
                        <button id="sendPassword">
                            ارسال رمز یکبار مصرف
                        </button>
                        <button id="submit">
                            ثبت
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
import { ref } from 'vue';
import { useAuthStore } from '~/store/authentications';

export default {
    name: 'FrontendIndex',

    data() {
        return {
            focusBoolian: true,
            name: null,
            family: null,
            phoneNumber: null,
        };
    },
    directives: {

    },

    components: {
        "header-app": header,
    },


    mounted() {
        const store = useAuthStore();

        const username = ref('');
        const password = ref('');
        const pin = ref('');
        const error = ref('');

        const login = async () => {
            error.value = '';

            const loginSuccess = await store.login(username.value, password.value, pin.value);

            if (!loginSuccess) {
                error.value = 'Invalid credentials. Please try again.';
            } else {
                // Redirect or perform any other action upon successful login
                // For example, you can use Nuxt 3's `useRouter` to redirect to another page
                const router = useNuxtApp().router;
                router.push('/dashboard');
            }
        };
    },

    methods: {

        changeFocus(change) {
            this.focusBoolian = change;
        },
    },
};
</script>

<style scoped>
.image {
    width: 30%;
    margin-right: 100%;
    margin-top: -450px;
    height: 100%;
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
    font-family: Yekan Bakh;
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
    font-family: Yekan Bakh;
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
    padding: 10px 14px 10px 216px;
    border-radius: 33px;
    margin-top: 10px;
    font-family: IRANSans;
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
    font-family: IRANSans;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
}
#submit{
    width: 100%;
    height: 42px;
    margin-top: 10px;
    padding: 2px, 14px, 2px, 14px;
    border-radius: 37px;
    border: none;
    background: #8569C2;
    color: white;
    font-family: IRANSans;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
}

@media (max-width : 1100px) {
    .image {
        display: none;
    }

    .main {
        width: 100%;
    }
}
</style>