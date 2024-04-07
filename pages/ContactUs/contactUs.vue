<template>
    <div>
        <div class="container">
            <div class="textHolder">
                <a href="
https://t.me/AnimmoGroup">
                    <div class="telegram">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                            viewBox="0 0 48 48">
                            <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                            <path fill="#fff"
                                d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z">
                            </path>
                            <path fill="#b0bec5"
                                d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z">
                            </path>
                            <path fill="#cfd8dc"
                                d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z">
                            </path>
                        </svg>
                        <p id="telegram">
                            عضویت در کانال تلگرام
                        </p>
                    </div>
                </a>
                <div class="backUpNumber" >
                    <p>شماره پشتیبانی :</p>
                    <p id="theNumber"> {{ phoneNum1 }} / {{ phoneNum2 }} </p>
                </div>
                <div class="contactDescription" >
                    {{ contactDescription }}
                </div>
            </div>
            <div class="imgHolder">
                <img src="../../assets/images/image 19.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendContactUs',

    data() {
        return {
            phoneNum1: "",
            phoneNum2: "",
            contactDescription: ` زمان پاسخگویی تلفن از ساعت ۸ الی 16 روز های غیر تعطیل می باشد
* برای ارسال تیکت می توانید در پروفایل خود از بخش تیکت استفاده کنید `
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

a {
    color: white;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;

}

.telegram {
    background: linear-gradient(267.6deg, #29A0DA 3.44%, #4AC2F4 94.68%);
    width: 303px;
    height: 51px;
    padding: 4px, 4px, 4px, 36px;
    border-radius: 27px;
    margin: auto;
}

#telegram {
    margin-top: -32px;
    margin-right: 15%;
}

svg {
    height: 45px;
    width: 20%;
    margin-top: 4px;
    margin-right: -80%;
}

.imgHolder {
    width: 25%;
    margin-right: 65%;
    margin-top: -300px;
}

img {
    width: 100%;
}

.textHolder {
    width: 60%;
    margin-top: 200px;
}

.backUpNumber {
    width: 70%;
    background: #E9E9E9;
    background: white;
    color: white;
    border-radius: 29px;
    color: #646464;
    margin: auto;
    margin-top: 20px;
    padding-inline: 2%;
    padding-block: 5px;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.02em;
}
.backUpNumber p , .contactDescription  {
    color: white;
}

.contactDescription {
    width: 70%;
    background: white;
    border-radius: 16px;
    color: white;
    margin: auto;
    margin-top: 20px;
    padding-inline: 2%;
    padding-block: 5px;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.02em;
}

#theNumber {
    margin-right: 65%;
    margin-top: -20px;
}

@media (max-width: 900px) {
    .imgHolder {
        display: none;
    }

    .textHolder {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .backUpNumber {
        font-size: 15px;
    }
}
</style>