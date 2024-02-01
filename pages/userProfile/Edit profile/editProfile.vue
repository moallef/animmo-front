<template>
    <div>
        <div class="container">
            <div class="head">
                <div class="title">
                    ویرایش پروفایل
                </div>
                <div class="lines">
                    <div class="overLine"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="inputs">
                <input type="text" placeholder="نام" v-model="userName">
                <input type="text" placeholder=" نام خانوادگی" v-model="userFamily">
            </div>
            <div class="inputs">
                <input type="text" placeholder="شماره تماس" v-model="userPhoneNumber">
                <input type="text" placeholder="تاریخ تولد" v-model="userBirthDate">
            </div>
            <div class="inputs">
                <input type="email" placeholder="ایمیل" v-model="userEmail">
            </div>
            <div class="alert">
                <div :class="{ 'seccess': checkNumber && checkEmail && saved, 'none': !checkNumber || !checkEmail || !saved }">
                    {{ seccessAlert }}
                </div>
                <div :class="{ 'unseccess': !checkNumber || !checkEmail, 'none': checkNumber && checkEmail }">
                    {{ unseccessAlert }} شما اشتباه است!
                </div>
            </div>
            <div class="buttons">
                <button id="cancel">لغو</button>
                <button id="save" @click="getItems() ; checkPhoneNumber() ; checkEmailAddress()">ذخیره</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useInfoStore } from '~/store/userInfo.js';

export default {
    name: 'FrontendEditProfile',

    data() {
        return {
            checkNumber: true,
            checkEmail: true,
            saved : false,
            seccessAlert: 'اطلاعات شما با موفقیت ذخیره شد!',
            unseccessAlert: 'اطلاعات ',
        };
    },

    mounted() {

    },

    methods: {
        checkPhoneNumber() {
            const iranianPhoneNumberRegex = /^(\+98|0)?9\d{9}$/;
            if (this.userPhoneNumber === '' || this.userPhoneNumber === null || !iranianPhoneNumberRegex.test(this.userPhoneNumber)) {
                this.checkNumber = false;
                this.unseccessAlert = 'شماره تلفن  '
            }
        },
        checkEmailAddress() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.userEmail === '' || this.userEmail === null || !emailRegex.test(this.userEmail)) {
                this.checkEmail = false;
                this.unseccessAlert = 'ایمیل  '
            }
        },
        async getItems() {
            const store = await useInfoStore();
            this.saved = true;
            store.name = this.userName;
            store.family = this.userFamily;
            store.phoneNumber = this.userPhoneNumber;
            store.birthDate = this.userBirthDate;
            store.Email = this.userEmail;
        },
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    background: #F9F9F9;
    height: 720px;
    border-radius: 16px;
}

.head {
    padding-top: 30px;
}

.title {
    font-family: Peyda;
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: 0em;
    margin-right: 5%;
}

.lines {
    width: 90%;
    margin-right: 5%;
    margin-top: 20px;
}

.line {
    border: 1px;
    border: 1px solid #EDEDED;

}

.overLine {
    width: 130px;
    height: 2px;
    background: #2F3BBD;

}

.inputs {
    display: flex;
    width: 90%;
    margin-inline: 5%;
    margin-top: 30px;
    justify-content: space-between;
}

input {
    width: 49%;
    height: 42px;
    color: #828282;
    padding: 0px 10px 0px 10px;
    border: solid 1px #d7d6d6;
    outline: none;
    border-radius: 16px;
    background: none;
}

.buttons {
    text-align: left;
    margin-left: 5%;
    margin-top: 300px;
}

.buttons button {
    width: 99px;
    height: 42px;
    border-radius: 16px;
    gap: 10px;
    border: none;
    font-family: Peyda;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
}

#save {
    margin-right: 15px;
    background: #8569C2;
    color: white;
}

#cancel {
    color: #7D7D7D;
}

.seccess {
    color: green;
    margin-top: 20px;
    height: 0px;
    margin-right: 5%;
}

.unseccess {
    color: red;
    margin-top: 20px;
    margin-right: 5%;
}

.none {
    background: #000;
    display: none;
}
</style>