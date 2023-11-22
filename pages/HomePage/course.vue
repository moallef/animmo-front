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
    margin: auto;
}

.sections {
    background: #E9E9E9;
    width: fit-content;
    padding: 4px;
    border-radius: 45px;
    margin: auto;
    width: 55%;
    margin-block: 50px;

}

.courses button {
    border: none;
    background: #F4F4F4;
    cursor: pointer;
    font-size: 16px;
    width: 20%;
    height: 56px;
    border-radius: 44px;
    gap: 16px;
    color: #818181;
}

.courses button:hover {
    background: #8569C2;
    color: #F4F4F4;
}
@media (max-width: 755px) {
 .sections{
    width: 70%;
 }   
}
@media (max-width: 630px) {
 .sections{
    width: 90%;
 }   
}
@media (max-width: 630px) {
    .courses button{
    font-size: 12px;
 }   
}
</style>