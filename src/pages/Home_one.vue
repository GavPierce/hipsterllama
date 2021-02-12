<template>
    <div class="main-container">

        <router-view></router-view>
        <!-- Navbar section -->
        <Navbar />

        <!-- slider section -->
        <Slider></Slider>

        <!-- about section -->
        <About></About>

        <!-- best app section -->
        <Bestapp />
        <ScreenshotTwo />

        <Testimonial />
        <!-- footer section -->
        <Footer />

    </div>
</template>

<script>
    import Navbar from '../components/Navbar'
    import Slider from '../components/Slider'
    import About from '../components/About'
    import Bestapp from '../components/Bestapp'
    import Footer from '../components/Footer'
    import ScreenshotTwo from '../components/ScreenshotTwo'
    import Testimonial from '../components/Testimonial'

    export default {
        name: 'app',
        components: {
            Navbar,
            Slider,
            About,
            Bestapp,
            Footer,
            ScreenshotTwo,
            Testimonial
        }
    }
</script>

