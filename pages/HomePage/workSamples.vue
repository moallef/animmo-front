<template>
    <div>
        <main>
            <div class="workSamples">
                <p>نمونه کار هنرجویان</p>
                <div class="sampleBlock">
                    <div class="sections" id="sampleSection">
                        <button class="smapleBtn">
                            دو بعدی
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            سه بعدی
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            فیلمنامه نویسی
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            فتوشاپ
                            <img src="" alt="">
                        </button>
                        <button class="smapleBtn">
                            ایلستریتور
                            <img src="" alt="">
                        </button>
                    </div>
                    <div class="cursesSlider">
                        <div class="productShowCase">
                            <img src="../../assets/images/Rectangle 119.png" alt="Product Image">
                            <button class="likeButtn">
                                <img src="../assets/icons/LikeBefore.png" alt="">
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
                    <div>
                        <button class="moreBtn">
                            <img src="../../assets/icons/Vector (1).png" alt="">
                            مشاهده همه
                        </button>
                    </div>

                </div>
            </div>
        </main>
    </div>
</template>

<script>

</script>

<style scoped>
.workSamples {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 559px;
    top: 1532px;
    background: #252565;
    text-align: center;
}

.workSamples p {
    color: #F4F4F4;
    position: relative;
    top: 0px;
    width: 100%;
    height: 12px;
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
}

.moreBtn {
    color: white;
    width: 9%;
    height: 49px;
    top: 130px;
    border-radius: 49px;
    background: #8569C2;
    border: none;
    position: relative;
    font-size: 100%;
    font-weight: 400;
}

#sampleSection {
    width: 60%;
    height: 64px;
    left: 20%;
    padding: 5px;
    border-radius: 45px;
    gap: 4px;
    background: #16163D;
    position: relative;
    top: 10px;
}
.smapleBtn {
    width: 20%;
    height: 56px;
    border-radius: 30px;
    gap: 16px;
    background: #252565;
    border: none;
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
    color: #B6A5DA;
    position: relative;

}

.smapleBtn:hover {
    background: #8569C2;
    color: #F9F9F9;
}
.productShowCase {
    width: 20%;
    height: 216px;
    position: relative;
    left: 5%;
    text-align: right;
    top: 60px;
}

.likeButtn {
    border: none;
    border-radius: 50%;
    background: none;
    position: relative;
    right: 80%;
    bottom: 55px;
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
    position: relative;
    right: 80%;
    bottom: 45px;
}

details p {
    position: relative;
}</style>
