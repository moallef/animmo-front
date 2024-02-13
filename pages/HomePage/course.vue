<template>
    <div>
        <div class="courses">
            <p>دسته بندی ها</p>
            <div class="sections">
                <button class="btn" v-for="(category, index ) in categories.slice(0, 5)" :key="category.id"
                    @mouseover="hoverSituation(true)" @mouseleave="hoverSituation(false)">
                    <img :id="this.hover ? 'none' : 'default-icon'" :src="`https://animmo.ir/${category.icon}`" alt="">
                    <img :id="this.hover ? 'default-icon' : 'none'" :src="`https://animmo.ir/${category.hovered_icon}`"
                        alt="">
                        <span id="txt">
                            {{ category.category }}
                        </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { getClassifications } from '~/API/classification'

export default {
    data() {
        return {
            hover: false,
            categories: []
        }
    },
    methods: {
        hoverSituation(change) {
            this.hover = change
        }
    },
    async created() {
        try {
            const data = await getClassifications();
            if (data) {
                this.categories = data.map(element => ({
                    id: element.id,
                    category: element.category,
                    icon: element.icon,
                    hovered_icon: element.hovered_icon,
                }));
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },

}
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('~/assets/Fonts/Yekan Bakh Regular/Yekan Bakh Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.courses {
    text-align: center;
}

.courses p {
    font-family: 'Yekan Bakh', sans-serif;
    margin-top: 60px;
    font-size: 24px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    margin: auto;
}
.btn{
    font-family: 'Yekan Bakh', sans-serif;
    height: 0px;
    padding-bottom: 12px;
}
#txt{
    position: relative;
    bottom: 8px;
}
#none {
    display: none;
}

#default-icon {
    margin-top: 15px;
    margin-left: 5px;
    width: 25px;
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
    .sections {
        width: 70%;
    }
}

@media (max-width: 630px) {
    .sections {
        width: 90%;
    }
}

@media (max-width: 630px) {
    .courses button {
        font-size: 12px;
    }
}</style>