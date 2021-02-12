<template>
    <section class="slider-section hero-style-1 section" id="home" :style="bgImg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="slider-title"> Hipster LLama LLC </h1>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Slider',
        components: {
        },
        data (){
            return {
                bgImg: {
                    backgroundImage: `url(${require('../assets/img/bg/mountain_bg.jpg')})`
                },
                sliders: [
                    {
                        sliderThumb: require("../assets/img/slider/1.png"), 
                        sliderTitle: 'Greatest Mafia Game', 
                        sliderDesc: 'Enjoy the Classic Mafia Party game in the best way possible'
                    },
                    {
                        sliderThumb: require("../assets/img/slider/2.png"), 
                        sliderTitle: 'AWESOME MOBILE APP', 
                        sliderDesc: 'An awesome Vue template for App landing and App Store site'
                    },
                    {
                        sliderThumb: require("../assets/img/slider/3.png"), 
                        sliderTitle: 'AWESOME MOBILE APP', 
                        sliderDesc: 'An awesome Vue template for App landing and App Store site'
                    },
                ]
            }
        }
    }
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans&family=Roboto&display=swap');
    .slider-title {
        margin: auto;
        font-size: 9em;
        margin-top: 39%;
        text-align: center;
        font-family: 'Carter One', cursive;

    }
    @media only screen and (max-width: 600px) {
        .slider-title{
            font-size:5em;
        }

    }



</style>
