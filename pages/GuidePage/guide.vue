<template>
    <div>
        <div class="container">
            <div class="mutualQuestions">
                <div class="theTitle">
                    سوالات پرتکرار
                </div>
                <div class="txtHolder" v-for="(qa , index) in frequentlyAskedQuestions" :key="index">
                    <div class="q1">
                        {{ index + 1 }} - {{ qa.question }}
                    </div>
                    <div class="a1">
                        {{ qa.answer }}
                    </div>
                    <div class="line"></div>

                </div>
            </div>
            <div class="questions">
                <div id="title"> راهنمای راه اندازی spot player </div>
                <div class="theQuestion" v-for="(qa, index) in spotPlayerGuide" :key="index">
                    <div id="question"> {{ index + 1 }} - {{ qa.question }}</div>
                    <div id="answer"> {{ qa.answer }}</div>
                    <div class="seperator"></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendGuide',

    data() {
        return {
            spotPlayerGuide: [
                {
                    question: 
                        `آیا هر لایسنس قابلیت فعال سازی در چند دستگاه را دارا می‌باشد؟`,
                    answer: 
                        `خیر، هر لایسنس مختص یک کاربر و یک دوره می‌باشد. در صورتی که کاربر اقدام به انتشار غیرمجاز ویدیوها کند قابل پیگیری خواهد بود.`
                },
                {
                    question: 
                        `این دوره ها در چه دستگاه هایی قابل اجرا است ؟`,
                    answer: 
                        `شما میتوانید فیلم ها را در کامپیوتر (ویندوز) و در گوشی موبایل (اندروید) مشاهده کنید.`
                },
                {
                    question: 
                        `نحوه فعال سازی دوره ها به چه صورت است ؟`,
                    answer: 
                        `پس از خریداری دوره، کد لایسنس در پنل کاربری شما در بخش لایسنس دوره ها نمایش داده می‌شود. با وارد کردن این کد در نرم افزار اسپات پلیر، دوره برای شما فعال می‌گردد.`
                },
                {
                    question: 
                        `حجم فایل های دوره ها برایم زیاد است. آیا امکان کاهش حجم ویدیو ها وجود دارد ؟`,
                    answer: 
                        `بله، شما با فعال کردن گزینه‌ی "دانلود ویدیو ها با پیچیدگی پایین" در نرم افزار اسپات پلیر میتوانید از ویدیو های کم حجم شده استفاده کنید.`
                },
            ],
            frequentlyAskedQuestions: [
                {
                    question: 
                    "آیا هر لایسنس قابلیت فعال سازی در چند دستگاه را دارا می‌باشد؟",
                    answer: 
                    "خیر، هر لایسنس مختص یک کاربر و یک دوره می‌باشد. در صورتی که کاربر اقدام به انتشار غیرمجاز ویدیوها کند قابل پیگیری خواهد بود."
                },
                {
                    question: 
                    "این دوره ها در چه دستگاه هایی قابل اجرا است ؟",
                    answer: 
                    "شما میتوانید فیلم ها را در کامپیوتر (ویندوز) و در گوشی موبایل (اندروید) مشاهده کنید."
                },
                {
                    question: 
                    "نحوه فعال سازی دوره ها به چه صورت است ؟",
                    answer:
                     "پس از خریداری دوره، کد لایسنس در پنل کاربری شما در بخش لایسنس دوره ها نمایش داده می‌شود. با وارد کردن این کد در نرم افزار اسپات پلیر، دوره برای شما فعال می‌گردد."
                },
                {
                    question: 
                    "حجم فایل های دوره ها برایم زیاد است. آیا امکان کاهش حجم ویدیو ها وجود دارد ؟",
                    answer:
                     `بله، شما با فعال کردن گزینه‌ی "دانلود ویدیو ها با پیچیدگی پایین" در نرم افزار اسپات پلیر میتوانید از ویدیو های کم حجم شده استفاده کنید.`
                },
            ],
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
.container{
        display: flex;
        flex-direction: row;
        margin-top: 40px;
        justify-content: space-around
    }
.mutualQuestions {
    height: 602px;
    border-radius: 16px;
    background: #F4F4F4;
    width: 50%;
    padding-inline: 4%;
    margin-right: 3%;
}

.theTitle {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    padding-top: 40px;
}

.q1 {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    color: #646464;
    padding-top: 30px;
}

.a1 {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #979797;
    padding-top: 20px;
}

.line {
    border: 1px solid #E9E9E9;
    width: 80%;
    margin-top: 30px;
}

.questions {
    overflow: hidden;
    height: 602px;
    scrollbar-width: 10px;
    width: 40%;
    margin-left: 3%;
    background: #252565;
    border-radius: 16px;
    padding-inline: 20px;
}

#title {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    color: #8569C2;
    padding-block: 20px;

}

#question {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    color: #FCFCFC;
}

#answer {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #F9F9F9;
    padding-top: 10px;
}

.seperator {
    width: 90%;
    border: 1px solid #0B0B1E;
    margin-block: 20px;
}
@media (max-width : 800px) {
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .mutualQuestions , .questions{
        width: 90%;
        margin-bottom: 30px;
        margin-right: 5%;
    }
}
</style>