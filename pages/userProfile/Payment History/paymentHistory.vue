<template>
    <div>
        <div class="container">
            <div class="head">
                <div class="title">
                    سوابق پرداخت
                </div>
                <div class="lines">
                    <div class="overLine"></div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="info">

            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>سرویس</th>
                        <th>زمان</th>
                        <th>قابل پرداخت</th>
                        <th>وضعیت</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in tableData" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ item.column2 }}</td>
                        <td>{{ item.column3 }}</td>
                        <td>{{ item.column4 }}</td>
                        <td>{{ item.column5 }}</td>
                        <td>
                            <button class="pay">
                                پرداخت
                            </button>
                            <button class="unavalible">
                                مشاهده
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FrontendPaymentHistory',

    data() {
        return {
            tableData: ref([
                { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3', column4: 'Data 4', column5: 'Data 5', column6: 'Data 6' },
            ])
        };
    },

    mounted() {

    },

    methods: {
    },
};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'PeydaWeb';
    src: url('/assets/Fonts/PeydaWeb/PeydaWeb.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
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
    font-family: 'PeydaWeb', sans-serif;

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
    width: 16%;
    height: 2px;
    background: #2F3BBD;

}

table {
    width: 90%;
    margin-inline: 5%;
    border-collapse: collapse;
    margin-top: 40px;
}

th {
    font-family: 'PeydaWeb', sans-serif;

    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    color: #8E8E8E;
}

th,
td {
    padding: 20px;
    text-align: center;
}

tr {
    border-bottom: 1px solid #ddd;
    height: 60px;
    font-family: 'PeydaWeb', sans-serif;

    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: 0em;
    color: #2F2F2F;
}

.pay {
    width: 99px;
    height: 32px;
    border-radius: 16px;
    border: none;
    background: #8569C2;
    color: white;
}
.unavalible{
    display: none;
}
</style>