<template>
  <div class="main-container">
    <!-- Navbar section -->
    <NavbarTwo @switchCool="switchCool()" />

    <!-- slider section -->
    <SliderTwo :cool="cool"></SliderTwo>

    <!-- about section -->
    <About></About>

    <!-- best app section -->
    <Bestapp />
    <ScreenshotTwo />

    <Testimonial />
    <!-- footer section -->
    <FooterTwo />
  </div>
</template>

<script>
import NavbarTwo from "../components/NavbarTwo";
import About from "../components/About";
import SliderTwo from "../components/SliderTwo";
import Bestapp from "../components/Bestapp";
import Testimonial from "../components/Testimonial";
import ScreenshotTwo from "../components/ScreenshotTwo";
import FooterTwo from "../components/FooterTwo";

export default {
  name: "app",
  components: {
    NavbarTwo,
    About,
    Bestapp,
    Testimonial,
    ScreenshotTwo,
    SliderTwo,
    FooterTwo,
  },
  data() {
    return {
      cool: false,
    };
  },
  methods: {
    switchCool() {
      this.cool = !this.cool;
    },
  },
};
</script>
