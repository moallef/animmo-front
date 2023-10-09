<template>
    <div>
        <div class="classification">
            <div>
                <p id="classifications">
                    دسته بندی ها
                </p>
            </div>
            <div>
                <div>
                    <courses-Sort/>
                </div>
            </div>
        </div>
    </div>
    <div>
        <button class="moreBtn">
            <img src="../../assets/icons/Vector (1).png" alt="">
            مشاهده همه
        </button>
    </div>
</template>

<script>
import coursesSort from './coursesSort.vue'

export default{
    components : {
        "courses-Sort" : coursesSort
    }
}
</script>

<style scoped>
#classifications {
    width: 100%;
    height: 12px;
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
    position: absolute;
    top: -80px;
}

.classification {
    list-style: none;
    position: relative;
    height: 442px;
    top: 220px;
    position: relative;
    width: 100%;
    min-width: 315px;
}
.moreBtn {
    color: white;
    width: 9%;
    height: 49px;
    top: 350px;
    left: 45.5%;
    border-radius: 49px;
    background: #8569C2;
    border: none;
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
}
</style>