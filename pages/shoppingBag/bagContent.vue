<template>
    <div class="container">
        <section class="cartSection" v-for="(item, index) in items" :key="index">
            <div class="product">
                <img class="productCover" :src="`https://animmo.ir${item.image}`" alt="">
                <div class="informations">
                    <div class="details">
                        <nuxt-link to="">
                            <p id="CourseTitle">{{ item.name }}</p>
                        </nuxt-link>
                        <p id="teachersName">{{ item.teacher }}</p>
                    </div>
                    <div class="fee">
                        {{ item.discountFee }} هزار تومان
                    </div>
                </div>
                <div class="delete">
                    <button class="deleteBtn" @click="deleteCourse(item.id)">
                        <img src="../../assets/icons/Group 90.png" alt="">
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { useBaskteStore } from '../../store/basketStore'

export default {
    data() {
        return {
            items: [],
        }
    },
    async created() {
        try {
            this.items = JSON.parse(localStorage.getItem('basketItems')) || [];
        } catch (error) {
            console.error("get Items :", error);
        };
    },
    methods: {
        deleteCourse(id) {
            const filteredItem = this.items.filter((f) => {
                return f.id !== id;
            })
            localStorage.removeItem('basketItems');
            localStorage.setItem('basketItems', JSON.stringify(filteredItem));
            this.items = filteredItem;
        },
    }
}
</script>

<style scoped>
a {
    cursor: pointer;
}

.container {
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
    font-family: 'Yekan Bakh', sans-serif;
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
    font-family: 'Yekan Bakh', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.07em;

}


.delete {
    margin-right: 92%;
    margin-top: -40px;
}
</style>