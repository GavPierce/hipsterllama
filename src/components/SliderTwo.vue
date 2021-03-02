<template>
  <section>
    <Parallax v-if="!cool" fixed="true" :speed-factor="0.3">
      <img src="../assets/img/bg/mountain_bg.jpg" />
    </Parallax>
    <Parallax v-if="cool" fixed="true" :speed-factor="0.3">
      <img src="../assets/img/home-bg.jpg" />
    </Parallax>
    <h1 class="slider-title">Hipster LLama LLC</h1>
  </section>
</template>

<script>
import Parallax from "vue-parallaxy";

export default {
  name: "Slider",
  components: {
    Parallax,
  },
  props: {
    cool: Boolean,
  },
  data() {
    return {
      slide: false,
      bgImg: {
        backgroundImage: `url(${require("../assets/img/bg/mountain_bg.jpg")})`,
      },
      bgImg2: {
        backgroundImage: `url(${require("../assets/img/home-bg.jpg")})`,
      },
      sliders: [
        {
          sliderThumb: require("../assets/img/slider/1.png"),
          sliderTitle: "Greatest Mafia Game",
          sliderDesc:
            "Enjoy the Classic Mafia Party game in the best way possible",
        },
        {
          sliderThumb: require("../assets/img/slider/2.png"),
          sliderTitle: "AWESOME MOBILE APP",
          sliderDesc:
            "An awesome Vue template for App landing and App Store site",
        },
        {
          sliderThumb: require("../assets/img/slider/3.png"),
          sliderTitle: "AWESOME MOBILE APP",
          sliderDesc:
            "An awesome Vue template for App landing and App Store site",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Carter+One&family=Open+Sans&family=Roboto&display=swap");
.slider {
  position: absolute;
  transition: 2s;
  top: -100%;
}
.show {
  position: absolute;
  transition: 2s;
  top: 0;
}
.slider-title:hover .slider {
  transition: 2s;
  padding: 20px;
}
.slider-title {
  position: absolute;
  top: 0;
  margin-top: 20%;
  font-size: 10em;

  text-align: center;
  width: 100%;
  text-align: center;
  font-family: "Carter One", cursive;
}
@media only screen and (max-width: 600px) {
  .slider-title {
    font-size: 5em;
    margin-top: 40%;
  }
}
</style>
