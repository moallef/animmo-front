<template>
        <div class="container">
            <section class="cartSection">
                <div class="product">
                    <img class="productCover" src="../../assets/images/Rectangle 105.png" alt="">
                    <div class="informations">
                        <div class="details">
                            <p id="CourseTitle">{{ CourseTitle }}</p>
                            <p id="teachersName">{{ teachersName }}</p>
                        </div>
                        <div class="fee">
                            {{ courseFee }} هزار تومان
                        </div>
                    </div>
                    <div class="delete">
                        <button class="deleteBtn">
                            <img src="../../assets/icons/Group 90.png" alt="">
                        </button>
                    </div>
                </div>
            </section>
        </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            coursesCount: 2,
            CourseTitle: "دوره انیمت مقدماتی",
            teachersName: "مهدی مؤلف",
            courseFee: "۱٬۳۰۰٬۰۰۰",
            totalPrice: "۲٬۱۰۰٬۰۰۰",
        }
    }
}
</script>

<style scoped>
.container{
    width: 100%;
}
button {
    border: none;
    background: none;
}
.cartSection {
    display: flex;
    flex-direction: column;
}

.product {
    height: 152px;
    border-radius: 16px;
    background: #F4F4F4;
    margin-bottom: 10px;
    padding-right: 1%;
}

.productCover {
    width: 14%;
    height: 115px;
    border-radius: 8px;
    margin-block: 16px;
}

.informations {
    margin-right: 17%;
    margin-top: -120px;
}

#CourseTitle {
    font-family: IRANYekan;
    font-size: 16px;
    font-weight: 800;
    line-height: 15px;
    letter-spacing: -0.04em;
    margin-bottom: 5px;
}

#teachersName {
    color: #646464;
}

.fee {
    margin-top: 15px;
    color: #C8102E;
    font-family: IRANYekan;
    font-size: 18px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;

}


.delete {
    margin-right: 92%;
    margin-top: -40px;
}

@media (max-width : 1300px) {}</style>