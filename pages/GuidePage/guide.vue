<template>
    <div>
        <div class="container">
            <div>

            </div>
            <div class="questions">
                <div id="title"> سوالات پرتکرار Spot player </div>
                <div class="theQuestion">
                    <div id="question"> {{ question1 }}</div>
                    <div id="answer"> {{ answer1 }}</div>
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
            question1: "-آیا هر لایسنس قابلیت فعال سازی در چند دستگاه را دارا می‌باشد؟",
            answer1: "خیر، هر لایسنس مختص یک کاربر و یک دوره می‌باشد. در صورتی که کاربر اقدام به انتشار غیرمجاز ویدیوها کند قابل پیگیری خواهد بود.",
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style scoped>
.questions {
    overflow: hidden;
    height: 602px;
    scrollbar-width: 10px;
    width: 30%;
    background: #252565;
    border-radius: 16px;
    padding-inline: 20px;
}

#title {
    font-family: Yekan Bakh;
    font-size: 24px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    color: #8569C2;
    padding-block: 20px;

}

#question {
    font-family: Yekan Bakh;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    color: #FCFCFC;
}

#answer {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    color: #F9F9F9;
    padding-top: 10px;
}
.seperator{
    width: 90%;
    border: 1px solid #0B0B1E;
    margin-block: 20px;
}
</style>