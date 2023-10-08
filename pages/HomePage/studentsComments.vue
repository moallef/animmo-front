<template>
    <div class="opinionsComponent">
        <div>
            <p class="title">
                نظرات هنرجویان
            </p>
            <div>
                <div class="buttons">
                    <button class="moreComments">
                        <img src="../../assets/icons/icons8-arrow-50.png" alt="">
                    </button>`

                    <button class="addComment" @click="clock(Date.now())">
                        +
                    </button>
                </div>


                <div class="students">
                    <img src="" alt="">
                    <!-- students images -->
                </div>
                <div class="OpinionBlock">
                    <img src="../../assets/images/Ellipse 10.png" alt="">
                    <div class="Opinion">
                        <p class="toComment">امیرحسین حسنی</p>
                        <div class="rating">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/emptyStar.png" alt="">
                            <!-- show the rating by using full stars -->
                        </div>
                        <div class="theOpinin">
                            <p class="theComment">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                                است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                            </p>
                        </div>
                        <div class="clock">
                            Sep13, 13:35 p.m
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    methods: {
        clock(time) {
            const date = new Date(time);
            const month = date.toString().split(' ')[1];
            const day = date.getDate();
            let hour = date.getHours();
            const minute = date.getMinutes();
            let status = 'p.m';
            if (hour < 12) {
                status = 'a.m'
            } else {
                hour -= 12;
            }
            const exactDate = `${month}${day}, ${hour < 10 ? `0${hour}` : hour}
            :${minute < 10 ? `0${minute}` : minute} ${status}`;

            return exactDate;
        },

    },

}



</script>

<style scoped>
.opinionsComponent {
    position: absolute;
    text-align: center;
    top: 2750px;
    width: 100%;
}

.title {
    position: absolute;
    width: 262px;
    height: 12px;
    left: 65%;
    top: 30px;

    font-size: 39px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
}

button {
    position: relative;
    background: #8569C2;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    top: 100px;
    color: white;
    font-size: 39px;
    float: right;

}

.buttons {
    position: relative;
    top: 50px;
    right: 20%;
}

.addComment {
    margin-inline: 4%;
}

.moreComments img {
    width: 80%;

}

.OpinionBlock {
    width: 25%;
    height: 455px;
    left: 25%;
    border-radius: 0px 0px 183px 183px;
    position: relative;
    box-sizing: border-box;

    background: #8569C2;
    color: white;
    box-shadow: 0px 4px 14px 1px #8569C233;
}

.OpinionBlock img {
    position: relative;
    top: -50px;
    border-radius: 50%;
}

.toComment {
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
}

.theComment {
    font-family: Yekan Bakh;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.065em;
    text-align: center;
}



.Opinion {
    padding-top: -50px;
    padding-inline: 5%;
}

.rating {
    position: relative;
    top: -20px;
}

.clock {
    position: relative;
    font-family: Yekan Bakh;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.065em;
    text-align: center;
    top: 60px;

    color: #B6A5DA;

}
</style>