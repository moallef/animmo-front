<template>
    <div class="bagContent">
        <div class="navBelt">
            <h1>سبد خرید</h1>
            <p>خانه انیمو/سبد خرید</p>
        </div>
        <div class="container">

            <section class="cartSection">
                <!-- <table v-if="items.length > 0" id="cartTable"> -->
                <div class="product">
                    <img class="productCover" src="../../assets/images/Rectangle 105.png" alt="">
                    <div class="informations">
                        <div class="details">
                            <p id="CourseTitle">{{ CourseTitle }}</p>
                            <p id="teachersName">{{ teachersName }}</p>
                        </div>
                        <div class="fee">
                            {{ courseFee }} هزار تومان
                        </div>
                    </div>
                    <div class="delete">
                        <button class="deleteBtn">
                            <img src="../../assets/icons/Group 90.png" alt="">
                        </button>
                    </div>
                </div>
                <!-- </table> -->
            </section>

            <div class="descriptions">
                <div class="ultimateList">
                    <div class="theTitle">
                        <p class="courses">دوره های انتخاب شده ({{ coursesCount }})</p>
                    </div>
                </div>
                <div class="selectedCourses">
                    <p class="theCourseName"> {{ CourseTitle }} </p>
                    <p class="theCourseFee"> {{ courseFee }} هزار تومان</p>
                </div>

                <div class="ultimateFee">
                    <p class="total" id="List"> مجموع سبد خرید شما</p>
                    <p class="total" id="Fee">{{ totalPrice }} هزار تومان </p>
                </div>
                <div class="operstions">
                    <input type="text" class="discountCode" placeholder="وارد کردن کد تخفیف">
                    <button class="admitPay" @click="$router.push('/checkout')">تایید و پرداخت</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            coursesCount: 2,
            CourseTitle: "دوره انیمت مقدماتی",
            teachersName: "مهدی مؤلف",
            courseFee: "۱٬۳۰۰٬۰۰۰",
            totalPrice: "۲٬۱۰۰٬۰۰۰",
        }
    }
}
</script>

<style scoped>
.bagContent {
    margin-bottom: 100px;
}

button {
    border: none;
    background: none;
}

.navBelt {
    width: 100%;
    height: 67px;
    background: #F4F4F4;
    padding-right: 5%;
    margin-top: 50px;
    padding-top: 10px;
}

.navBelt h1 {
    font-family: Yekan Bakh;
    font-size: 24px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    padding: 5px;
}

.navBelt p {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    color: #979797;
    padding: 5px;
}

.cartSection {
    margin-top: 10px;
    margin-right: 5%;
    display: flex;
    flex-direction: column;
}

.product {
    width: 60%;
    height: 152px;
    border-radius: 16px;
    background: #F4F4F4;
    margin-top: 20px;
    padding-right: 1%;
}

.productCover {
    width: 14%;
    height: 115px;
    border-radius: 8px;
    margin-block: 16px;
}

.informations {
    margin-right: 17%;
    margin-top: -120px;
}

#CourseTitle {
    font-family: IRANYekan;
    font-size: 16px;
    font-weight: 800;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-bottom: 5px;
}

#teachersName {
    color: #646464;
}

.fee {
    margin-top: 15px;
    color: #C8102E;
    font-family: IRANYekan;
    font-size: 18px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;

}


.delete {
    margin-right: 92%;
    margin-top: -40px;
}

.descriptions {
    background: #F4F4F4;
    width: 30%;
    margin-right: 65%;
    top: 280px;
    border-radius: 16px;
    position: absolute;
}

.operstions {
    width: 100%;
    text-align: center;
}

.discountCode {
    width: 90%;
    height: 36px;
    border-radius: 37px;
    border: none;
    background: #FCFCFC;
    text-align: center;
    font-family: IRANYekan;
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
    font-family: IRANYekan;
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-bottom: 15px;
}

.selectedCourses {
    width: 100%;
    margin-inline: 5%;
}

.ultimateList {
    width: 40%;
    padding-top: 30px;
    margin-right: 5%;
}

.ultimateFee {
    width: 100%;
    text-align: right;
    margin-right: 5%;
    margin-top: 50px;
    margin-bottom: 50px;
}

.courses {
    padding-bottom: 10px;
    font-family: IRANYekan;
    font-size: 18px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.04em;
}

.theCourseFee {
    margin-right: 60%;
}

.theCourseName {
    height: 0px;
}

.theCourseName,
.theCourseFee {

    color: #646464;
    width: 90%;
    font-family: IRANYekan;
    font-size: 15px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.04em;
}

.total {
    width: 90%;
    color: #646464;
    font-family: IRANYekan;
    font-size: 17px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: -0.04em;
}

#Fee {
    color: #C8102E;
    margin-right: 60%;
}

#List {
    color: black;
    height: 0px;
}

@media (max-width : 1300px) {}</style>