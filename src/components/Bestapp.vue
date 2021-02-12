<template>
    <section class="best-app-area pt-100 fix" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="bestapp-content-inner text-center">
                        <div class="section-title text-center">
                            <div class="title-icon"></div>
                            <h2 class="title text-white">The Best Mafia Game</h2>
                            <p>Lets Play Mafia is the greatest take on the classic mafia party game!</p>
                        </div>
                        <div class="bestapp-content-text">
                            <p>Effortlesly start a game and play with your friends or strangers as one of the classic Mafia Roles!</p>
                            <a href="#" class="read-more active"><i class="fa fa-play"></i> Play Now</a>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="bestapp-thumb">
                        <img src="../assets/img/slider/1.png" alt="bestapp thumb">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Bestapp',
    props: ["bestappTwo"],
    data (){
        return {
            bgImg: {
                backgroundImage: `url(${require('../assets/img/bestapp-bg.jpg')})`
            }
        }
    }
}
</script>

<style lang='scss'>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/components/best-app.scss';

    .bestapp-thumb {
        height: 500px;
    }

    .section-title {
        color: crimson;
    }
</style>
