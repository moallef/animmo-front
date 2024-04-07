<template>
    <div>
        <div class="courses">
            <div class="sections">
                <button class="btn" v-for="(category, index) in categories.slice(0, 5)" :key="category.id"
                    @click="getCategory(category)" @mouseover="hoverSituation(index, true)"
                    @mouseleave="hoverSituation(index, false)" autofocus :class="{ 'focused': index === hoveredIndex }">
                    <div class="icon-wrapper">
                        <img :src="`https://animmo.ir/${category.icon}`" alt="" />
                    </div>
                    <span id="txt">{{ category.category }}</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { getClassifications } from '~/API/classification';
import { useCourseStore } from '~/store/courseSubcategoryStore'

export default {
    data() {
        return {
            hoveredIndex: null,
            categories: [],
            category: '',
        };
    },
    methods: {
        async fetchCategories() {
            try {
                const data = await getClassifications();
                if (data) {
                    this.categories = data.map((element) => ({
                        id: element.id,
                        category: element.category,
                        icon: element.icon,
                        slug: element.slug
                    }));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        hoverSituation(index, isHovered) {
            if (isHovered) {
                this.hoveredIndex = index;
            } else {
                this.hoveredIndex = null;
            }
        },
        getCategory(title) {
            const store = useCourseStore();
            store.selectedCategory(title.slug);
        }
    },
    created() {
        this.fetchCategories();
    },
};
</script>

<style scoped>
@font-face {
    font-family: 'Yekan Bakh';
    src: url('../assets/Fonts/YekanBakhRegular/YekanBakh-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

:focus {
    border: none;
    outline: none;
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

.btn {
    font-family: 'Yekan Bakh', sans-serif;
    height: 0px;
    padding-bottom: 12px;
    text-align: center;
}

#txt {
    position: relative;
    bottom: 36px;
}

.btn:hover #txt {
    color: white;
}

#none {
    display: none;
}

#default-icon {
    margin-top: 15px;
    margin-left: 5px;
    width: 25px;
}

.focused img {
    filter: grayscale(100%) brightness(2);
}

.focused #txt {
    color: #8569c2;
}

.sections {
    background: #E9E9E9;
    padding: 4px;
    border-radius: 54px;
    margin: auto;
    width: fit-content;
    margin-block: 50px;
    display: flex;
    justify-content: center;
}

.icon-wrapper {
    width: 30px;
    margin-top: 14px;
    margin-right: 10px;
}

.courses button {
    border: none;
    background: #F4F4F4;
    cursor: pointer;
    font-size: 16px;
    width: 200px;
    height: 56px;
    border-radius: 44px;
    gap: 16px;
    color: #818181;
}

.courses button:focus {
    background: #8569C2;
    color: #F4F4F4;
}

.courses button:hover {
    background: #8569C2;
    color: #F4F4F4;
}


@media (max-width: 1100px) {
    .courses button {
        font-size: 10px;
    }

    #txt {
        bottom: 28px;
        margin-right: 20px;
    }

    .courses button {
        width: 170px;
    }
}


@media (max-width: 870) {
    .courses button {
        font-size: 12px;
    }

    #txt {
        bottom: 30px;
        margin-right: 18px;
    }

    .courses button {
        width: 120px;
    }
}


@media (max-width: 500px) {
    .courses button {
        font-size: 10px;
    }

    #txt {
        margin-right: 40px;
    }
}

@media (max-width: 450px) {
    #txt {
        display: none;
    }

    .icon-wrapper {
        margin-right: 35%;
    }
    .courses button {
        width: 100px;
    }
}
</style>