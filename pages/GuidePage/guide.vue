<template>
    <div>
        <div class="container">
            <div class="mutualQuestions">
                <div class="theTitle">
                    سوالات پرتکرار
                </div>
                <div class="txtHolder">

                    <div class="q1">
                        {{ Q1 }}
                    </div>
                    <div class="a1">
                        {{ A1 }}
                    </div>
                    <div class="line"></div>

                </div>
            </div>
            <div class="questions">
                <div id="title"> راهنمای راه اندازی spot player </div>
                <div class="theQuestion">
                    <div id="question"> {{ question }}</div>
                    <div id="answer"> {{ answer }}</div>
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
            question: "-آیا هر لایسنس قابلیت فعال سازی در چند دستگاه را دارا می‌باشد؟",
            answer: "خیر، هر لایسنس مختص یک کاربر و یک دوره می‌باشد. در صورتی که کاربر اقدام به انتشار غیرمجاز ویدیوها کند قابل پیگیری خواهد بود.",
            Q1: "-آیا هر لایسنس قابلیت فعال سازی در چند دستگاه را دارا می‌باشد؟",
            A1: "خیر، هر لایسنس مختص یک کاربر و یک دوره می‌باشد. در صورتی که کاربر اقدام به انتشار غیرمجاز ویدیوها کند قابل پیگیری خواهد بود."
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
.mutualQuestions {
    height: 602px;
    border-radius: 16px;
    background: #F4F4F4;
    width: 50%;
    margin-top: 30px;
    padding-inline: 4%;
    margin-right: 5%;
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
    width: 37%;
    background: #252565;
    border-radius: 16px;
    padding-inline: 20px;
    margin-right: 58%;
    margin-top: -600px;
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
</style>