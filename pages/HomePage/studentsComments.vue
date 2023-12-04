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

                <div class="addCommentInput">

                    <button class="addComments">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 21" id="Navigation">
                            <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="m8 1 7 19-7-4-7 4z" class="colorStroke000000 svgStroke"></path>
                        </svg>
                    </button>
                    <input type="text" class="commentInput" placeholder="افزودن نظرات ...">

                </div>

                <div class="blocks">

                    <div class="blurBlock" id="blurBlock4">
                        <img class="profileImage" src="../../assets/images/Ellipse 10.png" alt="">
                        <div class="BlurOpinion">
                            <p class="toComment" id="blurToComment">{{ toComment }}</p>
                            <div class="theOpinin" id="blurOpinion">
                                <p class="theComment" id="blurComment">
                                    {{ theComment }}
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- block 4 ended -->

                    <div class="blurBlock" id="blurBlock3">
                        <img class="profileImage" src="../../assets/images/Ellipse 10.png" alt="">
                        <div class="BlurOpinion">
                            <p class="toComment" id="blurToComment">{{ toComment }}</p>

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

                    <!-- block 3 ended -->

                    <div class="blurBlock" id="blurBlock2">
                        <img class="profileImage" src="../../assets/images/Ellipse 10.png" alt="">
                        <div class="BlurOpinion">
                            <p class="toComment" id="blurToComment">{{ toComment }}</p>

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

                    <!-- block 2 ended -->

                    <div class="blurBlock" id="blurBlock1">
                        <img class="profileImage" src="../../assets/images/Ellipse 10.png" alt="">
                        <div class="BlurOpinion">
                            <p class="toComment" id="blurToComment">{{ toComment }}</p>
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

                    <!-- block 1 ended -->

                    <div class="Block" id="block">
                        <div class="OpinionBlock">
                            <img class="profileImage" src="../../assets/images/Ellipse 10.png" alt="">
                            <div class="Opinion">
                                <p class="toComment">{{ toComment }}</p>
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
                    </div>

                    <!-- main block ended -->

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
    cursor: pointer;
    z-index: 3;

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

.addCommentInput {
    width: 40%;
    text-align: right;
    margin-bottom: -50px;
}

.addComments {
    width: 37px;
    height: 37px;
    box-sizing: border-box;
    margin-right: 25%;
    margin-top: 50px;
    margin-bottom: -40px;
    z-index: 3;
}

svg {
    width: 14px;
    height: 19px;
    margin: 10px;
}

Input {
    text-align: right;
    width: 50%;
    height: 41px;
    padding-right: 20px;
    border-radius: 51px;
    gap: 231px;
    background: #FFFFFF;
    border: none;
    margin-right: 15%;
    font-family: Yekan Bakh;
    font-size: 14px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    color: #979797;
}

.profileImage {
    width: 30%;
}

.blocks {
    width: 50%;
    margin-right: 40%;
    margin-top: -230px;
}

    .Block{
        position: relative;
        top: 80px;
        width: 45%;
    }

.OpinionBlock {
    width: 100%;
    height: 455px;
    border-radius: 0px 0px 183px 183px;
    box-sizing: border-box;
    margin-right: 30%;
    background: #8569C2;
    color: white;
    box-shadow: 0px 4px 14px 1px #8569C233;
    margin-top: -460px;
    z-index: 2;
    cursor: pointer;
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
    margin-top: 50px;

}

.Opinion {
    padding-top: -30px;
    padding-inline: 5%;
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
    width: 38%;
    height: 381px;
    border-radius: 0px 0px 183px 183px;
    box-sizing: border-box;
    margin-right: 40%;
    background: #E9E9E9;
    color: white;
    box-shadow: 0px 4px 14px 1px #8569C233;
    margin-top: -380px;
    filter: blur(1px);
    text-align: center;
    z-index: 1;
    cursor: pointer;
}


.blurBlock img {
    border-radius: 50%;
    margin-top: -40px;
}

#blurOpinion {
    width: 80%;
}

#blurToComment {
    margin-top: 10px;
}

#blurOpinion {
    margin: auto;
}

#blurComment {
    font-size: 11px;
}

#blurBlock2 {
    margin-right: 44%;
    margin-top: -380px;
}

#blurBlock3 {
    margin-right: 48%;
    margin-top: -380px;
}

#blurBlock4 {
    margin-right: 51%;
    margin-top: -140px;

}



@media (max-width : 900px) {
    .Block{
        width: 100%;
    }

    .opinionsComponent {
        height: 850px;
    }

    .title {
        margin: auto;
        font-size: 28px;
    }

    .blocks {
        margin-top: 500px;
        margin-right: 35%;
    }

    .blurBlock {
        box-shadow: 0px 10px 15px 5px #8569C233;
        background: #B6A5DA;
        width: 50%;
    }

    .OpinionBlock {
        width: 60%;
        margin-right: 0%;
    }

    #blurBlock2 {
        margin-right: -30%;
    }

    #blurBlock3 {
        display: none;
    }

    #blurBlock4 {
        display: none;

    }

    .OpinionBlock img {
        margin-top: -30px;
    }

    .commentsCount {
        display: none;
    }

    .moreComments {
        display: none;
    }

    svg {
        width: 24px;
        margin: auto;
        margin-bottom: 2px;
    }

    .addComments {
        margin-right: 90%;
    }

    .addCommentInput {
        text-align: center;
        margin: auto;
    }

    input {
        width: 80%;
        margin-right: -10%;
    }
}

@media (max-width : 500px) {
    .blocks{
        margin-right: 35%;
    }
    .OpinionBlock img {
        margin-top: -10px;
    }
    .OpinionBlock {
        width: 80%;
        margin-right: -10%;
    }
    .blurBlock {
        box-shadow: 0px 10px 15px 5px #8569C233;
        background: #B6A5DA;
        width: 60%;
        margin-right: 40%;
    }
    #blurBlock2 {
        margin-right: -40%;
    }
    input {
        width: 150%;
        margin-right: -40%;
    }
    .addComments {
        margin-right: 115%;
    }
}
</style>