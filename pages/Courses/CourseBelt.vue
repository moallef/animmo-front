<template>
    <div class="theBelt">
        <div class="holder">
            <p class="title"> دوره ها </p>
            <p class="route"> خانه انیمو/دوره ها </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendCourseBelt',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.theBelt {
    height: 67px;
    background: #F4F4F4;
}

.holder {
    margin-right: 5%;
    padding-block: 12px;
}

.title {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 24px;
    font-weight: 600;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    padding-bottom: 10px;

}

.route {
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    color: #979797;
}
</style>