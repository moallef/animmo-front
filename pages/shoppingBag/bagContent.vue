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
                        {{ item.discountFee }} تومان
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
import { useCartStore } from '@/store/useCardStore'

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
        this.$emit('data-emitted', this.items);
    },
    methods: {
        deleteCourse(id) {
            const filteredItem = this.items.filter((f) => {
                return f.id !== id;
            })
            localStorage.removeItem('basketItems');
            localStorage.setItem('basketItems', JSON.stringify(filteredItem));
            this.items = filteredItem;
            this.$emit('data-emitted', this.items);
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
    display: flex;
    flex-direction: row;
    height: 152px;
    border-radius: 16px;
    background: #F4F4F4;
    margin-bottom: 10px;
    padding-right: 1%;
}

.details {
    display: flex;
    flex-direction: column;
    width: 50%;
    flex-wrap: wrap;
}

.productCover {
    width: 123px;
    height: 123px;
    border-radius: 8px;
    margin-block: 16px;
}

.informations {
    margin-right: 3%;
    margin-top: 40px;
    width: 80%
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
    margin-top: 60px;
}

@media (max-width : 1400px) {
    .productCover {
        width: 20%;
    }
    .informations {
        width: 70%
    }
}
@media (max-width : 1200px) {
    .productCover {
        width: 22%;
    }
}
@media (max-width : 1000px) {
    .productCover {
        width: 24%;
    }
}
@media (max-width : 800px) {
    .productCover {
        width: 28%;
    }
    .informations {
        width: 60%
    }
    
}
@media (max-width : 600px) {
    .productCover {
        width: 102px;
        height: 95px;
        margin-top: 10px
    }
    .product{
        height: 118px;
    }
    .informations {
        margin-top: 15px;
        width: 50%;
        font-size: 12px;
    }
    .delete{
        margin-top: 45px;
    }
    .details{
        font-size: 14px
    }
    
}
</style>