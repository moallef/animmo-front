<template>
    <div>
        <div class="productShowCase">
            <img class="sampleImg" src="../../assets/images/Rectangle 119.png" alt="Product Image">
            <button class="likeButtn">
                <img src="../../assets/icons/LikeBefore.png" alt="">
            </button>
            <div class="details">
                <p>زهرا عرفانی</p>
                <p class="studentName">هنرجوی دوره بن گذاری</p>
                <div class="btn">
                    <button>
                        <img src="../../assets/icons/icons8-arrow-left-24.png" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
p {
    color: #F4F4F4;
}

.sampleImg {
    display: block;
    margin-bottom: -20px;
    width: 100%;
}

.studentName {
    font-family: Yekan Bakh;
    font-size: 20px;
    font-weight: 700;
    line-height: 12px;
    letter-spacing: 0em;
    margin-top: 10px;
}

.productShowCase {
    margin-top: 40px;
    margin-right: 3%;
    width: 65%;
    text-align: right;
}

.likeButtn {
    border: none;
    border-radius: 50%;
    background: none;
    margin-right: 82%;
    margin-top: -40px;
    margin-bottom: 20px;
}

.likeButtn button {
    border: none;
    border-radius: 50%;
}

.details button {
    border: none;
    border-radius: 50%;
    background: #8569C2;
    margin-right: 90%;
    padding-top: 3px;
    padding-inline: 3px;
    margin-top: 20px;
}
</style>