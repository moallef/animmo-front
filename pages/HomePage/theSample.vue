<template>
    <div>
        <div class="productShowCase">
            <img class="sampleImg" src="../../assets/images/Rectangle 119.png" alt="Product Image">
            <button class="likeButtn">
                <img src="../../assets/icons/LikeBefore.png" alt="">
            </button>
            <div class="details">
                <p>زهرا عرفانی</p>
                <p>هنرجوی دوره بن گذاری</p>
                <button>
                    <img src="../../assets/icons/icons8-arrow-left-24.png" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
p{
    color: #F4F4F4;
}
.sampleImg{
    display: block;
    margin-bottom: -20px;
}
.productShowCase {
    margin-top: 40px;
    margin-right: 3%;
    width: 20%;
    height: 216px;
    text-align: right;
}

.likeButtn {
    border: none;
    border-radius: 50%;
    background: none;
    margin-right: 270%;
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
    display: inline-block;
    margin-right: 98%;
    padding-top: 2px;
    padding-inline: 3px;
}
</style>