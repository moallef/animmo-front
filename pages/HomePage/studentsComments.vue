<template>
    <div class="opinionsComponent">
        <div id="opinions">
            <p class="title">
                نظرات هنرجویان
            </p>
            <div>
                <div class="buttons">
                    <nuxt-link to="">
                        <button class="moreComments">
                            <img src="../../assets/icons/icons8-arrow-50.png" alt="">
                        </button>
                    </nuxt-link>

                    <p class="commentsCount">
                        {{ commentsCount }} Comments
                    </p>
                </div>


                <div class="OpinionBlock">
                    <img src="../../assets/images/Ellipse 10.png" alt="">
                    <div class="Opinion">
                        <p class="toComment">{{ toComment }}</p>
                        <div class="rating">
                            <img src="../../assets/icons/emptyStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <!-- show the rating by using full stars -->
                        </div>
                        <div class="theOpinin">
                            <p class="theComment">
                                {{ theComment }}
                            </p>
                        </div>
                        <div class="clock">
                            {{ commentTime }}
                        </div>
                    </div>
                </div>

                <div class="blurBlock" id="blurBlock1">
                    <img src="../../assets/images/Ellipse 10.png" alt="">
                    <div class="BlurOpinion">
                        <p class="toComment" id="blurToComment">{{ toComment }}</p>
                        <div class="rating" id="blurRating">
                            <img src="../../assets/icons/emptyStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <!-- show the rating by using full stars -->
                        </div>
                        <div class="theOpinin" id="blurOpinion">
                            <p class="theComment" id="blurComment">
                                {{ theComment }}
                            </p>
                        </div>
                        <div class="clock" id="bClock">
                            {{ commentTime }}
                        </div>
                    </div>
                </div>
                <div class="blurBlock" id="blurBlock2">
                    <img src="../../assets/images/Ellipse 10.png" alt="">
                    <div class="BlurOpinion">
                        <p class="toComment" id="blurToComment">{{ toComment }}</p>
                        <div class="rating" id="blurRating">
                            <img src="../../assets/icons/emptyStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <!-- show the rating by using full stars -->
                        </div>
                        <div class="theOpinin" id="blurOpinion">
                            <p class="theComment" id="blurComment">
                                {{ theComment }}
                            </p>
                        </div>
                        <div class="clock" id="bClock">
                            {{ commentTime }}
                        </div>
                    </div>
                </div>
                <div class="blurBlock" id="blurBlock3">
                    <img src="../../assets/images/Ellipse 10.png" alt="">
                    <div class="BlurOpinion">
                        <p class="toComment" id="blurToComment">{{ toComment }}</p>
                        <div class="rating" id="blurRating">
                            <img src="../../assets/icons/emptyStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <!-- show the rating by using full stars -->
                        </div>
                        <div class="theOpinin" id="blurOpinion">
                            <p class="theComment" id="blurComment">
                                {{ theComment }}
                            </p>
                        </div>
                        <div class="clock" id="bClock">
                            {{ commentTime }}
                        </div>
                    </div>
                </div>
                <div class="blurBlock" id="blurBlock4">
                    <img src="../../assets/images/Ellipse 10.png" alt="">
                    <div class="BlurOpinion">
                        <p class="toComment" id="blurToComment">{{ toComment }}</p>
                        <div class="rating" id="blurRating">
                            <img src="../../assets/icons/emptyStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <img src="../../assets/icons/fullStar.png" alt="">
                            <!-- show the rating by using full stars -->
                        </div>
                        <div class="theOpinin" id="blurOpinion">
                            <p class="theComment" id="blurComment">
                                {{ theComment }}
                            </p>
                        </div>
                        <div class="clock" id="bClock">
                            {{ commentTime }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    data() {
        return {
            theComment: "",
            toComment: "امیرحسین حسنی",
            commentsCount: 58,
            commentTime: "Sep13, 13:35 p.m",
            theComment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، ",
        }
    },
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
    margin-top: 150px;
    text-align: center;
    width: 100%;
    background: #F4F4F4;
    height: 700px;
    padding-top: 50px;

}

.title {

    width: 262px;
    height: 12px;

    font-size: 39px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0em;
    margin-right: 10%;
    margin-top: 150px;
}

button {

    background: #8569C2;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    color: white;
    font-size: 39px;
    float: right;
    margin-left: 15px;

}

.buttons {
    margin-right: 13%;
    display: block;
    margin-top: 50px;
    text-align: right;
}

.commentsCount {
    text-align: right;
    color: #979797;
    padding-top: 15px;
}

.moreComments img {
    width: 80%;
    box-sizing: border-box;
    margin-top: 5px;

}

.OpinionBlock {
    width: 25%;
    height: 455px;
    border-radius: 0px 0px 183px 183px;
    box-sizing: border-box;
    margin-right: 40%;
    background: #8569C2;
    color: white;
    box-shadow: 0px 4px 14px 1px #8569C233;
    margin-top: -150px;
    z-index: 2;
}

.OpinionBlock img {
    border-radius: 50%;
    margin-top: -50px;
    margin-bottom: 40px;
}

.toComment {
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;
    margin-top: -20px;
}

.theComment {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.065em;
    text-align: center;

}

.Opinion {
    padding-top: -30px;
    padding-inline: 5%;
}

.rating {
    padding-bottom: 20px;
    margin-top: 60px;
}

.rating img {
    margin-inline: 1.5%;
}

.clock {
    position: relative;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.065em;
    text-align: center;
    top: 80px;
    color: #B6A5DA;

}

.blurBlock {
    width: 18%;
    height: 381px;
    border-radius: 0px 0px 183px 183px;
    box-sizing: border-box;
    margin-right: 59%;
    background: #E9E9E9;
    color: white;
    box-shadow: 0px 4px 14px 1px #8569C233;
    margin-top: -420px;
    filter: blur(1px);
    text-align: center;
    z-index: 1;
}

.blurBlock img {
    margin-top: -40px;
}

#blurOpinion {
    width: 80%;
}

#blurRating {
    padding-inline: 10%;
    margin-top: 30px;
}

#blurRating img {
    width: 9%;
}

#blurToComment {
    margin-top: 10px;
}
#blurOpinion{
    margin: auto;
}
#blurComment {
    font-size: 11px;
}
#blurBlock2{
    margin-right: 64%;
    margin-top: -380px;
}
#blurBlock3{
    margin-right: 68%;
    margin-top: -380px;
}
#blurBlock4{
    margin-right: 72%;
    margin-top: -380px;
    
}
</style>