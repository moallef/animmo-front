<template>
    <div>
        <div class="courses">
            <p>دوره ها</p>
            <div class="sections">
                <button>
                    دو بعدی
                    <img src="" alt="">
                </button>
                <button>
                    سه بعدی
                    <img src="" alt="">
                </button>
                <button>
                    فیلمنامه نویسی
                    <img src="" alt="">
                </button>
                <button>
                    فتوشاپ
                    <img src="" alt="">
                </button>
                <button>
                    ایلستریتور
                    <img src="" alt="">
                </button>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.courses {
    text-align: center;
}

.courses p {
    margin-top: 60px;
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
}

.sections {
    background: #E9E9E9;
    width: fit-content;
    top: 525px;
    left: 299px;
    padding: 4px;
    border-radius: 45px;
    position: absolute;
    top: 580px;
}

.courses button {
    border: none;
    background: #F4F4F4;
    cursor: pointer;
    font-size: 16px;
    width: 151px;
    height: 56px;
    padding: 12px, 18px, 12px, 18px;
    border-radius: 44px;
    gap: 16px;

}

.courses button:hover {
    background: #8569C2;
    color: #F4F4F4;
}
</style>