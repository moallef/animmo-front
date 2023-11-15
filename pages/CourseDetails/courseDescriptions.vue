<template>
    <div>
        <div class="container">
            <div class="description">
                <p id="description" class="title" >
                    {{ description }}
                </p>
                <div class="lineContaiter">
                    <div class="aboveLine"></div>
                    <div class="line"></div>
                </div>
                <p id="descriptionP" class="paragraph">
                    {{ descriptionParagraph }}
                </p>
            </div>
            <div class="courseContacts">
                <p id="courseContacts" class="title">
                    {{ courseContacts }}
                </p>
                <div class="lineContaiter">
                    <div class="aboveLine"></div>
                    <div class="line"></div>
                </div>
                <p id="courseContactsP" class="paragraph">
                    {{ courseContactsParagraph }}
                </p>
            </div>
            <div class="courseOutput">
                <p id="courseOutput" class="title">
                    {{ courseOutput }}
                </p>
                <div class="lineContaiter" >
                    <div class="aboveLine" id="line3"></div>
                    <div class="line" ></div>
                </div>
                <p id="courseOutputP" class="paragraph">
                    {{ courseOutputParagraph }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            description: "توضیحات دوره",
            descriptionParagraph: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، ",
            courseContacts: " مخاطبین دوره ",
            courseContactsParagraph: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، ",
            courseOutput: " خروجی دوره ",
            courseOutputParagraph: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، ",
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.container {
    background: #F9F9F9;
    border-radius: 20px;
    box-sizing: border-box;
    padding-bottom: 60px;
}

.title {
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: justified;
    padding-top: 50px;
    padding-inline: 2%;
}

#description{
    padding-top: 20px;
}

.paragraph {
    color: #6D6D6D;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: -0.02em;
    text-align: right;
    padding-inline: 2%;
    padding-top: 10px;

}
.lineContaiter{
    margin-right: 2%;
    width: 95%;
    margin-bottom: 10px;
}
.line{
    border: 1px solid #C9C9C9;
}
.aboveLine{
    height: 5px;
    background: #8569C2;
    border-radius: 10px 10px 0px 0px;
    width: 30%;
}
#line3{
    width: 20%;
}


</style>