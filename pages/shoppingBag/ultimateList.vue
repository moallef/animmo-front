<template>
    <div class="container">
        <table class="courseTable">
            <thead>
                <tr>
                    <th colspan="2">دوره های انتخاب شده ({{this.courses.length}})</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(course, index) in courses" :key="index">
                    <td>{{ course.name }}</td>
                    <td>{{ course.discountFee }} هزار تومان</td>
                </tr>
                <tr id="ultimate">
                    <td class="total">مجموع</td>
                    <td class="total">{{ totalPrice }} هزار تومان</td>
                </tr>
            </tbody>
        </table>

        <div class="operations">
            <input type="text" class="discountCode" placeholder="وارد کردن کد تخفیف">
            <button class="admitPay" @click="$router.push('/checkout')">تایید و پرداخت</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendUltimateList',

    data() {
        return {
            courses: [],
            totalPrice: 0,
        };
    },

    computed: {
        coursesCount() {
            return this.courses.length;
        },
    },

    methods: {
        calculateTotalPrice() {
            this.totalPrice = this.courses.reduce((sum, course) => sum + course.discountFee, 0);
        },
    },

    watch: {
        courses: {
            handler: 'calculateTotalPrice',
            deep: true,
        },
    },
    created() {
        try {
            this.courses = JSON.parse(localStorage.getItem('basketItems')) || [];
            console.log(this.courses);
        } catch (error) {
            console.error("get Items :", error);
        };
    },

    mounted() {
        this.calculateTotalPrice();
    },
};
</script>

<style lang="scss" scoped>
.container {
    background: #F4F4F4;
    width: 100%;
    border-radius: 16px;
    padding-inline: 3%;
}
.discountCode {
    width: 90%;
    height: 36px;
    border-radius: 37px;
    border: none;
    background: #FCFCFC;
    text-align: center;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-top: 20px;
}

.admitPay {
    background: #8569C2;
    color: white;
    width: 90%;
    height: 40px;
    margin-top: 10px;
    border-radius: 37px;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-bottom: 15px;
    border: none;
}

.courseTable {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}
.courseTable th,
.courseTable td {
    background: none;
    padding: 14px;
    text-align: right;
    width: 50%;
    font-family: 'Yekan Bakh', sans-serif;
}
.courseTable td{
    color: #979797;
}

.courseTable .total {
    font-weight: bold;
    color: #C8102E;
    margin-top: 20px; 
}
.discountCode {
    width: 90%;
    height: 36px;
    border-radius: 37px;
    border: none;
    background: #FCFCFC;
    text-align: center;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-top: 20px;
}

.admitPay {
    background: #8569C2;
    color: white;
    width: 90%;
    height: 40px;
    margin-top: 10px;
    border-radius: 37px;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-bottom: 15px;
    border: none;
}
.total {
    width: 90%;
    color: #646464;
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.04em;
}
.operations{
    width: 90%;
    margin-top: 20px;
    margin-inline: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
#Fee {
    color: #C8102E;
    margin-right: 60%;
}

#List {
    color: black;
    height: 0px;
}
.courseTable th{
    padding-block: 30px;
}
</style>